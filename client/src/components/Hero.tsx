import { User, Download } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a simple resume PDF or link to download
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Haris_Shah_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden bg-pattern">
      <div className="absolute inset-0 floating-shapes"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/profile.jpg" 
              alt="Syed Muhammad Haris Shah" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Syed Muhammad Haris Shah
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            IT Operations & Digital Transformation Specialist
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              TUV Rheinland Arabia LLC
            </span>
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Digital Transformation
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              IT Operations
            </span>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experienced IT professional specializing in digital transformation, network infrastructure, and IT operations management. 
            Currently leading technology initiatives at TUV Rheinland Arabia LLC while pursuing advanced certifications in networking and cybersecurity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Get In Touch
            </button>
            <button
              onClick={downloadResume}
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
