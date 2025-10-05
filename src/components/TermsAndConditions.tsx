import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <section id="terms" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-slate-400 mb-8">Last Updated: October 5, 2025</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Use of Website</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">2.1 Permitted Use</h3>
              <p className="mb-4">
                This website is provided for informational purposes regarding our construction services. You may view, download,
                and print pages from the website for your personal use, subject to the restrictions set out below.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">2.2 Prohibited Use</h3>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use this website in any way that causes, or may cause, damage to the website or impairment of its availability or accessibility</li>
                <li>Use this website in any way which is unlawful, illegal, fraudulent, or harmful</li>
                <li>Use this website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of malicious computer software</li>
                <li>Conduct any systematic or automated data collection activities on or in relation to this website without express written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Information and Content</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">3.1 Accuracy</h3>
              <p className="mb-4">
                While we strive to ensure that the information on this website is accurate and up-to-date, we make no representations
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability
                of the information, products, services, or related graphics contained on the website.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">3.2 No Professional Advice</h3>
              <p>
                The content on this website is for general information purposes only and should not be construed as professional
                construction or legal advice. For specific project inquiries, please contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">4. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">4.1 Ownership</h3>
              <p className="mb-4">
                Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website.
                All intellectual property rights are reserved.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">4.2 Restrictions</h3>
              <p>
                You must not republish, sell, rent, sub-license, reproduce, duplicate, or redistribute material from this website
                without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Service Information</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">5.1 Estimates and Quotes</h3>
              <p className="mb-4">
                Any estimates, quotes, or pricing information provided through this website are preliminary and subject to change.
                Final pricing will be determined through direct consultation and formal quotation.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">5.2 Project Timelines</h3>
              <p className="mb-4">
                Project timelines and completion dates mentioned on this website are estimates only. Actual project durations may vary
                based on various factors including weather, material availability, and site conditions.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">5.3 Service Availability</h3>
              <p>
                Our construction services are subject to availability and may vary by location. Not all services may be available in all areas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Limitations of Liability</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">6.1 Website Use</h3>
              <p className="mb-4">
                Your use of this website is at your own risk. To the fullest extent permitted by law, we exclude all representations,
                warranties, and conditions relating to this website and its use.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">6.2 Liability Exclusion</h3>
              <p className="mb-2">We will not be liable for any loss or damage of any nature arising from:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use of or inability to use this website</li>
                <li>Any reliance placed on information contained on this website</li>
                <li>Technical failures or interruptions to website service</li>
                <li>Unauthorized access to or alteration of your transmissions or data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. These links are provided for your convenience only.
                We have no control over the content of third-party websites and accept no responsibility for them or for any loss
                or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Privacy and Data Protection</h2>
              <p>
                Your use of this website is also governed by our Privacy Policy. By using this website, you consent to the collection
                and use of information as outlined in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">9. User Submissions</h2>
              <h3 className="text-xl font-semibold text-green-400 mb-3">9.1 Contact Forms</h3>
              <p className="mb-4">
                Any information you submit through contact forms or inquiry forms on this website may be used to respond to your inquiry
                and for our internal business purposes.
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">9.2 Non-Confidential</h3>
              <p>
                You acknowledge that any submissions through this website (excluding personal information) are non-confidential and we have
                the right to use, copy, distribute, and disclose to third parties any such submission for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold us harmless from any claims, losses, liabilities, damages, expenses, and costs
                (including legal fees) arising from your use of this website or your violation of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting
                to the website. Your continued use of the website following any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">12. Modifications to Website</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of this website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions
                shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">14. Entire Agreement</h2>
              <p>
                These Terms and Conditions constitute the entire agreement between you and us regarding your use of this website
                and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">15. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which
                our company operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">16. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us through the contact information provided
                on this website.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-center text-slate-400 italic">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
