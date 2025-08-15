import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductHeroSectionProps {
  onGetQuote: () => void;
}

export default function ProductHeroSection({ onGetQuote }: ProductHeroSectionProps) {
  const [selectedOption, setSelectedOption] = useState("new");
  const [selectedImage, setSelectedImage] = useState(0);

  const options = [
    { id: "new", label: "New" },
    { id: "demo", label: "Demo" },
    { id: "used", label: "Used" },
    { id: "rental", label: "Rental" }
  ];

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
              variant="cta"
              className="shadow-glow"
            >
              Request Quote
            </Button>

            {/* Option Selector */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Available Options:</p>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedOption === option.id
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
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