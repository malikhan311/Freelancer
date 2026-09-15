import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentYear = new Date().getFullYear();

  const handleNewsletter = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("You're on the list. Welcome to the club.");
    setEmail("");
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
    }
  };

  return (
    <footer className="premium-footer">

      {/* =========================================================
          FOOTER TOP CTA
      ========================================================= */}

      <section className="footer-newsletter">
        <div className="footer-newsletter-glow footer-glow-one"></div>
        <div className="footer-newsletter-glow footer-glow-two"></div>

        <div className="footer-newsletter-inner">

          <div className="newsletter-copy">
            <span className="newsletter-eyebrow">
              THE INNER CIRCLE
            </span>

            <h2>
              Stay ahead
              <br />
              of the <em>curve.</em>
            </h2>

            <p>
              Get first access to new drops, exclusive edits,
              private offers and everything worth knowing.
            </p>
          </div>

          <div className="newsletter-form-area">

            <form
              className="premium-newsletter-form"
              onSubmit={handleNewsletter}
            >
              <div className="newsletter-input-wrap">

                <span className="newsletter-mail-icon">
                  ✉
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                />

                <button
                  type="submit"
                  className="newsletter-submit"
                >
                  <span>Join us</span>

                  <span className="newsletter-submit-arrow">
                    →
                  </span>
                </button>

              </div>
            </form>

            {message && (
              <p className="newsletter-message">
                {message}
              </p>
            )}

            <p className="newsletter-note">
              By subscribing, you agree to receive occasional
              updates. Unsubscribe anytime.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <section className="footer-main">

        <div className="footer-container">

          {/* =====================================================
              BRAND COLUMN
          ===================================================== */}

          <div className="footer-brand-column">

            <a
              href="#"
              className="footer-logo"
              onClick={handleLinkClick}
            >
              <span className="footer-logo-main">
                AURA
              </span>

              <span className="footer-logo-sub">
                STUDIO
              </span>
            </a>

            <p className="footer-brand-description">
              Thoughtfully selected fashion, footwear and
              accessories designed for the way you live.
            </p>

            <div className="footer-brand-meta">

              <div className="brand-meta-item">
                <span className="brand-meta-number">
                  01
                </span>

                <span>
                  Curated
                  <br />
                  collections
                </span>
              </div>

              <div className="brand-meta-line"></div>

              <div className="brand-meta-item">
                <span className="brand-meta-number">
                  02
                </span>

                <span>
                  Everyday
                  <br />
                  confidence
                </span>
              </div>

            </div>

            {/* SOCIAL ICONS */}

            <div className="footer-socials">

              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                onClick={handleLinkClick}
              >
                <span>ig</span>
              </a>

              <a
                href="#"
                className="social-link"
                aria-label="Facebook"
                onClick={handleLinkClick}
              >
                <span>f</span>
              </a>

              <a
                href="#"
                className="social-link"
                aria-label="TikTok"
                onClick={handleLinkClick}
              >
                <span>tk</span>
              </a>

              <a
                href="#"
                className="social-link"
                aria-label="Pinterest"
                onClick={handleLinkClick}
              >
                <span>p</span>
              </a>

            </div>

          </div>


          {/* =====================================================
              SHOP LINKS
          ===================================================== */}

          <div className="footer-link-column">

            <div className="footer-column-heading">
              SHOP
            </div>

            <ul>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>New Arrivals</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Women</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Men</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Shoes</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Accessories</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Best Sellers</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

            </ul>

          </div>


          {/* =====================================================
              COMPANY LINKS
          ===================================================== */}

          <div className="footer-link-column">

            <div className="footer-column-heading">
              COMPANY
            </div>

            <ul>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>About Us</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Our Story</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Journal</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Careers</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Contact</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Store Locator</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

            </ul>

          </div>


          {/* =====================================================
              SUPPORT LINKS
          ===================================================== */}

          <div className="footer-link-column">

            <div className="footer-column-heading">
              SUPPORT
            </div>

            <ul>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Help Center</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Shipping & Delivery</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Returns & Exchanges</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Size Guide</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>Order Tracking</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

              <li>
                <a href="#" onClick={handleLinkClick}>
                  <span>FAQs</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICE STRIP
      ========================================================= */}

      <section className="footer-service-strip">

        <div className="footer-container service-container">

          <div className="service-item">

            <div className="service-icon">
              <span>↗</span>
            </div>

            <div>
              <strong>FREE DELIVERY</strong>
              <span>
                On orders over Rs. 5,000
              </span>
            </div>

          </div>


          <div className="service-divider"></div>


          <div className="service-item">

            <div className="service-icon">
              <span>↺</span>
            </div>

            <div>
              <strong>EASY RETURNS</strong>
              <span>
                7-day hassle-free returns
              </span>
            </div>

          </div>


          <div className="service-divider"></div>


          <div className="service-item">

            <div className="service-icon">
              <span>✓</span>
            </div>

            <div>
              <strong>SECURE CHECKOUT</strong>
              <span>
                Safe & protected payments
              </span>
            </div>

          </div>


          <div className="service-divider"></div>


          <div className="service-item">

            <div className="service-icon">
              <span>♡</span>
            </div>

            <div>
              <strong>MADE FOR YOU</strong>
              <span>
                Carefully curated collections
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER BOTTOM
      ========================================================= */}

      <section className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <div className="footer-copyright">
            © {currentYear} AURA STUDIO.
            <span>All rights reserved.</span>
          </div>


          <div className="footer-legal-links">

            <a href="#" onClick={handleLinkClick}>
              Privacy
            </a>

            <span>•</span>

            <a href="#" onClick={handleLinkClick}>
              Terms
            </a>

            <span>•</span>

            <a href="#" onClick={handleLinkClick}>
              Cookies
            </a>

          </div>


          <div className="footer-payment">

            <span>WE ACCEPT</span>

            <div className="payment-badges">

              <span className="payment-badge">
                VISA
              </span>

              <span className="payment-badge">
                MC
              </span>

              <span className="payment-badge">
                AMEX
              </span>

              <span className="payment-badge">
                COD
              </span>

            </div>

          </div>


          {/* BACK TO TOP */}

          <button
            type="button"
            className="back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <span className="back-to-top-arrow">
              ↑
            </span>
          </button>

        </div>

      </section>

    </footer>
  );
};

export default Footer;