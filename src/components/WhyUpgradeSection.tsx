import { AlertTriangle, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyUpgradeSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Outdated Technology",
      description: "Legacy systems lack AI assistance and advanced quantification tools"
    },
    {
      icon: TrendingUp,
      title: "Workflow Inefficiency", 
      description: "Manual measurements and outdated interfaces slow down diagnoses"
    },
    {
      icon: Users,
      title: "Patient Experience",
      description: "Longer scan times and less comfortable procedures"
    },
    {
      icon: Zap,
      title: "Competitive Disadvantage",
      description: "Missing latest features that competitors and patients expect"
    }
  ];

  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Upgrade Now?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Healthcare is evolving rapidly, and your ultrasound technology should too. 
              Modern GE systems don't just improve image quality—they transform your entire 
              diagnostic workflow with AI-powered automation, enhanced ergonomics, and 
              seamless connectivity.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              The gap between current and legacy technology creates real challenges for 
              healthcare providers. Patients expect faster, more comfortable experiences. 
              Staff need intuitive interfaces that reduce fatigue and errors. 
              Administrators demand systems that improve efficiency and ROI.
            </p>
            
            <p className="text-muted-foreground">
              Upgrading to the latest GE ultrasound technology addresses these challenges 
              while future-proofing your practice. With AI-assisted measurements, 
              automated workflows, and advanced probe technology, you'll see immediate 
              improvements in productivity, accuracy, and patient satisfaction.
            </p>
          </div>

          <Button variant="cta" size="lg">
            Free Practice Assessment
          </Button>
        </div>

        {/* Right Content - Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="luxury-card space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}