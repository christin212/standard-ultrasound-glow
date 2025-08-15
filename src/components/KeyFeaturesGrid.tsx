import { Monitor, Zap, Heart, Cpu, Users, Shield, Workflow, Network } from "lucide-react";

export default function KeyFeaturesGrid() {
  const features = [
    {
      icon: Monitor,
      title: "HDlive™ 4D Imaging",
      description: "Realistic anatomical rendering for enhanced diagnostics"
    },
    {
      icon: Zap,
      title: "Expert Automation",
      description: "Semi-automated measurements and time-saving protocols"
    },
    {
      icon: Heart,
      title: "Advanced Doppler",
      description: "High-quality vascular and blood flow visualization"
    },
    {
      icon: Cpu,
      title: "Touchscreen Control",
      description: "Intuitive interface with customizable layouts"
    },
    {
      icon: Users,
      title: "Enhanced Patient Care",
      description: "Faster, more comfortable scans for better experience"
    },
    {
      icon: Shield,
      title: "DICOM Compatible",
      description: "Seamless integration with existing PACS systems"
    },
    {
      icon: Workflow,
      title: "Ergonomic Design",
      description: "Adjustable console for optimal operator comfort"
    },
    {
      icon: Network,
      title: "Scalable Platform",
      description: "Perfect for growing women's health practices"
    }
  ];

  return (
    <section className="py-section-padding bg-background">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced technology and intelligent automation designed to elevate your practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-card rounded-xl shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}