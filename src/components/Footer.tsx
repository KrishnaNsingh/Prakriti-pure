import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/dfeea808c824bad396267139942f3c6f460a3d72.png";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Prakriti Pure Logo"
                className="h-10 w-auto"
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                }}
              >
                PRAKRITI PURE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover your natural beauty with our curated collection of
              premium beauty products.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Fragrance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  T&C
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  to="/about#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/about#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer – Collapsible */}
        <div className="md:hidden space-y-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Prakriti Pure Logo" className="h-8 w-auto" />
            <span
              className="text-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
              }}
            >
              PRAKRITI PURE
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            Premium natural beauty essentials.
          </p>

          {/* Divider */}
          <div className="border-t" />

          {/* Accordion Sections */}
          <div className="space-y-2">
            {/* Shop */}
            <div>
              <button
                onClick={() => toggleSection("shop")}
                className="w-full flex justify-between items-center py-2 text-sm font-medium"
              >
                Shop
                <span>{openSection === "shop" ? "−" : "+"}</span>
              </button>

              {openSection === "shop" && (
                <ul className="pl-2 pb-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link to="/shop">All Products</Link>
                  </li>
                  <li>
                    <Link to="/shop">Skincare</Link>
                  </li>
                  <li>
                    <Link to="/shop">Makeup</Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Company */}
            <div>
              <button
                onClick={() => toggleSection("company")}
                className="w-full flex justify-between items-center py-2 text-sm font-medium"
              >
                Company
                <span>{openSection === "company" ? "−" : "+"}</span>
              </button>

              {openSection === "company" && (
                <ul className="pl-2 pb-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/about#contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Support */}
            <div>
              <button
                onClick={() => toggleSection("support")}
                className="w-full flex justify-between items-center py-2 text-sm font-medium"
              >
                Support
                <span>{openSection === "support" ? "−" : "+"}</span>
              </button>

              {openSection === "support" && (
                <ul className="pl-2 pb-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <Link to="/about#contact">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/about#contact">Returns</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 PRAKRITI PURE. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/terms-and-conditions"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Prakritipure3526/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/prakritipure3526?igsh=YzAzZzM4eTdmd2t5"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
