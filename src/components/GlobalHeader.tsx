import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface GlobalHeaderProps {
  onContact: () => void;
}

export default function GlobalHeader({ onContact }: GlobalHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState("versana");
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productFamilies = {
    versana: {
      name: "GE Versana",
      models: ["Active", "Balance", "Essential", "Premier"]
    },
    voluson: {
      name: "GE Voluson", 
      models: ["Expert", "S10", "S8", "P8"]
    },
    vivid: {
      name: "GE Vivid",
      models: ["iQ", "T8", "E95", "E90"]
    },
    logiq: {
      name: "GE Logiq",
      models: ["P9", "E9", "E8", "F8"]
    },
    venue: {
      name: "GE Venue",
      models: ["Go", "Fit", "40", "50"]
    },
    breast: {
      name: "Breast Imaging",
      models: ["Senographe", "SenoClaire", "Pristina", "Essential"]
    },
    portable: {
      name: "GE Portable Ultrasound",
      models: ["Vscan Air", "Venue Go", "Vivid iQ", "Venue Fit"]
    }
  };

  const resourcesItems = [
    { label: "All Features", href: "#features" },
    { label: "Probes", href: "#probes" },
    { label: "Blog", href: "#blog" },
    { label: "Training", href: "#training" },
    { label: "Store", href: "#store" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky 
            ? 'bg-background/85 backdrop-blur-[8px] border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Mobile Layout (< 1280px) */}
            <div className="flex items-center justify-between w-full xl:hidden">
              <Link 
                to="/" 
                className="flex items-center"
              >
                <div className="h-8 w-auto text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                  Standard Ultrasound
                </div>
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Layout (>= 1280px) */}
            <div className="hidden xl:flex items-center justify-between w-full">
              {/* Left Navigation */}
              <nav className="flex items-center space-x-6">
                <div className="relative" ref={megaMenuRef}>
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    className="flex items-center space-x-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group relative"
                    aria-expanded={isMegaMenuOpen}
                  >
                    <span>New GE Ultrasounds</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 transition-transform duration-200 ${isMegaMenuOpen ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                  </button>
                  
                  {/* Mega Menu */}
                  {isMegaMenuOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-[800px] bg-background/98 border border-border rounded-2xl shadow-luxury backdrop-blur-sm p-6 z-50"
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-8">
                        {/* Left Column - Families */}
                        <div className="space-y-2">
                          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Product Families</h3>
                          {Object.entries(productFamilies).map(([key, family]) => (
                            <button
                              key={key}
                              onMouseEnter={() => setSelectedFamily(key)}
                              onFocus={() => setSelectedFamily(key)}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                selectedFamily === key 
                                  ? 'bg-primary/10 text-primary border border-primary/20' 
                                  : 'hover:bg-accent text-foreground'
                              }`}
                            >
                              {family.name}
                            </button>
                          ))}
                        </div>
                        
                        {/* Right Column - Models */}
                        <div className="space-y-2">
                          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Models</h3>
                          {productFamilies[selectedFamily as keyof typeof productFamilies]?.models.map((model) => (
                            <Link
                              key={model}
                              to={`/product`}
                              className="block px-4 py-3 rounded-lg hover:bg-accent transition-colors text-foreground hover:text-primary"
                              onClick={() => setIsMegaMenuOpen(false)}
                            >
                              {model}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link 
                  to="#rental" 
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group relative"
                >
                  Ultrasound Rental
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
                
                <Link 
                  to="#preowned" 
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group relative"
                >
                  Preowned
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              </nav>

              {/* Centered Logo */}
              <Link 
                to="/" 
                className="absolute left-1/2 transform -translate-x-1/2"
              >
                <div className="h-8 w-auto text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                  Standard Ultrasound
                </div>
              </Link>

              {/* Right Navigation */}
              <nav className="flex items-center space-x-6">
                <div className="relative" ref={resourcesRef}>
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center space-x-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group relative"
                    aria-expanded={isResourcesOpen}
                  >
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 transition-transform duration-200 ${isResourcesOpen ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                  </button>
                  
                  {/* Resources Dropdown */}
                  {isResourcesOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-background/98 border border-border rounded-xl shadow-luxury backdrop-blur-sm py-2 z-50">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  to="#about" 
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group relative"
                >
                  About Us
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
                
                <Button 
                  onClick={onContact}
                  variant="primary"
                  className="hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-black/80" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                Standard Ultrasound
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-4">
              {/* Mobile accordions would go here - keeping simple for now */}
              <Link
                to="/product"
                className="block py-4 text-lg font-medium hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                New GE Ultrasounds
              </Link>
              <Link
                to="#rental"
                className="block py-4 text-lg font-medium hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                Ultrasound Rental
              </Link>
              <Link
                to="#preowned"
                className="block py-4 text-lg font-medium hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                Preowned
              </Link>
              <Link
                to="#resources"
                className="block py-4 text-lg font-medium hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="#about"
                className="block py-4 text-lg font-medium hover:text-primary transition-colors border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div className="pt-8">
                <Button 
                  onClick={() => {
                    onContact();
                    setIsMenuOpen(false);
                  }}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
