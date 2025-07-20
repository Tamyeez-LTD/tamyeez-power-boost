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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-blue p-12 lg:p-16 rounded-3xl border border-white/10 text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[hsl(81,100%,36%)]/20 text-[hsl(81,100%,36%)] px-4 py-2 rounded-full text-sm font-medium border border-[hsl(81,100%,36%)]/30">
              <span>🚀</span>
              <span>Ready to Transform Your Business?</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Start Your <span className="text-[hsl(200,100%,47%)]">Digital Transformation</span><br />
                Today
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Join 50+ businesses that have already reduced costs by 60% and 
                boosted productivity by 40% with our Microsoft Power Platform solutions.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3 justify-center sm:justify-start">
                  <CheckCircle className="h-6 w-6 text-[hsl(81,100%,36%)] flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[hsl(200,100%,47%)] hover:bg-[hsl(200,100%,55%)] text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl w-full sm:w-auto glow-microsoft-blue" 
                asChild
              >
                <Link to="/contact">
                  <Calendar className="mr-3 h-6 w-6" />
                  Schedule Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30 px-8 py-4 text-lg font-semibold rounded-xl w-full sm:w-auto backdrop-blur-sm" 
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now: (555) 123-4567
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/70 mb-4">
                Prefer to email us directly?
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-[hsl(200,100%,47%)]" />
                <a 
                  href="mailto:info@tamyeez.ca" 
                  className="text-[hsl(200,100%,47%)] hover:text-[hsl(200,100%,60%)] transition-colors font-medium text-lg"
                >
                  info@tamyeez.ca
                </a>
              </div>
            </div>

            {/* Guarantee */}
            <div className="glass-green p-8 rounded-2xl border border-[hsl(81,100%,36%)]/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-[hsl(81,100%,36%)]/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-[hsl(81,100%,36%)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Promise</h3>
              </div>
              <p className="text-white/80 text-center leading-relaxed">
                If you don't see measurable ROI within 90 days of implementation, 
                we'll work with you at no additional cost until you do.
              </p>
            </div>

            {/* Urgency */}
            <div className="text-center space-y-4">
              <p className="text-white/80">
                <span className="text-[hsl(81,100%,36%)] font-semibold">Limited Time:</span> Free migration assessment for the first 10 clients this month
              </p>
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[hsl(81,100%,36%)] rounded-full" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-white/30 rounded-full" />
                  ))}
                </div>
              </div>
              <p className="text-white/60 text-sm">7 spots remaining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;