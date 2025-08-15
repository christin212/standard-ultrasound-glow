import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onGetQuote: () => void;
}

export default function Header({ onGetQuote }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Support", href: "#support" }
  ];

  const rightNavItems = [
    { label: "Training", href: "#training" },
    { label: "Financing", href: "#financing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="flex items-center justify-between py-6">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              Standard Ultrasound
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline_primary" onClick={onGetQuote}>
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border mt-6 pt-6">
            <nav className="flex flex-col space-y-4">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" onClick={onGetQuote} className="mt-4">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}