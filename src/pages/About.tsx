import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Target, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const stats = [
    { number: "50+", label: "Successful Projects" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "60%", label: "Average Cost Savings" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on measurable business outcomes and ROI for every project."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Your data security and compliance are our top priorities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Partnership",
      description: "We become an extension of your team, not just a vendor."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Microsoft certified experts delivering world-class solutions."
    }
  ];

  const certifications = [
    "Microsoft Certified: Power Platform Developer Associate",
    "Microsoft Certified: Power Platform Functional Consultant Associate",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft 365 Certified: Enterprise Administrator Expert",
    "Microsoft Certified: Security, Compliance, and Identity Fundamentals"
  ];

  const testimonials = [
    {
      quote: "Tamyeez transformed our manual approval processes into automated workflows. We've saved countless hours and eliminated errors completely.",
      author: "Sarah Mitchell",
      role: "Operations Director",
      company: "TechStart Inc."
    },
    {
      quote: "The SharePoint migration was seamless. Zero downtime and our team loves the modern interface. Best technology decision we've made.",
      author: "Michael Chen",
      role: "IT Manager",
      company: "Growth Solutions"
    },
    {
      quote: "Their Power Platform expertise is exceptional. The custom CRM they built has increased our sales efficiency by 40%.",
      author: "Jennifer Davis",
      role: "Sales Director",
      company: "ProServe Corp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">
                  About Tamyeez
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Your Trusted <span className="gradient-text">Microsoft Partner</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We specialize in transforming businesses through Microsoft Power Platform solutions. 
                  Our certified experts help companies reduce costs, boost productivity, and achieve 
                  digital transformation goals.
                </p>
                <Button size="lg" className="glow-primary" asChild>
                  <Link to="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Tamyeez team working on Microsoft solutions" 
                  className="rounded-2xl shadow-elevated w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Our <span className="gradient-text">Mission</span> & Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe technology should empower businesses, not complicate them. 
                Our mission is to make enterprise-grade Microsoft solutions accessible to every business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value) => (
                <Card key={value.title} className="card-gradient shadow-card hover-lift text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="card-gradient shadow-card">
              <CardContent className="p-8 lg:p-12 text-center space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  "Empowering businesses through intelligent automation and digital transformation"
                </h3>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  We don't just implement technology – we transform how you work. Every solution we deliver 
                  is designed to make your team more productive, your processes more efficient, and your 
                  business more profitable.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expertise & Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Microsoft <span className="gradient-text">Certified</span> Experts
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our team holds the highest Microsoft certifications, ensuring you get 
                    world-class expertise and support for your digital transformation journey.
                  </p>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-2">Microsoft Partnership Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Direct access to Microsoft technical support</li>
                    <li>• Latest product updates and previews</li>
                    <li>• Preferred licensing and pricing</li>
                    <li>• Advanced training and resources</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="card-gradient shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Why Experience Matters</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Project Success Rate</span>
                          <span className="text-sm font-medium text-foreground">99%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-[99%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                          <span className="text-sm font-medium text-foreground">95%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-secondary h-2 rounded-full w-[95%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Client Retention</span>
                          <span className="text-sm font-medium text-foreground">98%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-[98%]" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">100% Satisfaction Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      We stand behind our work. If you're not completely satisfied, 
                      we'll make it right at no additional cost.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                What Our <span className="gradient-text">Clients</span> Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from businesses we've helped transform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-gradient shadow-card hover-lift">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="card-gradient shadow-elevated glow-primary">
              <CardContent className="p-8 lg:p-12 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join the 50+ businesses that trust Tamyeez for their Microsoft Power Platform needs. 
                  Let's discuss how we can help you achieve your digital transformation goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="glow-primary" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;