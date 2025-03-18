
import { memo } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

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
              <h4 className="text-lg font-medium mb-3">Faculty Coordinator Name</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">9597604228</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">varshanadevi@ksrct.ac.in</p>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Faculty Coordinator Name</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">9597604228</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">varshanadevi@ksrct.ac.in</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Student Coordinators */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Student Coordinators</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Alyushra A</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">6369548280</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">alyushra96@gmail.com</p>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll opacity-0">
              <h4 className="text-lg font-medium mb-3">Peranandha KL</h4>
              <div className="flex items-center mb-2">
                <Phone className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">8148537603</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <p className="text-muted-foreground">peranandha17@gmail.com</p>
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
            <a href="https://instagram.com/symposium" target="_blank" rel="noopener noreferrer" 
              className="flex flex-col items-center transition-transform hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Instagram className="text-primary" size={20} />
              </div>
              <span className="text-sm text-muted-foreground">@symposium</span>
            </a>
            
            <a href="mailto:symposium@dgct.ac.in" 
              className="flex flex-col items-center transition-transform hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Mail className="text-primary" size={20} />
              </div>
              <span className="text-sm text-muted-foreground">symposium@dgct.ac.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
