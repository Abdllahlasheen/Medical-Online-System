import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart, Stethoscope, UserCheck, Shield, Clock, Star,
  ArrowRight, Activity, Users, CalendarCheck, Building2
} from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Patients Served" },
  { icon: Stethoscope, value: "500+", label: "Expert Doctors" },
  { icon: UserCheck, value: "1,200+", label: "Qualified Nurses" },
  { icon: CalendarCheck, value: "50,000+", label: "Appointments" },
];

const features = [
  {
    icon: UserCheck,
    title: "Book a Nurse",
    description: "Request qualified nurses for home or center-based medical care with flexible scheduling.",
    color: "text-medical-green",
    bg: "bg-accent/10",
  },
  {
    icon: Stethoscope,
    title: "Find a Doctor",
    description: "Browse specialists, view profiles, and book appointments with top-rated physicians.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access healthcare services around the clock with real-time booking and status tracking.",
    color: "text-medical-green",
    bg: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your medical data is protected with industry-standard encryption and privacy measures.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Patient", text: "MedOnline made it incredibly easy to find the right specialist and book an appointment in minutes.", rating: 5 },
  { name: "Dr. Ahmed Hassan", role: "Cardiologist", text: "The platform streamlines my practice management and helps me serve patients more efficiently.", rating: 5 },
  { name: "Emily Chen", role: "Home Care Patient", text: "Booking a nurse for my mother's post-surgery care was seamless. Excellent service quality!", rating: 5 },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 medical-gradient opacity-[0.03]" />
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Activity className="w-4 h-4" />
                Trusted Healthcare Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
                Your Health, <br />
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Connect with expert doctors, book qualified nurses, and manage your healthcare journey — all in one seamless platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="medical-gradient border-0 text-base px-8 hover-lift" asChild>
                  <Link to="/services">
                    Book a Nurse <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 hover-lift" asChild>
                  <Link to="/services">Find a Doctor</Link>
                </Button>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative animate-fade-up-delay-2 hidden lg:block">
              <div className="w-full aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-primary/5 animate-float" />
                <div className="absolute inset-8 rounded-full bg-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl medical-gradient flex items-center justify-center shadow-2xl">
                    <Heart className="w-24 h-24 text-primary-foreground" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-12 right-8 w-16 h-16 rounded-2xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-16 left-4 w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <div className="absolute top-1/2 right-0 w-12 h-12 rounded-lg bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Activity className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 medical-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-primary-foreground animate-fade-up">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-extrabold">{stat.value}</div>
                <div className="text-sm opacity-70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">MedOnline</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience healthcare the way it should be — accessible, efficient, and patient-centered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={feature.title} className={`hover-lift border-0 shadow-md animate-fade-up-delay-${Math.min(i, 3)}`}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mx-auto`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People <span className="text-primary">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">Real feedback from our patients and healthcare professionals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover-lift border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="medical-gradient rounded-3xl p-12 lg:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
              Join thousands of patients and healthcare professionals on MedOnline.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8 hover-lift" asChild>
                <Link to="/login">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
