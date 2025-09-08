import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "GE Voluson E10",
      image: "/placeholder.svg",
      description: "Premium ultrasound with BT22 platform"
    },
    {
      id: 2,
      name: "GE Voluson S8",
      image: "/placeholder.svg", 
      description: "Advanced women's health imaging"
    },
    {
      id: 3,
      name: "GE Logiq E9",
      image: "/placeholder.svg",
      description: "Versatile general imaging system"
    },
    {
      id: 4,
      name: "GE Vivid iQ",
      image: "/placeholder.svg",
      description: "Portable ultrasound innovation"
    },
    {
      id: 5,
      name: "GE Venue Go",
      image: "/placeholder.svg",
      description: "Point-of-care ultrasound"
    },
    {
      id: 6,
      name: "GE Logiq P9",
      image: "/placeholder.svg",
      description: "Shared service ultrasound"
    }
  ];

  const itemsToShow = 4;
  const maxIndex = Math.max(0, products.length - itemsToShow);
  const mobileMaxIndex = Math.max(0, products.length - 1);

  const goToPrevious = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const goToNext = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setCurrentIndex(Math.min(mobileMaxIndex, currentIndex + 1));
    } else {
      setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    }
  };

  return (
    <section className="py-section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Related Products
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore other GE ultrasound solutions for your practice
          </p>
        </div>

        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden md:block overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-1/4 flex-shrink-0 bg-card rounded-xl shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-square rounded-t-xl overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Single Product View */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out snap-x snap-mandatory"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-full flex-shrink-0 bg-card rounded-xl shadow-card snap-center"
                  >
                    <div className="aspect-square rounded-t-xl overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        View Product
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            {/* Mobile Counter */}
            <div className="text-center mt-2 text-sm text-muted-foreground">
              {currentIndex + 1} / {products.length}
            </div>
          </div>

          {/* Desktop Navigation Controls */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <Button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <Button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={goToNext}
              disabled={currentIndex >= mobileMaxIndex}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}