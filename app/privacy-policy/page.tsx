import type { Metadata } from "next";
import LegalPageLayout from "@/components/section-components/landing/legal/LegalPageLayout";

export const metadata: Metadata = {
    title: "Privacy Policy | Volare Aviation Services",
    description: "Privacy Policy for Volare Aviation Services LLC.",
};

const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "section-1", title: "1. Information We Collect" },
    { id: "section-2", title: "2. Cookies and Analytics" },
    { id: "section-3", title: "3. How We Use Information" },
    { id: "section-4", title: "4. How We Share Information" },
    { id: "section-5", title: "5. SMS Privacy" },
    { id: "section-6", title: "6. Email Marketing" },
    { id: "section-7", title: "7. Advertising and Analytics" },
    { id: "section-8", title: "8. Data Retention" },
    { id: "section-9", title: "9. Data Security" },
    { id: "section-10", title: "10. U.S. Privacy Rights" },
    { id: "section-11", title: "11. Privacy Requests" },
    { id: "section-12", title: "12. Do Not Sell or Share" },
    { id: "section-13", title: "13. Children's Privacy" },
    { id: "section-14", title: "14. International Travel" },
    { id: "section-15", title: "15. Third-Party Websites" },
    { id: "section-16", title: "16. Changes to This Policy" },
    { id: "section-17", title: "17. Contact Us" },
];

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy"
            italicTitle="Policy"
            effectiveDate="August 24, 2026"
            sections={sections}
        >
            <section id="introduction" className="space-y-4 pt-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A1628]">
                    Introduction
                </h2>
                <p>
                    Volare Aviation Services LLC (&ldquo;Volare,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy describes how we collect, use, disclose, and protect information when you visit VolareAvi.com (the &ldquo;Website&rdquo;), contact us, create an account, request aviation services, request a charter quote, engage us for aircraft brokerage or crew services, or otherwise interact with Volare.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-1" className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    1. Information We Collect
                </h2>
                <p>
                    Depending on how you interact with Volare, we may collect the following categories of information.
                </p>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Contact Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>Name;</li>
                        <li>Email address;</li>
                        <li>Telephone number;</li>
                        <li>Company name;</li>
                        <li>Mailing or billing information when necessary; and</li>
                        <li>Other information you provide through our contact forms.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Charter and Travel Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>Origin and destination;</li>
                        <li>Travel dates and times;</li>
                        <li>Passenger count;</li>
                        <li>Passenger names;</li>
                        <li>Contact information;</li>
                        <li>Baggage information;</li>
                        <li>Pet information;</li>
                        <li>Catering preferences;</li>
                        <li>Ground transportation requests;</li>
                        <li>Special service requests;</li>
                        <li>Passport, identification, nationality, date-of-birth, or similar information when required for a flight or regulatory purpose; and</li>
                        <li>Other information necessary to arrange requested aviation services.</li>
                    </ul>
                    <p className="pt-1">
                        We request that customers provide sensitive travel information only when reasonably necessary for the requested service.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Aircraft Brokerage Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>Aircraft ownership;</li>
                        <li>Aircraft specifications;</li>
                        <li>Registration information;</li>
                        <li>Maintenance information;</li>
                        <li>Transaction requirements;</li>
                        <li>Buyer or seller preferences;</li>
                        <li>Financial or transaction-related information; and</li>
                        <li>Communications relating to a potential aircraft transaction.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Crew and Professional Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>Name and contact information;</li>
                        <li>Pilot or professional qualifications;</li>
                        <li>Certificates;</li>
                        <li>Type ratings;</li>
                        <li>Training information;</li>
                        <li>Flight experience;</li>
                        <li>Availability;</li>
                        <li>Resume information; and</li>
                        <li>Other professional credentials.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Account Information
                    </h3>
                    <p>
                        If Volare provides account functionality, we may collect information associated with your account, including login information, preferences, transaction history, and service requests.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Payment and Transaction Information
                    </h3>
                    <p>
                        Payments may be processed through independent third-party payment providers. Volare may receive transaction information such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>Amount paid;</li>
                        <li>Invoice number;</li>
                        <li>Transaction status;</li>
                        <li>Payment date; and</li>
                        <li>Limited payment-method information.</li>
                    </ul>
                    <p className="pt-1">
                        Volare does not necessarily directly receive or store your complete credit-card number or other complete payment credentials when payment is handled by an independent payment processor.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                        Website and Device Information
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                        <li>IP address;</li>
                        <li>Browser type;</li>
                        <li>Device type;</li>
                        <li>Operating system;</li>
                        <li>Pages viewed;</li>
                        <li>Referring website;</li>
                        <li>Approximate geographic information derived from an IP address;</li>
                        <li>Date and time of access;</li>
                        <li>Website interactions; and</li>
                        <li>Cookie or similar technology identifiers.</li>
                    </ul>
                </div>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-2" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    2. Cookies and Analytics
                </h2>
                <p>
                    Volare may use cookies, pixels, analytics technologies, and similar tools to operate the Website, understand Website usage, improve performance, measure marketing effectiveness, and provide relevant advertising.
                </p>
                <p>
                    These technologies may be provided by third parties such as analytics, advertising, CRM, website-hosting, or marketing providers. Depending on applicable law and the technologies in use, visitors may be provided with controls concerning non-essential cookies or tracking technologies.
                </p>
                <p>
                    Browser settings may also allow you to block or delete certain cookies, although doing so may affect Website functionality.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-3" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    3. How We Use Information
                </h2>
                <p>Volare may use information to:</p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Respond to inquiries;</li>
                    <li>Provide quotes;</li>
                    <li>Source and arrange private charter;</li>
                    <li>Communicate with direct air carriers;</li>
                    <li>Facilitate aircraft transactions;</li>
                    <li>Locate or coordinate contract aviation personnel;</li>
                    <li>Provide consulting services;</li>
                    <li>Manage customer accounts;</li>
                    <li>Process and track transactions;</li>
                    <li>Coordinate requested travel or aviation services;</li>
                    <li>Communicate trip information;</li>
                    <li>Provide customer support;</li>
                    <li>Send service-related emails or text messages;</li>
                    <li>Send marketing communications where permitted;</li>
                    <li>Improve the Website;</li>
                    <li>Analyze Website traffic and performance;</li>
                    <li>Detect or prevent fraud and security incidents;</li>
                    <li>Maintain business records;</li>
                    <li>Comply with legal and regulatory requirements; and</li>
                    <li>Establish, exercise, or defend legal claims.</li>
                </ul>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-4" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    4. How We Share Information
                </h2>
                <p>
                    Volare does not sell personal information for money. We may disclose information when reasonably necessary to provide requested services or operate our business.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Air Carriers and Aircraft Operators.</strong> For charter requests, we may share relevant passenger and trip information with certificated direct air carriers, aircraft operators, aircraft owners, or their authorized representatives when necessary to obtain quotes, arrange transportation, satisfy regulatory requirements, or operate a requested flight.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Aviation and Travel Service Providers.</strong> Information may be shared with service providers such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Fixed-base operators;</li>
                    <li>Ground handlers;</li>
                    <li>Ground transportation providers;</li>
                    <li>Catering providers;</li>
                    <li>Hotels;</li>
                    <li>Aircraft management companies;</li>
                    <li>Flight support companies;</li>
                    <li>Maintenance organizations; and</li>
                    <li>Other vendors necessary to fulfill a customer&apos;s request.</li>
                </ul>
                <p>
                    Only information reasonably relevant to the requested service should be provided.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Aircraft Transactions.</strong> For aircraft brokerage services, information may be shared with prospective buyers, sellers, owners, brokers, escrow providers, title companies, maintenance facilities, inspection providers, attorneys, lenders, insurers, and other parties involved in a transaction when appropriate.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Crew Services.</strong> Information concerning pilots or other aviation professionals may be provided to prospective operators, aircraft owners, or clients for purposes of evaluating or arranging a potential assignment.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Technology and Business Providers.</strong> We may use third parties to provide website hosting, cloud storage, customer relationship management, email services, SMS services, analytics, advertising, cybersecurity, payment processing, accounting, and other business technology.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Legal and Safety Requirements.</strong> We may disclose information when reasonably necessary to comply with law, respond to lawful governmental requests, comply with aviation or transportation security requirements, protect passengers or others, investigate suspected fraud, enforce agreements, or protect Volare&apos;s legal rights.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Business Transactions.</strong> If Volare is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, information may be disclosed to relevant parties subject to appropriate confidentiality protections where applicable.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-5" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    5. SMS Privacy
                </h2>
                <p>
                    When you provide your mobile telephone number and consent to text messaging, Volare may use that number to send communications consistent with the consent you provided.
                </p>
                <p>
                    Mobile information will not be sold or shared with third parties for their own promotional or marketing purposes.
                </p>
                <p>
                    Volare may share information with service providers that facilitate delivery of text messages on our behalf, subject to applicable contractual and legal requirements.
                </p>
                <p>
                    Message and data rates may apply. Message frequency may vary. You may opt out of marketing text messages by replying STOP. For assistance, reply HELP or contact Volare. Consent to receive marketing text messages is not a condition of purchasing services.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-6" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    6. Email Marketing
                </h2>
                <p>
                    If you receive marketing emails from Volare, you may unsubscribe using the unsubscribe method contained in the communication. We may continue to send non-marketing communications relating to active transactions, trips, inquiries, accounts, or services.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-7" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    7. Advertising and Analytics
                </h2>
                <p>
                    Volare may use third-party analytics and advertising services to understand Website traffic, evaluate advertising campaigns, and improve our marketing. Depending upon the technologies used, these providers may collect information about Website activity through cookies, pixels, device identifiers, or similar technologies.
                </p>
                <p>
                    Certain U.S. privacy laws may treat some forms of targeted advertising or cross-context behavioral advertising as &ldquo;sharing&rdquo; or a &ldquo;sale&rdquo; even when no money is exchanged. Where required by applicable law, Volare will provide applicable privacy choices concerning such processing.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-8" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    8. Data Retention
                </h2>
                <p>
                    Volare retains personal information for as long as reasonably necessary for the purpose for which it was collected and to satisfy legitimate operational, accounting, contractual, regulatory, security, and legal requirements. Retention periods may differ depending on the type of information and service involved.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-9" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    9. Data Security
                </h2>
                <p>
                    Volare uses reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, disclosure, alteration, or destruction. However, no internet transmission, electronic communication, or data-storage system can be guaranteed to be completely secure.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-10" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    10. U.S. Privacy Rights
                </h2>
                <p>
                    Depending on your state of residence and applicable law, you may have rights concerning your personal information, potentially including the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Request access to personal information;</li>
                    <li>Request correction of inaccurate information;</li>
                    <li>Request deletion of certain information;</li>
                    <li>Obtain a portable copy of certain information;</li>
                    <li>Opt out of certain targeted advertising;</li>
                    <li>Opt out of certain sales or sharing of personal information; and</li>
                    <li>Appeal certain decisions regarding privacy requests.</li>
                </ul>
                <p className="pt-1">
                    These rights vary by jurisdiction and may be subject to legal exceptions. Volare will not unlawfully discriminate against an individual for exercising applicable privacy rights.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-11" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    11. Privacy Requests
                </h2>
                <p>
                    To submit a privacy request, contact{" "}
                    <a
                        href="mailto:Connor.Casarella@VolareAvi.com"
                        className="text-[#8C6D3F] font-medium hover:underline"
                    >
                        Connor.Casarella@VolareAvi.com
                    </a>. You may also submit a request through the contact form on VolareAvi.com. We may need to verify your identity before fulfilling certain requests. Authorized agents may submit requests where permitted by applicable law, subject to appropriate verification.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-12" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    12. Do Not Sell or Share
                </h2>
                <p>
                    Volare does not sell personal information for monetary compensation. Certain advertising or analytics activities could potentially constitute &ldquo;sharing&rdquo; or a &ldquo;sale&rdquo; under particular state privacy laws. Where applicable, Volare will honor legally required requests to opt out of such activities.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-13" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    13. Children&apos;s Privacy
                </h2>
                <p>
                    Volare&apos;s Website and services are not directed to children under 13, and Volare does not knowingly collect personal information directly from children under 13 through the Website.
                </p>
                <p>
                    Information about minor passengers may be provided by a parent, guardian, or responsible traveler when necessary to arrange aviation services. If we learn that personal information was collected directly from a child in violation of applicable law, we will take reasonable steps to delete it.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-14" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    14. International Travel
                </h2>
                <p>
                    Although Volare primarily serves customers in the United States, arranging international aviation services may require personal information to be transmitted to direct air carriers, governmental authorities, airport service providers, handlers, or other parties located outside the United States. Privacy and data-protection laws in those jurisdictions may differ from those in your home jurisdiction.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-15" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    15. Third-Party Websites
                </h2>
                <p>
                    Our Website may contain links to third-party websites or services. Volare is not responsible for the privacy practices of independent third parties. We encourage users to review the privacy policies of websites and services they use.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-16" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    16. Changes to This Privacy Policy
                </h2>
                <p>
                    We may update this Privacy Policy periodically to reflect changes in our services, technologies, business practices, or legal obligations. The updated Privacy Policy will be posted on VolareAvi.com with a revised effective date.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-17" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    17. Contact Us
                </h2>
                <p>
                    For questions, privacy requests, or concerns regarding this Privacy Policy, contact:
                </p>
                <div className="font-mono text-sm space-y-1 pt-2 text-[#0A1628]">
                    <p className="font-bold">Volare Aviation Services LLC</p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:Connor.Casarella@VolareAvi.com"
                            className="text-[#8C6D3F] hover:underline"
                        >
                            Connor.Casarella@VolareAvi.com
                        </a>
                    </p>
                </div>
                <p className="pt-2">
                    You may also contact us through the contact form available at VolareAvi.com.
                </p>
            </section>
        </LegalPageLayout>
    );
}