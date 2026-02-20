import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for H Counselling. How your personal data is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-warm-charcoal mb-5">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="space-y-10 text-warm-muted leading-relaxed text-base md:text-[17px]">
            {/* Contents */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                Contents
              </h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Important information and who we are</li>
                <li>The types of personal data we collect about you</li>
                <li>How is your personal data collected?</li>
                <li>How we use your personal data</li>
                <li>Disclosures of your personal data</li>
                <li>International transfers</li>
                <li>Data security</li>
                <li>Data retention</li>
                <li>Your legal rights</li>
                <li>Contact details</li>
                <li>Complaints</li>
                <li>Changes to the privacy policy and your duty to inform us of changes</li>
                <li>Third-party links</li>
              </ol>
            </div>

            {/* 1 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                1. Important Information and Who We Are
              </h2>
              <p className="mb-3">
                This privacy policy explains how Harriet Frank collects and uses
                your personal information through this website, including when
                purchasing counselling services. The website is not designed for
                children, and we do not intentionally gather data about minors.
              </p>
              <p>
                <strong>Controller:</strong> Harriet Frank is responsible for your
                personal data (referred to as &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;).
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                2. Types of Personal Data We Collect About You
              </h2>
              <p className="mb-3">
                Personal data means any information identifying an individual. We
                collect and process:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Identity Data:</strong> first name, last name, previous
                  names, username, marital status, title, date of birth, gender
                </li>
                <li>
                  <strong>Contact Data:</strong> billing address, delivery address,
                  email address, telephone numbers
                </li>
                <li>
                  <strong>Financial Data:</strong> bank account and payment card
                  details
                </li>
                <li>
                  <strong>Transaction Data:</strong> payment details and purchase
                  history
                </li>
                <li>
                  <strong>Usage Data:</strong> information about website and
                  service interactions
                </li>
                <li>
                  <strong>Marketing and Communications Data:</strong> marketing
                  preferences and communication choices
                </li>
              </ul>
              <p className="mt-3">
                We also collect aggregated, non-identifying statistical or
                demographic data for analysis purposes.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                3. How Is Your Personal Data Collected?
              </h2>
              <p className="mb-3">We gather data through:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Your interactions:</strong> filling forms,
                  correspondence by post, phone, email, or other means
                </li>
                <li>
                  <strong>Automated technologies:</strong> cookies and similar
                  technologies track equipment, browsing actions, and patterns
                </li>
                <li>
                  <strong>Third parties or public sources:</strong> we receive
                  information from various third-party sources
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                4. How We Use Your Personal Data
              </h2>
              <h3 className="font-display text-xl text-warm-charcoal mb-3">
                Legal Basis
              </h3>
              <p className="mb-3">
                We rely on one or more of these legal foundations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-6">
                <li>
                  <strong>Performance of contract:</strong> fulfilling agreements
                  with you
                </li>
                <li>
                  <strong>Legitimate interests:</strong> conducting business and
                  pursuing legitimate objectives, including fraud prevention and
                  security
                </li>
                <li>
                  <strong>Legal obligation:</strong> complying with applicable law
                </li>
                <li>
                  <strong>Consent:</strong> your active agreement for specified
                  purposes (e.g., newsletter subscriptions)
                </li>
              </ul>

              <h3 className="font-display text-xl text-warm-charcoal mb-3">
                Purposes for Using Your Data
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-warm-charcoal/20">
                      <th className="text-left py-3 pr-4 text-warm-charcoal font-semibold">Purpose</th>
                      <th className="text-left py-3 pr-4 text-warm-charcoal font-semibold">Data Types</th>
                      <th className="text-left py-3 pr-4 text-warm-charcoal font-semibold">Legal Basis</th>
                      <th className="text-left py-3 text-warm-charcoal font-semibold">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Customer registration</td>
                      <td className="py-3 pr-4">Identity, Contact</td>
                      <td className="py-3 pr-4">Performance of contract</td>
                      <td className="py-3">5 years</td>
                    </tr>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Process and deliver orders</td>
                      <td className="py-3 pr-4">Identity, Contact, Financial, Transaction</td>
                      <td className="py-3 pr-4">Contract performance; legitimate interests</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Manage relationship</td>
                      <td className="py-3 pr-4">Identity, Contact, Profile, Marketing</td>
                      <td className="py-3 pr-4">Contract performance; legal obligation; legitimate interests</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Business administration and protection</td>
                      <td className="py-3 pr-4">Identity, Contact, Technical</td>
                      <td className="py-3 pr-4">Legitimate interests; legal obligation</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Website content and advertising</td>
                      <td className="py-3 pr-4">Identity, Contact, Profile, Usage, Marketing, Technical</td>
                      <td className="py-3 pr-4">Legitimate interests</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-warm-charcoal/10">
                      <td className="py-3 pr-4">Data analytics improvement</td>
                      <td className="py-3 pr-4">Technical, Usage</td>
                      <td className="py-3 pr-4">Legitimate interests</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Marketing communications and recommendations</td>
                      <td className="py-3 pr-4">Identity, Contact, Technical, Usage, Profile, Marketing</td>
                      <td className="py-3 pr-4">Legitimate interests</td>
                      <td className="py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                5. Disclosures of Your Personal Data
              </h2>
              <p>
                We may share your personal data with third parties where required
                by law, where it is necessary to administer the working
                relationship with you, or where we have another legitimate interest
                in doing so.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                6. International Transfers
              </h2>
              <p>
                We do not routinely transfer your personal data outside the UK. If
                any transfer is necessary, we will ensure appropriate safeguards
                are in place in accordance with data protection law.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                7. Data Security
              </h2>
              <p className="mb-3">
                We implement appropriate security measures to prevent accidental
                loss, unauthorised access, alteration, or disclosure of your
                personal data. Access is limited to employees, agents, contractors,
                and third parties with legitimate business needs. All are subject
                to confidentiality obligations.
              </p>
              <p>
                We maintain procedures for managing suspected data breaches and
                will notify you and applicable regulators where legally required.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                8. Data Retention
              </h2>
              <p className="mb-3">
                Retention periods are detailed in the purposes table above.
              </p>
              <p className="mb-3">
                By law, we retain basic customer information (Contact, Identity,
                Financial, Transaction Data) for six years after customer
                relationships end for tax purposes.
              </p>
              <p>
                You may request deletion in certain circumstances (see section 9).
                We may anonymise data for research or statistical purposes and use
                it indefinitely without further notice.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                9. Your Legal Rights
              </h2>
              <p className="mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-6">
                <li>
                  <strong>Request access</strong> to receive a copy of personal
                  data and verify lawful processing
                </li>
                <li>
                  <strong>Request correction</strong> of incomplete or inaccurate
                  information
                </li>
                <li>
                  <strong>Request erasure</strong> in certain circumstances,
                  including when processing is unlawful or consent is withdrawn
                </li>
                <li>
                  <strong>Object to processing</strong> where we rely on
                  legitimate interests, including direct marketing
                </li>
                <li>
                  <strong>Request data transfer</strong> in structured,
                  machine-readable format (applies to automated data you consented
                  to or that performed a contract)
                </li>
                <li>
                  <strong>Withdraw consent</strong> where applicable (doesn&apos;t
                  affect prior lawful processing)
                </li>
                <li>
                  <strong>Request processing restriction</strong> to suspend
                  processing temporarily for accuracy verification, legal
                  disputes, or to challenge legitimate grounds
                </li>
              </ul>

              <h3 className="font-display text-xl text-warm-charcoal mb-3">
                No Fee Required
              </h3>
              <p className="mb-6">
                Access is typically free. We may charge a reasonable fee for
                unfounded, repetitive, or excessive requests, or refuse to comply.
              </p>

              <h3 className="font-display text-xl text-warm-charcoal mb-3">
                Identity Verification
              </h3>
              <p className="mb-6">
                We may request specific information to confirm your identity and
                protect your data security. We may contact you for additional
                information to expedite responses.
              </p>

              <h3 className="font-display text-xl text-warm-charcoal mb-3">
                Response Timeline
              </h3>
              <p>
                We aim to respond to legitimate requests within one month. Complex
                requests may take longer; we&apos;ll notify you and provide
                updates.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                10. Contact Details
              </h2>
              <p>
                For questions about this policy or to exercise privacy rights,
                contact us at{" "}
                <a
                  href="mailto:hcounselling@outlook.com"
                  className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors"
                >
                  hcounselling@outlook.com
                </a>
                .
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                11. Complaints
              </h2>
              <p>
                You may lodge a complaint with the Information Commissioner&apos;s
                Office (ICO), the UK data protection regulator, at{" "}
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark transition-colors"
                >
                  www.ico.org.uk
                </a>
                . We encourage you to contact us first to address concerns.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                12. Changes to the Privacy Policy
              </h2>
              <p>
                We regularly review this policy. Please keep us informed of changes
                to your personal data (new address, email, etc.) during your
                relationship with us.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-warm-charcoal mb-4">
                13. Third-Party Links
              </h2>
              <p>
                This website includes links to third-party websites, plugins, and
                applications. We don&apos;t control these sites or their privacy
                practices. Please review their privacy policies when leaving our
                site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
