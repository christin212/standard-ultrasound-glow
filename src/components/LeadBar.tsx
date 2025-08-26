import { Phone, Award, Truck, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadBarProps {
  onGetQuote: () => void;
}

export default function LeadBar({ onGetQuote }: LeadBarProps) {
  return (
    <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-container-padding py-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Contact Info */}
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-semibold">1-800-ULTRASOUND</span>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-primary" />
              <span>Authorized GE Partner</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-primary" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>Financing Available</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-primary" />
              <span>GE Warranty</span>
            </div>
          </div>

          {/* Primary CTA */}
          <Button 
            variant="primary" 
            size="lg"
            onClick={onGetQuote}
            className="animate-glow-pulse"
          >
            Get Instant Quote
          </Button>
        </div>
      </div>
    </div>
  );
}