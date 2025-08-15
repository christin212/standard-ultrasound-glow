import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function MicroQuiz() {
  const [selections, setSelections] = useState({
    setting: "",
    primaryUse: "",
    timeline: "",
    budget: ""
  });

  const [recommendation, setRecommendation] = useState("");

  const generateRecommendation = () => {
    if (selections.setting && selections.primaryUse && selections.timeline && selections.budget) {
      let rec = "Based on your selections, we recommend the ";
      
      if (selections.budget === "premium" || selections.primaryUse === "cardiology") {
        rec += "GE Vivid iQ with advanced imaging capabilities";
      } else if (selections.setting === "point_of_care" || selections.timeline === "immediate") {
        rec += "GE Venue Go portable ultrasound system";
      } else {
        rec += "GE Logiq series for optimal versatility";
      }
      
      rec += ". This system perfectly matches your practice needs and timeline.";
      setRecommendation(rec);
    }
  };

  const handleSelectionChange = (field: string, value: string) => {
    const newSelections = { ...selections, [field]: value };
    setSelections(newSelections);
    
    // Auto-generate recommendation when all fields are filled
    if (Object.values(newSelections).every(v => v !== "")) {
      setTimeout(generateRecommendation, 500);
    }
  };

  return (
    <section className="section-container bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Find Your Perfect Match</h2>
            <p className="text-xl text-muted-foreground">
              Answer 4 quick questions to get an instant equipment recommendation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Setting */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-foreground">Setting</label>
              <select
                value={selections.setting}
                onChange={(e) => handleSelectionChange('setting', e.target.value)}
                className="form-select"
              >
                <option value="">Select Setting</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="point_of_care">Point of Care</option>
                <option value="mobile">Mobile/Field</option>
              </select>
            </div>

            {/* Primary Use */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-foreground">Primary Use</label>
              <select
                value={selections.primaryUse}
                onChange={(e) => handleSelectionChange('primaryUse', e.target.value)}
                className="form-select"
              >
                <option value="">Select Use</option>
                <option value="cardiology">Cardiology</option>
                <option value="obstetrics">OB/GYN</option>
                <option value="general">General Imaging</option>
                <option value="vascular">Vascular</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-foreground">Timeline</label>
              <select
                value={selections.timeline}
                onChange={(e) => handleSelectionChange('timeline', e.target.value)}
                className="form-select"
              >
                <option value="">Select Timeline</option>
                <option value="immediate">0-30 days</option>
                <option value="short">1-3 months</option>
                <option value="medium">3-6 months</option>
                <option value="long">6+ months</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-foreground">Budget</label>
              <select
                value={selections.budget}
                onChange={(e) => handleSelectionChange('budget', e.target.value)}
                className="form-select"
              >
                <option value="">Select Budget</option>
                <option value="entry">Under $50K</option>
                <option value="mid">$50K - $100K</option>
                <option value="high">$100K - $200K</option>
                <option value="premium">$200K+</option>
              </select>
            </div>
          </div>

          {/* Recommendation Output */}
          {recommendation && (
            <div className="luxury-card max-w-2xl mx-auto fade-in-up animate">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Your Recommendation</h3>
                <p className="text-lg text-muted-foreground">{recommendation}</p>
                <Button variant="cta" size="lg" className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Email This Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}