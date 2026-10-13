import { siteUrl } from "@/lib/site-url";

const organizationId = new URL("/#organization", siteUrl).toString();
const websiteId = new URL("/#website", siteUrl).toString();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Vela",
      url: siteUrl.toString(),
      description:
        "Vela builds AI chatbots that answer customers, book meetings, and hand off complex conversations to a support team.",
      email: "hello@vela.ai",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@vela.ai",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl.toString(),
      name: "Vela AI Chatbot",
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
};

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
