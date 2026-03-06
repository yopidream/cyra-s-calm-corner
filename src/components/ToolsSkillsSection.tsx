import googleWorkspace from "@/assets/icons/google-workspace.png";
import asana from "@/assets/icons/asana.png";
import microsoft365 from "@/assets/icons/microsoft-365.png";
import calendly from "@/assets/icons/calendly.png";
import googleCalendar from "@/assets/icons/google-calendar.png";
import gmail from "@/assets/icons/gmail.png";
import zoom from "@/assets/icons/zoom.png";
import slack from "@/assets/icons/slack.png";
import canva from "@/assets/icons/canva.png";
import { ClipboardList, Clock, Eye, Cpu, FolderOpen } from "lucide-react";

const appTools = [
  { name: "Google Workspace", icon: googleWorkspace },
  { name: "Asana", icon: asana },
  { name: "Microsoft 365", icon: microsoft365 },
  { name: "Calendly", icon: calendly },
  { name: "Google Calendar", icon: googleCalendar },
  { name: "Gmail", icon: gmail },
  { name: "Zoom", icon: zoom },
  { name: "Slack", icon: slack },
  { name: "Canva", icon: canva },
];

const skills = [
  { name: "Data Entry", icon: ClipboardList },
  { name: "Time Management", icon: Clock },
  { name: "Detail Oriented", icon: Eye },
  { name: "Technical Proficiency", icon: Cpu },
  { name: "Organization Skills", icon: FolderOpen },
];

const ToolsSkillsSection = () => (
  <section id="skills" className="section-padding bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">Tools & Skills</h2>

      {/* App Tools */}
      <h3 className="text-lg font-serif font-semibold text-foreground mb-6 text-center">Applications</h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-5 mb-12">
        {appTools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center group-hover:border-primary/40 transition-colors overflow-hidden">
              <img src={tool.icon} alt={tool.name} className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-muted-foreground text-center leading-tight">{tool.name}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h3 className="text-lg font-serif font-semibold text-foreground mb-6 text-center">Core Skills</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill.name} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-soft hover:border-primary/40 transition-colors inline-flex items-center gap-2">
            <skill.icon className="w-4 h-4 text-primary" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSkillsSection;
