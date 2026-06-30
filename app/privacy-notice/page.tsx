"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SiteHeader from '@/components/sections/SiteHeader';
import SiteFooter from '@/components/sections/SiteFooter';

export default function PrivacyNoticePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const sidebarCategories = [
    {
      title: 'Help',
      items: [
        { label: 'Terms and Conditions', href: '/terms' },
        { label: 'Privacy Notice', href: '/privacy-notice' },
        { label: 'Conditions of Use', href: '/Condition-of-use?tab=conditions' },
        { label: 'Help', href: '/help' },
      ]
    },
  ];

  // Tailored privacy sections based on your platform's publishing & account theme
  const privacySections = [
    {
      tag: 'COLLECTION',
      title: 'Information We Collect About Your Account',
      desc: 'We collect personal identification data such as your name, email address, publishing preferences, and banking details to successfully process your digital assets and royalties safely.'
    },
    {
      tag: 'SECURITY',
      title: 'How We Protect Your Sensitive Assets',
      desc: 'All manuscripts, banking logs, and account passwords are encrypted using multi-layer industry standards. We strictly safeguard your backend system from unauthorized data mining or automated scrapers.'
    },
    {
      tag: 'SHARING',
      title: 'Third-Party Data and Distribution Policies',
      desc: 'Your personal or financial metrics are never sold to external marketing agencies. Data is shared exclusively with integrated payment gateways and printing networks strictly required to manufacture or deliver your catalog products.'
    },
    {
      tag: 'COOKIES',
      title: 'Cookies and Tracking Diagnostics',
      desc: 'We utilize automated diagnostic identifiers to remember your desktop layout preferences, active session states, and dashboard search configurations to provide a faster publishing interface.'
    },
    {
      tag: 'RIGHTS',
      title: 'Your Data Controls and Deletion Privileges',
      desc: 'Authors retain complete governance over their account telemetry. You can modify your stored profile preferences, update multi-factor authentication methods, or completely remove your records directly through your dashboard settings.'
    }
  ];

  const coreHighlights = [
    { title: 'Zero Third-Party Advertising', desc: 'Your creative workspace stays clean. We do not run external tracking scripts for commercial dynamic ad bidding.' },
    { title: 'Automated Compliance Logging', desc: 'All fiscal logs and royalty processing comply with global international tax tracking systems automatically.' },
    { title: 'Secure Multi-Factor Shield', desc: 'Every payout destination update prompts mandatory secure confirmation layers to completely eliminate active account takeovers.' },
    { title: 'Age Restrictions', desc: 'Our platform services are exclusively optimized for authors who are at least 18 years old or operating under parent supervision.' }
  ];

  const q = searchQuery.toLowerCase().trim();
  const filteredSections = q
    ? privacySections.filter(s => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q))
    : privacySections;
  const filteredHighlights = q
    ? coreHighlights.filter(h => h.title.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q))
    : coreHighlights;

  return (
    <>
      <SiteHeader />
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans antialiased">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT SIDEBAR PANEL */}
        <aside className="lg:col-span-3 bg-[#f6f6f6] border border-gray-200 rounded-lg p-5 w-full h-full">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Help Topics
          </h2>
          <div className="space-y-5">
            {sidebarCategories.map((category, idx) => (
              <div key={idx} className="space-y-1.5">
                <h3 className="text-sm font-bold text-gray-900">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => router.push(item.href)}
                        className="text-xs text-left w-full block py-0.5 focus:outline-none transition-colors text-[#0066c0] hover:text-[#c45500] hover:underline"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT MAIN WORKSPACE */}
        <main className="lg:col-span-9 space-y-5 w-full">
          
          {/* TOP SEARCH BAR BACKGROUND PANEL */}
          <div className="w-full bg-[#f3f3f3] p-3 rounded-md flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full relative flex items-center bg-white border border-gray-400 rounded focus-within:ring-1 focus-within:ring-[#e77600] focus-within:border-[#e77600]">
              <span className="pl-3 pr-1 text-gray-400 text-sm">🔍</span>
              <input 
                type="text"
                placeholder="Topic or Keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-1.5 px-1 bg-transparent text-gray-900 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#333333] hover:bg-black text-white text-xs font-bold px-6 py-2 rounded-full whitespace-nowrap shadow-sm transition-colors focus:outline-none">
              Search Help
            </button>
          </div>

          {/* BREADCRUMBS */}
          <div className="text-xs text-gray-600 flex items-center gap-1 px-1">
            <span>Help</span>
            <span className="text-gray-400 text-[10px]">➔</span>
            <span>Legal & Privacy</span>
            <span className="text-gray-400 text-[10px]">➔</span>
            <span className="font-medium text-gray-800">Privacy Notice</span>
          </div>

          {/* MAIN PAGE BANNER */}
          <div className="pt-2 px-1">
            <h1 className="text-2xl font-bold text-[#e77600] tracking-tight">
              Privacy Notice
            </h1>
            <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
              Your security and asset integrity are critical to our publishing ecosystem. This comprehensive notice details how we process, protect, and log your personal data fields cleanly.
            </p>
          </div>

          <div className="border-b border-gray-200"></div>

          {/* COMPREHENSIVE PRIVACY POLICY LIST */}
          <div className="space-y-5 px-1">
            {filteredSections.length === 0 && filteredHighlights.length === 0 && (
              <p className="text-sm text-gray-500">No results found for &quot;{searchQuery}&quot;.</p>
            )}
            {filteredSections.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-start text-xs sm:text-sm">
                <div className="col-span-3 sm:col-span-2 text-right font-bold tracking-wider text-[#e77600] pr-3 uppercase">
                  {item.tag}
                </div>
                <div className="col-span-9 sm:col-span-10 space-y-0.5">
                  <h3 className="font-bold text-gray-950 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-b border-gray-200"></div>

          {/* CORE COMPLIANCE HIGHLIGHT CARDS FLOW */}
          <div className="space-y-4 px-1">
            <div>
              <h2 className="text-base font-bold text-gray-950">Security Infrastructure</h2>
              <p className="text-xs text-gray-600">Quick key blocks explaining our continuous protection metrics:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHighlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-950 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHighlights.slice(2, 4).map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-950 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-200"></div>

          {/* INQUIRIES SECTION */}
          <div className="space-y-3 px-1 pb-8">
            <h2 className="text-base font-bold text-gray-950">Data Security Inquiries</h2>
            <div className="flex items-start space-x-2.5 text-xs sm:text-sm">
              <span className="text-gray-400 mt-1 text-[10px]">▪</span>
              <div>
                <h4 className="font-bold text-gray-950">Contacting Our Privacy Compliance Officer</h4>
                <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                  If you have outstanding diagnostic questions regarding your manuscript security, data retention timelines, or global operational processing, you can file an official document request via the primary help portal channels.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
      <SiteFooter />
    </>
  );
}