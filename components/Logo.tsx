type LogoProps = {
  size: number;
  className?: string;
};

/** Sello circular de la marca (negro con anillo blanco). */
export function Logo({ size, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Crust Pizza Co."
    >
      <circle cx="50" cy="50" r="49" fill="#141312" />
      <circle cx="50" cy="50" r="43.5" fill="none" stroke="#f5f4ef" strokeWidth="2.6" />
      <circle cx="50" cy="50" r="38.5" fill="none" stroke="#f5f4ef" strokeWidth="0.8" />
      {[-60, -30, 0, 30, 60].map((deg) => (
        <circle
          key={`t${deg}`}
          cx="50"
          cy="16.5"
          r="1.3"
          fill="#f5f4ef"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {[-40, -20, 0, 20, 40].map((deg) => (
        <circle
          key={`b${deg}`}
          cx="50"
          cy="83.5"
          r="1.3"
          fill="#f5f4ef"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <rect x="20" y="33" width="60" height="1.4" fill="#f5f4ef" />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="#f5f4ef"
        fontFamily="var(--font-roboto-condensed)"
        fontWeight="800"
        fontSize="23"
        letterSpacing="-0.5"
      >
        CRUST
      </text>
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fill="#f5f4ef"
        fontFamily="var(--font-roboto-condensed)"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="1"
      >
        PIZZA CO.
      </text>
      <rect x="22" y="71" width="56" height="1.2" fill="#f5f4ef" />
    </svg>
  );
}
