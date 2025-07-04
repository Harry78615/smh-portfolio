import { Code, Server, Zap, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Development",
      icon: Code,
      color: "blue",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Python", "Full Stack Development"]
    },
    {
      title: "IT Operations",
      icon: Server,
      color: "green",
      skills: ["Microsoft 365 Admin", "Network Infrastructure", "System Administration", "Vendor Management", "Technical Support"]
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      color: "purple",
      skills: ["Power Automate", "Power BI", "LMS Management", "CRM Systems", "Process Automation"]
    },
    {
      title: "Specialized Tools",
      icon: Wrench,
      color: "orange",
      skills: ["SolidWorks", "Lucas Nuella Simulators", "Project Management", "Machine Learning", "CCNA (In Progress)"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          skillBg: "bg-blue-50",
          skillText: "text-blue-700"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          skillBg: "bg-green-50",
          skillText: "text-green-700"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          skillBg: "bg-purple-50",
          skillText: "text-purple-700"
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          skillBg: "bg-orange-50",
          skillText: "text-orange-700"
        };
      default:
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          skillBg: "bg-blue-50",
          skillText: "text-blue-700"
        };
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 relative tech-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={index} className="glass-effect rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className={`${colors.text} text-xl`} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`skill-badge ${colors.skillBg} ${colors.skillText} px-3 py-1 rounded-full text-sm`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
