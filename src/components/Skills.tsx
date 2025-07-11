import { Network, Headphones, Users, MessageCircle, Server, Shield, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Server,
      skills: [
        { name: "Network Configuration", level: 85 },
        { name: "IT Support & Troubleshooting", level: 90 },
        { name: "System Administration", level: 75 },
        { name: "Hardware Diagnostics", level: 80 }
      ]
    },
    {
      title: "Client & Communication",
      icon: MessageCircle,
      skills: [
        { name: "Client Service", level: 95 },
        { name: "Technical Communication", level: 88 },
        { name: "Problem Resolution", level: 92 },
        { name: "Team Coordination", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "POS Systems", level: 90 },
        { name: "Inventory Management", level: 85 },
        { name: "Network Monitoring", level: 80 },
        { name: "Security Protocols", level: 75 }
      ]
    }
  ];

  const certifications = [
    { name: "Network+", status: "Pursuing", icon: Network },
    { name: "Customer Service Excellence", status: "Completed", icon: Headphones },
    { name: "Team Leadership", status: "Completed", icon: Users },
    { name: "IT Security Fundamentals", status: "Pursuing", icon: Shield }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-foreground-muted">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="glass-card">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Certifications & <span className="gradient-accent-text">Training</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="text-center p-6 rounded-xl bg-background-secondary/50 hover:bg-background-tertiary/50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  cert.status === 'Completed' 
                    ? 'bg-success/20 text-success' 
                    : 'bg-warning/20 text-warning'
                }`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Network Troubleshooting', 'Customer Relations', 'Technical Documentation',
              'System Monitoring', 'Inventory Control', 'Process Optimization',
              'Cross-functional Collaboration', 'Problem Analysis', 'Solution Implementation'
            ].map((competency, index) => (
              <span
                key={competency}
                className="px-4 py-2 rounded-full glass border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;