import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  onGetQuote: () => void;
}

export default function CtaBanner({ onGetQuote }: CtaBannerProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div 
          className="max-w-4xl mx-auto px-8 py-16 rounded-3xl text-center"
          style={{ backgroundColor: '#003366' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of women's health imaging with the GE Voluson S10. 
            Get your personalized quote today.
          </p>
          <Button
            onClick={onGetQuote}
            size="xl"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-luxury px-8 py-4 text-lg font-semibold rounded-full"
          >
            Get Instant Quote
          </Button>
        </div>
      </div>
    </section>
  );
}