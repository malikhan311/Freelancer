import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

/*
  StyleCart Premium Navbar
  ------------------------------------------------------------
  Reusable React component for the StyleCart e-commerce project.
  No external icon library is required.
  Everything is kept inside this component so it is easy to move,
  edit, and reuse on Home, Product, Cart, and Checkout pages.
*/

// ============================================================
// ICON COMPONENTS
// ============================================================

function SearchIcon({ size = 20 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function HeartIcon({ size = 21, filled = false }) {
  return (
    <svg
      className={`sc-icon ${filled ? "is-filled" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
    >
      <path d="M20.84 8.55c0 5.25-8.84 10.45-8.84 10.45S3.16 13.8 3.16 8.55A4.55 4.55 0 0 1 12 6.07a4.55 4.55 0 0 1 8.84 2.48Z" />
    </svg>
  );
}

function UserIcon({ size = 21 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.8-4.2 3.47-6.5 8-6.5s7.2 2.3 8 6.5" />
    </svg>
  );
}

function ShoppingBagIcon({ size = 21 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6.5 8.5h11l1 11h-13l1-11Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function TruckIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon sc-icon-small"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 6h11v10H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

function ChevronDownIcon({ size = 15 }) {
  return (
    <svg
      className="sc-icon sc-chevron"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ size = 16 }) {
  return (
    <svg
      className="sc-icon sc-chevron"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon({ size = 23 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ size = 23 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function UserCircleIcon({ size = 20 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9" r="3" />
      <path d="M7.5 18c.9-2.5 2.4-3.5 4.5-3.5s3.6 1 4.5 3.5" />
    </svg>
  );
}

function LogInIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M14 8V5a2 2 0 0 0-2-2H5v18h7a2 2 0 0 0 2-2v-3" />
      <path d="M10 12h10" />
      <path d="m17 9 3 3-3 3" />
    </svg>
  );
}

function UserPlusIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="4" />
      <path d="M2.5 21c.8-4 3-6 6.5-6s5.7 2 6.5 6" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  );
}

function PackageIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.5 7.5 4 7.5-4" />
      <path d="M12 11.5V21" />
    </svg>
  );
}

function HelpCircleIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.4 2.4 0 1 1 3.8 1.9c-1 .7-1.5 1.1-1.5 2.4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function MapPinIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function TagIcon({ size = 18 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 12V5h7l10 10-5 5L5 10" />
      <circle cx="7.5" cy="7.5" r="1" />
    </svg>
  );
}

function SparkleIcon({ size = 17 }) {
  return (
    <svg
      className="sc-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </svg>
  );
}

function LogoMark() {
  return (
    <div className="sc-logo-mark" aria-hidden="true">
      <ShoppingBagIcon size={27} />
      <span className="sc-logo-mark-dot" />
    </div>
  );
}

// ============================================================
// DATA
// ============================================================

const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "Men", href: "#men", hasMenu: true },
  { label: "Women", href: "#women", hasMenu: true },
  { label: "Shoes", href: "#shoes", hasMenu: true },
  { label: "Accessories", href: "#accessories", hasMenu: true },
  { label: "Sale", href: "#sale", sale: true },
];

const megaMenuData = {
  Men: {
    featured: "Men's Collection",
    columns: [
      {
        title: "Clothing",
        items: ["T-Shirts", "Shirts", "Hoodies", "Jeans", "Trousers", "Jackets"],
      },
      {
        title: "Shoes",
        items: ["Sneakers", "Casual Shoes", "Sports Shoes", "Formal Shoes", "Sandals"],
      },
      {
        title: "Accessories",
        items: ["Caps", "Watches", "Wallets", "Belts", "Sunglasses"],
      },
    ],
  },
  Women: {
    featured: "Women's Collection",
    columns: [
      {
        title: "Clothing",
        items: ["Dresses", "Tops", "T-Shirs", "Jeans", "Trousers", "Jackets"],
      },
      {
        title: "Shoes",
        items: ["Sneakers", "Heels", "Flats", "Boots", "Sandals"],
      },
      {
        title: "Accessories",
        items: ["Bags", "Jewelry", "Watches", "Sunglasses", "Scarves"],
      },
    ],
  },
  Shoes: {
    featured: "Shop All Shoes",
    columns: [
      {
        title: "Men's Shoes",
        items: ["Sneakers", "Running", "Casual", "Formal", "Boots"],
      },
      {
        title: "Women's Shoes",
        items: ["Sneakers", "Heels", "Flats", "Boots", "Sandals"],
      },
      {
        title: "Collections",
        items: ["New Arrivals", "Best Sellers", "Sports", "Limited Edition"],
      },
    ],
  },
  Accessories: {
    featured: "Complete Your Style",
    columns: [
      {
        title: "Everyday",
        items: ["Caps", "Wallets", "Belts", "Watches"],
      },
      {
        title: "Bags",
        items: ["Backpacks", "Shoulder Bags", "Handbags", "Crossbody"],
      },
      {
        title: "More",
        items: ["Sunglasses", "Jewelry", "Scarves", "Travel Accessories"],
      },
    ],
  },
};

const accountItems = [
  { label: "Sign In", icon: LogInIcon },
  { label: "Create Account", icon: UserPlusIcon },
  { label: "My Orders", icon: PackageIcon },
  { label: "Help Center", icon: HelpCircleIcon },
];

const mobileMenuItems = [
  { label: "Home", href: "#home" },
  { label: "Men", href: "#men" },
  { label: "Women", href: "#women" },
  { label: "Shoes", href: "#shoes" },
  { label: "Accessories", href: "#accessories" },
  { label: "Sale", href: "#sale", sale: true },
];

// ============================================================
// SMALL REUSABLE UI COMPONENTS
// ============================================================

function NavLink({ item, active, onHover, onLeave, onClick }) {
  return (
    <a
      href={item.href}
      className={`sc-nav-link ${active ? "active" : ""} ${
        item.sale ? "sale-link" : ""
      }`}
      onMouseEnter={() => onHover(item)}
      onFocus={() => onHover(item)}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <span>{item.label}</span>
      {item.hasMenu && <ChevronDownIcon size={13} />}
    </a>
  );
}

function DropdownMenu({ type, onClose }) {
  const menu = megaMenuData[type];

  if (!menu) {
    return null;
  }

  return (
    <div
      className="sc-mega-menu"
      onMouseLeave={onClose}
      role="menu"
      aria-label={`${type} menu`}
    >
      <div className="sc-mega-inner">
        <div className="sc-mega-feature">
          <div className="sc-mega-feature-icon">
            <SparkleIcon size={24} />
          </div>

          <span className="sc-mega-eyebrow">STYLECART</span>

          <h3>{menu.featured}</h3>

          <p>
            Discover carefully selected styles made for your everyday look.
          </p>

          <a href={`#${type.toLowerCase()}`} className="sc-mega-feature-link">
            Shop Collection
            <ChevronRightIcon size={14} />
          </a>
        </div>

        <div className="sc-mega-columns">
          {menu.columns.map((column) => (
            <div className="sc-mega-column" key={column.title}>
              <h4>{column.title}</h4>

              {column.items.map((item) => (
                <a
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  key={item}
                  className="sc-mega-item"
                  role="menuitem"
                  onClick={onClose}
                >
                  <span>{item}</span>
                  <ChevronRightIcon size={12} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccountDropdown({ onClose }) {
  return (
    <div className="sc-account-dropdown">
      <div className="sc-account-heading">
        <div className="sc-account-avatar">
          <UserCircleIcon size={22} />
        </div>

        <div>
          <strong>Welcome to StyleCart</strong>
          <span>Sign in for a better experience</span>
        </div>
      </div>

      <div className="sc-account-list">
        {accountItems.map(({ label, icon: Icon }) => (
          <a
            href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
            className="sc-account-item"
            key={label}
            onClick={onClose}
          >
            <Icon size={18} />
            <span>{label}</span>
            <ChevronRightIcon size={13} />
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileSubMenu({ title, items, open, onToggle }) {
  return (
    <div className={`sc-mobile-group ${open ? "open" : ""}`}>
      <button
        type="button"
        className="sc-mobile-group-button"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDownIcon size={16} />
      </button>

      <div className="sc-mobile-submenu">
        {items.map((item) => (
          <a
            href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  activePage = "Home",
  onSearch,
  onCartClick,
  onWishlistClick,
  onAccountClick,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileGroups, setMobileGroups] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);
  const searchRef = useRef(null);

  // ----------------------------------------------------------
  // Scroll behavior
  // ----------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------------------------------------------------
  // Escape key
  // ----------------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setAccountOpen(false);
        setMobileOpen(false);
      }

      if (
        event.key === "/" &&
        document.activeElement !== searchRef.current &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ----------------------------------------------------------
  // Prevent background scrolling when mobile menu is open
  // ----------------------------------------------------------

  useEffect(() => {
    document.body.classList.toggle("sc-mobile-lock", mobileOpen);

    return () => {
      document.body.classList.remove("sc-mobile-lock");
    };
  }, [mobileOpen]);

  // ----------------------------------------------------------
  // Outside click
  // ----------------------------------------------------------

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        setActiveMenu(null);
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // ----------------------------------------------------------
  // Search
  // ----------------------------------------------------------

  const submitSearch = (event) => {
    event.preventDefault();

    const value = searchValue.trim();

    if (!value) {
      searchRef.current?.focus();
      return;
    }

    if (typeof onSearch === "function") {
      onSearch(value);
      return;
    }

    window.location.hash = `search-${encodeURIComponent(value)}`;
  };

  // ----------------------------------------------------------
  // Navigation interactions
  // ----------------------------------------------------------

  const handleNavHover = (item) => {
    if (item.hasMenu) {
      setActiveMenu(item.label);
      setAccountOpen(false);
    } else {
      setActiveMenu(null);
    }
  };

  const handleNavLeave = () => {
    // Deliberately kept open while the pointer travels toward the mega menu.
  };

  const handleNavClick = (item) => {
    if (item.hasMenu) {
      setActiveMenu((current) =>
        current === item.label ? null : item.label
      );
    }

    setMobileOpen(false);
  };

  // ----------------------------------------------------------
  // Account
  // ----------------------------------------------------------

  const handleAccountToggle = () => {
    setAccountOpen((current) => !current);
    setActiveMenu(null);

    if (typeof onAccountClick === "function") {
      onAccountClick();
    }
  };

  // ----------------------------------------------------------
  // Mobile groups
  // ----------------------------------------------------------

  const toggleMobileGroup = (group) => {
    setMobileGroups((current) => ({
      ...current,
      [group]: !current[group],
    }));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroups({});
  };

  // ----------------------------------------------------------
  // Header class
  // ----------------------------------------------------------

  const headerClass = [
    "sc-navbar-wrapper",
    scrolled ? "is-scrolled" : "",
    mobileOpen ? "mobile-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={headerClass} ref={navbarRef}>
      {/* ======================================================
          PROMO BAR
      ======================================================= */}

      <div className="sc-promo-bar">
        <div className="sc-promo-inner">
          <div className="sc-promo-message">
            <span className="sc-promo-icon">
              <TruckIcon size={16} />
            </span>

            <span>
              Free Shipping on Orders Above <strong>Rs. 3,000</strong>
            </span>
          </div>

          <div className="sc-promo-links">
            <a href="#track-order">
              <PackageIcon size={14} />
              Track Order
            </a>

            <span className="sc-promo-divider" />

            <a href="#help">
              <HelpCircleIcon size={14} />
              Help
            </a>

            <span className="sc-promo-divider" />

            <button type="button" className="sc-currency-button">
              <span className="sc-currency-symbol">₨</span>
              <span>PKR</span>
              <ChevronDownIcon size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN NAVIGATION
      ======================================================= */}

      <header className="sc-main-header">
        <div className="sc-header-inner">
          {/* Logo */}
          <a
            href="#home"
            className="sc-brand"
            aria-label="StyleCart Home"
            onClick={() => setMobileOpen(false)}
          >
            <LogoMark />

            <div className="sc-brand-copy">
              <span className="sc-brand-name">
                Style<span>Cart</span>
              </span>

              <span className="sc-brand-tagline">
                Fashion <i>•</i> Shoes <i>•</i> More
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="sc-desktop-nav" aria-label="Main navigation">
            {mainLinks.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                active={activePage === item.label}
                onHover={handleNavHover}
                onLeave={handleNavLeave}
                onClick={() => handleNavClick(item)}
              />
            ))}
          </nav>

          {/* Actions */}
          <div className="sc-actions">
            {/* Search */}
            <form className="sc-search" onSubmit={submitSearch}>
              <SearchIcon size={18} />

              <input
                ref={searchRef}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                type="search"
                placeholder="Search for products..."
                aria-label="Search for products"
                autoComplete="off"
              />

              <kbd>/</kbd>
            </form>

            {/* Wishlist */}
            <button
              type="button"
              className="sc-action-button"
              aria-label={`Wishlist${
                wishlistCount ? `, ${wishlistCount} items` : ""
              }`}
              onClick={onWishlistClick}
            >
              <HeartIcon size={21} />
              {wishlistCount > 0 && (
                <span className="sc-badge">{wishlistCount}</span>
              )}
            </button>

            {/* Cart */}
            <button
              type="button"
              className="sc-action-button"
              aria-label={`Shopping cart${
                cartCount ? `, ${cartCount} items` : ""
              }`}
              onClick={onCartClick}
            >
              <ShoppingBagIcon size={22} />
              {cartCount > 0 && (
                <span className="sc-badge">{cartCount}</span>
              )}
            </button>

            {/* Account */}
            <div className="sc-account-wrap">
              <button
                type="button"
                className={`sc-action-button ${
                  accountOpen ? "is-active" : ""
                }`}
                aria-label="Account menu"
                aria-expanded={accountOpen}
                onClick={handleAccountToggle}
              >
                <UserIcon size={21} />
              </button>

              {accountOpen && (
                <AccountDropdown onClose={() => setAccountOpen(false)} />
              )}
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="sc-mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((current) => !current);
                setAccountOpen(false);
                setActiveMenu(null);
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================
          DESKTOP MEGA MENU
      ======================================================= */}

      {activeMenu && (
        <DropdownMenu
          type={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      )}

      {/* ======================================================
          MOBILE DRAWER
      ======================================================= */}

      <div
        className={`sc-mobile-overlay ${mobileOpen ? "visible" : ""}`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />

      <aside
        className={`sc-mobile-drawer ${mobileOpen ? "visible" : ""}`}
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <div className="sc-mobile-drawer-header">
          <div className="sc-mobile-title">
            <LogoMark />

            <div>
              <strong>
                Style<span>Cart</span>
              </strong>

              <small>Fashion • Shoes • More</small>
            </div>
          </div>

          <button
            type="button"
            className="sc-mobile-close"
            onClick={closeMobile}
            aria-label="Close navigation"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="sc-mobile-search-wrap">
          <form className="sc-mobile-search" onSubmit={submitSearch}>
            <SearchIcon size={18} />

            <input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
            />
          </form>
        </div>

        <nav className="sc-mobile-nav" aria-label="Mobile navigation">
          <a
            href="#home"
            className={`sc-mobile-link ${
              activePage === "Home" ? "active" : ""
            }`}
            onClick={closeMobile}
          >
            <span>Home</span>
            <ChevronRightIcon size={15} />
          </a>

          <MobileSubMenu
            title="Men"
            open={Boolean(mobileGroups.Men)}
            onToggle={() => toggleMobileGroup("Men")}
            items={[
              "T-Shirts",
              "Shirts",
              "Hoodies",
              "Jeans",
              "Sneakers",
              "Accessories",
            ]}
          />

          <MobileSubMenu
            title="Women"
            open={Boolean(mobileGroups.Women)}
            onToggle={() => toggleMobileGroup("Women")}
            items={[
              "Dresses",
              "Tops",
              "Jeans",
              "Sneakers",
              "Bags",
              "Accessories",
            ]}
          />

          <MobileSubMenu
            title="Shoes"
            open={Boolean(mobileGroups.Shoes)}
            onToggle={() => toggleMobileGroup("Shoes")}
            items={[
              "Men's Sneakers",
              "Women's Sneakers",
              "Running Shoes",
              "Formal Shoes",
              "Sandals",
            ]}
          />

          <MobileSubMenu
            title="Accessories"
            open={Boolean(mobileGroups.Accessories)}
            onToggle={() => toggleMobileGroup("Accessories")}
            items={[
              "Bags",
              "Caps",
              "Watches",
              "Sunglasses",
              "Wallets",
            ]}
          />

          <a
            href="#sale"
            className="sc-mobile-link sale"
            onClick={closeMobile}
          >
            <span>Sale</span>
            <span className="sc-mobile-sale-pill">UP TO 50% OFF</span>
          </a>
        </nav>

        <div className="sc-mobile-account-card">
          <div className="sc-mobile-account-icon">
            <UserCircleIcon size={22} />
          </div>

          <div>
            <strong>Welcome to StyleCart</strong>
            <span>Sign in to manage your account</span>
          </div>

          <ChevronRightIcon size={15} />
        </div>

        <div className="sc-mobile-quick-actions">
          <a href="#wishlist" onClick={closeMobile}>
            <HeartIcon size={19} />
            <span>Wishlist</span>
            {wishlistCount > 0 && <b>{wishlistCount}</b>}
          </a>

          <a href="#cart" onClick={closeMobile}>
            <ShoppingBagIcon size={19} />
            <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </a>

          <a href="#orders" onClick={closeMobile}>
            <PackageIcon size={19} />
            <span>Orders</span>
          </a>
        </div>

        <div className="sc-mobile-footer">
          <a href="#track-order" onClick={closeMobile}>
            Track Order
          </a>

          <a href="#help" onClick={closeMobile}>
            Help
          </a>

          <a href="#contact" onClick={closeMobile}>
            Contact
          </a>
        </div>
      </aside>

      {/* ======================================================
          ACCESSIBILITY LIVE REGION
      ======================================================= */}

      <span className="sc-sr-only" aria-live="polite">
        {cartCount > 0 ? `${cartCount} items in cart.` : "Cart is empty."}
      </span>
    </div>
  );
}

