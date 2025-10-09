import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";

interface WhyUpgradeNowProps {
  onGetQuote: () => void;
}

export default function WhyUpgradeNow({ onGetQuote }: WhyUpgradeNowProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "50% faster scan times with automation"
    },
    {
      icon: CheckCircle,
      title: "Better Accuracy",
      description: "Enhanced diagnostic confidence"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Streamlined workflow protocols"
    },
    {
      icon: Shield,
      title: "Future-Proof",
      description: "Scalable technology platform"
    }
  ];

  return (
    <section className="py-section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Upgrade to the 
              <span className="block text-primary">Voluson S10 Now?</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your current ultrasound system may be limiting your practice's potential. 
                Outdated technology leads to longer scan times, reduced image quality, 
                and patient dissatisfaction.
              </p>
              
              <p>
                The Voluson S10 transforms your workflow with cutting-edge automation, 
                superior image quality, and intuitive controls that reduce operator 
                fatigue while improving diagnostic confidence.
              </p>
              
              <p>
                Don't let outdated equipment hold back your practice. Upgrade to the 
                industry-leading platform that enhances both patient care and practice 
                efficiency.
              </p>
            </div>

            <Button
              onClick={onGetQuote}
              variant="outline_primary"
              size="lg"
              className="group"
            >
              Get Your Upgrade Quote
            </Button>
          </div>

          {/* Desktop Benefits - Stats Grid */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Large Stats Display */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm font-semibold mb-1">Faster Scanning</div>
                  <div className="text-xs text-muted-foreground">With automation tools</div>
                </div>
                <div className="p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm font-semibold mb-1">Accuracy Rate</div>
                  <div className="text-xs text-muted-foreground">Enhanced diagnostics</div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{benefit.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Mobile Benefits List - Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[70vw] snap-center"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-2 space-x-1">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted opacity-60"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}