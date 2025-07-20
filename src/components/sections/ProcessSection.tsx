import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Lightbulb, 
  Rocket,
  ArrowRight
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Assess",
      subtitle: "Discovery & Analysis",
      description: "We analyze your current processes, identify pain points, and assess your technical infrastructure to understand your unique business needs.",
      details: [
        "Business process mapping",
        "Technical infrastructure audit",
        "Pain point identification",
        "ROI opportunity assessment"
      ]
    },
    {
      step: "02",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Design",
      subtitle: "Strategy & Planning",
      description: "Our experts create a custom solution strategy tailored to your business goals, with detailed architecture and implementation roadmap.",
      details: [
        "Custom solution architecture",
        "Implementation roadmap",
        "User experience design",
        "Integration planning"
      ]
    },
    {
      step: "03",
      icon: <Rocket className="h-8 w-8" />,
      title: "Deploy",
      subtitle: "Implementation & Training",
      description: "We implement your solution with minimal disruption, provide comprehensive training, and ensure smooth adoption across your organization.",
      details: [
        "Phased implementation",
        "User training programs",
        "Change management",
        "Go-live support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[hsl(200,100%,47%)]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[hsl(200,100%,47%)]/20">
                        <div className="text-[hsl(200,100%,47%)]">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className="text-4xl font-bold text-[hsl(200,100%,47%)]">{step.step}</span>
                          <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-[hsl(200,100%,47%)] font-medium text-sm uppercase tracking-wide mt-1">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center space-x-3">
                          <ArrowRight className="h-4 w-4 text-[hsl(200,100%,47%)] flex-shrink-0" />
                          <span className="text-white/70 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Visual */}
                <div className={`flex justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[hsl(200,100%,47%)] to-[hsl(240,100%,70%)] flex items-center justify-center shadow-2xl">
                      <span className="text-6xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="absolute inset-0 w-48 h-48 bg-[hsl(200,100%,47%)]/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Process Works */}
        <div className="text-center space-y-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white">
            Why Our Process <span className="text-[hsl(200,100%,47%)]">Works</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
              <h4 className="text-xl font-semibold text-white">Minimal Disruption</h4>
              <p className="text-white/70">
                Phased implementation ensures business continuity
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
              <h4 className="text-xl font-semibold text-white">Rapid Results</h4>
              <p className="text-white/70">
                See productivity improvements within 30 days
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
              <h4 className="text-xl font-semibold text-white">Ongoing Support</h4>
              <p className="text-white/70">
                24/7 support ensures continued success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;