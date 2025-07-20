import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Calendar, 
  Phone, 
  Mail,
  CheckCircle
} from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Free 30-minute consultation",
    "Custom solution assessment",
    "ROI projection report",
    "No obligation proposal"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient shadow-elevated glow-primary">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                {/* Badge */}
                <Badge variant="secondary" className="animate-pulse">
                  🚀 Ready to Transform Your Business?
                </Badge>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Start Your <span className="gradient-text">Digital Transformation</span> Today
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Join 50+ businesses that have already reduced costs by 60% and 
                    boosted productivity by 40% with our Microsoft Power Platform solutions.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3 justify-center sm:justify-start">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="glow-primary group w-full sm:w-auto" asChild>
                    <Link to="/contact">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (555) 123-4567
                    </Link>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer to email us directly?
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a 
                      href="mailto:info@tamyeez.ca" 
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      info@tamyeez.ca
                    </a>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Our Promise</h3>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    If you don't see measurable ROI within 90 days of implementation, 
                    we'll work with you at no additional cost until you do.
                  </p>
                </div>

                {/* Urgency */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-secondary font-semibold">Limited Time:</span> Free migration assessment for the first 10 clients this month
                  </p>
                  <div className="flex justify-center mt-2">
                    <div className="flex space-x-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-secondary rounded-full" />
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-muted rounded-full" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">7 spots remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;