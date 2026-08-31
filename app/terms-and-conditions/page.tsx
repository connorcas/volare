import type { Metadata } from "next";
import LegalPageLayout from "@/components/section-components/landing/legal/LegalPageLayout";

export const metadata: Metadata = {
    title: "Terms & Conditions | Volare Aviation Services LLC",
    description:
        "Terms and conditions governing private jet charter brokerage, aircraft sales, contract pilot services, and general use of Volare Aviation Services LLC.",
    keywords: [
        "Volare Aviation Terms and Conditions",
        "Private Jet Charter Brokerage Terms",
        "Air Charter Legal Disclosures",
        "Aviation Consulting Agreement",
        "Volare Aviation Services LLC Legal",
    ],
    openGraph: {
        title: "Terms & Conditions | Volare Aviation Services LLC",
        description:
            "General legal terms, air charter brokerage disclosures, and user responsibilities for Volare Aviation Services LLC.",
        url: "https://www.volareavi.com/terms-and-conditions",
        siteName: "Volare Aviation",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.volareavi.com/images/hero-plan.png",
                width: 1200,
                height: 630,
                alt: "Volare Aviation Terms and Conditions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | Volare Aviation Services LLC",
        description:
            "Terms and conditions governing private aircraft brokerage and travel services by Volare Aviation Services LLC.",
        images: ["https://www.volareavi.com/images/hero-plan.png"],
    },
    alternates: {
        canonical: "https://www.volareavi.com/terms-and-conditions",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "section-1", title: "1. Volare Aviation Services" },
    { id: "section-2", title: "2. Private Charter Brokerage" },
    { id: "section-3", title: "3. Charter Quotes and Availability" },
    { id: "section-4", title: "4. Aircraft Substitutions & Changes" },
    { id: "section-5", title: "5. Aircraft Sales and Brokerage" },
    { id: "section-6", title: "6. Contract Pilots, Crew & Contractors" },
    { id: "section-7", title: "7. Aviation Consulting" },
    { id: "section-8", title: "8. Customer Responsibilities" },
    { id: "section-9", title: "9. Payments" },
    { id: "section-10", title: "10. Cancellations and Refunds" },
    { id: "section-11", title: "11. SMS and Electronic Comms" },
    { id: "section-12", title: "12. Email Communications" },
    { id: "section-13", title: "13. Third-Party Services & Websites" },
    { id: "section-14", title: "14. Website Accounts" },
    { id: "section-15", title: "15. Acceptable Use" },
    { id: "section-16", title: "16. Intellectual Property" },
    { id: "section-17", title: "17. Website Information" },
    { id: "section-18", title: "18. No Guarantee of Service" },
    { id: "section-19", title: "19. Disclaimer of Warranties" },
    { id: "section-20", title: "20. Limitation of Liability" },
    { id: "section-21", title: "21. Force Majeure" },
    { id: "section-22", title: "22. Indemnification" },
    { id: "section-23", title: "23. Governing Law" },
    { id: "section-24", title: "24. Changes to These Terms" },
    { id: "section-25", title: "25. Severability" },
    { id: "section-26", title: "26. Entire Agreement" },
    { id: "section-27", title: "27. Contact Us" },
];

export default function TermsAndConditions() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms and Conditions | Volare Aviation Services LLC",
        url: "https://www.volareavi.com/terms-and-conditions",
        description:
            "Terms of service, flight brokerage conditions, and legal disclosures for Volare Aviation Services LLC.",
        datePublished: "2026-08-24",
        dateModified: "2026-08-24",
        publisher: {
            "@type": "Organization",
            name: "Volare Aviation Services LLC",
            url: "https://www.volareavi.com",
            logo: "https://www.volareavi.com/logo.png",
        },
    };

    return (
        <LegalPageLayout
            title="Terms &"
            italicTitle="Conditions"
            effectiveDate="August 24, 2026"
            sections={sections}>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section id="introduction" className="space-y-4 pt-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A1628]">
                    Introduction
                </h2>
                <p>
                    These Terms & Conditions (&ldquo;Terms&rdquo;) govern your access to and use of VolareAvi.com (the &ldquo;Website&rdquo;) and the services offered by Volare Aviation Services LLC, a Texas limited liability company (&ldquo;Volare,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
                </p>
                <p>
                    By accessing the Website, submitting an inquiry, requesting a quote, creating an account, engaging Volare for services, or otherwise using our Website or services, you acknowledge that you have read, understood, and agree to these Terms.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-1" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    1. Volare Aviation Services
                </h2>
                <p>
                    Volare provides aviation-related services that may include, but are not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Private aircraft charter sourcing and brokerage;</li>
                    <li>Aircraft acquisition, sales, and brokerage assistance;</li>
                    <li>Contract pilot and flight crew sourcing;</li>
                    <li>Aviation consulting;</li>
                    <li>Aircraft and trip support services;</li>
                    <li>Aviation-related referrals and vendor coordination; and</li>
                    <li>Other aviation services agreed upon between Volare and its clients.</li>
                </ul>
                <p className="pt-2">
                    Specific services may be governed by additional agreements, proposals, invoices, confirmations, operator terms, or other documentation. If a specific written agreement conflicts with these general Website Terms, the specific agreement will control with respect to that service.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-2" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    2. Private Charter Brokerage
                </h2>
                <p>
                    When Volare arranges or assists with private aircraft charter, Volare Aviation Services LLC acts as an air charter broker or intermediary and is not itself a direct air carrier unless expressly stated otherwise in writing.
                </p>
                <p>
                    Volare does not own or operate the aircraft used for third-party charter flights and does not exercise operational control over those flights.
                </p>
                <p>
                    Charter flights are performed by independent, properly certificated direct air carriers or foreign air carriers, as applicable.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Operational Control.</strong> The direct air carrier operating a charter flight maintains operational control of the aircraft and is solely responsible for matters associated with the operation of the flight, including aircraft operation, flight crew, safety of flight, regulatory compliance, dispatch or flight-release decisions where applicable, maintenance, and decisions concerning whether, when, and how a flight may be conducted. Volare does not direct the pilots or control the operational decisions of the air carrier.
                </p>
                <p>
                    <strong className="font-medium text-[#0A1628]">Carrier Information.</strong> Where required by applicable law or regulation, customers will be provided with information identifying the direct air carrier operating their flight and other required charter disclosures. Aircraft, operators, schedules, and other trip details may change when necessary due to operational, safety, maintenance, regulatory, weather, availability, or other circumstances.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-3" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    3. Charter Quotes and Availability
                </h2>
                <p>
                    All charter quotes are subject to aircraft and crew availability, operator acceptance, regulatory requirements, and final confirmation. Unless expressly guaranteed in writing, a quote does not constitute a reservation or guarantee that a particular aircraft will remain available.
                </p>
                <p>
                    Quoted pricing may be subject to changes resulting from circumstances including:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Aircraft repositioning;</li>
                    <li>Fuel costs;</li>
                    <li>Airport fees;</li>
                    <li>International fees;</li>
                    <li>Deicing;</li>
                    <li>Hangar requirements;</li>
                    <li>Ground handling;</li>
                    <li>Passenger-requested itinerary changes;</li>
                    <li>Extended waiting time;</li>
                    <li>Crew duty limitations;</li>
                    <li>Additional flight time;</li>
                    <li>Government taxes or fees;</li>
                    <li>Changes in airport availability; or</li>
                    <li>Other trip-specific expenses.</li>
                </ul>
                <p className="pt-2">
                    Any material additional charges will be handled according to the applicable charter agreement, confirmation, or operator terms.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-4" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    4. Aircraft Substitutions and Operational Changes
                </h2>
                <p>
                    A specific aircraft type or aircraft may be requested or quoted, but operational circumstances can require substitution. Any substitution is subject to the applicable charter agreement and regulatory requirements.
                </p>
                <p>
                    The operating air carrier may delay, divert, cancel, or otherwise modify a flight when necessary for safety, weather, maintenance, crew-duty, regulatory, airport, air traffic control, or other operational reasons. Volare does not override operational decisions made by the direct air carrier.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-5" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    5. Aircraft Sales and Brokerage
                </h2>
                <p>
                    Volare may assist buyers and sellers with aircraft transactions, market research, aircraft sourcing, marketing, negotiations, referrals, and transaction coordination.
                </p>
                <p>
                    Unless expressly agreed otherwise in writing, Volare does not independently warrant or guarantee:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Aircraft condition;</li>
                    <li>Airworthiness;</li>
                    <li>Maintenance history;</li>
                    <li>Logbook accuracy;</li>
                    <li>Title;</li>
                    <li>Damage history;</li>
                    <li>Regulatory compliance;</li>
                    <li>Specifications supplied by sellers or third parties;</li>
                    <li>Future operating costs; or</li>
                    <li>Fitness of an aircraft for a particular purpose.</li>
                </ul>
                <p className="pt-2">
                    Prospective purchasers are strongly encouraged to conduct independent due diligence, including appropriate pre-purchase inspections, records reviews, title and lien searches, and reviews by qualified aviation, tax, financial, and legal professionals.
                </p>
                <p>
                    Information regarding aircraft may originate from sellers, owners, listing services, maintenance providers, manufacturers, or other third parties. Volare may rely on such information without independently verifying every representation.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-6" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    6. Contract Pilots, Crew, and Independent Contractors
                </h2>
                <p>
                    Volare may assist clients with locating pilots, flight attendants, maintenance personnel, or other aviation professionals. Unless specifically stated otherwise in writing, personnel introduced or sourced through Volare may operate as independent contractors and are not necessarily employees of Volare.
                </p>
                <p>
                    Aircraft owners and operators remain responsible for determining whether personnel satisfy the qualifications, training, currency, insurance, regulatory, and operational requirements applicable to their aircraft and operation.
                </p>
                <p>
                    Volare may assist with credential verification but does not replace an operator&apos;s responsibility to verify the qualifications and suitability of personnel before assignment.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-7" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    7. Aviation Consulting
                </h2>
                <p>
                    Information, recommendations, estimates, or guidance provided by Volare are based upon the information reasonably available at the time.
                </p>
                <p>
                    Aviation operations are highly fact-specific and subject to changing regulations, aircraft limitations, operating specifications, weather conditions, airport restrictions, and other considerations.
                </p>
                <p>
                    Volare&apos;s consulting services do not replace the responsibilities of certificated operators, pilots in command, maintenance providers, legal counsel, tax professionals, insurance professionals, or regulatory authorities.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-8" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    8. Customer Responsibilities
                </h2>
                <p>
                    You agree to provide complete and accurate information when requesting or purchasing services. For charter services, this may include accurate information concerning:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Passenger names;</li>
                    <li>Passenger counts;</li>
                    <li>Contact information;</li>
                    <li>Baggage;</li>
                    <li>Pets;</li>
                    <li>Special assistance requirements;</li>
                    <li>International documentation;</li>
                    <li>Passport or identification information when required;</li>
                    <li>Dangerous goods or restricted items; and</li>
                    <li>Other information reasonably necessary to arrange or operate the flight.</li>
                </ul>
                <p className="pt-2">
                    Passengers are responsible for possessing all required identification, passports, visas, permits, health documentation, and other travel documents. Failure to provide accurate or timely information may result in delays, additional charges, denied boarding, cancellation, or inability to provide the requested service.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-9" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    9. Payments
                </h2>
                <p>
                    Volare may use independent third-party payment processors, invoicing services, banking providers, or other financial-service providers. Payment information submitted through a third-party provider is subject to that provider&apos;s terms and privacy practices.
                </p>
                <p>
                    Volare does not necessarily directly receive or store complete payment-card information. Payment terms, deposits, balances, cancellation fees, refunds, and other financial conditions applicable to a particular transaction will be stated in the applicable quote, invoice, confirmation, agreement, or payment request.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-10" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    10. Cancellations and Refunds
                </h2>
                <p>
                    Cancellation and refund terms vary based on the service, aircraft operator, timing, and transaction. For charter flights, the cancellation policy provided in the applicable charter agreement, confirmation, or operator terms will govern.
                </p>
                <p>
                    Certain amounts may be non-refundable once aircraft, crew, positioning, vendor services, or other resources have been committed. Customer-requested itinerary changes may result in additional charges.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-11" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    11. SMS and Electronic Communications
                </h2>
                <p>
                    If you provide your telephone number and affirmatively consent to receive text messages, Volare may send service-related or, where separately permitted, marketing text messages. Message and data rates may apply. Message frequency may vary.
                </p>
                <p>
                    Consent to receive marketing text messages is not a condition of purchasing Volare&apos;s services. You may opt out of marketing text messages by replying STOP. You may request assistance by replying HELP or by contacting Volare.
                </p>
                <p>
                    Transactional or service-related communications may still be sent where permitted by law and necessary to provide services you have requested.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-12" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    12. Email Communications
                </h2>
                <p>
                    By providing an email address, you authorize Volare to send communications reasonably related to your inquiries, transactions, trips, account, or requested services. Marketing communications will include an appropriate method to unsubscribe where required by applicable law.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-13" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    13. Third-Party Services and Websites
                </h2>
                <p>
                    The Website or Volare&apos;s services may involve third-party companies, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Air carriers;</li>
                    <li>Aircraft owners;</li>
                    <li>Fixed-base operators;</li>
                    <li>Ground transportation companies;</li>
                    <li>Hotels;</li>
                    <li>Catering companies;</li>
                    <li>Flight support providers;</li>
                    <li>Maintenance organizations;</li>
                    <li>Payment processors;</li>
                    <li>Software providers; and</li>
                    <li>Other aviation or travel vendors.</li>
                </ul>
                <p className="pt-2">
                    Volare is not responsible for the independent acts, omissions, policies, websites, or services of third parties except to the extent responsibility cannot lawfully be excluded.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-14" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    14. Website Accounts
                </h2>
                <p>
                    If account functionality is available, you are responsible for maintaining the confidentiality of your account credentials and for activity conducted through your account. You agree to promptly notify Volare if you believe your account or credentials have been compromised. Volare may suspend or terminate access when reasonably necessary to protect the Website, users, Volare, or third parties.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-15" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    15. Acceptable Use
                </h2>
                <p>You may not use the Website to:</p>
                <ul className="list-disc pl-5 space-y-1 marker:text-[#8C6D3F]">
                    <li>Violate applicable laws or regulations;</li>
                    <li>Submit fraudulent or misleading information;</li>
                    <li>Attempt unauthorized access to systems or accounts;</li>
                    <li>Introduce malware or malicious code;</li>
                    <li>Interfere with Website functionality;</li>
                    <li>Scrape or systematically extract Website content without authorization;</li>
                    <li>Impersonate another person or entity; or</li>
                    <li>Use Volare&apos;s intellectual property without authorization.</li>
                </ul>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-16" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    16. Intellectual Property
                </h2>
                <p>
                    The Website and its original content, branding, logos, graphics, photographs, text, design elements, and other materials are owned by or licensed to Volare and are protected by applicable intellectual-property laws. No license to use Volare&apos;s trademarks, trade names, branding, or copyrighted material is granted except for normal personal use of the Website.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-17" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    17. Website Information
                </h2>
                <p>
                    Volare strives to maintain accurate information but does not warrant that all Website information will always be complete, current, or error-free. Aircraft specifications, availability, pricing, travel information, regulatory information, and other aviation information can change without notice.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-18" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    18. No Guarantee of Service
                </h2>
                <p>
                    Submission of a quote request, contact form, trip request, crew request, aircraft inquiry, or other communication does not obligate Volare to provide services. Volare reserves the right to decline a transaction or engagement where permitted by law.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-19" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    19. Disclaimer of Warranties
                </h2>
                <p className="font-mono text-xs uppercase leading-relaxed text-[#0A1628]">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE WEBSITE AND GENERAL WEBSITE CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
                </p>
                <p className="font-mono text-xs uppercase leading-relaxed text-[#0A1628]">
                    VOLARE DISCLAIMS WARRANTIES NOT EXPRESSLY PROVIDED IN A SPECIFIC WRITTEN AGREEMENT, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE EXTENT PERMITTED BY LAW.
                </p>
                <p>
                    Nothing in this section limits obligations that cannot legally be waived or disclaimed.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-20" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    20. Limitation of Liability
                </h2>
                <p className="font-mono text-xs uppercase leading-relaxed text-[#0A1628]">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VOLARE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE WEBSITE OR SERVICES, INCLUDING LOSS OF PROFITS, BUSINESS OPPORTUNITY, DATA, OR USE.
                </p>
                <p>
                    Volare is not responsible for delays, cancellations, diversions, maintenance events, weather, air traffic control restrictions, airport closures, government actions, or operational decisions made by an independent direct air carrier or other third-party service provider, except to the extent liability is imposed upon Volare by applicable law.
                </p>
                <p>
                    Any transaction-specific limitation of liability contained in a separate signed agreement will govern that transaction.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-21" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    21. Force Majeure
                </h2>
                <p>
                    Volare will not be responsible for failure or delay caused by circumstances reasonably outside its control, including severe weather, natural disasters, acts of government, war, civil disturbance, labor disruptions, airport closures, air traffic control restrictions, telecommunications failures, widespread technology outages, epidemics, pandemics, or similar events.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-22" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    22. Indemnification
                </h2>
                <p>
                    To the extent permitted by law, you agree to indemnify and hold harmless Volare and its members, officers, employees, and representatives from third-party claims arising from your unlawful use of the Website, fraudulent or materially inaccurate information supplied by you, or your material violation of these Terms.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-23" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    23. Governing Law
                </h2>
                <p>
                    These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Unless otherwise required by applicable law or agreed in a transaction-specific agreement, disputes relating to these Terms or the Website shall be brought in a court of competent jurisdiction located in Texas.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-24" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    24. Changes to These Terms
                </h2>
                <p>
                    Volare may revise these Terms periodically to reflect changes in its services, Website, legal obligations, or business practices. The current version will be posted on VolareAvi.com with an updated effective date. Your continued use of the Website following the effective date of revised Terms constitutes acceptance of those Terms to the extent permitted by law.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-25" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    25. Severability
                </h2>
                <p>
                    If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue in effect to the fullest extent permitted by law.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-26" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    26. Entire Agreement
                </h2>
                <p>
                    These Terms constitute the general agreement between you and Volare concerning use of the Website. Separate service agreements, charter confirmations, brokerage agreements, invoices, or other transaction-specific documents may establish additional or different terms applicable to individual services.
                </p>
            </section>

            <hr className="border-[#D6CEBF]/60" />

            <section id="section-27" className="space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[#0A1628]">
                    27. Contact Us
                </h2>
                <p>
                    Questions regarding these Terms may be submitted through the contact form at VolareAvi.com or by email:
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
            </section>
        </LegalPageLayout>
    );
}