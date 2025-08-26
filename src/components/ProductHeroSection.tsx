import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductHeroSectionProps {
  onGetQuote: () => void;
}

export default function ProductHeroSection({ onGetQuote }: ProductHeroSectionProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/placeholder.svg",
    "/placeholder.svg", 
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <section className="py-section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GE Voluson S10
                <span className="block text-primary">Ultrasound Machine</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium women's health ultrasound system featuring HDlive™ 4D Imaging 
                and Expert Automation Tools for enhanced diagnostic confidence.
              </p>
            </div>

            <Button 
              onClick={onGetQuote}
              size="xl"
              variant="primary"
              className="shadow-glow"
            >
              Request Quote
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-card shadow-card">
              <img
                src={images[selectedImage]}
                alt="GE Voluson S10 Ultrasound Machine"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? "ring-2 ring-primary shadow-glow"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}