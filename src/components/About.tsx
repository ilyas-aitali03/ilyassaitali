import { User, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "I focus on delivering results that matter, always keeping the end goal in sight."
    },
    {
      icon: Heart,
      title: "People-First",
      description: "Building genuine connections and understanding client needs is at the heart of everything I do."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I thrive on finding creative solutions to technical challenges and streamlining processes."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed">
              <p>
                Hello! I'm Ilyas, a passionate IT professional with a strong foundation in networking, 
                technical support, and client service. My journey in technology has been driven by 
                curiosity and a genuine desire to help others navigate the digital world.
              </p>
              
              <p>
                Currently working at BIM as a Store Employee, I've honed my skills in client interaction, 
                inventory management, and team coordination. This role has taught me the importance of 
                clear communication and efficient problem-solving in fast-paced environments.
              </p>
              
              <p>
                When I'm not troubleshooting networks or helping clients, you'll find me exploring 
                new technologies, learning about emerging IT trends, or working on personal projects 
                that challenge my technical abilities.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="glass-card p-4 rounded-full">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Ready to Connect</h3>
                <p className="text-foreground-muted">Let's discuss how I can contribute to your team</p>
              </div>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              What Drives <span className="gradient-accent-text">Me</span>
            </h3>
            
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-foreground-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;