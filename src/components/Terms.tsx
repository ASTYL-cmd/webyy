import { ArrowLeft, FileText, Shield, Clock, Globe, Scale, Ban, RefreshCw, Users, AlertTriangle, Mail, Phone, MessageCircle, Instagram } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-void text-white-custom font-sans antialiased">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,5,5,0.85)] backdrop-blur-[20px] border-b border-[rgba(248,248,252,0.07)]">
        <div className="max-w-[1200px] mx-auto px-[4vw] h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-[0.75rem] font-medium text-white-60 hover:text-white-custom transition-colors duration-300 tracking-[0.1em]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <a href="/" className="text-[0.9rem] font-extrabold tracking-[0.3em] uppercase bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
            Webyy
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[100px] pb-20">
        <div className="max-w-[800px] mx-auto px-[4vw]">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(248,248,252,0.04)] border border-[rgba(248,248,252,0.07)] rounded-full text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-blue mb-6">
              <Scale className="w-4 h-4" />
              Legal Document
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.1] tracking-[-0.03em] mb-4">
              Terms & <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-[1rem] text-white-60 max-w-[500px] mx-auto leading-[1.7] mb-4">
              Please read these terms carefully before using the Webyy website and services. By accessing our services, you agree to these terms.
            </p>
            <div className="text-[0.7rem] text-[rgba(248,248,252,0.2)] tracking-[0.1em]">
              Last Updated: June 20, 2026
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-surface border border-[rgba(248,248,252,0.07)] rounded-[16px] p-6 mb-12">
            <h3 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase mb-4 text-white-custom">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {[
                { id: "acceptance", label: "Acceptance" },
                { id: "definitions", label: "Definitions" },
                { id: "services", label: "Our Services" },
                { id: "accounts", label: "User Accounts" },
                { id: "usage", label: "Usage Rules" },
                { id: "payment", label: "Payment & Billing" },
                { id: "refunds", label: "Refund Policy" },
                { id: "ip", label: "Intellectual Property" },
                { id: "termination", label: "Termination" },
                { id: "liability", label: "Liability" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[0.72rem] text-white-60 hover:text-blue py-2 px-3 rounded-lg transition-all duration-300 hover:bg-[rgba(248,248,252,0.04)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">1. Acceptance of Terms</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>By accessing or using the Webyy website, platform, and services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to all these Terms, you must not use our Services.</p>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Services after any changes constitutes your acceptance of the revised Terms.</p>
                <p>You represent that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using our Services on behalf of an organization, you represent that you have authority to bind that organization.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="definitions" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">2. Definitions</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>In these Terms, the following definitions apply:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li><strong className="text-white-custom">&quot;Platform&quot;</strong> refers to the Webyy website, applications, and all related tools and services.</li>
                  <li><strong className="text-white-custom">&quot;User&quot; or &quot;You&quot;</strong> refers to any individual or entity accessing or using our Services.</li>
                  <li><strong className="text-white-custom">&quot;Content&quot;</strong> refers to all website designs, code, graphics, and other materials created or delivered through our Services.</li>
                  <li><strong className="text-white-custom">&quot;Project&quot;</strong> refers to any website development, design, or related service engagement between Webyy and the User.</li>
                  <li><strong className="text-white-custom">&quot;Subscription&quot;</strong> refers to our ongoing maintenance and support plans with recurring billing.</li>
                  <li><strong className="text-white-custom">&quot;Deliverables&quot;</strong> refers to the completed website files, designs, and related materials provided to the User upon project completion.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="services" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">3. Our Services</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>Webyy is a premium website design and development studio. We specialize in building high-performance websites for businesses, startups, and professionals who care about their digital presence.</p>
                <p>Our Services include:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Custom website design and development</li>
                  <li>Website redesign and optimization</li>
                  <li>Landing page creation</li>
                  <li>Business website development</li>
                  <li>SEO optimization and technical audits</li>
                  <li>Website maintenance and support</li>
                  <li>Performance optimization and analytics setup</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="accounts" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Users className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">4. User Accounts</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to keep this information updated.</p>
                <p>You are responsible for:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Ensuring your account information is accurate and up-to-date</li>
                </ul>
                <p>We reserve the right to disable any user account at any time, including if you have provided inaccurate information or violated these Terms.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="usage" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">5. Prohibited Uses</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>You agree not to use our Services to:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Create websites for illegal, harmful, or fraudulent purposes</li>
                  <li>Generate content that promotes hate speech, discrimination, or violence</li>
                  <li>Impersonate any person or entity without authorization</li>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Attempt to gain unauthorized access to our systems or infrastructure</li>
                  <li>Interfere with or disrupt the integrity of our Services</li>
                  <li>Scrape, crawl, or harvest data from our platform without permission</li>
                  <li>Resell or redistribute our designs or code without written authorization</li>
                  <li>Upload malware, viruses, or any malicious code</li>
                </ul>
                <p>We reserve the right to terminate your access immediately if we determine you have violated these prohibitions.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="payment" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Scale className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">6. Payment and Billing</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>All prices are quoted in Indian Rupees (INR) unless otherwise stated. By engaging our services, you agree to pay all applicable fees as described in our pricing or proposal.</p>
                <p>Payment terms:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>All fees are in Indian Rupees (INR) unless otherwise stated</li>
                  <li>A non-refundable deposit of 50% is required to begin any project</li>
                  <li>Remaining balance is due upon project completion before delivery</li>
                  <li>Subscription plans auto-renew unless cancelled with 30 days notice</li>
                  <li>You authorize us to charge your payment method for agreed fees</li>
                  <li>Prices may change with prior notice for new projects</li>
                  <li>You are responsible for all applicable taxes and transaction fees</li>
                </ul>
                <p>We accept payment via bank transfer, UPI, and major credit/debit cards. Payment processing is handled through secure third-party providers.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="refunds" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">7. Refund Policy</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>We stand behind the quality of our work. Our refund policy is as follows:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Deposits are non-refundable once work has commenced</li>
                  <li>If we are unable to deliver the agreed project, a pro-rata refund may be issued</li>
                  <li>Refund requests must be submitted in writing via email</li>
                  <li>Approved refunds are processed within 10-15 business days</li>
                  <li>No refunds for completed and delivered projects</li>
                  <li>We reserve the right to deny refund requests in cases of abuse or bad faith</li>
                </ul>
                <p>For subscription plans, you may cancel at any time, but no refunds will be issued for the current billing period. Access continues until the end of the paid period.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="ip" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">8. Intellectual Property</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>Upon full payment and project completion, you are granted ownership rights to the final website deliverables, including:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Custom website code and design files</li>
                  <li>Graphics and assets created specifically for your project</li>
                  <li>Any custom functionality developed for your website</li>
                </ul>
                <p>Webyy retains ownership of:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Our proprietary frameworks, tools, and methodologies</li>
                  <li>Pre-existing templates and reusable components</li>
                  <li>Our brand, trademarks, and logos</li>
                </ul>
                <p>You may not resell, redistribute, or claim authorship of our proprietary frameworks or tools. Third-party assets (fonts, stock images, plugins) are subject to their respective licenses.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="termination" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Ban className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">9. Termination</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>You may terminate your engagement with us at any time by providing written notice. Upon termination:</p>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Any completed and paid deliverables remain yours</li>
                  <li>Work in progress requires settlement of outstanding fees</li>
                  <li>Subscription services continue until the end of the current billing period</li>
                  <li>All provisions that should survive termination remain in effect</li>
                </ul>
                <p>We may terminate or suspend your access immediately, without prior notice, for any breach of these Terms or for any conduct that we believe is harmful to our business or other users.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="liability" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">10. Limitation of Liability</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>To the maximum extent permitted by law, Webyy and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.</p>
                <p>In no event shall our total liability exceed the amount you paid to us for the specific project or service giving rise to the claim, or 25,000 INR, whichever is greater.</p>
                <p>We do not guarantee that our Services will be uninterrupted, timely, secure, or error-free. You use our Services at your own risk. We are not responsible for any third-party service outages, hosting issues, or force majeure events.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="governing" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Scale className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">11. Governing Law</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                <p>Any dispute arising from these Terms shall first be attempted to be resolved through good faith negotiation. If unresolved, disputes shall be subject to arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Mumbai, India.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="changes" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(139,92,246,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-[18px] h-[18px] text-purple" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">12. Changes to Terms</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date.</p>
                <p>Your continued use of our Services after any changes indicates your acceptance of the revised Terms. If you do not agree to the changes, you must stop using our Services.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="contact" className="scroll-mt-[100px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(79,142,247,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-[18px] h-[18px] text-blue" />
                </div>
                <h2 className="text-[1.4rem] font-extrabold tracking-[-0.02em]">13. Contact Us</h2>
              </div>
              <div className="pl-[52px] space-y-3 text-[0.88rem] text-white-60 leading-[1.75]">
                <p>If you have any questions about these Terms, please contact us:</p>
                <div className="bg-surface border border-[rgba(248,248,252,0.07)] rounded-[16px] p-6 mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-blue rounded-full flex-shrink-0"></div>
                      <span className="text-white-custom font-medium">Email: contact.webyy@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-blue rounded-full flex-shrink-0"></div>
                      <span className="text-white-custom font-medium">Phone: +91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-blue rounded-full flex-shrink-0"></div>
                      <span className="text-white-custom font-medium">WhatsApp: +91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-blue rounded-full flex-shrink-0"></div>
                      <span className="text-white-custom font-medium">Instagram: @webyy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-blue rounded-full flex-shrink-0"></div>
                      <span className="text-white-custom font-medium">Response Time: Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-10 border-t border-[rgba(248,248,252,0.07)]">
            <div className="bg-gradient-to-r from-[rgba(79,142,247,0.05)] to-[rgba(139,92,246,0.05)] border border-[rgba(248,248,252,0.07)] rounded-[20px] p-10 text-center">
              <p className="text-[0.9rem] text-white-60 leading-[1.7] mb-6">
                By using Webyy, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="/" className="inline-flex items-center gap-2 px-7 py-[14px] bg-gradient-to-r from-blue to-purple text-white-custom text-[0.8rem] font-semibold tracking-[0.05em] rounded-full hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(79,142,247,0.3)] transition-all duration-300">
                  Return to Home
                </a>
                <a href="/privacy" className="inline-flex items-center gap-2 px-7 py-[14px] bg-[rgba(248,248,252,0.04)] border border-[rgba(248,248,252,0.07)] text-white-custom text-[0.8rem] font-medium tracking-[0.05em] rounded-full hover:bg-[rgba(248,248,252,0.08)] hover:border-[rgba(248,248,252,0.2)] transition-all duration-300">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
