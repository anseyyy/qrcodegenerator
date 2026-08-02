import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { getPostBySlug } from "@/data/blogData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | QrCodey Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.qrcodey.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.qrcodey.in/blog/${post.slug}`,
      siteName: "QrCodey",
      locale: "en_US",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Generate Table of Contents automatically from h2 tags
  const h2Matches = post.content.match(/<h2>(.*?)<\/h2>/g) || [];
  const toc = h2Matches.map((h2) => {
    const text = h2.replace(/<\/?h2>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return { text, id };
  });

  // Inject IDs into the heading tags in the content
  let contentWithIds = post.content;
  toc.forEach((item) => {
    const target = `<h2>${item.text}</h2>`;
    const replacement = `<h2 id="${item.id}" class="text-sm font-bold text-text-heading mt-8 mb-4 uppercase tracking-wider">${item.text}</h2>`;
    contentWithIds = contentWithIds.replace(target, replacement);
  });

  // Inject dynamic class stylings into lists and bullets
  contentWithIds = contentWithIds.replace(/<ul>/g, '<ul class="list-disc pl-5 flex flex-col gap-2.5 my-4 text-[11px] leading-relaxed text-text-body">');
  contentWithIds = contentWithIds.replace(/<ol>/g, '<ol class="list-decimal pl-5 flex flex-col gap-2.5 my-4 text-[11px] leading-relaxed text-text-body">');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://linkedin.com/in/ahamedansil"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QrCodey",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.qrcodey.in/android-chrome-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.qrcodey.in/blog/${post.slug}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="relative flex-1 flex flex-col justify-start bg-transparent transition-colors duration-300 overflow-hidden pb-24">
      <JsonLd schema={articleSchema} />
      <JsonLd schema={faqSchema} />

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

      <Breadcrumb
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="relative w-full max-w-5xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-6 bg-white/70 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-12 shadow-md">
            
            {/* Meta Header details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-primary-light text-primary-dark text-[9px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wide">
                  {post.readTime}
                </span>
              </div>
              <h1 className="heading-1 text-text-heading font-semibold leading-tight mt-1">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[10px] text-text-muted font-bold uppercase tracking-wide border-y border-border-light/50 py-3 mt-2">
                <span>By {post.author}</span>
                <span>•</span>
                <span>Published: {post.date}</span>
              </div>
            </div>

            {/* Content Body */}
            <div 
              className="text-xs leading-relaxed text-text-body font-medium"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* Injected Blog FAQ Accordions */}
            <div className="border-t border-border-light/50 pt-8 mt-8 flex flex-col gap-6">
              <h3 className="text-sm font-bold text-text-heading uppercase tracking-wide">
                Article Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-3">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="border border-border-light rounded-xl overflow-hidden bg-white/35">
                    <div className="flex items-center justify-between w-full p-4 font-bold text-xs text-text-heading bg-white/20 select-none">
                      {faq.q}
                    </div>
                    <div className="p-4 text-[11px] leading-relaxed text-text-body font-medium bg-white/10 border-t border-border-light/50">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <div className="border-t border-border-light/50 pt-6 mt-6 flex items-center justify-between">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-green hover:-translate-x-0.5 transition-transform"
              >
                ➔ Back to Blog Feed
              </Link>
            </div>

          </div>

          {/* Sidebar Area: Table of Contents & Info */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="p-6 rounded-card bg-white/50 backdrop-blur-xl border border-white/20 shadow-sm flex flex-col gap-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Table of Contents
                </h4>
                <nav className="flex flex-col gap-2.5">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-[11px] font-bold text-text-body hover:text-primary-green transition-colors leading-normal"
                    >
                      • {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Profile Bio Card */}
            <div className="p-6 rounded-card bg-white/50 backdrop-blur-xl border border-white/20 shadow-sm flex flex-col gap-4 items-center text-center">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted self-start">
                About the Author
              </h4>
              <div className="w-16 h-16 rounded-full bg-zinc-200 border border-white/30 overflow-hidden relative mb-2 flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/101297598?v=4"
                  className="w-full h-full object-cover"
                  alt="Ahamed Ansil Profile"
                />
              </div>
              <div>
                <h5 className="text-xs font-bold text-text-heading">{post.author}</h5>
                <p className="text-[9px] font-semibold text-text-muted uppercase mt-0.5">
                  Lead Next.js Architect
                </p>
              </div>
              <p className="text-[10px] leading-relaxed text-text-body">
                Ansil is a web performance engineer and developer working on high-contrast user experiences, static canvas generators, and localized web utilities.
              </p>
            </div>

          </aside>

        </div>
      </article>
    </main>
  );
}
