import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Zap, 
  FileText, 
  Cloud, 
  Settings, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Power Platform Development",
      description: "Custom low-code applications that streamline your business processes and boost efficiency.",
      features: ["Custom Apps", "Low-Code Solutions", "Rapid Deployment", "Integration Ready"],
      link: "/services/power-platform"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "CRM & Case Management",
      description: "Centralize customer interactions and automate workflows to improve productivity.",
      features: ["Customer Centralization", "Automated Workflows", "Productivity Boost", "Microsoft Integration"],
      link: "/services/crm"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Process Automation",
      description: "Eliminate manual tasks and optimize workflows to reduce costs and errors.",
      features: ["Task Elimination", "Workflow Optimization", "Cost Reduction", "Error Prevention"],
      link: "/services/automation"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Management",
      description: "Secure, compliant document storage with easy search and collaboration features.",
      features: ["Secure Storage", "Easy Search", "Compliance Features", "Team Collaboration"],
      link: "/services/documents"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "SharePoint Migration",
      description: "Seamless cloud migration with zero downtime and modern experience features.",
      features: ["Zero Downtime", "Data Integrity", "Modern Experience", "Cloud Migration"],
      link: "/services/sharepoint"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Microsoft 365 Setup",
      description: "Complete implementation with user training, security configuration, and ongoing support.",
      features: ["Complete Setup", "User Training", "Security Config", "Ongoing Support"],
      link: "/services/microsoft-365"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need to design your first digital solution, automate processes, 
            or get a complete Microsoft 365 setup - our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-gradient shadow-card hover-lift group cursor-pointer transition-all duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors" 
                  asChild
                >
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;