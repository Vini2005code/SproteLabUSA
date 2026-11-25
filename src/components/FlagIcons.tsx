interface FlagIconProps {
  className?: string;
}

export function UsFlagIcon({ className = 'h-5 w-7' }: FlagIconProps) {
  return (
    <svg
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`rounded-[3px] shrink-0 ${className}`}
    >
      <rect width="28" height="20" fill="#FFFFFF" />
      <rect y="0" width="28" height="1.54" fill="#B22234" />
      <rect y="3.08" width="28" height="1.54" fill="#B22234" />
      <rect y="6.15" width="28" height="1.54" fill="#B22234" />
      <rect y="9.23" width="28" height="1.54" fill="#B22234" />
      <rect y="12.31" width="28" height="1.54" fill="#B22234" />
      <rect y="15.38" width="28" height="1.54" fill="#B22234" />
      <rect y="18.46" width="28" height="1.54" fill="#B22234" />
      <rect width="12.6" height="10.77" fill="#3C3B6E" />
      <circle cx="2.5" cy="2.2" r="0.6" fill="#FFFFFF" />
      <circle cx="5.2" cy="2.2" r="0.6" fill="#FFFFFF" />
      <circle cx="7.9" cy="2.2" r="0.6" fill="#FFFFFF" />
      <circle cx="10.5" cy="2.2" r="0.6" fill="#FFFFFF" />
      <circle cx="3.8" cy="4.3" r="0.6" fill="#FFFFFF" />
      <circle cx="6.5" cy="4.3" r="0.6" fill="#FFFFFF" />
      <circle cx="9.2" cy="4.3" r="0.6" fill="#FFFFFF" />
      <circle cx="2.5" cy="6.4" r="0.6" fill="#FFFFFF" />
      <circle cx="5.2" cy="6.4" r="0.6" fill="#FFFFFF" />
      <circle cx="7.9" cy="6.4" r="0.6" fill="#FFFFFF" />
      <circle cx="10.5" cy="6.4" r="0.6" fill="#FFFFFF" />
      <circle cx="3.8" cy="8.5" r="0.6" fill="#FFFFFF" />
      <circle cx="6.5" cy="8.5" r="0.6" fill="#FFFFFF" />
      <circle cx="9.2" cy="8.5" r="0.6" fill="#FFFFFF" />
    </svg>
  );
}

export function BrFlagIcon({ className = 'h-5 w-7' }: FlagIconProps) {
  return (
    <svg
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`rounded-[3px] shrink-0 ${className}`}
    >
      <rect width="28" height="20" fill="#009C3B" />
      <path d="M14 2.2L25.2 10L14 17.8L2.8 10L14 2.2Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <path
        d="M10.1 9.4C12.3 8.8 15.5 9.3 17.8 10.7"
        stroke="#FFFFFF"
        strokeWidth="0.95"
        strokeLinecap="round"
      />
    </svg>
  );
}
