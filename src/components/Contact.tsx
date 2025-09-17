
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Check if we're in development or if Netlify forms aren't available
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Development mode - simulate success
        setTimeout(() => {
          toast({
            title: "Development Mode",
            description: "Form submission simulated. Deploy to Netlify to enable real form handling.",
          });
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsSubmitting(false);
        }, 1000);
        return;
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you as soon as possible.",
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);

      // Fallback to mailto if Netlify forms fail
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:adejolaayokanmi90@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      toast({
        title: "Opening email client",
        description: "Netlify forms not available. Opening your email client as fallback.",
      });

      window.location.href = mailtoLink;

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium tracking-wide text-primary">
                <AnimatedText
                  text="Contact Me"
                  once
                />
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
              <AnimatedText
                text="Let's work together"
                once
                delay={200}
              />
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg">
              <AnimatedText
                text="Have a project in mind or want to discuss opportunities? I'm currently available for freelance work and open to full-time positions."
                once
                delay={400}
              />
            </p>

            <div className={cn(
              "space-y-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-4"
            )}>
              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <Mail strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">adejolaayokanmi90@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <Phone strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">(+234) 912-777-2141</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <MapPin strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Abuja, Federal capital territory, Nigeria</p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
              </div>
            </div>
          </div>

          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={cn(
                "bg-white p-8 rounded-xl shadow-sm border border-border transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"
              )}
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium transition-all duration-200 hover:opacity-90 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
