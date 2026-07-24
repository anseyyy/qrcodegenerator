export default function SectionTitle({
  label,
  titleMain,
  titleHighlight,
  subtitle,
  className = "",
  dark = false,
}) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <span className="text-sm font-semibold tracking-wide uppercase text-primary-green select-none">
          {label}
        </span>
      )}
      <h2 className={`mt-2 font-bold tracking-tight display-large ${dark ? "text-text-footer" : "text-text-heading"}`}>
        {titleMain}{" "}
        <span className="text-primary-green">{titleHighlight}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 mx-auto max-w-xl body-base font-normal ${dark ? "text-text-footer-secondary" : "text-text-body"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
