import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Stethoscope, Home, Building2, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Nurse Booking",
    description: "Request qualified nurses for post-surgery care, elderly care, wound care, and more.",
    features: ["Select care type", "Choose date & time", "Home or center-based", "Real-time tracking"],
    color: "text-medical-green",
    bg: "bg-accent/10",
    gradient: "medical-gradient-green",
  },
  {
    icon: Stethoscope,
    title: "Doctor Appointments",
    description: "Browse specialists, view profiles, and book appointments with top-rated physicians.",
    features: ["Browse by specialization", "View doctor profiles", "Select time slots", "Online payment"],
    color: "text-primary",
    bg: "bg-primary/10",
    gradient: "medical-gradient",
  },
  {
    icon: Home,
    title: "Home Care",
    description: "Receive professional medical care in the comfort of your own home.",
    features: ["Personalized care plans", "Qualified professionals", "Flexible scheduling", "Follow-up support"],
    color: "text-medical-green",
    bg: "bg-accent/10",
    gradient: "medical-gradient-green",
  },
  {
    icon: Building2,
    title: "Center Care",
    description: "Visit our partner medical centers for comprehensive healthcare services.",
    features: ["State-of-art facilities", "Multi-specialty care", "Walk-in & scheduled", "Insurance support"],
    color: "text-primary",
    bg: "bg-primary/10",
    gradient: "medical-gradient",
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-up">Our Services</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto animate-fade-up-delay-1">
            Comprehensive healthcare solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover-lift border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${service.gradient} p-6 flex items-center gap-4`}>
                    <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground">{service.title}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className={`w-4 h-4 ${service.color}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <Link to="/login">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
