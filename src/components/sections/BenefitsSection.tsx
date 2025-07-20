import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingDown, 
  TrendingUp, 
  Shield, 
  Clock
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "60% Cost Reduction",
      description: "Per user savings through licensing consolidation and process optimization",
      color: "text-green-400"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "40% Productivity Improvement",
      description: "Streamlined workflows and automated processes boost team efficiency",
      color: "text-blue-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "50% Reduction in Data Breach Risk",
      description: "Enterprise-grade security and compliance features protect your business",
      color: "text-purple-400"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "25% Less Device Management Time",
      description: "Simplified IT management with integrated Microsoft ecosystem",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            Proven Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Measurable <span className="gradient-text">Business Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Microsoft Power Platform solutions deliver quantifiable results 
            that transform your business operations and bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="card-gradient shadow-card hover-lift text-center group"
            >
              <CardContent className="p-8 space-y-4">
                <div className={`w-16 h-16 rounded-full bg-muted/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-card/50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Why Choose <span className="gradient-text">Tamyeez</span>?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Enterprise-Grade at SMB Prices</h4>
                    <p className="text-muted-foreground text-sm">Get Fortune 500 level solutions without the enterprise budget</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">No Technical Skills Needed</h4>
                    <p className="text-muted-foreground text-sm">We handle setup, customization, deployment, and training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Microsoft Certified Experts</h4>
                    <p className="text-muted-foreground text-sm">Partner-level certification ensures quality and reliability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Proven ROI Methodology</h4>
                    <p className="text-muted-foreground text-sm">Data-driven approach with measurable business outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-card p-6 rounded-xl shadow-card">
                <h4 className="text-lg font-semibold text-primary mb-3">Client Success Story</h4>
                <blockquote className="text-muted-foreground italic mb-4">
                  "Tamyeez transformed our manual processes into automated workflows. 
                  We've saved over $50,000 annually and our team productivity has skyrocketed."
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  - Sarah Mitchell, Operations Director
                </cite>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;