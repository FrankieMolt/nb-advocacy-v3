interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  author?: string;
}

export function ArticleSchema({ title, description, datePublished, dateModified, image, url, author = "Reform NB Investigative Team" }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": image,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": { "@type": "Organization", "name": author },
    "publisher": {
      "@type": "Organization",
      "name": "Reform NB",
      "logo": { "@type": "ImageObject", "url": "https://nbreform.ca/icon-512.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reform NB",
    "url": "https://nbreform.ca",
    "logo": "https://nbreform.ca/icon-512.png",
    "description": "Decentralized investigative journalism covering New Brunswick governance failure",
    "sameAs": []
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Reform NB",
    "url": "https://nbreform.ca",
    "description": "New Brunswick's Investigative Hub — Healthcare, Housing, Oligarchy, Environment",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nbreform.ca/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
