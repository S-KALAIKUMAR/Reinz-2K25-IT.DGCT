
import { memo } from 'react';
import { Phone, Mail, MapPin, Instagram , MessageCircle } from 'lucide-react';
import WhatsAppIcon from "./WhatsAppIcon";



export const ContactSection = memo(function ContactSection() {
  return (
    <section id="contact" className="py-16 w-full">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="chip mb-4 animate-on-scroll opacity-0">Contact</span>
          <h2 className="heading-lg mb-6 animate-on-scroll opacity-0">
            Get In Touch
          </h2>
          <p className="subtitle animate-on-scroll opacity-0">
            Have questions about the symposium? Reach out to us using the contact information below.
          </p>
        </div>
        
        {/* Faculty Coordinators */}




 
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Faculty Coordinators</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Ms.S.M.Nivetha, AP/IT</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">96291 40081</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">nivetha.it@dgct.ac.in</p>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Ms.J.Gulzar Begam, AP/IT</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">88256 11580</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">gulzarbegam.it@dgct.ac.in</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Student Coordinators */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Student Coordinators</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Mr.S.Sivaramakrishnan</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">86818 10801</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">sivasoundiran06@gmail.com</p>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Ms.A.V.Vaishnaavi</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">99445 12579</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">Vaishnaavivelaventhan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Info & Follow Us */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Location</h3>
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <MapPin className="text-primary mr-2" size={20} />
              <p className="text-muted-foreground">
                Dhirajlal Gandhi College of Technology,
                Salem, Tamil Nadu, India
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          
<div className="flex justify-center space-x-8">
  <a href="https://chat.whatsapp.com/G9EsjA1hWVdEkTEdhp0RLN" target="_blank" rel="noopener noreferrer"
    className="flex flex-col items-center transition-transform hover:scale-110">
    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
      {/* Use custom size (e.g., 32px) */}
      <WhatsAppIcon className="text-purple-700" size={32} />
    </div>
    <span className="text-gray-700">WhatsApp</span>
  </a>
</div>


          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/elite_dgct?igsh=YXJ6bWU4MXdjbXNh" target="_blank" rel="noopener noreferrer" 
              className="flex flex-col items-center transition-transform hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Instagram className="text-primary" size={20} />
              </div>
              <span className="text-sm text-muted-foreground">elite_dgct</span>
            </a>
            
            <a href="elite@dgct.ac.in" 
              className="flex flex-col items-center transition-transform hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Mail className="text-primary" size={20} />
              </div>
              <span className="text-sm text-muted-foreground">elite@dgct.ac.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
