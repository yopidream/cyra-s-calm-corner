import heroPortrait from "@/assets/hero-portrait.jpg";
import { Mail, Calendar, FileText, Search, Share2, Inbox, Send } from "lucide-react";
import { useState } from "react";
import ToolsSkillsSection from "@/components/ToolsSkillsSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";

const navLinks = ["About", "Services", "Skills", "Portfolio", "Contact"];

const services = [
  { icon: Inbox, title: "Email Management", desc: "Inbox zero strategies, filtering, and professional email correspondence." },
  { icon: Calendar, title: "Calendar Management", desc: "Scheduling, reminders, and meeting coordination across time zones." },
  { icon: FileText, title: "Data Entry & Document Organization", desc: "Accurate data entry, file management, and document formatting." },
  { icon: Search, title: "Online Research", desc: "In-depth research, competitor analysis, and data compilation." },
  { icon: Share2, title: "Social Media Assistance", desc: "Content scheduling, engagement tracking, and platform management." },
];

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:cyra.dimpoy@email.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-semibold text-foreground">Cyra Dimpoy</span>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">Hello, I'm Cyra</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              Executive Virtual<br />Assistant
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Helping busy professionals stay organized, efficient, and stress-free.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#services" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                View Services
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-soft-lg">
              <img src={heroPortrait} alt="Cyra Dimpoy - Executive Virtual Assistant" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-muted/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            I'm a detail-oriented Executive Virtual Assistant with a passion for helping professionals
            reclaim their time. With expertise in organization, administrative support, and digital tools,
            I bring reliability and precision to every task. My goal is to be the support system that
            allows you to focus on what truly matters — growing your business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card hover:shadow-soft-lg transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <ToolsSkillsSection />

      {/* Work Samples */}
      <WorkSamplesSection />

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-10">
            Ready to reclaim your time? Let's work together.
          </p>
          <form onSubmit={handleSubmit} className="glass-card space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Hire Me
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Or email me directly at <a href="mailto:cyra.dimpoy@email.com" className="text-primary hover:underline">cyra.dimpoy@email.com</a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-sm text-muted-foreground">© 2026 Cyra Dimpoy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
