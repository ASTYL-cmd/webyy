import { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Instagram,
  Check,
} from 'lucide-react';
import { companyInfo } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-void">
      <div className="max-w-[1300px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
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
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-border rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:border-blue">
                  <Phone size={18} className="text-blue" />
                </div>
                <div>
                  <div className="text-[0.65rem] text-blue tracking-[0.15em] uppercase mb-1">
                    Phone
                  </div>
                  <div className="text-white group-hover:text-blue transition-colors">
                    {companyInfo.phone}
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
                  <div className="text-white group-hover:text-pink-400 transition-colors">
                    @webyy
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
          <div ref={formRef} className={`reveal reveal-delay-2 ${formVisible ? 'visible' : ''}`}>
            {formState === 'success' ? (
              <div className="text-center p-8 md:p-10 bg-gradient-to-br from-blue-glow to-purple-glow border border-blue/20 rounded-2xl">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Received</h3>
                <p className="text-white-60">
                  We read every message ourselves. Expect a thoughtful reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {/* Name */}
                <div className="border-b border-border py-6 transition-colors focus-within:border-blue/50">
                  <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First and last name"
                    required
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light placeholder:text-white-20"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-border py-6 transition-colors focus-within:border-blue/50">
                  <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@company.com"
                    required
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light placeholder:text-white-20"
                  />
                </div>

                {/* Company */}
                <div className="border-b border-border py-6 transition-colors focus-within:border-blue/50">
                  <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-2">
                    Company / Project
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Who are you building for?"
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light placeholder:text-white-20"
                  />
                </div>

                {/* Project Type */}
                <div className="border-b border-border py-6 transition-colors focus-within:border-blue/50">
                  <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-surface-2">
                      What do you need?
                    </option>
                    <option value="branding" className="bg-surface-2">
                      Brand Identity & Strategy
                    </option>
                    <option value="website" className="bg-surface-2">
                      Website Design & Development
                    </option>
                    <option value="ecommerce" className="bg-surface-2">
                      E-Commerce Solution
                    </option>
                    <option value="product" className="bg-surface-2">
                      Product / App Design
                    </option>
                    <option value="other" className="bg-surface-2">
                      Something else entirely
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="border-b border-border py-6 transition-colors focus-within:border-blue/50">
                  <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-blue mb-2">
                    Tell Us More
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you trying to achieve? What's the timeline? What have you tried that didn't work?"
                    required
                    rows={4}
                    className="w-full bg-transparent border-none outline-none text-white text-base font-light placeholder:text-white-20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="inline-flex items-center gap-3 mt-10 py-4 px-10 bg-gradient-primary rounded-full text-white text-base font-semibold tracking-wide btn-hover-lift shadow-glow-blue hover:shadow-glow-blue-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
