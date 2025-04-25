import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";

const Header = () => {
  const activeSection = useActiveSection(["home", "about", "services", "portfolio", "contact"]);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="#home" 
              className={`hover:text-primary transition-colors ${activeSection === "home" ? "text-primary" : ""}`}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className={`hover:text-primary transition-colors ${activeSection === "about" ? "text-primary" : ""}`}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className={`hover:text-primary transition-colors ${activeSection === "services" ? "text-primary" : ""}`}
            >
              Services
            </Link>
            <Link 
              href="#portfolio" 
              className={`hover:text-primary transition-colors ${activeSection === "portfolio" ? "text-primary" : ""}`}
            >
              Portfolio
            </Link>
            <Link 
              href="#contact" 
              className={`hover:text-primary transition-colors ${activeSection === "contact" ? "text-primary" : ""}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 