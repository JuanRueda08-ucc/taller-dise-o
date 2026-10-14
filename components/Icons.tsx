type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PizzaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="13" strokeDasharray="2 3" />
      <path d="M24 7v34M7 24h34M12 12l24 24M36 12 12 36" strokeWidth="1.6" />
      <circle cx="18" cy="16" r="1.6" fill="currentColor" />
      <circle cx="30" cy="20" r="1.6" fill="currentColor" />
      <circle cx="20" cy="31" r="1.6" fill="currentColor" />
      <circle cx="31" cy="30" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function OvenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="7" y="10" width="34" height="26" rx="2" />
      <rect x="12" y="17" width="16" height="13" rx="1" />
      <path d="M33 17h4M33 22h4M33 27h4M10 40h28" />
      <path d="M16 23h8" />
    </svg>
  );
}

export function DeliveryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="15" y="9" width="17" height="19" rx="2" />
      <path d="M19 15h9M19 20h9" />
      <path d="M8 34h32M11 34v-6h26v6" />
      <circle cx="14" cy="38" r="3" />
      <circle cx="34" cy="38" r="3" />
      <path d="M38 22h3l1 5" />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d="M19 8c0 3 2 5 5 5s5-2 5-5" />
      <path d="M17 13h14l5 8c3 5 2 19-12 19S9 26 12 21z" />
      <path d="M24 20v14M20 24h6a3 3 0 0 1 0 6h-6" />
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="13" y="8" width="22" height="26" rx="2" />
      <path d="M13 16h22M18 22h12M18 27h8" />
      <path d="M10 34h28M14 34v6M34 34v6" />
    </svg>
  );
}

export function ChefIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <circle cx="24" cy="19" r="9" />
      <circle cx="24" cy="19" r="4" />
      <path d="M17 10c-2-3 0-6 3-6 1-2 7-2 8 0 3 0 5 3 3 6" />
      <path d="M16 40c0-6 3-10 8-10s8 4 8 10M14 40h20" />
    </svg>
  );
}

export function PizzaBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="24" fill="#e8802e" />
      <circle cx="24" cy="24" r="15" stroke="#fff3e6" strokeWidth="2" />
      <path
        d="M24 9v30M9 24h30M13.4 13.4l21.2 21.2M34.6 13.4 13.4 34.6"
        stroke="#fff3e6"
        strokeWidth="1.6"
      />
      <circle cx="19" cy="17" r="1.8" fill="#fff3e6" />
      <circle cx="30" cy="19" r="1.8" fill="#fff3e6" />
      <circle cx="18" cy="29" r="1.8" fill="#fff3e6" />
      <circle cx="29" cy="31" r="1.8" fill="#fff3e6" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6.5 19c.4-3.6 2.6-5.6 5.5-5.6s5.1 2 5.5 5.6z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23 4.6a9 9 0 0 1-2.6.7 4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1A4.5 4.5 0 0 0 11.8 8 12.8 12.8 0 0 1 2.5 3.3a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6 4.5 4.5 0 0 0 3.6 4.5 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.3 12.8 12.8 0 0 0 7.9 20.3c8.3 0 12.8-6.9 12.8-12.8v-.6A9 9 0 0 0 23 4.6z" />
    </svg>
  );
}
