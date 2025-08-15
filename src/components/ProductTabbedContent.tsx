import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ProductTabbedContent() {
  return (
    <section className="py-section-padding bg-background">
      <div className="max-w-6xl mx-auto px-container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Detailed Information
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore comprehensive details about the Voluson S10
          </p>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="probes">Probes</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="imaging">
                <AccordionTrigger className="text-lg font-semibold">
                  Advanced Imaging Technology
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>
                    HDlive™ 4D imaging provides realistic anatomical rendering with exceptional 
                    detail and clarity. Advanced Doppler modes offer superior vascular and 
                    blood flow visualization for comprehensive diagnostics.
                  </p>
                  <p>
                    Enhanced contrast resolution and tissue harmonics ensure optimal image 
                    quality across all applications, from routine OB/GYN to complex 
                    maternal-fetal medicine procedures.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="automation">
                <AccordionTrigger className="text-lg font-semibold">
                  Expert Automation Tools
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>
                    Semi-automated measurements including SonoBiometry and SonoNT reduce 
                    examination time while improving measurement consistency and accuracy.
                  </p>
                  <p>
                    Intelligent protocols guide operators through complex procedures, 
                    ensuring comprehensive examinations and reducing training requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="workflow">
                <AccordionTrigger className="text-lg font-semibold">
                  Workflow Enhancement
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>
                    Intuitive touchscreen interface with customizable layouts adapts to 
                    individual operator preferences and clinical workflows.
                  </p>
                  <p>
                    Quick preset configurations and smart defaults minimize setup time 
                    between patients, maximizing throughput and efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="specs" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="display">
                <AccordionTrigger className="text-lg font-semibold">
                  Display & Interface
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• High-definition LED monitor with adjustable articulation</li>
                    <li>• Touchscreen control panel with haptic feedback</li>
                    <li>• Customizable user interface with preset configurations</li>
                    <li>• Multi-language support and accessibility features</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="performance">
                <AccordionTrigger className="text-lg font-semibold">
                  Performance Specifications
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Advanced beamforming technology</li>
                    <li>• Up to 4D real-time imaging capabilities</li>
                    <li>• Enhanced penetration and resolution</li>
                    <li>• Optimized frame rates for all applications</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="connectivity">
                <AccordionTrigger className="text-lg font-semibold">
                  Connectivity & Storage
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• DICOM 3.0 compliance and PACS connectivity</li>
                    <li>• USB ports for easy data export</li>
                    <li>• Network connectivity with secure data transfer</li>
                    <li>• Cloud integration capabilities</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="probes" className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="convex">
                <AccordionTrigger className="text-lg font-semibold">
                  Convex Array Probes
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• <strong>RAB6-D:</strong> 4D convex array for obstetric imaging</li>
                    <li>• <strong>C1-5-D:</strong> Multi-frequency convex for general imaging</li>
                    <li>• Optimized for abdominal and obstetric applications</li>
                    <li>• Enhanced penetration for challenging patients</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specialty">
                <AccordionTrigger className="text-lg font-semibold">
                  Specialty Probes
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• <strong>IC5-9-D:</strong> Endocavitary probe for gynecologic imaging</li>
                    <li>• <strong>12L-RS:</strong> High-frequency linear for superficial structures</li>
                    <li>• Specialized designs for specific clinical applications</li>
                    <li>• Ergonomic handles for comfortable extended use</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology">
                <AccordionTrigger className="text-lg font-semibold">
                  Probe Technology
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Single crystal technology for superior image quality</li>
                    <li>• Multi-frequency capabilities for optimal penetration</li>
                    <li>• Advanced beam steering and focusing</li>
                    <li>• Durable construction for long-term reliability</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}