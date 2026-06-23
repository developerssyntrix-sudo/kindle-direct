"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#1a1a2e] border-t border-[#f5a623]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#f5a623]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-white text-sm font-medium mb-0.5">We use cookies &amp; session recording</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              This site uses{" "}
              <span className="text-[#f5a623] font-medium">Microsoft Clarity</span> to record
              screen sessions and analyze how visitors interact with our pages. This helps us
              improve your experience. By clicking &quot;Accept&quot;, you consent to our use of
              session tracking and analytics cookies. You can decline if you prefer not to be tracked.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-400 border border-gray-600 rounded-md hover:border-gray-400 hover:text-white transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2 text-sm font-semibold bg-[#f5a623] text-[#1a1a2e] rounded-md hover:bg-[#e09515] transition-colors duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
