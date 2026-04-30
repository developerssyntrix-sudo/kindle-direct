/* Inline SVG decorative components — book/publishing theme */

export function FloatingBooks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Bottom book — orange */}
      <g transform="rotate(-3, 70, 83)">
        <rect x="8" y="72" width="124" height="22" rx="4" fill="#FF9900" />
        <rect x="8" y="72" width="9" height="22" rx="3" fill="#CC7A00" />
        <line x1="24" y1="80" x2="118" y2="80" stroke="white" strokeWidth="1" opacity="0.35" />
        <line x1="24" y1="87" x2="118" y2="87" stroke="white" strokeWidth="1" opacity="0.2" />
      </g>
      {/* Middle book — dark navy */}
      <g transform="rotate(2, 70, 59)">
        <rect x="12" y="48" width="116" height="22" rx="4" fill="#232F3E" />
        <rect x="12" y="48" width="9" height="22" rx="3" fill="#FF9900" />
        <line x1="28" y1="57" x2="114" y2="57" stroke="white" strokeWidth="1" opacity="0.15" />
        <line x1="28" y1="63" x2="114" y2="63" stroke="white" strokeWidth="1" opacity="0.1" />
      </g>
      {/* Top book — light */}
      <g transform="rotate(-1.5, 70, 35)">
        <rect x="16" y="24" width="108" height="22" rx="4" fill="#F7F7F7" stroke="#E0E0E0" strokeWidth="1" />
        <rect x="16" y="24" width="9" height="22" rx="3" fill="#232F3E" />
        <line x1="32" y1="33" x2="110" y2="33" stroke="#C0C0C0" strokeWidth="1.2" />
        <line x1="32" y1="39" x2="110" y2="39" stroke="#C0C0C0" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export function SmallOpenBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M50 8 C50 8 15 12 8 18 L8 62 C15 56 50 52 50 52 Z" fill="white" stroke="#E0E0E0" strokeWidth="1" />
      <path d="M50 8 C50 8 85 12 92 18 L92 62 C85 56 50 52 50 52 Z" fill="#FFFCF5" stroke="#E0E0E0" strokeWidth="1" />
      <path d="M47.5 8 L52.5 8 L52.5 52 L47.5 52 Z" fill="#FF9900" />
      <line x1="16" y1="26" x2="44" y2="24" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="16" y1="32" x2="44" y2="30" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="16" y1="38" x2="44" y2="36" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="16" y1="44" x2="44" y2="42" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="56" y1="24" x2="84" y2="26" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="56" y1="30" x2="84" y2="32" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="56" y1="36" x2="84" y2="38" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="56" y1="42" x2="84" y2="44" stroke="#D0D0D0" strokeWidth="1.2" />
    </svg>
  );
}

export function BookWithSparkles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="140" cy="198" rx="65" ry="7" fill="#232F3E" opacity="0.12" />
      {/* Left page */}
      <path d="M140 55 C140 55 65 62 50 72 L50 178 C65 168 140 161 140 161 Z" fill="white" opacity="0.95" />
      {/* Right page */}
      <path d="M140 55 C140 55 215 62 230 72 L230 178 C215 168 140 161 140 161 Z" fill="white" opacity="0.80" />
      {/* Spine */}
      <path d="M136 55 L144 55 L144 161 L136 161 Z" fill="#232F3E" />
      {/* Left text lines */}
      <line x1="68" y1="92" x2="128" y2="88" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      <line x1="68" y1="102" x2="128" y2="98" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      <line x1="68" y1="112" x2="128" y2="108" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      <line x1="68" y1="122" x2="128" y2="118" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      <line x1="68" y1="132" x2="128" y2="128" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      <line x1="68" y1="142" x2="108" y2="139" stroke="#232F3E" strokeWidth="1.5" opacity="0.12" />
      {/* Right text lines */}
      <line x1="152" y1="88" x2="212" y2="92" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      <line x1="152" y1="98" x2="212" y2="102" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      <line x1="152" y1="108" x2="212" y2="112" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      <line x1="152" y1="118" x2="212" y2="122" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      <line x1="152" y1="128" x2="212" y2="132" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      <line x1="152" y1="139" x2="192" y2="142" stroke="#232F3E" strokeWidth="1.5" opacity="0.08" />
      {/* Bookmark */}
      <path d="M198 55 L206 55 L206 90 L202 84 L198 90 Z" fill="#232F3E" opacity="0.5" />
      {/* Sparkle stars */}
      <path d="M33 42 L36 33 L39 42 L48 45 L39 48 L36 57 L33 48 L24 45 Z" fill="white" opacity="0.75" />
      <path d="M240 28 L242.5 21 L245 28 L252 30.5 L245 33 L242.5 40 L240 33 L233 30.5 Z" fill="white" opacity="0.55" />
      <path d="M250 80 L251.5 76 L253 80 L257 81.5 L253 83 L251.5 87 L250 83 L246 81.5 Z" fill="#232F3E" opacity="0.3" />
      <path d="M24 120 L25 117 L26 120 L29 121 L26 122 L25 125 L24 122 L21 121 Z" fill="white" opacity="0.45" />
      <path d="M258 150 L259.5 146 L261 150 L265 151.5 L261 153 L259.5 157 L258 153 L254 151.5 Z" fill="white" opacity="0.45" />
      {/* Floating dots */}
      <circle cx="22" cy="80" r="3.5" fill="white" opacity="0.35" />
      <circle cx="255" cy="115" r="2.5" fill="white" opacity="0.3" />
      <circle cx="35" cy="170" r="3" fill="#232F3E" opacity="0.18" />
      <circle cx="248" cy="174" r="3.5" fill="white" opacity="0.28" />
    </svg>
  );
}

export function OpenBookOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M160 30 C160 30 55 38 35 52 L35 205 C55 191 160 183 160 183 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M160 30 C160 30 265 38 285 52 L285 205 C265 191 160 183 160 183 Z" stroke="currentColor" strokeWidth="2" />
      <rect x="155" y="30" width="10" height="153" fill="currentColor" opacity="0.5" />
      <line x1="60" y1="80" x2="145" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="95" x2="145" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="110" x2="145" y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="125" x2="145" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="140" x2="145" y2="135" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="155" x2="120" y2="151" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="175" y1="75" x2="260" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="175" y1="90" x2="260" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="175" y1="105" x2="260" y2="110" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="175" y1="120" x2="260" y2="125" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="175" y1="135" x2="260" y2="140" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="175" y1="151" x2="235" y2="155" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M238 30 L246 30 L246 65 L242 59 L238 65 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );
}

export function QuillPen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Feather */}
      <path d="M30 5 C50 8 58 30 52 52 C46 72 38 82 30 110 C22 82 14 72 8 52 C2 30 10 8 30 5 Z" fill="#FF9900" opacity="0.85" />
      {/* Central vein */}
      <line x1="30" y1="10" x2="30" y2="105" stroke="white" strokeWidth="1.2" opacity="0.5" />
      {/* Side veins left */}
      <line x1="30" y1="30" x2="14" y2="42" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="30" y1="44" x2="10" y2="54" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="30" y1="58" x2="12" y2="65" stroke="white" strokeWidth="0.8" opacity="0.3" />
      {/* Side veins right */}
      <line x1="30" y1="30" x2="46" y2="42" stroke="white" strokeWidth="0.8" opacity="0.25" />
      <line x1="30" y1="44" x2="50" y2="54" stroke="white" strokeWidth="0.8" opacity="0.25" />
      <line x1="30" y1="58" x2="48" y2="65" stroke="white" strokeWidth="0.8" opacity="0.25" />
      {/* Nib */}
      <path d="M27 105 L30 118 L33 105 Z" fill="#232F3E" />
      {/* Ink drop */}
      <ellipse cx="30" cy="118" rx="2" ry="1.5" fill="#232F3E" opacity="0.5" />
    </svg>
  );
}
