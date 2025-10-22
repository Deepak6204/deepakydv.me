
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "work.deepak04@gmail.com",
      href: "mailto:work.deepak04@gmail.com"
    },
    {
      icon: Mail,
      label: "Academic Email",
      value: "deepak_2022bcse035@nitsri.ac.in",
      href: "mailto:deeepak_2022bcse035@nitsri.ac.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-94511 32953",
      href: "tel:+919451132953"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "NIT Srinagar, J&K, India",
      href: "https://maps.app.goo.gl/D3RCg97kLXrDbAsh9"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Deepak6204",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deepak-yadav-11d60204/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-gray/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-blue mb-4">Contact Information</h3>
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-blue/20 rounded-lg flex items-center justify-center">
                    <contact.icon className="text-cyan-blue" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-gray text-sm">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-light-gray hover:text-cyan-blue transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-light-gray">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Message */}
            <div className="bg-rich-black rounded-lg p-6 border border-slate-gray/20">
              <h3 className="text-xl font-semibold text-cyan-blue mb-4">Quick Message</h3>
              <p className="text-slate-gray mb-6">
                Looking for collaboration opportunities or have questions about my work? 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:work.deepak04@gmail.com"
                  className="block w-full bg-cyan-blue text-rich-black py-3 px-6 rounded-lg font-semibold text-center hover:bg-electric-blue transition-colors duration-300"
                >
                  Send Email
                </a>
                
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-gray/20 rounded-lg flex items-center justify-center text-slate-gray ${social.color} transition-colors duration-300`}
                      title={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Academic Info */}
          <div className="text-center bg-rich-black rounded-lg p-6 border border-slate-gray/20">
            <p className="text-slate-gray mt-2">
              National Institute of Technology, Srinagar • Computer Science & Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
