import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/data/blogData";

export const metadata = {
  title: "QrCodey Blog | Custom QR Code Marketing & Design Guides",
  description: "Explore the latest insights on QR code marketing strategies, vCard design principles, wireless local networking security, and REST API integration tutorials.",
  alternates: {
    canonical: "https://www.qrcodey.in/blog",
  },
  openGraph: {
    title: "QrCodey Blog | Custom QR Code Marketing & Design Guides",
    description: "Explore the latest insights on QR code marketing strategies, vCard design principles, wireless local networking security, and REST API integration tutorials.",
    url: "https://www.qrcodey.in/blog",
    siteName: "QrCodey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QrCodey Blog | Custom QR Code Marketing & Design Guides",
    description: "Explore the latest insights on QR code marketing strategies, vCard design principles, wireless local networking security, and REST API integration tutorials.",
  }
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.qrcodey.in/blog/${post.slug}`
    }))
  };

  return (
    <main className="relative flex-1 flex flex-col justify-start bg-transparent transition-colors duration-300 overflow-hidden pb-24">
      <JsonLd schema={blogListSchema} />

      <Image
        src="/images/homebgmobile.png"
        alt="Home background mobile"
        fill
        className="absolute inset-0 -z-10 object-cover sm:hidden"
        priority
      />
      <Image
        src="/images/homebg.png"
        alt="Home background"
        fill
        className="hidden sm:block absolute inset-0 -z-10 object-cover"
        priority
      />

      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />

      <section className="relative w-full max-w-5xl mx-auto px-6 pt-12 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary-green/20 text-primary-dark text-[10px] font-bold uppercase tracking-wider mb-3 w-fit select-none">
          📰 Knowledge Hub
        </span>
        <h1 className="display-large text-text-heading leading-tight tracking-[-1%]">
          The QrCodey <span className="text-primary-green">Blog</span>
        </h1>
        <p className="mt-4 body-base text-text-body max-w-md font-normal">
          Expert guides, design strategies, and developer integration tutorials for modern scannable technologies.
        </p>
      </section>

      {/* Grid List */}
      <section className="relative w-full max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 hover:border-primary-green/30 hover:bg-white/80 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary-light text-primary-dark text-[9px] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <h3 className="text-sm font-bold text-text-heading leading-snug group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-[11px] text-text-body leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border-light/50 pt-4 mt-6">
                <span className="text-[9px] font-semibold text-text-muted uppercase">
                  By {post.author}
                </span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-green group-hover:gap-1.5 transition-all"
                >
                  Read Post ➔
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
