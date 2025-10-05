import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 mb-8">Last Updated: October 5, 2025</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the website.
              </p>
              <p className="mt-4">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes
                by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay
                informed of updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">2.1 Personal Information</h3>
              <p className="mb-2">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Fill out contact forms or inquiry forms</li>
                <li>Request a quote or estimate</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for an account (if applicable)</li>
                <li>Communicate with us via email or phone</li>
              </ul>

              <p className="mb-2">Personal information may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Property address (for project inquiries)</li>
                <li>Project details and specifications</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-2">When you visit our website, we may automatically collect certain information about your device, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Date and time of visit</li>
                <li>Clickstream data</li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information about your browsing behavior.
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies,
                you may not be able to use some portions of our website.
              </p>
              <p className="mb-2">Types of cookies we use:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Essential Cookies: Necessary for website functionality</li>
                <li>Analytics Cookies: Help us understand how visitors use our website</li>
                <li>Marketing Cookies: Used to track visitors across websites for advertising purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process your requests for quotes, estimates, or project consultations</li>
                <li>Send you information about our services, promotions, or updates</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website usage and trends</li>
                <li>Prevent fraudulent activity and enhance security</li>
                <li>Comply with legal obligations</li>
                <li>Send administrative information such as policy changes or service updates</li>
                <li>Market our services to you (with your consent where required)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">4. How We Share Your Information</h2>
              <p className="mb-4">We may share your information in the following situations:</p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">4.1 Service Providers</h3>
              <p className="mb-2">We may share your information with third-party service providers who perform services on our behalf, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Website hosting providers</li>
                <li>Email service providers</li>
                <li>Analytics providers</li>
                <li>Customer relationship management (CRM) systems</li>
                <li>Payment processors (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">4.2 Business Transfers</h3>
              <p className="mb-4">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">4.3 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities
                (e.g., court orders, government agencies).
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">4.4 Protection of Rights</h3>
              <p className="mb-4">
                We may disclose information to protect our rights, privacy, safety, or property, and that of our users or the public.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">4.5 With Your Consent</h3>
              <p>We may share your information for any other purpose with your consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">5. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these
                third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is
                100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mb-2">Security measures include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure Socket Layer (SSL) encryption</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely
                delete or anonymize it.
              </p>
              <p className="mb-2">Typical retention periods:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact form inquiries: 2-3 years</li>
                <li>Project-related information: Duration of project plus 7 years (for legal/warranty purposes)</li>
                <li>Marketing communications: Until you unsubscribe</li>
                <li>Website analytics: 24-26 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">8. Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.1 Access and Portability</h3>
              <p className="mb-4">
                You have the right to request access to the personal information we hold about you and receive a copy in a structured,
                commonly used format.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.2 Correction</h3>
              <p className="mb-4">
                You have the right to request that we correct any inaccurate or incomplete personal information.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.3 Deletion</h3>
              <p className="mb-4">
                You have the right to request deletion of your personal information, subject to certain legal exceptions.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.4 Objection and Restriction</h3>
              <p className="mb-4">
                You have the right to object to or request restriction of certain processing of your personal information.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.5 Withdraw Consent</h3>
              <p className="mb-4">
                If we process your information based on consent, you have the right to withdraw that consent at any time.
              </p>

              <h3 className="text-xl font-semibold text-orange-400 mb-3">8.6 Opt-Out of Marketing</h3>
              <p className="mb-2">You can opt out of receiving marketing communications from us by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Clicking the "unsubscribe" link in our emails</li>
                <li>Contacting us directly using the information provided below</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the contact information provided in Section 13.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">9. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect
                personal information from children. If you believe we have collected information from a child, please contact us immediately,
                and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">10. Do Not Track Signals</h2>
              <p>
                Some browsers have a "Do Not Track" feature that lets you tell websites you do not want to have your online activities tracked.
                At this time, we do not respond to browser "Do Not Track" signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">11. International Data Transfers</h2>
              <p>
                If you are accessing our website from outside our country of operation, please be aware that your information may be transferred
                to, stored, and processed in our country or other countries where our service providers are located. These countries may have
                data protection laws that differ from those in your country.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">12. California Privacy Rights</h2>
              <p className="mb-4">If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to know whether personal information is sold or disclosed</li>
                <li>Right to say no to the sale of personal information</li>
                <li>Right to access your personal information</li>
                <li>Right to request deletion of personal information</li>
                <li>Right to equal service and price</li>
              </ul>
              <p>To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">13. Contact Information</h2>
              <p className="mb-4">If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <p className="mb-2"><strong className="text-orange-400">SR BUILDERS</strong></p>
                <p className="mb-2">Email: srbuilders9999@gmail.com</p>
                <p className="mb-2">Phone: +91-9991918125</p>
                <p>Address: 123 Construction Ave, Building City, BC 12345</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">14. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date
                at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about how we
                are protecting your information.
              </p>
              <p className="mb-2">If we make material changes to this Privacy Policy, we may notify you by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting a notice on our website</li>
                <li>Sending you an email notification</li>
                <li>Other appropriate means</li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-center text-slate-400 italic">
                By using our website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
