interface SproteLogoProps {
  className?: string;
}

export function SproteLogo({ className = '' }: SproteLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <img
        src="/assets/aistudio/logosprotelab_transparent.png"
        alt=""
        aria-hidden="true"
        className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_0_10px_rgba(164,198,57,0.28)] shrink-0"
      />
      <span className="font-display text-xs sm:text-base font-bold tracking-normal text-white">
        SPROTE LAB
      </span>
    </span>
  );
}
