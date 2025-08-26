export default function TrustedPartnersMarquee() {
  const partners = [
    { name: "GE Healthcare", logo: "🏥" },
    { name: "FDA Approved", logo: "✅" },
    { name: "ISO Certified", logo: "📋" },
    { name: "DICOM Compatible", logo: "💻" },
    { name: "PACS Ready", logo: "🔗" },
    { name: "Clinical Excellence", logo: "⭐" },
    { name: "Authorized Partner", logo: "🤝" },
    { name: "Premium Support", logo: "🛠️" }
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-container-padding">
        <h2 className="text-2xl font-bold text-center mb-8">Our Trusted Partners</h2>
        <div className="overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-12 min-w-[200px]"
              >
                <div className="flex flex-col items-center space-y-2 group">
                  <div className="text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">
                    {partner.logo}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap text-center">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-12 min-w-[200px]"
              >
                <div className="flex flex-col items-center space-y-2 group">
                  <div className="text-3xl mb-1 transition-transform duration-300 group-hover:scale-110">
                    {partner.logo}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap text-center">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}