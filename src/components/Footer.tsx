import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "figma:asset/dfeea808c824bad396267139942f3c6f460a3d72.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Prakriti Pure Logo" className="h-10 w-auto" />
              <span className="text-xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>PRAKRITI PURE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover your natural beauty with our curated collection of premium beauty products.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skincare</Link></li>
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Makeup</Link></li>
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Fragrance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/about#careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/about#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Prakriti Pure Logo" className="h-10 w-auto" />
              <span className="text-xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>PRAKRITI PURE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover your natural beauty with our curated collection of premium beauty products.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="mb-3">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-sm text-muted-foreground">All Products</Link></li>
                <li><Link to="/shop" className="text-sm text-muted-foreground">Skincare</Link></li>
                <li><Link to="/shop" className="text-sm text-muted-foreground">Makeup</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground">About Us</Link></li>
                <li><Link to="/about#contact" className="text-sm text-muted-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about#contact" className="text-sm text-muted-foreground">Shipping</Link></li>
                <li><Link to="/about#contact" className="text-sm text-muted-foreground">Returns</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 PRAKRITI PURE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/prakritipure3526?igsh=YzAzZzM4eTdmd2t5" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}