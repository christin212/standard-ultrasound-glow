import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 2
  practice: string;
  setting: string;
  primaryUse: string;
  timeline: string;
  budget: string;
  // Hidden tracking fields
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
  referrer?: string;
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    setting: "",
    primaryUse: "",
    timeline: "",
    budget: ""
  });

  // Capture tracking data on mount
  useEffect(() => {
    if (isOpen) {
      const urlParams = new URLSearchParams(window.location.search);
      setFormData(prev => ({
        ...prev,
        utm_source: urlParams.get('utm_source') || undefined,
        utm_medium: urlParams.get('utm_medium') || undefined,
        utm_campaign: urlParams.get('utm_campaign') || undefined,
        gclid: urlParams.get('gclid') || undefined,
        referrer: document.referrer || undefined
      }));
    }
  }, [isOpen]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Lead Generation',
        event_label: 'Quote Request',
        value: 1
      });
    }

    // Submit to Zapier webhook (placeholder)
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Quote request submitted successfully!');
        onClose();
        setStep(1);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          practice: "",
          setting: "",
          primaryUse: "",
          timeline: "",
          budget: ""
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting request. Please try again.');
    }
  };

  const canProceedToStep2 = formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Get Your Instant Quote
            <button onClick={onClose} className="p-1 hover:bg-accent rounded">
              <X className="w-4 h-4" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="form-input"
                required
              />
              <Button 
                type="button" 
                variant="primary" 
                className="w-full"
                disabled={!canProceedToStep2}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Practice Details</h3>
              <input
                type="text"
                placeholder="Practice/Facility Name"
                value={formData.practice}
                onChange={(e) => handleInputChange('practice', e.target.value)}
                className="form-input"
                required
              />
              <select
                value={formData.setting}
                onChange={(e) => handleInputChange('setting', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Select Setting</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="private_practice">Private Practice</option>
                <option value="imaging_center">Imaging Center</option>
              </select>
              <select
                value={formData.primaryUse}
                onChange={(e) => handleInputChange('primaryUse', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Primary Use</option>
                <option value="cardiology">Cardiology</option>
                <option value="obstetrics">Obstetrics</option>
                <option value="general">General Imaging</option>
                <option value="vascular">Vascular</option>
                <option value="point_of_care">Point of Care</option>
              </select>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Purchase Timeline</option>
                <option value="immediate">Immediate (0-30 days)</option>
                <option value="short_term">Short-term (1-3 months)</option>
                <option value="medium_term">Medium-term (3-6 months)</option>
                <option value="long_term">Long-term (6+ months)</option>
              </select>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Budget Range</option>
                <option value="under_50k">Under $50,000</option>
                <option value="50k_100k">$50,000 - $100,000</option>
                <option value="100k_200k">$100,000 - $200,000</option>
                <option value="over_200k">Over $200,000</option>
              </select>
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  variant="primary"
                  className="flex-1"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}