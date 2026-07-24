import Link from "next/link";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-250 active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none disabled:active:scale-100 disabled:opacity-50 select-none cursor-pointer";
  
  const variants = {
    primary: "h-[56px] px-8 bg-primary-green hover:bg-primary-hover text-zinc-950 rounded-btn shadow-sm hover:scale-[1.02] hover:-translate-y-0.5 disabled:bg-border-light disabled:text-text-muted disabled:hover:scale-100 disabled:hover:translate-y-0",
    secondary: "h-[44px] px-5 bg-zinc-950 hover:bg-zinc-900 text-text-footer border border-primary-green/20 rounded-btn active:scale-95",
    icon: "h-12 w-12 bg-primary-green hover:bg-primary-hover text-zinc-950 rounded-btn shadow-sm hover:scale-[1.02] hover:-translate-y-0.5 disabled:bg-border-light disabled:text-text-muted disabled:hover:scale-100 disabled:hover:translate-y-0",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
}
