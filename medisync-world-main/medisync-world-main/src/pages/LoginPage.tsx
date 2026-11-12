import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, User, Stethoscope, UserCheck, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Role = "patient" | "doctor" | "nurse" | "admin";

const roles: { value: Role; label: string; icon: React.ElementType }[] = [
  { value: "patient", label: "Patient", icon: User },
  { value: "doctor", label: "Doctor", icon: Stethoscope },
  { value: "nurse", label: "Nurse", icon: UserCheck },
  { value: "admin", label: "Admin", icon: ShieldCheck },
];

const LoginPage = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<Role>("patient");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: `${mode === "login" ? "Logged in" : "Signed up"} as ${role}` });
    const routes: Record<Role, string> = {
      patient: "/patient",
      doctor: "/doctor",
      nurse: "/nurse",
      admin: "/admin",
    };
    navigate(routes[role]);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8 animate-fade-up">
        {/* Logo */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl medical-gradient flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome to MedOnline</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {mode === "login" ? "Sign in to your account" : "Create a new account"}
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-6 space-y-6">
            {/* Login / Signup toggle */}
            <Tabs value={mode} onValueChange={(v) => setMode(v as "login" | "signup")} className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="login">Log In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Role selector */}
            <div>
              <Label className="text-xs text-muted-foreground mb-2 block">Select your role</Label>
              <div className="grid grid-cols-4 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-all ${
                      role === r.value
                        ? "bg-primary/10 text-primary border-2 border-primary"
                        : "bg-muted text-muted-foreground border-2 border-transparent hover:bg-muted/80"
                    }`}
                  >
                    <r.icon className="w-5 h-5" />
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
              )}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              {mode === "signup" && (
                <div>
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" placeholder="Confirm your password" required />
                </div>
              )}
              <Button type="submit" className="w-full medical-gradient border-0">
                {mode === "login" ? "Sign In" : "Create Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
