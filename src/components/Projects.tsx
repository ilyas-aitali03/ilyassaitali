import { ExternalLink, Github, Network, Monitor, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Network Infrastructure Setup",
      description: "Designed and implemented a complete home network infrastructure with multiple VLANs, security protocols, and monitoring systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      technologies: ["Cisco", "VLAN", "Firewall", "Network Monitoring"],
      category: "Networking",
      icon: Network,
      features: [
        "Configured VLAN segmentation for security",
        "Implemented firewall rules and access controls",
        "Set up network monitoring and alerting",
        "Documented network topology and procedures"
      ],
      status: "Completed",
      color: "primary"
    },
    {
      title: "POS System Optimization",
      description: "Streamlined Point of Sale operations at BIM, reducing transaction times and improving customer experience through system optimization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["POS Systems", "Inventory Management", "Process Optimization"],
      category: "System Administration",
      icon: Monitor,
      features: [
        "Analyzed current workflow bottlenecks",
        "Optimized inventory synchronization",
        "Reduced average transaction time by 30%",
        "Trained team on new procedures"
      ],
      status: "Ongoing",
      color: "secondary"
    },
    {
      title: "IT Security Assessment",
      description: "Conducted comprehensive security assessment for small business networks, identifying vulnerabilities and implementing protective measures.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["Security Auditing", "Vulnerability Assessment", "Risk Management"],
      category: "Security",
      icon: Shield,
      features: [
        "Performed network vulnerability scans",
        "Implemented security best practices",
        "Created incident response procedures",
        "Provided security awareness training"
      ],
      status: "Completed",
      color: "accent"
    },
    {
      title: "Customer Database Management",
      description: "Developed and maintained customer database system for improving service delivery and tracking customer interactions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Database Management", "Customer Relations", "Data Analysis"],
      category: "Data Management",
      icon: Database,
      features: [
        "Designed efficient database schema",
        "Implemented data backup and recovery",
        "Created customer service tracking system",
        "Generated reports for management insights"
      ],
      status: "Completed",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A showcase of my technical projects and real-world problem-solving experience
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group hover:shadow-glow transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completed' 
                      ? 'bg-success/20 text-success border-success/30' 
                      : 'bg-warning/20 text-warning border-warning/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-lg glass">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(project.color)}`}>
                    {project.category}
                  </span>
                </div>

                <p className="text-foreground-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-background-tertiary text-sm font-medium text-foreground-secondary border border-border hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-glass flex-1 group/btn"
                    onClick={() => {
                      // Create modal or detailed view for project
                      alert(`Viewing details for: ${project.title}\n\nFeatures:\n${project.features.join('\n')}`);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-glass"
                    onClick={() => {
                      window.open('https://github.com/ilyas-aitali03', '_blank');
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center glass-card">
          <h3 className="text-2xl font-bold mb-4">
            More <span className="gradient-accent-text">Projects</span>
          </h3>
          <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and learning opportunities. 
            Check back regularly for updates on my latest technical endeavors.
          </p>
          <Button 
            className="btn-primary"
            onClick={() => {
              window.open('https://github.com/ilyas-aitali03', '_blank');
            }}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;