import { FileSpreadsheet, Mail, Calendar, LayoutGrid, Video, MessageSquare, CheckSquare, Clock } from "lucide-react";

const workSamples = [
  { title: "Organized Spreadsheet Template", desc: "Custom tracking spreadsheet with automated formulas for client project management using Google Sheets.", icon: FileSpreadsheet, tool: "Google Workspace", color: "bg-lavender-light" },
  { title: "Inbox Management System", desc: "Email categorization and filtering system in Gmail that reduced response time by 60%.", icon: Mail, tool: "Gmail", color: "bg-secondary" },
  { title: "Calendar Management", desc: "Multi-timezone scheduling and meeting coordination using Google Calendar and Calendly.", icon: Calendar, tool: "Google Calendar & Calendly", color: "bg-accent" },
  { title: "Project Task Board", desc: "Organized project workflows with task assignments, deadlines, and progress tracking in Asana.", icon: CheckSquare, tool: "Asana", color: "bg-muted" },
  { title: "Team Communication Hub", desc: "Set up organized Slack channels, automated notifications, and integrated workflow bots.", icon: MessageSquare, tool: "Slack", color: "bg-lavender-light" },
  { title: "Virtual Meeting Coordination", desc: "Scheduled and managed recurring Zoom meetings with agendas, recordings, and follow-ups.", icon: Video, tool: "Zoom", color: "bg-secondary" },
  { title: "Document & File Organization", desc: "Structured shared drives, templates, and version-controlled documents in Microsoft 365.", icon: LayoutGrid, tool: "Microsoft 365", color: "bg-accent" },
  { title: "Appointment Scheduling System", desc: "Configured Calendly booking pages with buffer times, availability rules, and integrations.", icon: Clock, tool: "Calendly", color: "bg-muted" },
];

const WorkSamplesSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">Work Samples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workSamples.map((s) => (
          <div key={s.title} className="glass-card hover:shadow-soft-lg transition-shadow">
            <div className={`h-28 ${s.color} rounded-xl mb-4 flex items-center justify-center`}>
              <s.icon className="w-10 h-10 text-primary/40" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1 block">{s.tool}</span>
            <h3 className="font-serif text-base font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSamplesSection;
