export default function TrustedPartnersMarquee() {
  const partners = [
    "GE Healthcare",
    "FDA Approved",
    "ISO Certified", 
    "DICOM Compatible",
    "PACS Ready",
    "Clinical Excellence",
    "Authorized Partner",
    "Premium Support"
  ];

  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center px-8"
            >
              <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                {partner}
              </span>
              {index < partners.length - 1 && (
                <div className="w-px h-4 bg-border ml-8" />
              )}
            </div>
          ))}
          
          {/* Second set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center px-8"
            >
              <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                {partner}
              </span>
              {index < partners.length - 1 && (
                <div className="w-px h-4 bg-border ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}