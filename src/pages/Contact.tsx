import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Building
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      value: "info@tamyeez.ca",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      value: "Toronto, ON, Canada",
      description: "Remote consultations available"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "< 24 hours",
      description: "We reply to all inquiries quickly"
    }
  ];

  const benefits = [
    "Free 30-minute consultation",
    "Custom solution assessment",
    "ROI projection report",
    "No obligation proposal"
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
                Get In Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Let's <span className="gradient-text">Transform</span> Your Business
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to reduce costs by 60% and boost productivity by 40%? 
                Schedule your free consultation today and discover how Microsoft Power Platform can revolutionize your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Get Your Free Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            placeholder="Your Company Inc."
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interest *</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="power-platform">Power Platform Development</SelectItem>
                              <SelectItem value="crm">CRM & Case Management</SelectItem>
                              <SelectItem value="automation">Process Automation</SelectItem>
                              <SelectItem value="documents">Document Management</SelectItem>
                              <SelectItem value="sharepoint">SharePoint Migration</SelectItem>
                              <SelectItem value="microsoft-365">Microsoft 365 Setup</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="budget">Project Budget</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-5k">Under $5,000</SelectItem>
                              <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                              <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                              <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                              <SelectItem value="over-50k">Over $50,000</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Preferred Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you want to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                            <SelectItem value="planning">Just planning ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your current challenges, goals, and what you're hoping to achieve..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full glow-primary">
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Benefits */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-primary font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Consultation Benefits */}
                <Card className="card-gradient shadow-card">
                  <CardHeader>
                    <CardTitle>What You Get</CardTitle>
                    <CardDescription>
                      Every consultation includes these valuable insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="card-gradient shadow-card">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="font-semibold text-foreground">Prefer to call?</h3>
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      (555) 123-4567
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Available Mon-Fri, 8am-6pm EST
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How long does implementation take?</h4>
                  <p className="text-muted-foreground text-sm">
                    Most projects take 2-8 weeks depending on complexity. We provide detailed timelines during consultation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you provide training?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! We include comprehensive user training and documentation with every implementation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What's included in support?</h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 technical support, regular health checks, and ongoing optimization recommendations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How do you ensure data security?</h4>
                  <p className="text-muted-foreground text-sm">
                    We follow Microsoft's enterprise-grade security standards and compliance frameworks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Can you integrate with existing systems?</h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We specialize in seamless integrations with popular business applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What if I'm not satisfied?</h4>
                  <p className="text-muted-foreground text-sm">
                    We guarantee your satisfaction. If you're not happy, we'll make it right at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;