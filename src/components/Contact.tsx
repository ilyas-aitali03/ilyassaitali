import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:ilyassaitali03@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with the message pre-filled. You can also contact me directly at ilyassaitali03@gmail.com",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ilyassaitali03@gmail.com",
      href: "mailto:ilyassaitali03@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 688972173",
      href: "tel:+212688972173",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Laayoune",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ilyas-aitali03",
      color: "text-foreground hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-foreground hover:text-secondary"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/212688972173",
      color: "text-foreground hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Ready to connect? I'm always open to discussing new opportunities, 
            collaborations, or just having a great conversation about technology.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's <span className="gradient-accent-text">Connect</span>
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                I'm currently seeking new opportunities in IT support, networking, 
                and technical customer service. Whether you're looking to hire, 
                collaborate, or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 glass-card hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-${contact.color} group-hover:shadow-glow transition-all duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </p>
                    <p className="text-foreground-secondary">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card hover:shadow-glow transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card bg-primary/5 border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                Currently Available
              </h4>
              <p className="text-foreground-secondary text-sm">
                I'm actively looking for new opportunities and typically respond 
                to messages within 24 hours. Let's discuss how I can contribute 
                to your team's success.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="glass-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="glass-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Job Opportunity / Collaboration / General Inquiry"
                  required
                  className="glass-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the opportunity, project, or how I can help..."
                  rows={5}
                  required
                  className="glass-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-foreground-muted">
                Prefer email? Reach out directly at{' '}
                <a
                  href="mailto:ilyassaitali03@gmail.com"
                  className="text-primary hover:underline"
                >
                  ilyassaitali03@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;