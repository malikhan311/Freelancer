import React, { useMemo, useState } from "react";
import "./Tshirts.css";

/* =========================================================
   PRODUCT DATA
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Essential Heavyweight Tee",
    category: "Premium T-Shirt",
    price: 3490,
    oldPrice: 4290,
    badge: "BEST SELLER",
    colors: ["#f5f3ed", "#161616", "#8ea582"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Relaxed Cotton Tee",
    category: "Everyday Essential",
    price: 2990,
    oldPrice: 3690,
    badge: "NEW",
    colors: ["#e9e7df", "#273126", "#c6c1b6"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Minimal Logo T-Shirt",
    category: "Signature Collection",
    price: 3890,
    oldPrice: 4590,
    badge: "SIGNATURE",
    colors: ["#171817", "#d9ddd3", "#708468"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Soft Wash Oversized Tee",
    category: "Oversized Fit",
    price: 3290,
    oldPrice: 3990,
    badge: "TRENDING",
    colors: ["#aaa69b", "#1c1c1c", "#e7e4dc"],
    sizes: ["M", "L", "XL", "XXL"],
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Premium Pique Tee",
    category: "Premium Collection",
    price: 4490,
    oldPrice: 5290,
    badge: "PREMIUM",
    colors: ["#eef0e8", "#30402e", "#222222"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1527719327859-7b9d6f0f5f1c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Classic Everyday Tee",
    category: "Essential",
    price: 2690,
    oldPrice: 3290,
    badge: "SALE",
    colors: ["#f1efe8", "#252525", "#8a9581"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Urban Boxy T-Shirt",
    category: "Street Collection",
    price: 3590,
    oldPrice: 4190,
    badge: "LIMITED",
    colors: ["#222222", "#d6d7cf", "#75866c"],
    sizes: ["M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Linen Blend Tee",
    category: "Summer Edit",
    price: 4190,
    oldPrice: 4890,
    badge: "NEW",
    colors: ["#eee9dc", "#78866f", "#1d211c"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85",
  },
];


/* =========================================================
   FORMAT PRICE
   ========================================================= */

const formatPrice = (price) => {
  return `Rs. ${price.toLocaleString()}`;
};


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductCard({
  product,
  isWishlisted,
  onWishlist,
  onQuickView,
  onAddToCart,
}) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <article className="tshirt-product-card">

      {/* IMAGE */}

      <div className="tshirt-product-image-wrap">

        <img
          src={product.image}
          alt={product.name}
          className="tshirt-product-image"
          loading="lazy"
        />

        {/* IMAGE OVERLAY */}

        <div className="tshirt-image-overlay"></div>

        {/* BADGE */}

        <span className="tshirt-product-badge">
          {product.badge}
        </span>

        {/* WISHLIST */}

        <button
          type="button"
          className={`tshirt-wishlist ${
            isWishlisted ? "active" : ""
          }`}
          onClick={() => onWishlist(product.id)}
          aria-label="Add to wishlist"
        >
          <span>
            {isWishlisted ? "♥" : "♡"}
          </span>
        </button>

        {/* QUICK VIEW */}

        <button
          type="button"
          className="tshirt-quick-view"
          onClick={() => onQuickView(product)}
        >
          <span>Quick view</span>
          <span>↗</span>
        </button>

      </div>


      {/* CONTENT */}

      <div className="tshirt-product-content">

        <div className="tshirt-product-top">

          <div>
            <span className="tshirt-product-category">
              {product.category}
            </span>

            <h3 className="tshirt-product-name">
              {product.name}
            </h3>
          </div>

          <div className="tshirt-product-rating">
            <span>★★★★★</span>
          </div>

        </div>


        {/* COLORS */}

        <div className="tshirt-product-options">

          <div className="tshirt-color-options">

            {product.colors.map((color, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Color ${index + 1}`}
                className={`tshirt-color ${
                  selectedColor === index
                    ? "selected"
                    : ""
                }`}
                style={{ background: color }}
                onClick={() => setSelectedColor(index)}
              />
            ))}

          </div>


          <span className="tshirt-color-count">
            {product.colors.length} colors
          </span>

        </div>


        {/* PRICE */}

        <div className="tshirt-price-row">

          <div className="tshirt-prices">

            <span className="tshirt-current-price">
              {formatPrice(product.price)}
            </span>

            <span className="tshirt-old-price">
              {formatPrice(product.oldPrice)}
            </span>

          </div>

          <span className="tshirt-save">
            SAVE{" "}
            {Math.round(
              ((product.oldPrice - product.price) /
                product.oldPrice) *
                100
            )}
            %
          </span>

        </div>


        {/* ADD BUTTON */}

        <button
          type="button"
          className="tshirt-add-button"
          onClick={() => onAddToCart(product)}
        >
          <span>Add to cart</span>

          <span className="tshirt-add-arrow">
            →
          </span>
        </button>

      </div>

    </article>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

const Tshirts = () => {

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("featured");

  const [search, setSearch] =
    useState("");

  const [wishlist, setWishlist] =
    useState([]);

  const [cartCount, setCartCount] =
    useState(0);

  const [toast, setToast] =
    useState("");

  const [quickProduct, setQuickProduct] =
    useState(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);


  /* =======================================================
     FILTERS
     ======================================================= */

  const filters = [
    "All",
    "New",
    "Best Seller",
    "Oversized",
    "Premium",
    "Sale",
  ];


  /* =======================================================
     WISHLIST
     ======================================================= */

  const handleWishlist = (id) => {

    setWishlist((current) => {

      if (current.includes(id)) {
        setToast("Removed from wishlist");
        return current.filter(
          (item) => item !== id
        );
      }

      setToast("Added to wishlist");
      return [...current, id];

    });
  };


  /* =======================================================
     ADD TO CART
     ======================================================= */

  const handleAddToCart = (product) => {

    setCartCount((count) => count + 1);

    setToast(
      `${product.name} added to your cart`
    );
  };


  /* =======================================================
     FILTER + SEARCH + SORT
     ======================================================= */

  const visibleProducts = useMemo(() => {

    let products = [...PRODUCTS];


    /* SEARCH */

    if (search.trim()) {

      const query =
        search.toLowerCase().trim();

      products = products.filter((product) =>
        `${product.name} ${product.category}`
          .toLowerCase()
          .includes(query)
      );
    }


    /* FILTER */

    if (activeFilter !== "All") {

      if (activeFilter === "New") {
        products = products.filter(
          (product) =>
            product.badge === "NEW"
        );
      }

      if (activeFilter === "Best Seller") {
        products = products.filter(
          (product) =>
            product.badge === "BEST SELLER"
        );
      }

      if (activeFilter === "Oversized") {
        products = products.filter(
          (product) =>
            product.category
              .toLowerCase()
              .includes("oversized")
        );
      }

      if (activeFilter === "Premium") {
        products = products.filter(
          (product) =>
            product.badge === "PREMIUM" ||
            product.category
              .toLowerCase()
              .includes("premium")
        );
      }

      if (activeFilter === "Sale") {
        products = products.filter(
          (product) =>
            product.badge === "SALE"
        );
      }
    }


    /* SORT */

    if (sortBy === "price-low") {

      products.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {

      products.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "newest") {

      products.reverse();
    }

    return products;

  }, [
    activeFilter,
    search,
    sortBy,
  ]);


  /* =======================================================
     RESET FILTERS
     ======================================================= */

  const clearFilters = () => {

    setActiveFilter("All");
    setSearch("");
    setSortBy("featured");

  };


  return (
    <main className="tshirt-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tshirt-hero">

        <div className="tshirt-hero-bg-shape"></div>

        <div className="tshirt-container">

          <div className="tshirt-breadcrumb">

            <span>Home</span>

            <span>/</span>

            <span>Men</span>

            <span>/</span>

            <strong>T-Shirts</strong>

          </div>


          <div className="tshirt-hero-grid">

            <div className="tshirt-hero-copy">

              <span className="tshirt-hero-eyebrow">
                MEN'S COLLECTION — 2026
              </span>

              <h1>
                The everyday
                <br />
                <em>essential.</em>
              </h1>

              <p>
                Premium T-shirts designed with
                effortless fits, elevated fabrics and
                timeless details.
              </p>


              <div className="tshirt-hero-actions">

                <a
                  href="#collection"
                  className="tshirt-primary-button"
                >
                  <span>Explore collection</span>
                  <span>↓</span>
                </a>

                <button
                  type="button"
                  className="tshirt-text-button"
                  onClick={() =>
                    setActiveFilter("Premium")
                  }
                >
                  View premium edit
                  <span>↗</span>
                </button>

              </div>


              <div className="tshirt-hero-stats">

                <div>
                  <strong>08</strong>
                  <span>Curated styles</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Fit options</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Everyday comfort</span>
                </div>

              </div>

            </div>


            <div className="tshirt-hero-visual">

              <div className="tshirt-hero-image-frame">

                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90"
                  alt="Premium men's t-shirt"
                />

                <div className="tshirt-hero-image-gradient"></div>

                <div className="tshirt-floating-card">

                  <span className="floating-small">
                    AURA EDIT
                  </span>

                  <strong>
                    Built for
                    <br />
                    everyday.
                  </strong>

                  <span className="floating-line"></span>

                  <span className="floating-number">
                    01 / 04
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COLLECTION HEADER
      ===================================================== */}

      <section
        className="tshirt-collection"
        id="collection"
      >

        <div className="tshirt-container">

          <div className="tshirt-collection-header">

            <div>

              <span className="collection-eyebrow">
                THE COLLECTION
              </span>

              <h2>
                Men's T-Shirts
              </h2>

              <p>
                Clean silhouettes. Better fabrics.
                Made to stay in rotation.
              </p>

            </div>


            <div className="collection-count">

              <strong>
                {visibleProducts.length
                  .toString()
                  .padStart(2, "0")}
              </strong>

              <span>
                products
              </span>

            </div>

          </div>


          {/* =================================================
              TOOLBAR
          ================================================= */}

          <div className="tshirt-toolbar">

            <div className="tshirt-filter-list">

              {filters.map((filter) => (

                <button
                  type="button"
                  key={filter}
                  className={`tshirt-filter-button ${
                    activeFilter === filter
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                >
                  {filter}

                  {activeFilter === filter && (
                    <span className="filter-dot">
                      •
                    </span>
                  )}

                </button>

              ))}

            </div>


            <div className="tshirt-toolbar-right">

              <div className="tshirt-search">

                <span>⌕</span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search T-shirts"
                />

              </div>


              <label className="tshirt-sort">

                <span>Sort</span>

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="newest">
                    Newest
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>
                </select>

              </label>

            </div>

          </div>


          {/* MOBILE FILTER BUTTON */}

          <button
            type="button"
            className="mobile-filter-trigger"
            onClick={() =>
              setMobileFiltersOpen(
                !mobileFiltersOpen
              )
            }
          >
            <span>
              {mobileFiltersOpen
                ? "Close filters"
                : "Filters & sorting"}
            </span>

            <span>
              {mobileFiltersOpen ? "−" : "+"}
            </span>

          </button>


          {mobileFiltersOpen && (

            <div className="mobile-filter-panel">

              <div className="mobile-filter-title">
                FILTER BY
              </div>

              <div className="mobile-filter-buttons">

                {filters.map((filter) => (

                  <button
                    type="button"
                    key={filter}
                    className={
                      activeFilter === filter
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setActiveFilter(filter);
                      setMobileFiltersOpen(false);
                    }}
                  >
                    {filter}
                  </button>

                ))}

              </div>

            </div>

          )}


          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          {visibleProducts.length > 0 ? (

            <div className="tshirt-product-grid">

              {visibleProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(
                    product.id
                  )}
                  onWishlist={handleWishlist}
                  onQuickView={setQuickProduct}
                  onAddToCart={handleAddToCart}
                />

              ))}

            </div>

          ) : (

            <div className="tshirt-empty-state">

              <div className="empty-icon">
                ◌
              </div>

              <h3>
                Nothing found.
              </h3>

              <p>
                Try another search or clear
                your current filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Clear filters →
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          EDITORIAL BANNER
      ===================================================== */}

      <section className="tshirt-editorial">

        <div className="tshirt-container">

          <div className="editorial-card">

            <div className="editorial-content">

              <span>
                THE AURA FIT GUIDE
              </span>

              <h2>
                One tee.
                <br />
                <em>Three ways.</em>
              </h2>

              <p>
                Relaxed, classic or oversized —
                discover the fit that feels most
                like you.
              </p>

              <button
                type="button"
                className="editorial-button"
              >
                <span>Discover the fits</span>
                <span>↗</span>
              </button>

            </div>


            <div className="editorial-image">

              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=85"
                alt="Men's fashion editorial"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY AURA
      ===================================================== */}

      <section className="tshirt-values">

        <div className="tshirt-container">

          <div className="tshirt-values-header">

            <span>
              WHY AURA
            </span>

            <h2>
              Details that
              <br />
              <em>matter.</em>
            </h2>

          </div>


          <div className="tshirt-values-grid">

            <div className="tshirt-value">

              <span className="value-number">
                01
              </span>

              <div className="value-icon">
                ◇
              </div>

              <h3>
                Better fabrics
              </h3>

              <p>
                Soft-touch cotton blends and
                carefully selected materials built
                for everyday wear.
              </p>

            </div>


            <div className="tshirt-value">

              <span className="value-number">
                02
              </span>

              <div className="value-icon">
                ○
              </div>

              <h3>
                Considered fits
              </h3>

              <p>
                From clean classics to relaxed
                oversized silhouettes, every fit
                is intentionally designed.
              </p>

            </div>


            <div className="tshirt-value">

              <span className="value-number">
                03
              </span>

              <div className="value-icon">
                +
              </div>

              <h3>
                Made to last
              </h3>

              <p>
                Timeless colors and versatile
                shapes that stay relevant season
                after season.
              </p>

            </div>


            <div className="tshirt-value">

              <span className="value-number">
                04
              </span>

              <div className="value-icon">
                ♡
              </div>

              <h3>
                Easy returns
              </h3>

              <p>
                Changed your mind? Our simple
                return process keeps shopping
                completely stress-free.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK VIEW MODAL
      ===================================================== */}

      {quickProduct && (

        <div
          className="tshirt-modal-backdrop"
          onClick={() =>
            setQuickProduct(null)
          }
        >

          <div
            className="tshirt-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              type="button"
              className="tshirt-modal-close"
              onClick={() =>
                setQuickProduct(null)
              }
              aria-label="Close quick view"
            >
              ×
            </button>


            <div className="tshirt-modal-image">

              <img
                src={quickProduct.image}
                alt={quickProduct.name}
              />

            </div>


            <div className="tshirt-modal-content">

              <span>
                {quickProduct.category}
              </span>

              <h2>
                {quickProduct.name}
              </h2>

              <div className="modal-rating">
                ★★★★★
                <small>
                  4.9 / 5
                </small>
              </div>

              <div className="modal-price">
                {formatPrice(
                  quickProduct.price
                )}

                <del>
                  {formatPrice(
                    quickProduct.oldPrice
                  )}
                </del>
              </div>

              <p>
                A premium everyday essential
                designed for effortless styling,
                comfort and long-term rotation.
              </p>


              <div className="modal-sizes">

                <span>
                  SELECT SIZE
                </span>

                <div>

                  {quickProduct.sizes.map(
                    (size) => (

                      <button
                        type="button"
                        key={size}
                      >
                        {size}
                      </button>

                    )
                  )}

                </div>

              </div>


              <button
                type="button"
                className="modal-cart-button"
                onClick={() => {
                  handleAddToCart(
                    quickProduct
                  );
                  setQuickProduct(null);
                }}
              >
                <span>
                  Add to cart
                </span>

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          TOAST
      ===================================================== */}

      {toast && (

        <div
          className="tshirt-toast"
          onAnimationEnd={() =>
            setToast("")
          }
        >

          <span className="toast-check">
            ✓
          </span>

          <div>
            <strong>
              {toast}
            </strong>

            <small>
              Cart items: {cartCount}
            </small>
          </div>

          <button
            type="button"
            onClick={() =>
              setToast("")
            }
          >
            ×
          </button>

        </div>

      )}

    </main>
  );
};

export default Tshirts;