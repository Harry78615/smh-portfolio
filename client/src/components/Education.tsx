import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Masters in Cyber Security",
      institution: "Advanced degree focusing on cybersecurity, network security, and digital forensics.",
      description: "Comprehensive graduate program covering advanced cybersecurity concepts, network security protocols, digital forensics, and risk management. Designed to enhance skills in protecting organizational digital assets and managing cyber threats.",
      status: "Starting Sept 2025",
      statusColor: "bg-yellow-100 text-yellow-700",
      borderColor: "border-primary"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Hazara University",
      description: "Comprehensive computer science education with focus on software development, system design, algorithms, and database management. Graduated with strong foundation in programming, data structures, and software engineering principles.",
      status: "Completed 2019",
      statusColor: "bg-green-100 text-green-700",
      borderColor: "border-gray-300"
    }
  ];

  const certifications = [
    {
      name: "CCNA Certification",
      description: "Cisco Certified Network Associate",
      status: "Exam: Aug 22, 2025",
      statusColor: "bg-yellow-100 text-yellow-700",
      bgColor: "bg-yellow-50"
    },
    {
      name: "Full Stack Web Development",
      description: "Comprehensive bootcamp program",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
      bgColor: "bg-green-50"
    },
    {
      name: "Python for Machine Learning",
      description: "Advanced Python programming",
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      name: "React.js Development",
      description: "Modern front-end framework",
      status: "Completed",
      statusColor: "bg-purple-100 text-purple-700",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 relative bg-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`border-l-4 ${edu.borderColor} pl-4`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <span className={`${edu.statusColor} px-2 py-1 rounded-full text-xs self-start`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Training */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Certifications & Training</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 ${cert.bgColor} rounded-lg`}>
                    <div>
                      <h4 className="font-medium text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`${cert.statusColor} px-2 py-1 rounded-full text-xs`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
