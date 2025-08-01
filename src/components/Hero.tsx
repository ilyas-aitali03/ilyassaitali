import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-slide-in-up">
            <span className="inline-block px-4 py-2 rounded-full glass border text-sm font-medium text-foreground-secondary">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-up [animation-delay:0.2s]">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text">Ilyas AIT ALI</span>
          </h1>

          {/* Quote */}
          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-up [animation-delay:0.4s]">
            "Turning technical challenges into seamless solutions, one connection at a time."
          </p>

          {/* Role and expertise */}
          <div className="mb-12 animate-slide-in-up [animation-delay:0.6s]">
            <p className="text-lg md:text-xl text-foreground-muted mb-4">
              Networking & IT Support Specialist
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
              {['Networking', 'IT Support', 'Client Service', 'Team Leadership'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full glass-card text-sm font-medium text-foreground"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-in-up [animation-delay:0.8s]">
            <Button 
              className="btn-primary group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="btn-glass group"
              onClick={() => {
                // Create a download link for CV
                const link = document.createElement('a');
                link.href = '/cv-ilyas-aitali.pdf'; // You can replace this with actual CV file
                link.download = 'Ilyas-AitAli-CV.pdf';
                link.click();
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-slide-in-up [animation-delay:1s]">
            <a
              href="https://github.com/ilyas-aitali03"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ilyassaitali03@gmail.com"
              className="glass-card p-3 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce cursor-pointer p-2 rounded-full glass-card hover:text-primary transition-colors animate-slide-in-up [animation-delay:1.2s]"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;