import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import LeadBar from "@/components/LeadBar";
import GlobalHeader from "@/components/GlobalHeader";
import HeroSection from "@/components/HeroSection";
import MicroQuiz from "@/components/MicroQuiz";
import WhyUpgradeSection from "@/components/WhyUpgradeSection";
import BenefitsSection from "@/components/BenefitsSection";
import FooterSection from "@/components/FooterSection";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const { toast } = useToast();

  // Track page view
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Standard Ultrasound - GE Equipment Solutions',
        page_location: window.location.href
      });
    }
  }, []);

  const handleGetQuote = () => {
    setIsQuoteFormOpen(true);
    
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Get Quote',
        value: 1
      });
    }
  };

  const handleScheduleDemo = () => {
    toast({
      title: "Demo Request",
      description: "Our team will contact you within 24 hours to schedule your demo.",
    });
    
    // Track demo request
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Schedule Demo',
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Lead Bar */}
      <LeadBar onGetQuote={handleGetQuote} />
      
      {/* Header */}
      <GlobalHeader onContact={handleGetQuote} />
      
      {/* Hero Section */}
      <HeroSection 
        onGetQuote={handleGetQuote}
        onScheduleDemo={handleScheduleDemo}
      />
      
      {/* Micro Quiz */}
      <MicroQuiz />
      
      {/* Why Upgrade Section */}
      <WhyUpgradeSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Footer with Related Products */}
      <FooterSection onGetQuote={handleGetQuote} />
      
      {/* Quote Form Modal */}
      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </div>
  );
};

export default Index;
