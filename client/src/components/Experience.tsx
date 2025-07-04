import { Briefcase, ProjectorIcon, Code, Laptop } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Digital Transformation Training Specialist",
      company: "TUV Rheinland Arabia LLC",
      period: "May 2024 - Present",
      status: "Current",
      description: "Leading IT operations and digital transformation initiatives at NAVA Academy. Managing comprehensive technology infrastructure including LMS, CRM, websites, and simulator setups.",
      skills: ["Microsoft 365 Administration", "Network Infrastructure", "Vendor Management", "SolidWorks"],
      icon: Briefcase,
      color: "primary"
    },
    {
      id: 2,
      title: "Software Project Manager",
      company: "IT Bridge Consulting Services",
      period: "January 2023 - April 2024",
      description: "Managed software development projects with focus on requirement engineering, work breakdown, and cross-functional team collaboration. Delivered high-quality solutions through effective project management methodologies.",
      skills: ["Project Management", "Requirement Engineering", "Team Leadership", "Cross-functional Collaboration"],
      icon: ProjectorIcon,
      color: "accent"
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Codify (Private) Limited",
      period: "January 2021 - December 2022",
      description: "Demonstrated professional competency and dedication in software development. Delivered projects with utmost sincerity while maintaining high code quality standards.",
      skills: ["Software Development", "Code Quality", "Team Collaboration"],
      icon: Code,
      color: "green-600"
    },
    {
      id: 4,
      title: "Software Engineer I",
      company: "Uforia Infotech Solutions",
      period: "February 2019 - December 2020",
      description: "Developed web-based applications using modern technologies. Established foundation in professional software development with focus on front-end technologies.",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Web Development"],
      icon: Laptop,
      color: "orange-600"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary text-white";
      case "accent":
        return "bg-accent text-white";
      case "green-600":
        return "bg-green-600 text-white";
      case "orange-600":
        return "bg-orange-600 text-white";
      default:
        return "bg-primary text-white";
    }
  };

  const getSkillColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-700",
      "bg-purple-100 text-purple-700",
      "bg-green-100 text-green-700",
      "bg-orange-100 text-orange-700"
    ];
    return colors[index] || "bg-blue-100 text-blue-700";
  };

  return (
    <section id="experience" className="py-16 bg-white relative bg-dots">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12 fade-in">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${getColorClasses(exp.color)}`}>
                  <exp.icon size={24} />
                </div>
                <div className="ml-8 glass-effect rounded-xl p-6 flex-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {exp.status && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.status}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm ${getSkillColor(index)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
