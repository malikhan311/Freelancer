import React, { useMemo, useState } from "react";
import "./HomeCenter.css";

/* =========================================================
   PREMIUM E-COMMERCE HOME CENTER
   ========================================================= */

const categories = [
  {
    id: 1,
    title: "Men",
    subtitle: "Sharp everyday essentials",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Women",
    subtitle: "Modern pieces with character",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Shoes",
    subtitle: "Step into something better",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Accessories",
    subtitle: "Small details, big impact",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Relaxed Premium Overshirt",
    category: "Men",
    price: 3499,
    oldPrice: 4299,
    badge: "BESTSELLER",
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Minimal Everyday Sneakers",
    category: "Shoes",
    price: 5999,
    oldPrice: 6999,
    badge: "NEW",
    rating: 4.8,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Soft Tailored Blazer",
    category: "Women",
    price: 7499,
    oldPrice: 8999,
    badge: "TRENDING",
    rating: 4.9,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Classic Leather Crossbody",
    category: "Accessories",
    price: 2999,
    oldPrice: 3699,
    badge: "LIMITED",
    rating: 4.7,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Premium Knit Sweater",
    category: "Men",
    price: 4199,
    oldPrice: 4999,
    badge: "POPULAR",
    rating: 4.8,
    reviews: 117,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Everyday White Trainers",
    category: "Shoes",
    price: 5299,
    oldPrice: 6299,
    badge: "HOT",
    rating: 4.9,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Structured Shoulder Bag",
    category: "Accessories",
    price: 3899,
    oldPrice: 4599,
    badge: "NEW",
    rating: 4.8,
    reviews: 74,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Elegant Linen Co-Ord",
    category: "Women",
    price: 6499,
    oldPrice: 7799,
    badge: "EDITOR'S PICK",
    rating: 4.9,
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  },
];

/* =========================================================
   ICONS
   ========================================================= */

function ArrowIcon() {
  return <span className="hc-arrow">→</span>;
}

function HeartIcon({ filled }) {
  return (
    <span className={`hc-heart ${filled ? "filled" : ""}`}>
      {filled ? "♥" : "♡"}
    </span>
  );
}

/* =========================================================
   RATING
   ========================================================= */

function Rating({ value }) {
  return (
    <div className="hc-rating">
      <span className="hc-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= Math.round(value) ? "active" : ""}
          >
            ★
          </span>
        ))}
      </span>

      <span className="hc-rating-number">{value}</span>
    </div>
  );
}

/* =========================================================
   SECTION HEADING
   ========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="hc-section-heading">
      <div>
        {eyebrow && <span className="hc-eyebrow">{eyebrow}</span>}

        <h2>{title}</h2>

        {description && <p>{description}</p>}
      </div>

      {buttonText && (
        <button
          type="button"
          className="hc-text-button"
          onClick={onClick}
        >
          <span>{buttonText}</span>
          <ArrowIcon />
        </button>
      )}
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductCard({
  product,
  wishlist,
  onWishlist,
  onCart,
  onQuickView,
}) {
  const liked = wishlist.includes(product.id);

  const discount = Math.round(
    (1 - product.price / product.oldPrice) * 100
  );

  return (
    <article className="hc-product-card">
      <div className="hc-product-image">
        <img src={product.image} alt={product.name} />

        <div className="hc-product-top">
          <span className="hc-badge">{product.badge}</span>

          <button
            type="button"
            className={`hc-heart-button ${liked ? "liked" : ""}`}
            onClick={() => onWishlist(product.id)}
          >
            <HeartIcon filled={liked} />
          </button>
        </div>

        <div className="hc-quick-view">
          <button
            type="button"
            onClick={() => onQuickView(product)}
          >
            Quick View
          </button>
        </div>

        <button
          type="button"
          className="hc-add-button"
          onClick={() => onCart(product)}
        >
          <span className="plus">+</span>
          <span className="add-text">Add</span>
        </button>
      </div>

      <div className="hc-product-info">
        <span className="hc-product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="hc-product-rating">
          <Rating value={product.rating} />
          <span>({product.reviews})</span>
        </div>

        <div className="hc-price">
          <strong>
            Rs. {product.price.toLocaleString()}
          </strong>

          <del>
            Rs. {product.oldPrice.toLocaleString()}
          </del>

          <span>{discount}% OFF</span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN HOME CENTER
   ========================================================= */

export default function HomeCenter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  // const [subscribed, setSubscribed] = useState(false);
  const [quickProduct, setQuickProduct] = useState(null);

  const filters = [
    "All",
    "Men",
    "Women",
    "Shoes",
    "Accessories",
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  /* =========================================================
     TOAST
  ========================================================= */

  function showToast(message) {
    setToast(message);

    window.clearTimeout(window.hcToastTimer);

    window.hcToastTimer = window.setTimeout(() => {
      setToast("");
    }, 2500);
  }

  /* =========================================================
     WISHLIST
  ========================================================= */

  function toggleWishlist(id) {
    setWishlist((current) => {
      if (current.includes(id)) {
        showToast("Removed from wishlist");
        return current.filter((item) => item !== id);
      }

      showToast("Added to wishlist ♥");
      return [...current, id];
    });
  }

  /* =========================================================
     CART
  ========================================================= */

  function addToCart(product) {
    setCartCount((count) => count + 1);
    showToast(`${product.name} added to cart`);
  }

  /* =========================================================
     SCROLL FUNCTIONS
  ========================================================= */

  function scrollToProducts() {
    document
      .getElementById("hc-products")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  function scrollToCategories() {
    document
      .getElementById("hc-categories")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  /* =========================================================
     CATEGORY
  ========================================================= */

  function chooseCategory(category) {
    setActiveCategory(category);

    document
      .getElementById("hc-products")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    showToast(`${category} collection selected`);
  }

  /* =========================================================
     NEWSLETTER
  ========================================================= */

  function submitNewsletter(event) {
    event.preventDefault();

    if (!email.trim()) {
      showToast("Please enter your email");
      return;
    }

    setSubscribed(true);
    setEmail("");
    showToast("Welcome to our style list!");
  }

  return (
    <main className="home-center">

      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      <div className="hc-announcement">
        <div className="hc-announcement-inner">
          <span>FREE DELIVERY ON ORDERS OVER RS. 5,000</span>

          <i />

          <span>EASY 7-DAY RETURNS</span>

          <i />

          <span>SECURE CHECKOUT</span>
        </div>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hc-hero">

        <div className="hc-hero-container">

          <div className="hc-hero-copy">

            <div className="hc-mini-label">
              <span className="hc-mini-line" />
              NEW SEASON 2026
            </div>

            <h1>
              Style that
              <br />
              feels <em>like you.</em>
            </h1>

            <p className="hc-hero-description">
              Discover carefully selected fashion,
              footwear and accessories designed for
              everyday confidence.
            </p>

            <div className="hc-hero-actions">

              <button
                type="button"
                className="hc-primary-button"
                onClick={scrollToProducts}
              >
                <span>Shop new arrivals</span>
                <ArrowIcon />
              </button>

              <button
                type="button"
                className="hc-secondary-button"
                onClick={scrollToCategories}
              >
                <span>Explore collections</span>
                <ArrowIcon />
              </button>

            </div>

            <div className="hc-hero-trust">

              <div className="hc-avatar-group">
                <span>A</span>
                <span>M</span>
                <span>S</span>
                <span>+</span>
              </div>

              <div>
                <div className="hc-trust-stars">
                  ★★★★★
                </div>

                <strong>
                  Loved by 10,000+ shoppers
                </strong>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="hc-hero-visual">

            <div className="hc-hero-image">

              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1500&q=90"
                alt="Premium fashion collection"
              />

              <div className="hc-image-overlay" />

              {/* FLOAT CARD */}

              <div className="hc-floating-card card-one">

                <div className="hc-number">
                  01
                </div>

                <div>
                  <strong>
                    Curated looks
                  </strong>

                  <span>
                    Made for everyday
                  </span>
                </div>

              </div>

              {/* SECOND FLOAT CARD */}

              <div className="hc-floating-card card-two">

                <span className="hc-live-dot" />

                <div>
                  <strong>
                    Fresh drop
                  </strong>

                  <span>
                    Just landed today
                  </span>
                </div>

              </div>

              <span className="hc-vertical-text">
                COLLECTION
              </span>

            </div>

          </div>

        </div>

        {/* HERO STATS */}

        <div className="hc-hero-stats">

          <div>
            <strong>10K+</strong>
            <span>Happy customers</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Curated products</span>
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Average rating</span>
          </div>

          <div>
            <strong>7 Days</strong>
            <span>Easy returns</span>
          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="hc-benefits">

        <div className="hc-benefit">
          <div className="hc-benefit-icon">✦</div>
          <div>
            <strong>Curated quality</strong>
            <span>Products selected with care</span>
          </div>
        </div>

        <div className="hc-benefit">
          <div className="hc-benefit-icon">✓</div>
          <div>
            <strong>Easy returns</strong>
            <span>7-day hassle-free returns</span>
          </div>
        </div>

        <div className="hc-benefit">
          <div className="hc-benefit-icon">◇</div>
          <div>
            <strong>Secure checkout</strong>
            <span>Your payment is protected</span>
          </div>
        </div>

        <div className="hc-benefit">
          <div className="hc-benefit-icon">↗</div>
          <div>
            <strong>Fast delivery</strong>
            <span>Quick shipping across Pakistan</span>
          </div>
        </div>

      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section
        className="hc-section"
        id="hc-categories"
      >

        <SectionHeading
          eyebrow="SHOP BY STYLE"
          title="Find your next favorite."
          description="Explore collections designed around the way you actually live."
          buttonText="Explore all"
          onClick={scrollToProducts}
        />

        <div className="hc-category-grid">

          {categories.map((category, index) => (
            <button
              type="button"
              key={category.id}
              className={`hc-category-card hc-category-${index + 1}`}
              onClick={() =>
                chooseCategory(category.title)
              }
            >

              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
              />

              <span className="hc-category-overlay" />

              <div className="hc-category-content">

                <span className="hc-category-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>

                <span className="hc-category-arrow">
                  <ArrowIcon />
                </span>

              </div>

            </button>
          ))}

        </div>

      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        className="hc-section hc-products"
        id="hc-products"
      >

        <SectionHeading
          eyebrow="THE EDIT"
          title="Trending right now."
          description="Pieces our community is loving this season."
          buttonText="Shop everything"
          onClick={() => {
            setActiveCategory("All");
            showToast("Showing all products");
          }}
        />

        {/* FILTER */}

        <div className="hc-filter-row">

          <div className="hc-filters">

            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`hc-filter ${
                  activeCategory === filter
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(filter)
                }
              >
                {filter}
              </button>
            ))}

          </div>

          <span className="hc-count">
            {filteredProducts.length} products
          </span>

        </div>

        {/* PRODUCT GRID */}

        <div className="hc-product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
              onCart={addToCart}
              onQuickView={setQuickProduct}
            />
          ))}

        </div>

        <div className="hc-center-button">

          <button
            type="button"
            className="hc-outline-button"
            onClick={() => {
              setActiveCategory("All");
              showToast("All products are showing");
            }}
          >
            <span>View all products</span>
            <ArrowIcon />
          </button>

        </div>

      </section>

      {/* =====================================================
          EDITORIAL
      ===================================================== */}

      <section className="hc-editorial">

        <div className="hc-editorial-image">

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90"
            alt="Fashion editorial"
            loading="lazy"
          />

        </div>

        <div className="hc-editorial-content">

          <span className="hc-eyebrow">
            THE WEEKEND EDIT
          </span>

          <h2>
            Less noise.
            <br />
            <em>More style.</em>
          </h2>

          <p>
            Build a wardrobe that works harder for you.
            Clean silhouettes, comfortable fabrics and
            timeless pieces that move from morning plans
            to late-night moments.
          </p>

          <div className="hc-editorial-list">

            <div>
              <span>01</span>
              <strong>Comfort first</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Designed to last</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Easy to style</strong>
            </div>

          </div>

          <button
            type="button"
            className="hc-dark-button"
            onClick={() => chooseCategory("Women")}
          >
            <span>Discover the edit</span>
            <ArrowIcon />
          </button>

        </div>

      </section>

      {/* =====================================================
          WHY SHOP WITH US
      ===================================================== */}

      <section className="hc-section hc-why">

        <SectionHeading
          eyebrow="WHY SHOP WITH US"
          title="The details make the difference."
          description="A better shopping experience from discovery to delivery."
        />

        <div className="hc-why-grid">

          <article className="hc-why-card">

            <span className="hc-card-number">
              01
            </span>

            <div className="hc-large-icon">
              ✦
            </div>

            <h3>
              Thoughtfully selected
            </h3>

            <p>
              We focus on pieces that balance design,
              comfort and everyday wearability.
            </p>

            <button
              type="button"
              className="hc-small-button"
              onClick={() =>
                showToast("Quality comes first")
              }
            >
              Learn more
              <ArrowIcon />
            </button>

          </article>

          <article className="hc-why-card dark">

            <span className="hc-card-number">
              02
            </span>

            <div className="hc-large-icon">
              ♡
            </div>

            <h3>
              Made for real life
            </h3>

            <p>
              From workdays to weekends, our collections
              are built around real routines.
            </p>

            <button
              type="button"
              className="hc-small-button"
              onClick={() =>
                showToast("Designed around real life")
              }
            >
              Our approach
              <ArrowIcon />
            </button>

          </article>

          <article className="hc-why-card">

            <span className="hc-card-number">
              03
            </span>

            <div className="hc-large-icon">
              ↗
            </div>

            <h3>
              Service that cares
            </h3>

            <p>
              Fast support, simple returns and secure
              checkout without unnecessary friction.
            </p>

            <button
              type="button"
              className="hc-small-button"
              onClick={() =>
                showToast("We're here to help")
              }
            >
              Get support
              <ArrowIcon />
            </button>

          </article>

        </div>

      </section>

      {/* =====================================================
          BIG PROMO
      ===================================================== */}

      <section className="hc-promo">

        <img
          className="hc-promo-image"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90"
          alt=""
        />

        <div className="hc-promo-overlay" />

        <div className="hc-promo-content">

          <span>
            A LITTLE SOMETHING EXTRA
          </span>

          <h2>
            Your next
            <br />
            <em>favorite is waiting.</em>
          </h2>

          <p>
            Sign up for early access, private offers
            and fresh arrivals before everyone else.
          </p>

          <button
            type="button"
            className="hc-light-button"
            onClick={scrollToCategories}
          >
            <span>Start exploring</span>
            <ArrowIcon />
          </button>

        </div>

      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      {/* =====================================================
          QUICK VIEW MODAL
      ===================================================== */}

      {quickProduct && (
        <div
          className="hc-modal-backdrop"
          onClick={() => setQuickProduct(null)}
        >

          <div
            className="hc-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="hc-modal-close"
              onClick={() =>
                setQuickProduct(null)
              }
            >
              ×
            </button>

            <div className="hc-modal-image">

              <img
                src={quickProduct.image}
                alt={quickProduct.name}
              />

            </div>

            <div className="hc-modal-info">

              <span className="hc-eyebrow">
                {quickProduct.category}
              </span>

              <h2>
                {quickProduct.name}
              </h2>

              <Rating value={quickProduct.rating} />

              <div className="hc-modal-price">
                Rs.{" "}
                {quickProduct.price.toLocaleString()}

                <del>
                  Rs.{" "}
                  {quickProduct.oldPrice.toLocaleString()}
                </del>
              </div>

              <p>
                A carefully selected premium piece
                designed to give you a polished
                everyday look without sacrificing
                comfort.
              </p>

              <button
                type="button"
                className="hc-primary-button"
                onClick={() => {
                  addToCart(quickProduct);
                  setQuickProduct(null);
                }}
              >
                <span>Add to cart</span>
                <ArrowIcon />
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          TOAST
      ===================================================== */}

      <div
        className={`hc-toast ${
          toast ? "show" : ""
        }`}
      >

        <span className="hc-toast-icon">
          ✓
        </span>

        <span>{toast}</span>

      </div>

      {/* =====================================================
          FLOATING CART
      ===================================================== */}

      <button
        type="button"
        className="hc-floating-cart"
        onClick={() =>
          showToast(
            cartCount > 0
              ? `${cartCount} item(s) in your cart`
              : "Your cart is empty"
          )
        }
      >

        <span className="hc-cart-symbol">
          🛍
        </span>

        <span className="hc-cart-number">
          {cartCount}
        </span>

      </button>

    </main>
  );
}