import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-up">Contact Us</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto animate-fade-up-delay-1">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567", sub: "Mon-Fri 8am-6pm" },
                { icon: Mail, title: "Email", detail: "info@medonline.com", sub: "24/7 support" },
                { icon: MapPin, title: "Address", detail: "123 Health St", sub: "Medical City, MC 10001" },
                { icon: Clock, title: "Hours", detail: "Mon-Fri: 8am-6pm", sub: "Sat: 9am-2pm" },
              ].map((info) => (
                <Card key={info.title} className="hover-lift border-0 shadow-md">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{info.title}</h3>
                      <p className="text-sm text-foreground">{info.detail}</p>
                      <p className="text-xs text-muted-foreground">{info.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <Input placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  <Button type="submit" className="medical-gradient border-0 px-8">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
