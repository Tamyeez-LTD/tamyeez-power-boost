import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, 
  Zap, 
  FileText, 
  Cloud, 
  Settings, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "power-platform",
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Power Platform Development",
      description: "Build custom business applications with Microsoft's low-code/no-code platform. Rapid development, seamless integration, and enterprise-grade security.",
      features: [
        "Custom Power Apps development",
        "Power Automate workflow creation",
        "Power BI dashboard design",
        "AI Builder integration",
        "Dataverse configuration",
        "API integrations"
      ],
      benefits: [
        "10x faster development",
        "90% less code required",
        "Native Office 365 integration",
        "Enterprise security & compliance"
      ],
      pricing: "Starting at $5,000",
      timeline: "2-6 weeks"
    },
    {
      id: "crm",
      icon: <Database className="h-12 w-12" />,
      title: "CRM & Case Management",
      description: "Centralize customer interactions, automate sales processes, and improve customer service with Microsoft Dynamics 365 or custom Power Platform CRM.",
      features: [
        "Customer data centralization",
        "Sales pipeline automation",
        "Case management workflows",
        "Customer service portals",
        "Marketing automation",
        "Analytics and reporting"
      ],
      benefits: [
        "50% faster response times",
        "30% increase in sales conversion",
        "360° customer view",
        "Automated follow-ups"
      ],
      pricing: "Starting at $8,000",
      timeline: "4-8 weeks"
    },
    {
      id: "automation",
      icon: <Zap className="h-12 w-12" />,
      title: "Process Automation",
      description: "Eliminate manual tasks and optimize business processes with intelligent automation using Power Automate and AI capabilities.",
      features: [
        "Workflow automation",
        "Document processing",
        "Email automation",
        "Approval processes",
        "Data synchronization",
        "AI-powered insights"
      ],
      benefits: [
        "80% reduction in manual work",
        "99.9% accuracy in processing",
        "24/7 automated operations",
        "Real-time notifications"
      ],
      pricing: "Starting at $3,000",
      timeline: "1-4 weeks"
    },
    {
      id: "documents",
      icon: <FileText className="h-12 w-12" />,
      title: "Document Management",
      description: "Secure, compliant document storage and collaboration with SharePoint Online, version control, and intelligent search capabilities.",
      features: [
        "Secure document storage",
        "Version control",
        "Collaborative editing",
        "Metadata management",
        "Search and discovery",
        "Compliance features"
      ],
      benefits: [
        "75% faster document retrieval",
        "100% version accuracy",
        "Enterprise-grade security",
        "Regulatory compliance"
      ],
      pricing: "Starting at $4,000",
      timeline: "2-5 weeks"
    },
    {
      id: "sharepoint",
      icon: <Cloud className="h-12 w-12" />,
      title: "SharePoint Migration",
      description: "Seamless migration from on-premises SharePoint to SharePoint Online with zero downtime and enhanced modern experience.",
      features: [
        "Pre-migration assessment",
        "Data integrity verification",
        "Zero-downtime migration",
        "Modern UI upgrade",
        "Permission mapping",
        "User training"
      ],
      benefits: [
        "100% data integrity",
        "50% improved performance",
        "Modern collaboration features",
        "Reduced IT overhead"
      ],
      pricing: "Starting at $6,000",
      timeline: "3-6 weeks"
    },
    {
      id: "microsoft-365",
      icon: <Settings className="h-12 w-12" />,
      title: "Microsoft 365 Setup",
      description: "Complete Microsoft 365 implementation with security configuration, user training, and ongoing support for maximum productivity.",
      features: [
        "Tenant configuration",
        "Security setup",
        "User provisioning",
        "Email migration",
        "Teams deployment",
        "Training programs"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Enterprise-grade security",
        "Seamless collaboration",
        "24/7 support"
      ],
      pricing: "Starting at $2,500",
      timeline: "1-3 weeks"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="secondary">
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Microsoft Power Platform <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your business with our comprehensive suite of Microsoft technologies. 
                From custom applications to complete digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service) => (
                <Card key={service.id} className="card-gradient shadow-card hover-lift">
                  <CardHeader className="space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-sm text-muted-foreground">Starting Price</div>
                        <div className="text-lg font-bold text-primary">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="text-lg font-bold text-foreground">{service.timeline}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full group" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-muted-foreground">
                Our experts will assess your current processes and recommend 
                the best Microsoft Power Platform solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-primary" asChild>
                  <Link to="/contact">
                    Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">
                    Learn About Our Process
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;