export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Syed Muhammad Haris Shah</h3>
            <p className="text-gray-400">IT Operations & Digital Transformation Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Syed Muhammad Haris Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
