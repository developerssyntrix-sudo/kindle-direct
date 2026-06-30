"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SiteHeader from '@/components/sections/SiteHeader';
import SiteFooter from '@/components/sections/SiteFooter';

export default function KDPHelpCenterComplete() {
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

  // Cleaned main content data from image_92adff.png & image_92c919.png
  const alerts = [
    {
      tag: 'NEW',
      title: 'Groundwood paper is now available',
      desc: 'A lower-carbon print option for your paperback novels and text-heavy books is now available to all KDPH authors.'
    },
    {
      tag: 'NEW',
      title: 'Download your KDPH book files from Bookshelf',
      desc: 'You can now download your KDPH eBook and print book manuscript and cover files directly from your KDPH Bookshelf.'
    },
    {
      tag: 'SUBSCRIBE',
      title: 'Stay connected with KDPH updates and announcements',
      desc: 'To receive KDPH announcements, beta program invites, publishing insights, and more, make sure you\'re subscribed to KDPH\'s news and product announcement emails. To do so, access the email preferences update page, then click "Continue" to confirm your subscription.'
    },
    {
      tag: 'ALERT',
      title: 'Account security and avoiding scams',
      desc: 'Avoid Publisher Scams. KDPH will never ask you to share sensitive information such as your Amazon password or full banking details outside your KDPH account. KDPH is a free service and not affiliated with third-party companies.'
    },
    {
      tag: 'NEW',
      title: 'Identity verification is rolling out to authors',
      desc: 'We\'re committed to protecting those who publish with us and those who buy books on Amazon. As part of this effort, we are beginning to ask authors and publishers to verify their identity on KDPH.'
    },
    {
      tag: 'CONNECT',
      title: 'KDPH is on Instagram',
      desc: 'Follow KDPH on Instagram at @AmazonKDP for helpful and inspirational content as well as highlights of KDPH authors and titles.'
    }
  ];

  const popularTopics = [
    { title: 'Book Series', desc: 'Build a series on Amazon and edit the details as much as you want.' },
    { title: 'Order Author Copies', desc: 'Get copies of your books and see how they look in real life.' },
    { title: 'Payment Questions', desc: 'Set up your payment method and troubleshoot any issues.' },
    { title: 'Change Categories', desc: 'Optimize where your book is displayed on Amazon\'s store.' },
    { title: 'Update Book Details', desc: 'Learn how to update your book\'s metadata.' },
    { title: 'Link Your Paperback & eBook', desc: 'Have your paperback and eBook available on the same Amazon detail page.' },
  ];

  const q = searchQuery.toLowerCase().trim();
  const filteredAlerts = q
    ? alerts.filter(a => a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q))
    : alerts;
  const filteredTopics = q
    ? popularTopics.filter(t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q))
    : popularTopics;

  return (
    <>
      <SiteHeader />
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans antialiased">
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
          
          {/* SEARCH BOX CONTAINER WRAPPER (Exact match to image_92c919.png) */}
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
            <span className="font-medium text-gray-800">KDPH Help Center Home</span>
          </div>

          {/* HEADER MAIN SUB-BANNER */}
          <div className="pt-2 px-1">
            <h1 className="text-2xl font-bold text-[#e77600] tracking-tight">
              KDPH Help Center Home
            </h1>
            <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
              Find help where you need it. You can use the search bar above or navigate through topics, using the menu on the left.
            </p>
          </div>

          <div className="border-b border-gray-200"></div>

          {/* CONTENT BULLETINS / ALERTS LIST */}
          <div className="space-y-5 px-1">
            {filteredAlerts.length === 0 && filteredTopics.length === 0 && (
              <p className="text-sm text-gray-500">No results found for &quot;{searchQuery}&quot;.</p>
            )}
            {filteredAlerts.map((item, index) => (
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

          {/* GET STARTED / "ARE YOU NEW?" CARDS FLOW */}
          <div className="space-y-4 px-1">
            <div>
              <h2 className="text-base font-bold text-gray-950">Are you new?</h2>
              <p className="text-xs text-gray-600">Here are a few steps to get you started:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
              <div className="md:col-span-3 bg-white p-4 rounded border border-gray-200 shadow-sm h-full">
                <h3 className="font-bold text-gray-950 text-sm mb-1">What is KDPH?</h3>
                <p className="text-xs text-gray-600 leading-normal">
                  Discover if KDPH is the right publishing service for your book.
                </p>
              </div>

              <div className="hidden md:flex md:col-span-1 justify-center text-gray-400 text-xl font-light">
                ➔
              </div>

              <div className="md:col-span-3 bg-white p-4 rounded border border-gray-200 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-950 text-sm mb-1">Format Your Book</h3>
                  <p className="text-xs text-gray-600 leading-normal">
                    Get your cover and manuscript ready for publication.
                  </p>
                </div>
                <div className="text-[11px] text-gray-500 mt-3 font-semibold space-x-2">
                  <span>Paperback</span>
                  <span>|</span>
                  <span>eBook</span>
                </div>
              </div>

              <div className="hidden md:flex md:col-span-1 justify-center text-gray-400 text-xl font-light">
                ➔
              </div>

              <div className="md:col-span-3 bg-white p-4 rounded border border-gray-200 shadow-sm h-full">
                <h3 className="font-bold text-gray-950 text-sm mb-1">Create a Book on KDPH</h3>
                <p className="text-xs text-gray-600 leading-normal">
                  Use our walk-through guide for creating your first book.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200"></div>

          {/* POPULAR TOPICS */}
          <div className="space-y-4 px-1 pb-8">
            <h2 className="text-base font-bold text-gray-950">Popular topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {filteredTopics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                  <span className="text-gray-400 mt-1 text-[10px]">▪</span>
                  <div>
                    <h4 className="font-bold text-gray-950">
                      {topic.title}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
      <SiteFooter />
    </>
  );
}