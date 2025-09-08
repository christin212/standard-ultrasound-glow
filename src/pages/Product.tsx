import { useState } from "react";
import GlobalHeader from "@/components/GlobalHeader";
import ProductHeroSection from "@/components/ProductHeroSection";
import TrustedPartnersMarquee from "@/components/TrustedPartnersMarquee";
import KeyFeaturesGrid from "@/components/KeyFeaturesGrid";
import WhyUpgradeNow from "@/components/WhyUpgradeNow";
import ProductTabbedContent from "@/components/ProductTabbedContent";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import CtaBanner from "@/components/CtaBanner";
import FooterSection from "@/components/FooterSection";
import QuoteForm from "@/components/QuoteForm";

export default function Product() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleGetQuote = () => {
    setShowQuoteForm(true);
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quote_form_opened', {
        event_category: 'engagement',
        event_label: 'product_page'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlobalHeader onContact={handleGetQuote} />
      
      <main className="overflow-hidden">
        <ProductHeroSection onGetQuote={handleGetQuote} />
        <TrustedPartnersMarquee />
        <KeyFeaturesGrid />
        <WhyUpgradeNow onGetQuote={handleGetQuote} />
        <ProductTabbedContent />
        <RelatedProductsCarousel />
        <CtaBanner onGetQuote={handleGetQuote} />
      </main>

      <FooterSection onGetQuote={handleGetQuote} />

      {showQuoteForm && (
        <QuoteForm isOpen={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
      )}
    </div>
  );
}