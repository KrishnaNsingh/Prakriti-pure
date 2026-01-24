import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products } from "../data/products";

export function HomePage() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-accent/20 to-secondary overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl">Glow Starts Here</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover premium beauty products that enhance your natural radiance. Curated with love, delivered with care.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
                  onClick={() => navigate("/shop")}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/images/hero-banner.png"
                alt="Hero Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2>Featured Products</h2>
          <Button
            variant="ghost"
            className="text-primary hover:text-primary"
            onClick={() => navigate("/shop")}
          >
            View All
          </Button>
        </div>
        
        {/* Desktop: 4 per row, Mobile: 1 per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2>Join Our Beauty Community</h2>
            <p className="text-muted-foreground">
              Subscribe to get special offers, beauty tips, and new product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
