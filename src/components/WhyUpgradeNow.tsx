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

          {/* Right Content - Benefits Cards */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-brand rounded-lg mb-3">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}