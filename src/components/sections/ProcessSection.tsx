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
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            How We <span className="gradient-text">Transform</span> Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step methodology ensures successful implementation 
            and maximum ROI for your Microsoft Power Platform investment.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-0">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2 z-10" />
              )}
              
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`lg:col-span-2 space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <Card className="card-gradient shadow-card hover-lift">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <div className="text-primary">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-2xl font-bold text-primary">{step.step}</span>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-primary font-medium text-sm uppercase tracking-wide">
                              {step.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                          
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.details.map((detail) => (
                              <li key={detail} className="flex items-center text-sm text-muted-foreground">
                                <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Visual */}
                <div className={`flex justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-elevated glow-primary">
                      <span className="text-4xl font-bold text-primary-foreground">
                        {step.step}
                      </span>
                    </div>
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-32 h-32 bg-primary/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Why Our Process <span className="gradient-text">Works</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <h4 className="font-semibold text-foreground">Minimal Disruption</h4>
                <p className="text-sm text-muted-foreground">
                  Phased implementation ensures business continuity
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <h4 className="font-semibold text-foreground">Rapid Results</h4>
                <p className="text-sm text-muted-foreground">
                  See productivity improvements within 30 days
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                <p className="text-sm text-muted-foreground">
                  24/7 support ensures continued success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;