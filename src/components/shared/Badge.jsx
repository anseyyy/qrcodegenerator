export default function Badge({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-badge bg-primary-light border border-primary-green/20 text-primary-dark text-badge font-medium tracking-wide uppercase shadow-sm select-none ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
      {children}
    </div>
  );
}
