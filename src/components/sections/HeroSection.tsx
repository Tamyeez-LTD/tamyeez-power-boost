import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/10 rounded-full animate-float delay-1000" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="animate-fade-in">
            <span className="text-secondary-foreground font-medium">
              🏆 Microsoft Certified Partner
            </span>
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
            Transform Your Business with{" "}
            <span className="gradient-text">Custom Microsoft Power Platform</span>{" "}
            Solutions
          </h1>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            We build enterprise-grade CRM, automation, and mobile apps that reduce costs by{" "}
            <span className="text-secondary font-semibold">60%</span> and boost productivity by{" "}
            <span className="text-secondary font-semibold">40%</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-400">
            <Button size="lg" className="glow-primary group" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/services">
                <Play className="mr-2 h-5 w-5" />
                View Our Services
              </Link>
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-in delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="pt-8 animate-fade-in delay-800">
            <p className="text-sm text-muted-foreground mb-4">Trusted by businesses across Canada</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">Microsoft</div>
              <div className="text-2xl font-bold text-muted-foreground">Power Platform</div>
              <div className="text-2xl font-bold text-muted-foreground">Office 365</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;