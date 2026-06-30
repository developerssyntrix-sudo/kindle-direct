"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SiteHeader from '@/components/sections/SiteHeader';
import SiteFooter from '@/components/sections/SiteFooter';

type TabKey = 'terms' | 'privacy' | 'conditions' | 'help';

function LegalCenterInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabKey>('conditions');

  useEffect(() => {
    const tab = searchParams.get('tab') as TabKey | null;
    if (tab && ['terms', 'privacy', 'conditions', 'help'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const sidebarLinks = [
    { id: 'terms', label: 'Terms and Conditions', href: '/terms' },
    { id: 'privacy', label: 'Privacy Notice', href: '/privacy-notice' },
    { id: 'conditions', label: 'Conditions of Use', href: null },
    { id: 'help', label: 'Help', href: '/help' },
  ] as const;

  const conditionsSections = [
    { heading: 'PRIVACY', body: 'Please review our Privacy Notice, which also governs your use of Amazon Services, to understand our practices.' },
    { heading: 'ELECTRONIC COMMUNICATIONS', body: 'When you use Amazon Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Amazon Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.' },
    { heading: 'COPYRIGHT', body: 'All content included in or made available through any Amazon Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data complications, and software is the property of Amazon or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Amazon Service is the exclusive property of Amazon and protected by U.S. and international copyright laws.' },
    { heading: 'TRADEMARKS', body: 'Click here to see a non-exhaustive list of Amazon trademarks. In addition, graphics, logos, page headers, button icons, scripts, and service names included in or made available through any Amazon Service are trademarks or trade dress of Amazon in the U.S. and other countries. Amazon\'s trademarks and trade dress may not be used in connection with any product or service that is not Amazon\'s, in any manner that is likely to cause confusion among customers. All other trademarks not owned by Amazon that appear in any Amazon Service are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Amazon.' },
    { heading: 'LICENSE AND ACCESS', body: 'Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Amazon or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Amazon Services. This license does not include any resale or commercial use of any Amazon Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Amazon Service or its contents; any downloading, copying, or other use of account information for the benefit of another party; or any use of data mining, robots, or similar data gathering and extraction tools. You may not use the Amazon Services to infringe the intellectual property or other legal rights. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Amazon or its licensors, suppliers, publishers, rightsholders, or other content providers.' },
    { heading: 'YOUR ACCOUNT', body: 'You may need your own Amazon account to use certain Amazon Services, and you may be required to be logged in to the account and have a valid payment method associated with it. If there is a problem charging your selected payment method, we may charge any other valid payment method associated with your account. Visit Your Payments to manage your payment options. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account, and you agree to accept responsibility for all activities that occur under your account or password. Amazon does sell products for children, but it sells them to adults, who can purchase with a credit card or other permitted payment method. If you are under 18, you may use the Amazon Services only with involvement of a parent or guardian. Parents and guardians may create profiles for teenagers in their Amazon Household.' },
    { heading: 'REVIEWS, COMMENTS, COMMUNICATIONS, AND OTHER CONTENT', body: 'You may post reviews, comments, photos, videos, and other content; and submit suggestions, ideas, comments, questions, or other information, so long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights (including publicity rights), or otherwise injurious to third parties or objectionable, and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam" or unsolicited commercial electronic messages.' },
    { heading: 'INTELLECTUAL PROPERTY COMPLAINTS', body: 'Amazon respects the intellectual property of others. If you believe that your intellectual property rights have been infringed, please follow our Notice and Procedure for Making Claims of Copyright Infringement.' },
    { heading: 'RISK OF LOSS', body: 'All purchases of physical items from Amazon are made pursuant to a shipment contract. This means that the risk of loss and title for such items pass to you upon our delivery to the carrier.' },
    { heading: 'RETURNS, REFUNDS AND TITLE', body: 'Amazon does not take title to returned items until the item arrives at our fulfillment center. At our discretion, a refund may be issued without requiring a return. In this situation, Amazon does not take title to the refunded item. For more information about our returns and refunds, please see our Returns Center.' },
    { heading: 'PRODUCT DESCRIPTIONS', body: 'Amazon attempts to be as accurate as possible. However, Amazon does not warrant that product descriptions or other content of any Amazon Service is accurate, complete, reliable, current, or error-free. If a product offered by Amazon itself is not as described, your sole remedy is to return it in unused condition.' },
    { heading: 'PRICING', body: 'With respect to items sold by Amazon, we cannot confirm the price of an item until you order. Despite our best efforts, a small number of the items in our catalog may be mispriced. If the correct price of an item sold by Amazon is higher than our stated price, we will, at our discretion, either contact you for instructions before shipping or cancel your order and notify you of such cancellation. Other merchants may follow different policies in the event of a mispriced item.' },
    { heading: 'SANCTIONS AND EXPORT POLICY', body: 'You may not use any Amazon Service if you are the subject of U.S. sanctions or of sanctions consistent with U.S. law imposed by the governments of the country where you are using Amazon Services. You must comply with all U.S. or other export and re-export restrictions that may apply to goods, software, technology, and services.' },
    { heading: 'DISPUTES', body: 'Any dispute or claim relating in any way to your use of any Amazon Service will be adjudicated in the state or federal courts in King County, Washington, and you consent to exclusive jurisdiction and venue in these courts. We each waive any right to a jury trial.' },
  ];

  const renderMainContent = () => {
    const q = searchQuery.toLowerCase().trim();
    switch (activeTab) {
      case 'terms':
        return (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[#0066c0] hover:underline cursor-pointer">Security and Privacy</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
              <span className="text-[#0066c0] hover:underline cursor-pointer">Legal Policies</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight pt-2">
              Terms & Condition
            </h1>
            <p className="text-xs font-bold text-gray-600 mt-1">Last updated: January 15, 2026</p>
            <div className="border-b border-gray-200 my-4"></div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Welcome to our Terms and Conditions page. These rules outline the regulations and agreements necessary to utilize our digital publishing and brand strategy platforms cleanly.
            </p>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4">
            {/* <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[#0066c0] hover:underline cursor-pointer">Security and Privacy</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
              <span className="text-[#0066c0] hover:underline cursor-pointer">Legal Policies</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
            </div> */}
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight pt-2">
              Privacy Notice
            </h1>
            <p className="text-xs font-bold text-gray-600 mt-1">Last updated: March 10, 2026</p>
            <div className="border-b border-gray-200 my-4"></div>
            <p className="text-sm text-gray-800 leading-relaxed">
              We take your privacy seriously. This document describes how your personal metrics, account information, and project files are safely processed, protected, and monitored.
            </p>
          </div>
        );
      case 'conditions':
        return (
          <div className="space-y-5 text-sm text-gray-800 leading-relaxed">
            {/* Breadcrumbs */}
            <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[#0066c0] hover:underline cursor-pointer">Security and Privacy</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
              <span className="text-[#0066c0] hover:underline cursor-pointer">Legal Policies</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight pt-2">
              Conditions of Use
            </h1>
            <p className="text-xs font-bold text-gray-600 -mt-2">Last updated: May 30, 2025</p>
            <div className="border-b border-gray-200 my-2"></div>
            
            {/* Core intro block */}
            <p>
              Welcome to Amazon.com. Amazon.com Services LLC and/or its affiliates (&quot;Amazon&quot;) provide website features and other products and services to you when you visit or shop at Amazon.com, use Amazon products or services, use Amazon applications for mobile, or use software provided by Amazon in connection with any of the foregoing (collectively, &quot;Amazon Services&quot;). By using the Amazon Services, you agree, on behalf of yourself and all members of your household and others who use any Amazon Service under your account, to the following conditions.
            </p>

            <h3 className="text-lg font-bold text-black pt-2">Please read these conditions carefully.</h3>
            <p>
              We offer a wide range of Amazon Services, and sometimes additional terms may apply. When you use an Amazon Service (for example, Your Profile, Gift Cards, Amazon Video, Your Media Library, Devices, or Amazon applications) you also will be subject to the guidelines, terms and agreements applicable to that Amazon Service (&quot;Service Terms&quot;). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.
            </p>

            {(() => {
              const filtered = q
                ? conditionsSections.filter(s =>
                    s.heading.toLowerCase().includes(q) || s.body.toLowerCase().includes(q)
                  )
                : conditionsSections;
              if (filtered.length === 0) return (
                <p className="text-sm text-gray-500">No results found for &quot;{searchQuery}&quot;.</p>
              );
              return filtered.map((s, i) => (
                <div key={i}>
                  <h2 className="text-base font-bold text-black pt-4 uppercase tracking-tight">{s.heading}</h2>
                  <p>{s.body}</p>
                </div>
              ));
            })()}
          </div>
        );
      case 'help':
        return (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-gray-800 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[#0066c0] hover:underline cursor-pointer">Help & Support</span>
              <span className="text-gray-400 text-[10px]">&#10095;</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight pt-2">
              Help Center & Customer Service
            </h1>
            <div className="border-b border-gray-200 my-4"></div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Need assistance with your account setup, order tracking, or formatting inquiries? Find real-time solutions or initiate an instant live chat with our engineering support desks.
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <SiteHeader />
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-8xl mx-auto mb-4">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Help & Customer Service
        </h2>
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 bg-[#f3f3f3] border border-gray-200 rounded-lg p-5 w-full h-full">
          <h2 className="text-xl font-bold text-black mb-4">
            Help Topics
          </h2>
          <div className="border-b border-gray-300/60 mb-4"></div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-black">Help</h3>
            <ul className="space-y-2.5 pt-1">
              {sidebarLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (link.href) {
                        router.push(link.href);
                      } else {
                        setActiveTab(link.id as TabKey);
                      }
                    }}
                    className={`text-sm block w-full text-left transition-colors focus:outline-none ${
                      activeTab === link.id && !link.href
                        ? 'text-black font-bold'
                        : 'text-[#0066c0] hover:text-[#c45500] hover:underline'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="lg:col-span-9 space-y-6 w-full">
          <div className="w-full flex flex-col space-y-2">
            <label className="text-sm font-bold text-black">Find more solutions</label>
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
          </div>

          <div className="w-full bg-white pt-2">
            {renderMainContent()}
          </div>
        </main>

      </div>
    </div>
      <SiteFooter />
    </>
  );
}

export default function LegalCenter() {
  return (
    <Suspense>
      <LegalCenterInner />
    </Suspense>
  );
}