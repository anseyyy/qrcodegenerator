import Link from "next/link";
import JsonLd from "./JsonLd";

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://www.qrcodey.in${item.href}` : `https://www.qrcodey.in`
    }))
  };

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumb" className="w-full max-w-5xl mx-auto px-6 pt-6">
        <ol className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted select-none">
          <li>
            <Link href="/" className="hover:text-primary-green transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <span className="opacity-60 text-zinc-400 font-normal">/</span>
                {isLast ? (
                   <span className="text-primary-green truncate max-w-[150px] sm:max-w-none" aria-current="page">
                     {item.name}
                   </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary-green transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
