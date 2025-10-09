import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import FooterSection from "@/components/FooterSection";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const productFamilies = {
  versana: {
    name: "GE Versana Series",
    tagline: "General Imaging Excellence",
    description: "Versatile ultrasound systems designed for comprehensive general imaging across multiple clinical applications.",
    models: [
      {
        name: "Versana Premier",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["4D Imaging", "Advanced Doppler", "Ergonomic Design", "Cloud Connectivity"]
      },
      {
        name: "Versana Active",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Portable Design", "HD Imaging", "Quick Boot", "Long Battery Life"]
      },
      {
        name: "Versana Balance",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Cost-Effective", "Essential Imaging", "Compact", "User-Friendly"]
      },
      {
        name: "Versana Essential",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Entry-Level", "Reliable Performance", "Simple Interface", "Lightweight"]
      }
    ]
  },
  voluson: {
    name: "GE Voluson Series",
    tagline: "Women's Health Specialists",
    description: "Advanced ultrasound solutions specifically designed for obstetrics, gynecology, and women's health imaging.",
    models: [
      {
        name: "Voluson E10",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["HDlive Studio", "AI-Powered Analysis", "SonoVCAD", "VOCAL II"]
      },
      {
        name: "Voluson E8",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["HD Imaging", "3D/4D Capability", "Cross XDclear", "Volume Imaging"]
      },
      {
        name: "Voluson S10",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Advanced OB/GYN", "Automated Analysis", "Premium Display", "SonoLyst"]
      },
      {
        name: "Voluson P8",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Portable 4D", "Women's Health", "Point of Care", "Wireless Probes"]
      }
    ]
  },
  vivid: {
    name: "GE Vivid Series",
    tagline: "Cardiovascular Imaging",
    description: "Premium cardiac ultrasound systems offering superior cardiovascular imaging and advanced analysis capabilities.",
    models: [
      {
        name: "Vivid E95",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["4D Auto LVQ", "AFI Technology", "cSound Architecture", "XDclear Imaging"]
      },
      {
        name: "Vivid S70N",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Cardiac Focused", "Strain Imaging", "3D Echo", "Advanced Quantification"]
      },
      {
        name: "Vivid iq",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Ultra-Portable", "Wireless", "AI-Assisted", "Cloud Connected"]
      }
    ]
  },
  logiq: {
    name: "GE Logiq Series",
    tagline: "Point of Care Solutions",
    description: "Flexible and portable ultrasound systems perfect for point-of-care applications and diverse clinical settings.",
    models: [
      {
        name: "Logiq E10",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Premium Imaging", "Multi-Specialty", "AI Enhancement", "CrossXBeam"]
      },
      {
        name: "Logiq P9",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Shared Service", "Portable Cart", "Advanced Apps", "Elastography"]
      },
      {
        name: "Logiq Fortis",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Compact Design", "Fast Workflow", "HD Clarity", "Multi-Purpose"]
      },
      {
        name: "Logiq V Series",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Value Priced", "Essential Features", "Reliable", "Easy to Use"]
      },
      {
        name: "Logiq e",
        price: "Request Quote",
        image: "/placeholder.svg",
        features: ["Ultra-Portable", "Handheld", "Quick Scan", "Battery Powered"]
      }
    ]
  }
};

export default function ProductFamily() {
  const { family } = useParams<{ family: string }>();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const familyData = productFamilies[family as keyof typeof productFamilies];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [family]);

  if (!familyData) {
    return <div>Product family not found</div>;
  }

  const handleGetQuote = () => {
    setShowQuoteForm(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlobalHeader onContact={handleGetQuote} />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="section-container pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">
              {familyData.name}
            </h1>
            <p className="text-2xl text-primary font-semibold">
              {familyData.tagline}
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {familyData.description}
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleGetQuote}
              className="mt-8"
            >
              Request Family Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Models Grid */}
        <section className="section-container py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Available Models
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {familyData.models.map((model, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-luxury group"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-xl font-semibold text-primary">
                        {model.price}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline_primary" 
                      className="w-full"
                      onClick={handleGetQuote}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Upgrade Your Practice?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a personalized quote for the {familyData.name} today
            </p>
            <Button 
              variant="primary" 
              size="xl"
              onClick={handleGetQuote}
              className="animate-glow-pulse"
            >
              Request Quote Now
            </Button>
          </div>
        </section>
      </main>

      <FooterSection onGetQuote={handleGetQuote} />

      {showQuoteForm && (
        <QuoteForm isOpen={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
      )}
    </div>
  );
}
