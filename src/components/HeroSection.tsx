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
              <span className="inline-block animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
                Next-Gen{" "}
              </span>
              <span className="inline-block animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
                <span className="bg-gradient-brand bg-clip-text text-transparent inline-block animate-[scale-in_0.6s_ease-out_0.5s_forwards] opacity-0">
                  GE Ultrasound
                </span>
              </span>{" "}
              <span className="inline-block animate-fade-in opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">
                Machines
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
              Transform your practice with AI-assisted imaging technology, 
              enhanced workflow efficiency, and comprehensive warranty coverage. 
              Experience the future of diagnostic imaging today.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 animate-fade-in opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]">
            <div className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-primary" />
              <span>Authorized GE Partner</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 text-primary" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-primary" />
              <span>AI-Enhanced Imaging</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 [animation-delay:1.8s] [animation-fill-mode:forwards]">
            <Button 
              variant="primary" 
              size="xl"
              onClick={onGetQuote}
              className="animate-glow-pulse hover:scale-105 transition-transform"
            >
              Get Instant Quote
            </Button>
            <Button 
              variant="outline_primary" 
              size="xl"
              onClick={onScheduleDemo}
              className="hover:scale-105 transition-transform"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
          <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>
          <img
            src={heroImage}
            alt="GE Ultrasound Machine"
            className="relative z-10 w-full rounded-3xl shadow-luxury hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}