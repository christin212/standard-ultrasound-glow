import { Award, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ultrasound.jpg";

interface HeroSectionProps {
  onGetQuote: () => void;
  onScheduleDemo: () => void;
}

export default function HeroSection({ onGetQuote, onScheduleDemo }: HeroSectionProps) {
  return (
    <section className="section-container min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 fade-in-up animate">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Next-Gen{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                GE Ultrasound
              </span>{" "}
              Machines
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your practice with AI-assisted imaging technology, 
              enhanced workflow efficiency, and comprehensive warranty coverage. 
              Experience the future of diagnostic imaging today.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-5 h-5 text-primary" />
              <span>Authorized GE Partner</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-5 h-5 text-primary" />
              <span>AI-Enhanced Imaging</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="xl"
              onClick={onGetQuote}
              className="animate-glow-pulse"
            >
              Get Instant Quote
            </Button>
            <Button 
              variant="outline_primary" 
              size="xl"
              onClick={onScheduleDemo}
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative fade-in-up animate">
          <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-3xl opacity-20 animate-float"></div>
          <img
            src={heroImage}
            alt="GE Ultrasound Machine"
            className="relative z-10 w-full rounded-3xl shadow-luxury"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}