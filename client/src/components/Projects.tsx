import { GraduationCap, Cloud, Bot, Shield, GitBranch, Handshake } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TUV Academy Digital Infrastructure",
      description: "Comprehensive IT infrastructure management for NAVA Academy including LMS, CRM, and simulator systems integration.",
      tags: ["LMS", "CRM", "Network Setup"],
      period: "2024 - Present",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      bgColor: "from-blue-50 to-indigo-50",
      icon: GraduationCap,
      iconColor: "bg-primary text-white"
    },
    {
      title: "Microsoft 365 Enterprise Setup",
      description: "Complete Microsoft 365 administration and deployment across the organization with security and compliance configurations.",
      tags: ["SharePoint", "Teams", "Exchange"],
      period: "2024",
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700",
      bgColor: "from-green-50 to-emerald-50",
      icon: Cloud,
      iconColor: "bg-green-600 text-white"
    },
    {
      title: "Process Automation Suite",
      description: "Developed automated workflows using Power Automate and Power BI for streamlined operations and data analytics.",
      tags: ["Power Automate", "Power BI", "Analytics"],
      period: "2024",
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700",
      bgColor: "from-purple-50 to-violet-50",
      icon: Bot,
      iconColor: "bg-purple-600 text-white"
    },
    {
      title: "Cybersecurity Enhancement",
      description: "Led cybersecurity initiatives including security training programs and infrastructure hardening protocols.",
      tags: ["Security Training", "Infrastructure", "Compliance"],
      period: "2024",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      bgColor: "from-red-50 to-pink-50",
      icon: Shield,
      iconColor: "bg-red-600 text-white"
    },
    {
      title: "Enterprise Web Applications",
      description: "Developed and managed multiple web applications using React.js and modern JavaScript frameworks for various clients.",
      tags: ["React.js", "JavaScript", "Full Stack"],
      period: "2019-2023",
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700",
      bgColor: "from-orange-50 to-amber-50",
      icon: GitBranch,
      iconColor: "bg-orange-600 text-white"
    },
    {
      title: "Vendor Management Platform",
      description: "Implemented comprehensive vendor management system for streamlined procurement and relationship management.",
      tags: ["Procurement", "Management", "Automation"],
      period: "2024",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      bgColor: "from-gray-50 to-slate-50",
      icon: Handshake,
      iconColor: "bg-gray-600 text-white"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white relative bg-grid">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real-World Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card bg-gradient-to-br ${project.bgColor} rounded-xl p-6 shadow-sm`}
              >
                <div className={`w-12 h-12 ${project.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                  <project.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.period}</span>
                  <span className={`${project.statusColor} px-2 py-1 rounded-full text-xs`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
