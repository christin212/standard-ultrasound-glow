import { Smartphone, Brain, Stethoscope, Users } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Portable to Premium",
      description: "From handheld devices to premium console systems, find the perfect fit for any setting",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Quantification",
      description: "Automated measurements and analysis powered by advanced AI algorithms for consistent results",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Stethoscope,
      title: "XDclear Probes",
      description: "Next-generation transducer technology for superior image clarity and diagnostic confidence",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Enhanced Ergonomics",
      description: "Redesigned interfaces and controls reduce strain and improve workflow efficiency",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="section-container bg-accent/20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Key Benefits at a Glance</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the advantages that make GE ultrasound systems the choice of leading healthcare providers
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="luxury-card text-center space-y-6 group hover:scale-105 transition-all duration-500"
          >
            <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-glow group-hover:shadow-luxury transition-all duration-500`}>
              <benefit.icon className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}