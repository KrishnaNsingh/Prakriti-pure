import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function AboutPage() {
  const location = useLocation();

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  const blogPosts = [
    {
      id: 1,
      title: "10 Natural Ingredients for Glowing Skin",
      excerpt: "Discover the power of nature with these amazing ingredients that will transform your skincare routine...",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      date: "March 15, 2025",
      category: "Skincare"
    },
    {
      id: 2,
      title: "The Ultimate Summer Makeup Guide",
      excerpt: "Stay fresh and radiant all summer long with these essential makeup tips and product recommendations...",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      date: "March 10, 2025",
      category: "Makeup"
    },
    {
      id: 3,
      title: "Sustainable Beauty: Our Commitment",
      excerpt: "Learn about our journey towards creating eco-friendly beauty products that are good for you and the planet...",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      date: "March 5, 2025",
      category: "Lifestyle"
    }
  ];

  // const careerPositions = [
  //   {
  //     id: 1,
  //     title: "Senior Product Manager",
  //     department: "Product",
  //     location: "Mumbai, India",
  //     type: "Full-time"
  //   },
  //   {
  //     id: 2,
  //     title: "Beauty Content Creator",
  //     department: "Marketing",
  //     location: "Bangalore, India",
  //     type: "Full-time"
  //   },
  //   {
  //     id: 3,
  //     title: "Customer Success Specialist",
  //     department: "Support",
  //     location: "Delhi, India",
  //     type: "Full-time"
  //   },
  //   {
  //     id: 4,
  //     title: "Supply Chain Coordinator",
  //     department: "Operations",
  //     location: "Mumbai, India",
  //     type: "Full-time"
  //   }
  // ];

  return (
    <div className="min-h-screen">
      {/* About Us Section */}
      <section id="about" className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl">About PRAKRITI PURE</h1>
              <p className="text-lg text-muted-foreground">
                Founded in 2025 with love and purpose, Prakriti Pure is a natural skincare brand rooted in the belief that true beauty begins with nature and honesty.
              </p>
              <p className="text-lg text-muted-foreground">
                Prakriti means nature, and Pure stands for clean, honest, and untouched—together reflecting our promise to create skincare that is gentle, safe, and truly effective.
              </p>
              <p className="text-lg text-muted-foreground">
                We don’t believe in shortcuts or harsh chemicals that give quick results but damage skin over time. Instead, we focus on slow healing, natural nourishment, and long-term skin health.
              </p>
              <p className="text-lg text-muted-foreground">
                Every product is carefully crafted using natural, traditional, and skin-loving ingredients, inspired by Ayurveda and time-tested wisdom—made with the same care we would choose for our own family.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-primary">570+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Natural</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/images/aboutus.png"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from product selection to customer service.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="text-3xl">🌿</span>
            </div>
            <h3 className="mb-3">Natural & Pure</h3>
            <p className="text-muted-foreground text-sm">
              We prioritize natural ingredients and sustainable practices in every product we offer.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="mb-3">Quality First</h3>
            <p className="text-muted-foreground text-sm">
              Every product is rigorously tested to ensure it meets our high standards of excellence.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="text-3xl">💚</span>
            </div>
            <h3 className="mb-3">Customer Care</h3>
            <p className="text-muted-foreground text-sm">
              Your satisfaction and wellbeing are at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary/30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <Input 
                    placeholder="Your name" 
                    required 
                    className="bg-secondary border-0"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="bg-secondary border-0"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Subject</label>
                  <Input 
                    placeholder="How can we help?" 
                    required 
                    className="bg-secondary border-0"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <Textarea 
                    placeholder="Your message..." 
                    rows={5} 
                    required 
                    className="bg-secondary border-0"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Email Us</h4>
                  <p className="text-sm text-muted-foreground">prakritipure3526@gmail.com</p>
                  <p className="text-sm text-muted-foreground">orders@prakriti-pure.com</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 87909 33354</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM IST</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">
                     1F 15 Block B, Subramanya Estates, Srikrishnadevaraya Nagar, Gajuwaka, Old Karnivani Palem, Visakhapatnam, Andhra Pradesh – 530026, India<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
