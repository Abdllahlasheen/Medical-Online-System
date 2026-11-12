import { Heart, Target, Eye, Users, Award, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { icon: Heart, title: "Compassion", description: "We put patients first with empathetic, personalized care." },
  { icon: ShieldCheck, title: "Trust", description: "Transparent practices and data security you can rely on." },
  { icon: Award, title: "Excellence", description: "The highest standards in healthcare delivery and technology." },
  { icon: Users, title: "Collaboration", description: "Connecting patients, doctors, and nurses seamlessly." },
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Chief Medical Officer", initials: "SM" },
  { name: "James Cooper", role: "CEO & Founder", initials: "JC" },
  { name: "Dr. Aisha Rahman", role: "Head of Nursing", initials: "AR" },
  { name: "David Kim", role: "CTO", initials: "DK" },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-up">About MedOnline</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto animate-fade-up-delay-1">
            Transforming healthcare access through technology, compassion, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <Card className="hover-lift border-0 shadow-lg">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make quality healthcare accessible to everyone by connecting patients with qualified doctors and nurses through an intuitive, secure, and efficient digital platform.
              </p>
            </CardContent>
          </Card>
          <Card className="hover-lift border-0 shadow-lg">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual has seamless access to healthcare services — anytime, anywhere — empowered by technology and guided by empathy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="hover-lift border-0 shadow-md text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="hover-lift border-0 shadow-md text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full medical-gradient flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
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

export default AboutPage;
