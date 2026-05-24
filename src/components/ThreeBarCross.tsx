type Props = {
  size?: number;
  withInscriptions?: boolean;
  className?: string;
};

let gradId = 0;

export default function ThreeBarCross({ size = 120, withInscriptions = true, className }: Props) {
  const id = `cross-grad-${++gradId}`;
  const height = (size * 180) / 120;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 120 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Three-bar Orthodox cross"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8c460" />
          <stop offset="50%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#8a6a23" />
        </linearGradient>
      </defs>
      <rect x="54" y="6" width="12" height="170" fill={`url(#${id})`} stroke="#6b1e1e" strokeWidth="1.2" />
      <rect x="38" y="22" width="44" height="8" fill={`url(#${id})`} stroke="#6b1e1e" strokeWidth="1.2" />
      <rect x="14" y="56" width="92" height="14" fill={`url(#${id})`} stroke="#6b1e1e" strokeWidth="1.2" />
      <polygon
        points="22,118 98,108 98,122 22,132"
        fill={`url(#${id})`}
        stroke="#6b1e1e"
        strokeWidth="1.2"
      />
      {withInscriptions && (
        <g fontFamily="serif" fontSize="9" fill="#6b1e1e" fontWeight="bold">
          <text x="30" y="50">IC</text>
          <text x="78" y="50">XC</text>
          <text x="28" y="92">NI</text>
          <text x="80" y="92">KA</text>
        </g>
      )}
    </svg>
  );
}
