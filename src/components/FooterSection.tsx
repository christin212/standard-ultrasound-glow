import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onGetQuote: () => void;
}

export default function FooterSection({ onGetQuote }: FooterSectionProps) {
  const quickLinks = [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Support", href: "#support" },
    { label: "Training", href: "#training" },
    { label: "Financing", href: "#financing" },
    { label: "Warranty", href: "#warranty" }
  ];

  const relatedProducts = [
    { name: "GE Vivid iQ", href: "#vivid-iq" },
    { name: "GE Venue Go", href: "#venue-go" },
    { name: "GE Logiq E10", href: "#logiq-e10" },
    { name: "GE Voluson E10", href: "#voluson-e10" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      {/* Related Products Section */}
      <section className="section-container border-b border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Other GE Models</h2>
          <p className="text-lg text-muted-foreground">
            Discover the complete range of GE ultrasound solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {relatedProducts.map((product, index) => (
            <div key={index} className="luxury-card text-center space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-32 bg-gradient-brand rounded-lg opacity-20"></div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-brand rounded-2xl p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to Transform Your Practice?</h3>
            <p className="text-white/90 text-lg">
              Get your personalized quote and start upgrading today
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={onGetQuote}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Your Final Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-container-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              Standard Ultrasound
            </h3>
            <p className="text-muted-foreground">
              Authorized GE Healthcare partner providing cutting-edge ultrasound solutions 
              to healthcare providers nationwide.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>1-800-ULTRASOUND</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@standardultrasound.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Nationwide Service & Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Business Hours & Certifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Monday - Friday: 8:00 AM - 6:00 PM EST</div>
              <div>Saturday: 9:00 AM - 2:00 PM EST</div>
              <div>Sunday: Emergency Support Only</div>
            </div>
            <div className="pt-4">
              <div className="text-sm text-muted-foreground">
                ✓ Authorized GE Partner<br/>
                ✓ ISO 13485 Certified<br/>
                ✓ FDA Registered Facility
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Standard Ultrasound. All rights reserved. GE and associated marks are trademarks of General Electric Company.</p>
        </div>
      </div>
    </footer>
  );
}