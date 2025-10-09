import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ExploreProducts() {
  const productCategories = [
    {
      name: "GE Versana",
      description: "General imaging excellence",
      models: 4,
      image: "/placeholder.svg"
    },
    {
      name: "GE Voluson",
      description: "Women's health specialists",
      models: 4,
      image: "/placeholder.svg"
    },
    {
      name: "GE Vivid",
      description: "Cardiovascular imaging",
      models: 3,
      image: "/placeholder.svg"
    },
    {
      name: "GE Logiq",
      description: "Point of care solutions",
      models: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-section-padding bg-background">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect ultrasound solution for your practice
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              to="/product"
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-luxury"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {category.models} models
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
