import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onGetQuote: () => void;
}

export default function FooterSection({ onGetQuote }: FooterSectionProps) {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-container-padding py-12">
        {/* Final CTA */}
        <div className="text-center bg-gradient-brand rounded-2xl p-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to Transform Your Practice?</h3>
            <p className="text-white/90 text-lg">
              Get your personalized quote and start upgrading today
            </p>
            <Button 
              variant="primary" 
              size="xl"
              onClick={onGetQuote}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Your Final Quote
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="space-y-8">
          {/* Company Info */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              Standard Ultrasound
            </h3>
            <p className="text-muted-foreground">
              Authorized GE Healthcare partner providing cutting-edge ultrasound solutions 
              to healthcare providers nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>1-800-ULTRASOUND</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@standardultrasound.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nationwide Service & Support</span>
              </div>
            </div>
          </div>

          {/* Bottom Links and Social Media */}
          <div className="border-t border-border pt-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Left Links */}
              <div className="flex gap-6 text-sm justify-center md:justify-start">
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
                <a href="#training" className="text-muted-foreground hover:text-primary transition-colors">
                  Training
                </a>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </div>

              {/* Social Media Icons - Centered */}
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* Right Links */}
              <div className="flex gap-6 text-sm justify-center md:justify-end">
                <a href="#return-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Return Policy
                </a>
                <a href="#privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Standard Ultrasound. All rights reserved. GE and associated marks are trademarks of General Electric Company.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}