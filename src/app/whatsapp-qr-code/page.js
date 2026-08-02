import CategoryLayout from "@/components/home/CategoryLayout";
import { getCategoryData } from "@/data/categoriesData";

export async function generateMetadata() {
  const data = getCategoryData("whatsapp-qr-code");
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.qrcodey.in/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.qrcodey.in/${data.slug}`,
      siteName: "QrCodey",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    }
  };
}

export default function Page() {
  const data = getCategoryData("whatsapp-qr-code");
  return (
    <CategoryLayout
      qrType={data.qrType}
      breadcrumbs={[{ name: data.name, href: `/${data.slug}` }]}
      seoTitle={data.seoTitle}
      seoSubheading={data.seoSubheading}
      seoCopyTitle={data.seoCopyTitle}
      seoCopyText={data.seoCopyText}
      seoCopyBulletTitle={data.seoCopyBulletTitle}
      seoCopyBullets={data.seoCopyBullets}
      faqList={data.faqList}
    />
  );
}
