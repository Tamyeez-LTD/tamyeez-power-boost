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
      title: "60% Cost",
      subtitle: "Reduction",
      description: "Per user savings through licensing consolidation and process optimization",
      glassClass: "glass-green",
      iconColor: "text-[hsl(81,100%,36%)]"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "40% Productivity",
      subtitle: "Improvement", 
      description: "Streamlined workflows and automated processes boost team efficiency",
      glassClass: "glass-blue",
      iconColor: "text-[hsl(200,100%,47%)]"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "50% Reduction in",
      subtitle: "Data Breach Risk",
      description: "Enterprise-grade security and compliance features protect your business",
      glassClass: "glass-red",
      iconColor: "text-[hsl(14,95%,54%)]"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "25% Less Device",
      subtitle: "Management Time",
      description: "Simplified IT management with integrated Microsoft ecosystem",
      glassClass: "glass-yellow",
      iconColor: "text-[hsl(43,100%,68%)]"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className={`${benefit.glassClass} glass-hover text-center group border-0`}
            >
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:bg-white/10 transition-colors ${benefit.iconColor}`}>
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {benefit.title}
                  </h3>
                  <h4 className="text-2xl font-bold text-white">
                    {benefit.subtitle}
                  </h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Tamyeez Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Why Choose <span className="text-[hsl(200,100%,47%)]">Tamyeez</span>?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white">Enterprise-Grade at SMB Prices</h4>
                    <p className="text-white/70 text-sm">Get Fortune 500 level solutions without the enterprise budget</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white">No Technical Skills Needed</h4>
                    <p className="text-white/70 text-sm">We handle setup, customization, deployment, and training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white">Microsoft Certified Experts</h4>
                    <p className="text-white/70 text-sm">Partner-level certification ensures quality and reliability</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[hsl(200,100%,47%)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white">Proven ROI Methodology</h4>
                    <p className="text-white/70 text-sm">Data-driven approach with measurable business outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Client Success Story */}
            <div className="glass-blue p-8 rounded-2xl border border-white/10">
              <h4 className="text-lg font-semibold text-[hsl(200,100%,47%)] mb-4">Client Success Story</h4>
              <blockquote className="text-white/90 italic text-lg mb-6 leading-relaxed">
                "Tamyeez transformed our manual processes into automated workflows. 
                We've saved over $50,000 annually and our team productivity has skyrocketed."
              </blockquote>
              <cite className="text-white/70 font-medium">
                - Sarah Mitchell, Operations Director
              </cite>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[hsl(200,100%,47%)]">99%</div>
                <div className="text-white/70 text-sm">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[hsl(200,100%,47%)]">50+</div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[hsl(200,100%,47%)]">24h</div>
                <div className="text-white/70 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;