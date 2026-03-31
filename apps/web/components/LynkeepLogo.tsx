export default function LynkeepLogo({ height }: { height: number }) {
  return (
    <span className="flex items-center gap-2">
      <svg
        height={height}
        viewBox="0 0 520 120"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-foreground"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 100%, 55%)" />
            <stop offset="100%" stopColor="hsl(200, 90%, 48%)" />
          </linearGradient>
        </defs>
        {/* Icon — glass bookmark */}
        <rect
          x="8"
          y="10"
          width="80"
          height="100"
          rx="14"
          fill="url(#logoGrad)"
          opacity="0.12"
        />
        <rect
          x="14"
          y="16"
          width="68"
          height="88"
          rx="10"
          fill="url(#logoGrad)"
          opacity="0.85"
        />
        <path d="M30 28h36v62l-18-12-18 12V28z" fill="white" opacity="0.95" />
        <rect
          x="30"
          y="28"
          width="16"
          height="62"
          rx="2"
          fill="white"
          opacity="0.2"
        />
        {/* Text */}
        <text
          x="108"
          y="82"
          fontFamily="Inter, -apple-system, system-ui, sans-serif"
          fontWeight="700"
          fontSize="62"
          letterSpacing="-2"
        >
          <tspan fill="currentColor">Lyn</tspan>
          <tspan fill="url(#logoGrad)">keep</tspan>
        </text>
      </svg>
    </span>
  );
}
