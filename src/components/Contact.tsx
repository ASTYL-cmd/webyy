import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Check,
  ChevronDown,
  Send,
  X,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { companyInfo, pricingPlans, web3forms } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSelectedPlan } from '../lib/enquiry';

/* ------------------------------------------------------------------ */
/* Form options                                                        */
/* ------------------------------------------------------------------ */
const COUNTRY_CODES = [
  { value: '+91', label: 'IN +91' },
  { value: '+1', label: 'US/CA +1' },
  { value: '+44', label: 'UK +44' },
  { value: '+971', label: 'AE +971' },
  { value: '+61', label: 'AU +61' },
  { value: '+65', label: 'SG +65' },
  { value: '+966', label: 'SA +966' },
  { value: '+49', label: 'DE +49' },
  { value: '+33', label: 'FR +33' },
  { value: '+977', label: 'NP +977' },
  { value: '+880', label: 'BD +880' },
  { value: '+94', label: 'LK +94' },
  { value: 'other', label: 'Other' },
];

const BUSINESS_TYPES = [
  'Gym',
  'Restaurant',
  'Bakery',
  'Clothing Brand',
  'Portfolio',
  'E-commerce Store',
  'Agency',
  'Photography Studio',
  'Other',
];

const NOT_SURE = 'Not Sure — Need a Recommendation';

const planOptions = pricingPlans.map((p) => ({
  value: p.slug,
  label: `${p.name} — ₹${p.price.toLocaleString('en-IN')}`,
}));

const planLabel = (slug: string) => planOptions.find((p) => p.value === slug)?.label ?? '';

/* ------------------------------------------------------------------ */
/* Form state + validation                                             */
/* ------------------------------------------------------------------ */
interface FormValues {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  business: string;
  businessType: string;
  plan: string;
  message: string;
}

const EMPTY: FormValues = {
  name: '',
  email: '',
  countryCode: '+91',
  phone: '',
  business: '',
  businessType: '',
  plan: '',
  message: '',
};

type ErrorKey = 'name' | 'email' | 'phone' | 'business' | 'businessType' | 'message';
type Errors = Partial<Record<ErrorKey, string>>;

const FIELD_ID: Record<string, string> = {
  name: 'contact-name',
  email: 'contact-email',
  phone: 'contact-phone',
  business: 'contact-business',
  businessType: 'contact-btype',
  message: 'contact-message',
};

/** Returns an error message, or null when empty/valid. Phone is optional but must be sensible if given. */
function checkPhone(countryCode: string, raw: string): { error: string | null; full: string } {
  const value = raw.trim();
  if (!value) return { error: null, full: '' };
  let digits = value.replace(/[\s().-]/g, '');

  if (countryCode === 'other') {
    if (!/^\+[1-9]\d{6,14}$/.test(digits)) {
      return { error: 'Enter the full international number, starting with + and the country code.', full: '' };
    }
    return { error: null, full: digits };
  }

  const cc = countryCode.replace('+', '');
  digits = digits.replace(/^\+/, '');
  if (!/^\d+$/.test(digits)) return { error: 'Use digits only (spaces and dashes are fine).', full: '' };

  if (countryCode === '+91') {
    if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
    if (!/^[6-9]\d{9}$/.test(digits)) {
      return { error: 'Enter a valid 10-digit Indian mobile number.', full: '' };
    }
  } else {
    if (digits.startsWith(cc) && digits.length > cc.length + 5) digits = digits.slice(cc.length);
    if (digits.length < 6 || digits.length > 14) {
      return { error: 'Enter a valid phone number for the selected country code.', full: '' };
    }
  }
  return { error: null, full: `${countryCode} ${digits}` };
}

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email, like name@example.com.';
  const phone = checkPhone(v.countryCode, v.phone);
  if (phone.error) e.phone = phone.error;
  if (!v.business.trim()) e.business = 'Please enter your business name.';
  if (!v.businessType.trim()) e.businessType = 'Please tell us what type of business you run.';
  if (v.message.trim().length < 10) e.message = 'Please tell us a little about your project (at least 10 characters).';
  return e;
}

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */
const inputCls = (error?: string) =>
  `w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-base font-light text-white placeholder:text-white-20 outline-none transition-[border-color,box-shadow,background-color] duration-200 hover:bg-white/[0.06] focus:bg-white/[0.06] focus:border-accent focus:shadow-[0_0_0_3px_rgba(56,176,242,0.25)] ${
    error ? 'border-red-400/80' : 'border-white/15'
  }`;

function Field({
  id,
  label,
  required,
  error,
  hint,
  className = '',
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-blue">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-[0.68rem] normal-case tracking-normal text-white-60">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[0.78rem] text-red-300">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.75rem] text-white-60">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const describedBy = (id: string, error?: string, hint?: string) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined;

function SelectWrap({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white-60"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<ErrorKey, boolean>>>({});
  const [flashPlan, setFlashPlan] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<FormValues>(() => {
    // /?plan=standard#contact deep link (also the no-JS fallback of "Start This Plan")
    const fromUrl = new URLSearchParams(window.location.search).get('plan') ?? '';
    return { ...EMPTY, plan: planOptions.some((p) => p.value === fromUrl) ? fromUrl : '' };
  });

  // A "Start This Plan" click preselects that plan. Manual changes in the dropdown always win afterwards,
  // because only a new click publishes a new selection.
  const selection = useSelectedPlan();
  useEffect(() => {
    if (selection.nonce === 0) return;
    setValues((prev) => ({ ...prev, plan: selection.slug }));
    setFlashPlan(true);
    const t = window.setTimeout(() => setFlashPlan(false), 1800);
    return () => window.clearTimeout(t);
  }, [selection.nonce, selection.slug]);

  useEffect(() => {
    if (formState === 'success') successRef.current?.focus();
  }, [formState]);

  const errors = validate(values);
  const showError = (k: ErrorKey) => (touched[k] || submitAttempted ? errors[k] : undefined);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (k: ErrorKey) => () => setTouched((t) => ({ ...t, [k]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState === 'submitting') return; // no duplicate submissions

    setSubmitAttempted(true);
    const firstInvalid = (Object.keys(errors) as ErrorKey[])[0];
    if (firstInvalid) {
      document.getElementById(FIELD_ID[firstInvalid])?.focus();
      return;
    }

    setFormState('submitting');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    const chosenPlan = planLabel(values.plan) || NOT_SURE;

    try {
      const res = await fetch(web3forms.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: web3forms.accessKey,
          subject: `New project enquiry — ${chosenPlan} — from ${values.name.trim()}`,
          from_name: 'WEBYY Website',
          name: values.name.trim(),
          email: values.email.trim(),
          phone: checkPhone(values.countryCode, values.phone).full,
          business_name: values.business.trim(),
          business_type: values.businessType.trim(),
          selected_plan: chosenPlan,
          message: values.message.trim(),
          botcheck: '',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormState('success');
        setValues(EMPTY);
        setTouched({});
        setSubmitAttempted(false);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const submitting = formState === 'submitting';
  const chosenLabel = planLabel(values.plan);

  return (
    <section id="contact" className="py-20 md:py-32 bg-void">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-16 lg:gap-20">
          {/* Left - Info */}
          <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-blue mb-4">
              <span className="w-6 h-[1px] bg-gradient-to-r from-blue to-purple" />
              Get In Touch
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
              Let's build
              <br />
              something
              <br />
              <span className="gradient-text">remarkable</span>
            </h2>
            <p className="text-base md:text-lg text-white-60 leading-[1.7] mb-10">
              We're selective about the projects we take on — not out of arrogance, but because doing
              fewer things extraordinarily well is the only standard we hold ourselves to.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-5 mb-10">
              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:border-blue">
                  <Mail size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Email
                  </div>
                  <div className="text-white group-hover:text-blue transition-colors">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={companyInfo.phoneTel}
                className="flex items-center gap-4 group no-underline"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:border-blue">
                  <Phone size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Phone
                  </div>
                  <div className="text-white group-hover:text-blue transition-colors no-underline">
                    {companyInfo.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:border-green-500">
                  <MessageCircle size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    WhatsApp
                  </div>
                  <div className="text-white group-hover:text-green-400 transition-colors">
                    Chat with us
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:border-pink-500">
                  <Instagram size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Instagram
                  </div>
                  <div className="text-white group-hover:text-pink-400 transition-colors no-underline">
                    {companyInfo.social.instagramHandle}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Based In
                  </div>
                  <div className="text-white">{companyInfo.locations.join(' · ')}</div>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Response Time
                  </div>
                  <div className="text-white">Within 24 hours, always</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            className={`glass-card rounded-3xl p-6 md:p-10 reveal reveal-delay-2 ${formVisible ? 'visible' : ''}`}
          >
            {formState === 'success' ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="text-center p-8 md:p-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-blue/20 rounded-2xl outline-none"
              >
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enquiry submitted</h3>
                <p className="text-white-60">
                  Thank you. We read every message ourselves. Expect a thoughtful reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-[0.8rem] text-accent underline-offset-4 hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-busy={submitting}>
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight">Project enquiry</h3>
                  <p className="text-[0.72rem] text-white-60">
                    <span className="text-accent" aria-hidden="true">
                      *
                    </span>{' '}
                    Required
                  </p>
                </div>

                {/* Selected plan indicator (announced to screen readers when it changes) */}
                <div aria-live="polite" className="mb-5">
                  {chosenLabel && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-blue-glow py-1.5 pl-4 pr-2 text-[0.78rem] text-white">
                      <span className="text-white-60">Enquiring about</span>
                      <strong className="font-semibold">{chosenLabel}</strong>
                      <button
                        type="button"
                        onClick={() => setValues((v) => ({ ...v, plan: '' }))}
                        aria-label="Clear selected plan"
                        className="flex h-6 w-6 items-center justify-center rounded-full text-white-60 transition-colors hover:bg-white-08 hover:text-white"
                      >
                        <X size={13} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field id="contact-name" label="Full Name" required error={showError('name')}>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur('name')}
                      placeholder="First and last name"
                      aria-required="true"
                      aria-invalid={!!showError('name')}
                      aria-describedby={describedBy('contact-name', showError('name'))}
                      className={inputCls(showError('name'))}
                    />
                  </Field>

                  <Field id="contact-email" label="Email Address" required error={showError('email')}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur('email')}
                      placeholder="you@example.com"
                      aria-required="true"
                      aria-invalid={!!showError('email')}
                      aria-describedby={describedBy('contact-email', showError('email'))}
                      className={inputCls(showError('email'))}
                    />
                  </Field>

                  <Field
                    id="contact-phone"
                    label="Mobile Number"
                    error={showError('phone')}
                    hint={values.countryCode === 'other' ? 'Include the + and country code.' : undefined}
                  >
                    <div className="flex gap-2">
                      <SelectWrap>
                        <select
                          name="countryCode"
                          aria-label="Country code"
                          value={values.countryCode}
                          onChange={handleChange}
                          className={`${inputCls()} w-[6.75rem] cursor-pointer appearance-none pr-9`}
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.value} value={c.value} className="bg-surface-2">
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </SelectWrap>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel-national"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur('phone')}
                        placeholder={values.countryCode === '+91' ? '98765 43210' : values.countryCode === 'other' ? '+1 555 123 4567' : 'Phone number'}
                        aria-invalid={!!showError('phone')}
                        aria-describedby={describedBy(
                          'contact-phone',
                          showError('phone'),
                          values.countryCode === 'other' ? 'hint' : undefined
                        )}
                        className={`${inputCls(showError('phone'))} min-w-0 flex-1`}
                      />
                    </div>
                  </Field>

                  <Field id="contact-business" label="Business Name" required error={showError('business')}>
                    <input
                      id="contact-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      value={values.business}
                      onChange={handleChange}
                      onBlur={handleBlur('business')}
                      placeholder="Who are you building for?"
                      aria-required="true"
                      aria-invalid={!!showError('business')}
                      aria-describedby={describedBy('contact-business', showError('business'))}
                      className={inputCls(showError('business'))}
                    />
                  </Field>

                  <Field id="contact-btype" label="Business Type" required error={showError('businessType')} hint="Pick a suggestion or type your own.">
                    <input
                      id="contact-btype"
                      name="businessType"
                      type="text"
                      list="business-type-options"
                      autoComplete="off"
                      value={values.businessType}
                      onChange={handleChange}
                      onBlur={handleBlur('businessType')}
                      placeholder="e.g. Gym, Restaurant, Bakery…"
                      aria-required="true"
                      aria-invalid={!!showError('businessType')}
                      aria-describedby={describedBy('contact-btype', showError('businessType'), 'hint')}
                      className={inputCls(showError('businessType'))}
                    />
                    <datalist id="business-type-options">
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} />
                      ))}
                    </datalist>
                  </Field>

                  <Field id="contact-plan" label="Select a Plan" className="md:col-span-2">
                    <SelectWrap>
                      <select
                        id="contact-plan"
                        name="plan"
                        value={values.plan}
                        onChange={handleChange}
                        className={`${inputCls()} cursor-pointer appearance-none pr-10 ${flashPlan ? 'plan-flash' : ''}`}
                      >
                        <option value="" className="bg-surface-2">
                          {NOT_SURE}
                        </option>
                        {planOptions.map((p) => (
                          <option key={p.value} value={p.value} className="bg-surface-2">
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>

                  <Field id="contact-message" label="Project Details" required error={showError('message')} className="md:col-span-2">
                    <textarea
                      id="contact-message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur('message')}
                      placeholder="What are you trying to achieve? What's the timeline? What have you tried that didn't work?"
                      rows={5}
                      aria-required="true"
                      aria-invalid={!!showError('message')}
                      aria-describedby={describedBy('contact-message', showError('message'))}
                      className={`${inputCls(showError('message'))} resize-y`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`cta cta-primary cta-send mt-8 w-full sm:w-auto sm:min-w-[13rem] ${submitting ? 'is-sending' : ''}`}
                >
                  <span className="cta-label">
                    {submitting ? 'Sending…' : 'Send Message'}
                    <Send size={16} className="cta-icon" aria-hidden="true" />
                  </span>
                </button>

                {formState === 'error' && (
                  <p role="alert" className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    We couldn&apos;t send your message, so nothing was submitted. Please try again, or reach us on
                    WhatsApp or at {companyInfo.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
