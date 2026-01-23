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
                Founded in 2020, Prakriti Pure is dedicated to bringing you the finest natural beauty products that enhance your inherent radiance. Our name reflects our commitment to nature (Prakriti) and authenticity (Pure).
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that true beauty comes from within and should be nurtured with products that are as pure as nature intended. Every product in our collection is carefully curated to ensure it meets our high standards of quality, sustainability, and effectiveness.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl text-primary">200+</p>
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
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
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
                  <p className="text-sm text-muted-foreground">krishna65255@gmail.com</p>
                  <p className="text-sm text-muted-foreground">hello@prakritipure.com</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 898535724</p>
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
                    Block-b, Subramanyam, Y-junction, Karnavanipalem<br />
                    Gajuwaka, Vishakahapatnum,<br />
                    AndhraPradesh, India - 530044
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      {/* <section id="careers" className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for natural beauty and customer excellence.
          </p>
        </div>

        <div className="space-y-4">
          {careerPositions.map((position) => (
            <div 
              key={position.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {position.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {position.type}
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="mb-3">Don't see a perfect fit?</h3>
          <p className="text-muted-foreground mb-6">
            We're always open to hearing from talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            Send Your Resume
          </Button>
        </div>
      </section> */}

      {/* Blog Section */}
      <section id="blog" className="bg-secondary/30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">From Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest beauty tips, product launches, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="aspect-video relative overflow-hidden bg-secondary">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary p-0 h-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
            >
              View All Articles
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
