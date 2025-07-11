
import { Calendar, MapPin, Users, TrendingUp, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Store Employee",
      company: "BIM",
      location: "Morocco",
      period: "March 2025 – Present",
      type: "Current Position",
      description: "Handling diverse responsibilities in a fast-paced retail environment with focus on customer satisfaction and operational excellence.",
      image: "/lovable-uploads/3bd04cbd-991a-45f6-99ac-086a51ed1546.png",
      responsibilities: [
        "Managing and organizing store inventory",
        "Assisting customers and providing service", 
        "Operating POS (cash register)",
        "Working with team members efficiently",
        "Providing technical support for in-store systems",
        "Maintaining accurate records and reporting"
      ],
      skills: ["Client Service", "POS Systems", "Inventory Management", "Team Coordination", "Problem Solving"],
      achievements: [
        "Improved customer satisfaction through efficient service delivery",
        "Streamlined inventory processes for better accuracy",
        "Collaborated effectively in team-based projects"
      ]
    }
  ];

  const additionalExperience = [
    {
      title: "IT Support & Networking Projects",
      period: "2023 – 2024",
      description: "Personal and academic projects focusing on network configuration, troubleshooting, and system administration.",
      highlights: [
        "Configured home network infrastructure",
        "Troubleshot various hardware and software issues",
        "Implemented security protocols and monitoring systems",
        "Developed technical documentation and guides"
      ]
    },
    {
      title: "Customer Service Experience",
      period: "2022 – 2023",
      description: "Various customer-facing roles that developed strong communication and problem-solving skills.",
      highlights: [
        "Resolved customer inquiries and technical issues",
        "Maintained high satisfaction ratings",
        "Trained junior team members",
        "Implemented process improvements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my expertise
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8"></div>
        </div>

        {/* Current Position - Featured */}
        <div className="mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card relative overflow-hidden">
              {/* Current position badge */}
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                {exp.type}
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Company Info & Image */}
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <h4 className="text-xl font-semibold gradient-text mb-4">{exp.company}</h4>
                  </div>

                  {/* Work Photo */}
                  {exp.image && (
                    <div className="mb-6">
                      <img 
                        src={exp.image} 
                        alt="Working at BIM Store"
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-foreground-muted mt-2 text-center">
                        At work in BIM store
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground-secondary">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground-secondary">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h5 className="font-semibold mb-3">Key Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-foreground-secondary leading-relaxed text-lg">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-foreground-secondary"
                        >
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-foreground-secondary"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="gradient-accent-text">Experience</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalExperience.map((exp, index) => (
              <div
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                <div className="flex items-center gap-2 text-foreground-muted mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Career Goals */}
        <div className="mt-16 text-center glass-card">
          <h3 className="text-2xl font-bold mb-4">
            Looking <span className="gradient-text">Forward</span>
          </h3>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking opportunities to advance my career in IT support, networking, 
            or technical customer service roles where I can leverage my experience and continue 
            growing my technical expertise while making meaningful contributions to team success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
