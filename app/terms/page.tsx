"use client";
import SiteFooter from '@/components/sections/SiteFooter';
import SiteHeader from '@/components/sections/SiteHeader';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KdpHelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const helpTopics = [
        {
            category: "Help",
            links: [
                { label: "Terms & Condition", href: "/terms" },
                { label: "Privacy notice", href: "/privacy-notice" },
                { label: "Conditions of Use", href: "/Condition-of-use?tab=conditions" },
                { label: "Help", href: "/help" },
            ]
        },
        // {
        //     category: "Account & Taxes",
        //     links: ["Set up your KDP account", "CreateSpace Account", "Tax Information"]
        // },
        // {
        //     category: "Book Formatting",
        //     links: ["Format Your Paperback", "Format Your Hardcover", "Format Your eBook", "Tools and Resources"]
        // },
        // {
        //     category: "KDP Publishing",
        //     links: [
        //         "Start publishing with KDP",
        //         "Create a Book",
        //         "Hardcover",
        //         "Beta: Audiobooks with virtual voice",
        //         "Beta: Kindle Translate",
        //         "Start a Book Series"
        //     ]
        // },
        // {
        //     category: "Orders & Book Copies",
        //     links: ["Proof and Author Copies"]
        // }
    ];

    return (
        <>
            <SiteHeader />
            <div className="w-full min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT SIDEBAR: HELP TOPICS PANELS (3 Columns on Desktop) */}
                    <aside className="lg:col-span-3 bg-[#f3f3f3] border border-gray-200 rounded-lg p-5 w-full h-full">
                        <h2 className="text-xl font-bold border-b border-gray-300 pb-3 mb-4 text-gray-950">
                            Help Topics
                        </h2>

                        <nav className="space-y-5">
                            {helpTopics.map((topic, index) => (
                                <div key={index} className="space-y-1.5">
                                    {/* Category Heading titles */}
                                    <h3 className="text-sm font-bold text-gray-950 tracking-tight">
                                        {topic.category}
                                    </h3>
                                    {/* Link child items */}
                                    <ul className="space-y-1 pl-0.5">
                                        {topic.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <button
                                                    onClick={() => router.push(link.href)}
                                                    className="text-xs sm:text-sm text-[#0066c0] hover:text-[#c45500] hover:underline transition-colors block py-0.5 text-left w-full focus:outline-none"
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </aside>

                    {/* RIGHT CORE DASHBOARD CONTENT (9 Columns on Desktop) */}
                    <main className="lg:col-span-9 space-y-6 w-full">

                        {/* SEARCH COMPONENT HEADER PANEL */}
                        <div className="w-full bg-[#f3f3f3] border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row items-center gap-3">
                            <div className="w-full relative flex items-center bg-white border border-gray-400 rounded focus-within:ring-1 focus-within:ring-[#e77600] focus-within:border-[#e77600] transition-shadow">
                                {/* Search Glass Indicator */}
                                <span className="pl-3 pr-2 text-gray-400 text-sm">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Topic or Keyword"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-2 bg-transparent text-gray-900 text-sm focus:outline-none placeholder-gray-400"
                                />
                            </div>
                            <button className="w-full sm:w-auto bg-[#333333] hover:bg-black text-white font-medium text-sm px-6 py-2 rounded shadow-sm whitespace-nowrap transition-colors">
                                Search Help
                            </button>
                        </div>

                        {/* BREADCRUMB INDICATORS */}
                        <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="font-bold text-gray-900">Legal & Content Guidelines</span>
                            <span className="text-gray-400 text-[10px]">&#10095;</span>
                            <span className="text-[#0066c0] hover:underline cursor-pointer">Kindle Direct Publishing House Terms and Conditions</span>
                        </div>

                        {/* MAIN DOCUMENT HEADLINE */}
                        <h1 className="text-2xl sm:text-3xl font-medium text-[#c45500] tracking-tight pt-2">
                            Kindle Direct Publishing House Terms and Conditions
                        </h1>

                        {searchQuery.trim() && !`
                            Kindle Direct Publishing House Terms and Conditions Last Updated September 27th 2024
                            Agreement Acceptance Amendment Term Termination Account Eligibility Registration
                            Book Distribution Rights Pricing Royalties Payments Grant of Rights DRM
                            Representations Warranties Indemnities Ownership Confidentiality Limitation of Liability
                            Force Majeure General Legal Provisions KDPH Select Pre-Orders Kindle Vella
                        `.toLowerCase().includes(searchQuery.toLowerCase().trim()) && (
                            <p className="text-sm text-gray-500 mb-4">No results found for &quot;{searchQuery}&quot;.</p>
                        )}

                        {/* INNER CONTENT GRID BLOCK WRAPPER */}
                        <div className="w-full flex flex-col md:items-start justify-between gap-6 pt-1">

                            {/* Primary content documentation hook link */}
                            {/* <div className="w-full md:max-w-md">
                                <a href="#terms-link" className="text-xs sm:text-sm text-[#0066c0] hover:text-[#c45500] hover:underline font-medium">
                                    Kindle Direct Publishing House Terms and Conditions
                                </a>
                            </div> */}

                            <div className="w-full space-y-5 text-sm text-gray-800 leading-relaxed">

                                <p className="text-xs text-gray-500">Last Updated: September 27th, 2024 — This agreement changed on the date listed above. See an explanation of the changes at the end of this document.</p>

                                <div className="border-b border-gray-200" />

                                <p>This agreement (the &quot;Agreement&quot;) is a binding agreement between the individual or the entity identified in your Kindle Direct Publishing House (&quot;KDPH&quot;) account (&quot;you&quot; or &quot;Publisher&quot;) and each Amazon party. The &quot;Amazon parties&quot; are, individually, Amazon.com Services LLC, Amazon Media EU S.à.r.l., Amazon Services International LLC, Amazon Serviços de Varejo do Brasil Ltda., Amazon Mexico Services, Inc., Amazon Australia Services, Inc., Amazon Asia-Pacific Holdings Private Limited, and each other Amazon affiliate that joins as a party to this Agreement. An Amazon &quot;affiliate&quot; is any entity that directly or indirectly controls, is controlled by, or is under common control with an Amazon party. &quot;Amazon,&quot; &quot;we&quot; or &quot;us&quot; means, together, the Amazon parties and their affiliates.</p>

                                <p>This Agreement provides the terms and conditions of your participation in the KDPH self-publication and distribution program (the &quot;Program&quot;) and consists of:</p>
                                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
                                    <li>the terms set forth below;</li>
                                    <li>the Digital Book Pricing Page and the Print Book Pricing Page;</li>
                                    <li>all rules and policies for participating in the Program provided on the KDPH website (&quot;Program Policies&quot;);</li>
                                    <li>the Amazon.com Conditions of Use; and</li>
                                    <li>the Amazon.com Privacy Notice.</li>
                                </ul>

                                <p>For individuals located in the European Union, the United Kingdom, Brazil, or Australia only: The Amazon.com Privacy Notice is not part of your Agreement. The version applicable to you is based on your location. Any version of this Agreement in a language other than English is provided for convenience and the English language version will control if there is any conflict.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">1. Agreement Acceptance</h2>
                                <p>You accept this Agreement and agree to be bound by its terms by either (a) clicking agree or accept where you&apos;re given the option to do so or (b) by using the Program, or any part of it. If you don&apos;t accept the terms, you are not entitled to use the Program and you must immediately withdraw your Books from further distribution through the Program and terminate your use of the Program.</p>
                                <p>Nothing in this agreement is intended to (1) exclude, restrict or modify any right or remedy you have in statute or otherwise, to the extent that right or remedy cannot be excluded, restricted or modified under applicable law; or (2) limit or exclude our liability, or require you to indemnify us to the extent any loss is caused by our gross negligence or criminal conduct.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">2. Agreement Amendment</h2>
                                <p>The Program will change over time and the terms of this Agreement will need to change over time as well. We reserve the right to change the terms of this Agreement. We will give you notice of the changes by one or more of the following methods: (1) posting new terms in place of the old with a revision date; (2) sending an email to your registered account address; (3) posting in the KDPH Community Forum; (4) posting a banner in the KDPH Portal; or (5) other reasonably substitutable means.</p>
                                <p><strong>2.1</strong> Changes to Agreement Terms other than Sections 5.4.1 or 5.5 are effective on the date we post or send the changes, unless we provide a later effective date.</p>
                                <p><strong>2.2</strong> Changes to Sections 5.4.1 (Royalties) or 5.5 (Grant of Rights) will be effective 30 days from the date of posting, or the date you accept the changes, whichever first occurs.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">3. Term and Termination</h2>
                                <p>For Publishers in the EU and UK, this Agreement takes effect upon successful completion of any required verification process. For all other Publishers, the term begins upon your acceptance. We may terminate this Agreement and your access to your Program account at any time if we have concerns with your account or if you are in breach of applicable laws or this Agreement. You may terminate at any time by providing notice, in which event we will cease selling your Digital Books within 5 business days.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">4. Account Eligibility and Registration</h2>
                                <p><strong>4.1 Eligibility.</strong> You must have an active Program account to participate. You represent that you are at least 18 years old (or the age of majority where you reside, whichever is older) and that you are able to form a legally binding contract.</p>
                                <p><strong>4.2 Account Information; No Multiple Accounts.</strong> You must ensure all information you provide is accurate and remains accurate, complete, and valid. You may maintain only one account at a time. You will not use false identities or impersonate any other person.</p>
                                <p><strong>4.3 Account Security.</strong> You are solely responsible for safeguarding and maintaining the confidentiality of your account username and password and are responsible for all activities that occur under your account. You agree to immediately notify Amazon of any unauthorized use of your account.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">5. Book Distribution Rights</h2>

                                <p><strong>5.1 Delivery, Acceptance and Withdrawal.</strong></p>
                                <p><strong>5.1.1 Delivery.</strong> You must provide to us, at your own expense, each Book you desire to distribute. You are responsible for retaining your own copy of any material provided to us. You must deliver all electronic files free and clear of viruses, worms and other potentially harmful code.</p>
                                <p><strong>5.1.2 Content Requirements.</strong> You must ensure that all Book content is in compliance with our Program Policies at the time you submit it. We are entitled to remove or modify the metadata, product description, information or images you make available for your Books.</p>
                                <p><strong>5.1.3 Book Rejection.</strong> We are entitled to determine what content we accept and distribute through the Program in our sole discretion.</p>
                                <p><strong>5.1.4 Book Withdrawal.</strong> You may withdraw your Books from further sale at any time on five business days advance notice. All withdrawals will apply prospectively only.</p>
                                <p><strong>5.1.5 Reformatting.</strong> We may reformat your Books, and you acknowledge that unintentional errors may occur in the process. If any such errors do occur, you may remove the affected Book from further sale, and this will be your only remedy.</p>

                                <p><strong>5.2 Marketing and Promotion.</strong></p>
                                <p><strong>5.2.1</strong> We will determine all marketing and promotions related to the sale of your Books. We will not owe you any fees for any marketing or promotional efforts.</p>
                                <p><strong>5.2.2 Reviews.</strong> You are subject to the Amazon Community Guidelines. We reserve the right to take any action with respect to your account in accordance with those Guidelines.</p>
                                <p><strong>5.2.3 Lending Kindle Books.</strong> All Digital Books made available through the Program are automatically included in the Kindle Book Lending program. For Digital Books in the 35% Royalty Option, you may choose to opt out of the lending program.</p>
                                <p><strong>5.2.4 Optional Programs and Services.</strong> We may make available to you optional programs and services through KDPH. Terms for those programs are included at the end of this Agreement.</p>

                                <p><strong>5.3 Pricing.</strong></p>
                                <p><strong>5.3.1 Providing Your List Price.</strong> The list price you provide to us is referred to as your &quot;List Price.&quot; You may change your List Price through the KDPH website, and your change will be effective within 5 business days.</p>
                                <p><strong>5.3.2 Currency Conversion.</strong> We may sell your Book using multiple currencies and may convert the List Price you submit to other currencies at an exchange rate we determine.</p>
                                <p><strong>5.3.3 Multiple List Prices.</strong> We may give you the option to provide multiple List Prices for a Book in different currencies or for different Amazon Properties.</p>
                                <p><strong>5.3.4 Customer Prices.</strong> To the extent not prohibited by applicable laws, we have sole and complete discretion to set the retail customer price at which your Books are sold.</p>

                                <p><strong>5.4 Royalties and Payments.</strong></p>
                                <p><strong>5.4.1 Royalties.</strong> If you are not in breach of this Agreement, for each Book sold, the applicable Amazon party will pay you the Royalty set forth in the Digital Book Pricing Page or Print Book Pricing Page, net of refunds, bad debt, and any applicable taxes.</p>
                                <p><strong>5.4.2 When We Pay You.</strong> Each Amazon party will pay Royalties approximately 60 days following the end of the calendar month during which the sales were made.</p>
                                <p><strong>5.4.3 Payment Currencies.</strong> If you change your payment currency, the change will be effective on the first day of the following calendar month.</p>
                                <p><strong>5.4.4 Payment Terms for Brazilian Publishers.</strong> If you are a publisher located in Brazil, you must provide us with a Brazilian bank account to receive Royalties for sales from amazon.com.br in Brazilian Reais.</p>
                                <p><strong>5.4.5 Payments made by Amazon Brazil.</strong> Payments made by Amazon Serviços de Varejo do Brasil Ltda. will have the following tax nature:</p>
                                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
                                    <li>When the beneficiary is not the author or creator of a Book and is remunerated for exploiting the copyright of that Book, the payment is considered a royalty.</li>
                                    <li>When the beneficiary is the author or creator and is remunerated for exploiting the copyright, the payment is considered a copyright.</li>
                                </ul>
                                <p><strong>5.4.6 Payment Policies.</strong> We may require you to register a valid bank account in your KDPH account in order to receive Royalty payments.</p>
                                <p><strong>5.4.7 Payment Disputes.</strong> You may not bring a suit against us with regard to any statement unless you bring it within six months after the date the statement is available.</p>
                                <p><strong>5.4.8 Offsets.</strong> We can withhold Royalties and offset them against future payments. This includes situations involving refunds, third-party rights claims, content guideline breaches, amounts you owe to us, and cases of deceptive, fraudulent, or illegal activity.</p>
                                <p><strong>5.4.9 Taxes.</strong> The Amazon parties are responsible for collecting and remitting taxes imposed on their respective sales of Books to customers. You are responsible for any income or other taxes due and payable resulting from payments to you.</p>

                                <p><strong>5.5 Grant of Rights.</strong> You grant to each Amazon party a nonexclusive, irrevocable right and license to print, distribute, sell, and otherwise make available your Books in all formats you choose to make available through KDPH by all distribution means available, including digital download, virtual storage, and marketing excerpts.</p>
                                <p><strong>5.6 DRM and Geofiltering Technology.</strong> We may, but are not obligated, to provide you the option to apply DRM technology or geofiltering in connection with the distribution of your Digital Books.</p>
                                <p><strong>5.7 Rights Clearances and Rights Dispute Resolution.</strong> You will obtain and pay for any and all necessary clearances and licenses for the Books to permit our exercise of the rights granted under this Agreement.</p>
                                <p><strong>5.8 Representations, Warranties and Indemnities.</strong> You represent and warrant that you have the full right, power and authority to enter into and fully perform this Agreement, that you have obtained all necessary rights, and that the content does not violate any intellectual property or other rights of any person or entity. You will indemnify, defend and hold Amazon harmless from and against any loss, claim, liability, damage, action or cause of action that arises from any breach of your representations, warranties or obligations.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">6. Ownership and Control</h2>
                                <p>As between us and you, you retain all ownership rights in and to the copyrights and all other rights in your Books. We retain sole ownership and control of all data obtained from customers in connection with the Program. Any feedback you provide to Amazon may be used freely without restriction or compensation.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">7. Confidentiality</h2>
                                <p>You will not, without our express prior written permission, issue any press release or disclose Amazon Confidential Information to any third party, or use it for any purpose other than the performance of this Agreement. This Section 7 will survive three years following the termination of this Agreement.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">8. Limitation of Liability</h2>
                                <p className="uppercase text-xs leading-relaxed">THE PROGRAM IS PROVIDED &quot;AS IS.&quot; WE WILL IN NO EVENT BE LIABLE FOR ANY LOSS OF DATA, LOSS OF PROFITS, COST OF COVER OR OTHER SPECIAL, INCIDENTAL, CONSEQUENTIAL, INDIRECT, EXEMPLARY OR RELIANCE DAMAGES ARISING FROM OR IN RELATION TO THIS AGREEMENT. IN NO EVENT WILL OUR LIABILITY UNDER THIS AGREEMENT EXCEED THE AMOUNT OF FEES DUE AND PAYABLE BY AMAZON UNDER THIS AGREEMENT FOR THE TWELVE-MONTH PERIOD PRECEDING THE CLAIM. WE SPECIFICALLY DISCLAIM ALL WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">9. Force Majeure</h2>
                                <p>Amazon will not be liable to you for any failure or delay in the performance of its obligations under this Agreement caused by any event or circumstance beyond its control, including, but not limited to, denial-of-service attacks, insurrection, fires, flood, storm, explosions, acts of God, war, terrorism, and labor conditions.</p>

                                <h2 className="text-base font-bold text-gray-900 pt-2">10. General Legal Provisions</h2>
                                <p><strong>10.1 Disputes.</strong> Any dispute or claim relating in any way to this Agreement or KDPH will be resolved by binding arbitration, rather than in court, except that either party may elect to proceed in small claims court if the claims qualify. You and we each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated or representative action.</p>
                                <p><strong>10.2 Applicable Law.</strong> The United States Federal Arbitration Act, applicable United States federal law, and the laws of the state of Washington, USA, without regard to principles of conflict of laws, will govern this Agreement.</p>
                                <p><strong>10.3 Other Legal Provisions.</strong> This Agreement may not be amended, except in writing signed by both parties or as provided in Section 2. Each Amazon party is severally liable for its own obligations under this Agreement and is not jointly liable for the obligations of other Amazon parties. This Agreement constitutes the entire agreement between the parties with respect to its subject matter.</p>

                                <div className="border-b border-gray-200 my-4" />
                                <h2 className="text-base font-bold text-gray-900">Terms and Conditions for Optional Programs and Services</h2>

                                <h3 className="text-sm font-bold text-gray-900 pt-2">KDPH Select Program</h3>
                                <p>KDPH Select is an option for KDPH publishers. While enrolled, your Digital Book must be exclusive to us and will be included in Kindle Unlimited. If there is any conflict among the terms in this Agreement, these KDPH Select Terms and Conditions govern over the general KDPH Terms and Conditions above.</p>
                                <p><strong>1. Exclusivity.</strong> When you include a Digital Book in KDPH Select, you give us the exclusive right to sell and distribute your Digital Book in digital format. During this period, you cannot sell or distribute your Digital Book (or a substantially similar book) in digital format in any territory where you have rights.</p>
                                <p><strong>2. KDPH Select Benefits.</strong></p>
                                <p><strong>2.1 Promotional Pricing Programs.</strong> During each 90-day KDPH Select enrollment term, you may run your Digital Book in either a Kindle Countdown Deal or a free promotion (up to 5 days per 90-day period).</p>
                                <p><strong>2.2 Inclusion in Kindle Subscription Programs.</strong> Digital Books included in KDPH Select will be automatically included in Kindle Subscription Programs.</p>
                                <p><strong>2.3 KDPH Select Fund.</strong> We will establish a monthly fund and you will be eligible to earn a share based on the amount of your content read by customers in each marketplace.</p>
                                <p><strong>2.4 70% Royalty in Brazil, Japan, Mexico, and India.</strong> Digital Books enrolled in KDPH Select will be eligible to earn 70% royalty for sales to customers in these territories.</p>
                                <p><strong>3. Period of Participation and Automatic Renewal.</strong> Once included, your Digital Book will be in KDPH Select for a period of 90 days, automatically renewing unless you opt out through the KDPH website before renewal.</p>
                                <p><strong>4. Book Eligibility.</strong> Because this option is for exclusive content, if you do not control the exclusive rights to your Digital Book, you cannot include it in KDPH Select.</p>
                                <p><strong>5. Your Commitment.</strong> If you don&apos;t comply with this Agreement, we will not owe you Royalties for your Digital Books for the Kindle Subscription Programs, and we may offset any Royalties previously paid.</p>

                                <h3 className="text-sm font-bold text-gray-900 pt-2">KDPH Pre-Orders</h3>
                                <p>You may make an eligible Digital Book available for customer pre-order up to 365 days in advance of the official release date.</p>
                                <p><strong>1. Enrollment.</strong> You may make your eligible Digital Book available for pre-order by choosing &quot;pre-order&quot; as your book release option during title set-up.</p>
                                <p><strong>2. Publisher Payments.</strong> Royalties for pre-order sales will be paid approximately 60 days following the end of the calendar month of the Digital Book&apos;s actual release date.</p>
                                <p><strong>3. Pre-Order Price Guarantee.</strong> Amazon offers customers a Pre-order Price Guarantee that guarantees a customer is charged the lowest price offered by Amazon between the time the customer places the order and the end of the release date.</p>

                                <h3 className="text-sm font-bold text-gray-900 pt-2">Kindle Vella</h3>
                                <p>If you reside in the US, you may make your work available to Amazon customers in installments (&quot;Episodes&quot;).</p>
                                <p><strong>1. Content.</strong> Refer to our Kindle Vella Content Guidelines.</p>
                                <p><strong>2. Tokens.</strong> Amazon customers will redeem Tokens purchased from Amazon to unlock your Episodes. Amazon has sole discretion to set the retail price of Tokens.</p>
                                <p><strong>3. Episode Word Count and Token Pricing.</strong> Each Episode must consist of a minimum of 600 words and a maximum of 5,000 words.</p>
                                <p><strong>4. Royalties.</strong> For each Token a customer redeems for your Episode, we will pay you 50% of the amount the customer paid for that Token, net of refunds, bad debt, and any applicable taxes.</p>
                                <p><strong>5. Inapplicable Terms.</strong> The following sections do not apply to Kindle Vella: 5.2.3 Lending Kindle Books, 5.3.1–5.3.3 List Price provisions, 5.4.1–5.4.4 Payment provisions, Terms and Conditions for KDPH Select Program, and Terms and Conditions for KDPH Pre-Orders.</p>

                                <div className="border-b border-gray-200 my-4" />
                                <h2 className="text-sm font-bold text-gray-900">Recent Changes to the Agreement</h2>
                                <p>On the date listed at the top of this Agreement, we updated Sections 3 and 4.2. Please carefully review the revised Agreement in its entirety.</p>

                            </div>



                            {/* KDP JUMPSTART BRAND FLOATING PROMO BANNER BOX */}
                            {/* <div className="flex items-center border border-gray-200 rounded shadow-sm overflow-hidden bg-white max-w-sm ml-auto md:ml-0">
                                <div className="p-4 flex flex-col items-end text-right space-y-0.5">
                                    <div className="text-sm font-medium text-gray-900">
                                        <span className="font-black text-black">kdp</span> jumpstart
                                    </div>
                                    <p className="text-[11px] text-gray-500 font-medium">
                                        A guide to publishing on Amazon
                                    </p>
                                </div> */}

                            {/* Call to action active banner trigger node */}
                            {/* <a
                                    href="#learn-more"
                                    className="bg-[#e47911] hover:bg-[#d57008] text-white font-bold text-xs uppercase tracking-wider py-6 px-5 transition-colors h-full flex items-center justify-center min-h-18"
                                >
                                    Learn More
                                </a>
                            </div> */}

                        </div>

                    </main>

                </div>
            </div>
            <SiteFooter />
        </>
    );
}