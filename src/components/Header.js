import React, { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaSearch,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
const SizeButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
};
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  const handleMouseOver = () => {
    setIsButtonHovered(true);
  };

  const handleMouseOut = () => {
    setIsButtonHovered(false);
  };

  // Header styles
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 15px",
    backgroundColor: "black",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  };

  const logoAndHamburgerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const hamburgerStyle = {
    cursor: "pointer",
    marginRight: "15px",
    color: "white",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const hamburgerHoverStyle = {
    transform: "scale(1.1)",
    color: "#f39c12",
  };

  const logoStyle = {
    height: "70px",
  };

  const headerRightStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  };

  const searchBarWrapperStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "25px",
    padding: "5px 15px",
    marginRight: "15px",
    backgroundColor: "#f8f8f8",
    transition: "all 0.3s ease",
  };

  const searchBarStyle = {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    width: "100%",
    fontSize: "14px",
    paddingLeft: "10px",
    color: "#333",
  };

  const searchBarIconStyle = {
    color: "#555",
    marginRight: "8px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const iconStyle = {
    marginLeft: "12px",
    cursor: "pointer",
    color: "white",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    height: "100vh",
    overflowY: "auto",
    zIndex: "1001",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
    opacity: isMobileMenuOpen ? "1" : "0",
  };

  const menuItemStyle = {
    margin: "15px 0",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    background: "linear-gradient(to right, #232526, #414345)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, background 0.3s ease",
  };

  const menuItemHoverStyle = {
    background: "gray",
    transform: "scale(1.05)",
  };

  const subMenuStyle = {
    margin: "10px 0",
    fontSize: "16px",
    fontWeight: "normal",
    cursor: "pointer",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    marginLeft: "20px",
    padding: "8px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    padding: "10px 0",
  };

  const socialIconStyle = {
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const socialIconHoverStyle = {
    color: "gray",
    transform: "scale(1.2)",
  };

  // Banner styles
  const bannerStyle = {
    position: "relative",
    width: "100%",
    height: "400px",
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/fashion-outfit-trends_161568-19275.jpg?w=1380')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  const bannerHeadingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0 0 10px 0",

    WebkitBackgroundClip: "text", // This is important for text gradient effect
    color: "gray", // This makes the text color transparent, so the gradient shows
  };

  const bannerTextStyle = {
    fontSize: "25px",
    margin: "0 0 20px 0",
    color: "black",
    fontWeight: "bold",
  };

  const bannerButtonStyle = {
    padding: "10px 20px",
    backgroundImage: isButtonHovered
      ? "linear-gradient(45deg, #d35400, #c0392b)"
      : "linear-gradient(45deg, #e74c3c, #f39c12)",

    border: "none",
    borderRadius: "25px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  // New Drops Section styles
  const newDropsSectionStyle = {
    padding: "40px 15px",
    backgroundColor: "black",
  };

  const newDropsHeadingStyle = {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    WebkitBackgroundClip: "text", // This is important for text gradient effect
    color: "transparent",
  };

  const productGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  };
  const productCardStyle = {
    backgroundColor: "black",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
    color: "white",
  };

  const productCardHoverStyle = {
    transform: "scale(1.05)", // Slight zoom effect
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow
  };

  const productImageStyle = {
    width: "100%",
    height: "370px",
    borderRadius: "8px",
  };

  const sizeButtonsWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const sizeButtonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    border: "1px solid #ccc",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    backgroundColor: "black",
    color: "white",
  };
  const brandGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
  };

  const brandCardStyle = {
    background: "#111",
    padding: "1.5rem",
    borderRadius: "10px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const brandCardHoverStyle = {
    transform: "translateY(-5px)",
  };

  const brandCardImgStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "1rem",
  };

  const brandCardTextStyle = {
    background: "linear-gradient(to right, #4ecdc4, #ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    fontWeight: "bold",
  };

  const headingStyle = {
    textAlign: "center",
    color: "white",
  };
  const sectionStyle = {
    backgroundColor: "black",
  };
  const headingStylekid = {
    color: "white",
  };

  return (
    <>
      <div style={sectionStyle}>
        <header style={headerStyle}>
          <div style={logoAndHamburgerStyle}>
            {/* Hamburger Menu */}
            <div
              style={{
                ...hamburgerStyle,
                ...(isMobileMenuOpen && hamburgerHoverStyle),
              }}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FaBars size={25} />
            </div>

            {/* Logo */}
            <div>
              <img src="/logo.png" alt="Logo" style={logoStyle} />
            </div>
          </div>

          <div style={headerRightStyle}>
            {/* Search Bar */}
            <div style={searchBarWrapperStyle}>
              <FaSearch size={16} style={searchBarIconStyle} />
              <input
                type="text"
                placeholder="Search..."
                style={searchBarStyle}
              />
            </div>
            {/* User Profile, Wishlist, and Cart Icons */}
            <FaUser size={20} style={iconStyle} />
            <FaHeart size={20} style={iconStyle} />
            <FaShoppingBag size={20} style={iconStyle} />
          </div>

          {/* Mobile Menu */}
          <div style={mobileMenuStyle}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FaTimes
                size={28}
                onClick={toggleMenu}
                aria-label="Close Menu"
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "rotate(90deg)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "rotate(0deg)")
                }
              />
            </div>

            {[
              "Login",
              "New Arrivals",
              "Best Sellers",
              "Orders",
              "Find a Store",
            ].map((item, idx) => (
              <div
                key={idx}
                style={menuItemStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, menuItemHoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, {
                    background: "linear-gradient(to right, #232526, #414345)",
                    transform: "scale(1)",
                  })
                }
              >
                {item === "Login" && <FaUser style={{ marginRight: "10px" }} />}
                {item}
              </div>
            ))}

            <div style={menuItemStyle} onClick={toggleShop}>
              Shop {isShopOpen ? "▲" : "▼"}
            </div>

            {isShopOpen && (
              <div style={subMenuStyle}>
                {[
                  "Hoodies",
                  "T-shirts",
                  "Sweat T-shirts",
                  "Tourers",
                  "Jeans",
                  "Shorts",
                ].map((item, idx) => (
                  <div key={idx} style={subMenuStyle}>
                    {item}
                  </div>
                ))}
              </div>
            )}

            <div style={footerStyle}>
              {[
                { Icon: FaInstagram, link: "https://www.instagram.com" },
                { Icon: FaFacebook, link: "https://www.facebook.com" },
                { Icon: FaTwitter, link: "https://twitter.com" },
                { Icon: FaPinterest, link: "https://www.pinterest.com" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com" },
                { Icon: FaYoutube, link: "https://www.youtube.com" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noopener noreferrer"
                >
                  <Icon
                    style={socialIconStyle}
                    onMouseEnter={(e) =>
                      Object.assign(e.target.style, socialIconHoverStyle)
                    }
                    onMouseLeave={(e) =>
                      Object.assign(e.target.style, {
                        color: "white",
                        transform: "scale(1)",
                      })
                    }
                  />
                </a>
              ))}
            </div>
          </div>
        </header>

        <section style={bannerStyle}>
          <h1 style={bannerHeadingStyle}>Moleculor Collections</h1>
          <p style={bannerTextStyle}>Explore our latest collection.</p>
          <button
            style={bannerButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Shop Now
          </button>
        </section>
        <section style={newDropsSectionStyle}>
          <h2 style={brandCardTextStyle}>New Drops</h2>
          <div style={productGridStyle}>
            {/* Sample Product Cards */}
            {[
              {
                img: "https://media.istockphoto.com/id/510333639/photo/mens-shorts.jpg?s=612x612&w=0&k=20&c=1DwDYO9W48FXCnpLg4RIL36Aw9BG1BQv6kUt5BdBslE=",
                name: "Solid Regular Fit Chino Short",
                price: "$100",
                sizes: ["S", "M", "L"],
              },
              {
                img: "https://img.freepik.com/premium-photo/confident-young-professional-against-brick-wall-background_1228708-652.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
                name: "White Lenin Shirt",
                price: "$120",
                sizes: ["S", "M", "L"],
              },
              {
                img: "https://media.istockphoto.com/id/1221134337/photo/front-views-black-trousers.jpg?b=1&s=612x612&w=0&k=20&c=7c_DovW9wo7E9Gcprc5M5pgROEcp0YXWhB0lD6uBE34=",
                name: "Causal Trouser",
                price: "$90",
                sizes: ["S", "M", "L", "XL"],
              },
              {
                img: "https://img.freepik.com/premium-photo/composite-image-handsome-young-man-posing-with-hands-pockets_1134-4222.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
                name: "Men Regular Half Sleeve Shirt",
                price: "$130",
                sizes: ["S", "L", "XL"],
              },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  ...productCardStyle,
                  transform: "scale(1)",
                }}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                  })
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, {
                    transform: "scale(1)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  })
                }
              >
                <img
                  src={product.img}
                  alt="Product"
                  style={productImageStyle}
                />
                <h3 style={brandCardTextStyle}>{product.name}</h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#008000",
                    margin: "5px 0",
                    fontWeight: "bold",
                  }}
                >
                  Price: {product.price}
                </p>
                <div style={sizeButtonsWrapperStyle}>
                  {product.sizes.map((size, sizeIndex) => (
                    <button key={sizeIndex} style={sizeButtonStyle}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <h2 style={brandCardTextStyle}>DEALS OF THE DAY</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
              padding: "2rem",
            }}
          >
            {/* Product Cards */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "10px",
                  padding: "1rem",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 8px 15px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={
                      [
                        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
                        "https://img.freepik.com/free-photo/modern-man-with-sunglasses-city_23-2147961048.jpg?t=st=1735543580~exp=1735547180~hmac=566b3a27050205d2f47bd659cf8fd8dfb0c9db0bf002b825805c88cacca394a0&w=360",
                        "https://img.freepik.com/free-photo/man-dancer-posing-studio_1303-10919.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
                        "https://img.freepik.com/free-photo/handsome-businessman-formal-clothes-posing-street-sunglasses_158538-8303.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid",
                      ][index]
                    }
                    alt="Product"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "rgba(255, 0, 0, 0.7)",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    -{[40, 30, 25, 35][index]}%
                  </span>
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div>
                  <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>
                    {
                      [
                        "Premium Brand",
                        "Luxury Collection",
                        "Urban Style",
                        "Elite Fashion",
                      ][index]
                    }
                  </h3>
                  <p style={{ color: "#4ecdc4", fontWeight: "500" }}>
                    {
                      [
                        "Casual Slim Fit T-Shirt",
                        "Designer Denim Jacket",
                        "Blue Slim Fit Jeans",
                        "Folksy Blue Shirt",
                      ][index]
                    }
                  </p>
                  <div>
                    <span style={{ color: "green", fontSize: "1.2rem" }}>
                      ${[29.99, 89.99, 149.99, 129.99][index].toFixed(2)}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "red",
                        fontSize: "1rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      ${[49.99, 129.99, 199.99, 199.99][index].toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="brands" style={sectionStyle}>
          <h2 style={brandCardTextStyle}>TOPWEAR COLLECTIONS</h2>
          <div className="brand-grid" style={brandGridStyle}>
            {/* Brand Card 1 */}
            <div className="brand-card" style={brandCardStyle}>
              <img
                src="https://img.freepik.com/premium-photo/young-caucasian-man-isolated-white-wall-confident-keeping-hands-hips_1187-103351.jpg?w=900"
                alt="Brand"
                style={brandCardImgStyle}
              />
              <p style={brandCardTextStyle}>Hoodies</p>
            </div>

            {/* Brand Card 2 */}
            <div className="brand-card" style={brandCardStyle}>
              <img
                src="https://img.freepik.com/free-photo/smiling-man-wearing-sunglasses_171337-14990.jpg?t=st=1735543775~exp=1735547375~hmac=348a68a40a9ab08692852f7411c7448185d1d7051783ad9a33337cfa9ee67dd9&w=1060"
                alt="Brand"
                style={brandCardImgStyle}
              />
              <p style={brandCardTextStyle}>Casual Shirts</p>
            </div>

            {/* Brand Card 3 */}
            <div className="brand-card" style={brandCardStyle}>
              <img
                src="https://img.freepik.com/free-photo/style-fitness-determination-concept-waist-up-shot-thoughtful-serious-young-man-with-beard-tattoo-arm-wearing-stylish-red-dry-fit-t-shirt-feeling-tired-after-intensive-training_343059-2559.jpg?t=st=1735543905~exp=1735547505~hmac=d47da98e5e0449b5f4b3da556ed2b71c117e080d020200338e990b3c5085a2c0&w=1060"
                alt="Brand"
                style={brandCardImgStyle}
              />
              <p style={brandCardTextStyle}>T-Shirts</p>
            </div>

            {/* Brand Card 4 */}
            <div className="brand-card" style={brandCardStyle}>
              <img
                src="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745039.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
                alt="Brand"
                style={brandCardImgStyle}
              />
              <p style={brandCardTextStyle}>Jackets</p>
            </div>
          </div>
        </section>
        <section
          id="men"
          className="section"
          style={{ textAlign: "center", padding: "20px" }}
        >
          <h2 style={brandCardTextStyle}>BOTTOM WEARS COLLECTION</h2>
          <div
            className="product-grid"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px", // Increased gap between cards
              flexWrap: "wrap",
            }}
          >
            <div
              className="product-card"
              style={{
                borderRadius: "8px",
                padding: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/low-section-view-businessman-holding-shoulder-bag_23-2147876751.jpg?t=st=1735544166~exp=1735547766~hmac=5a5c98d0b55c2bfc653c6e4cd3e2b2a18ce9c20e6a4acce456fd61c2c7f82366&w=360"
                alt="Men's Fashion"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={brandCardTextStyle}>Trousers</h3>
            </div>
            <div
              className="product-card"
              style={{
                borderRadius: "8px",
                padding: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/pants-hanger-with-green-background_23-2150264166.jpg?t=st=1735544306~exp=1735547906~hmac=3dfefc9bbae24a45696eb510f588c7fc59207089373664d482bec33b3c0b5043&w=360"
                alt="Men's Fashion"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={brandCardTextStyle}>Jeans</h3>
            </div>
            <div
              className="product-card"
              style={{
                borderRadius: "8px",
                padding: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/handsome-man-with-folded-hands-posing-against-orange-wall_171337-16507.jpg?t=st=1735544375~exp=1735547975~hmac=c504d5bb4c79c4ad39b378345953e3a032a0e65fee1bcef84bed347f03b63272&w=360"
                alt="Men's Fashion"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={brandCardTextStyle}>Shorts</h3>
            </div>
            <div
              className="product-card"
              style={{
                borderRadius: "8px",
                padding: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-guy-full-growth-youth-sportswear-jacket_93995-11456.jpg?ga=GA1.1.1862102380.1729219632&semt=ais_hybrid"
                alt="Men's Fashion"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={brandCardTextStyle}>Track Pants</h3>
            </div>
          </div>
        </section>
        <section
          id="kids"
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "black",
          }}
        >
          <h2 style={brandCardTextStyle}>PREMIUM COLLECTIONS</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?t=st=1735544791~exp=1735548391~hmac=10883131342135a5dad6066d0a44bf7b88b9d91c9427398b97cc99a9b3008656&w=1060" // Replace with your image link
                alt="Kids' Fashion"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#4ecdc4", fontWeight: "500" }}>
                Office Outfit
              </h3>
            </div>
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1420515189/photo/exercise-workout-and-training-with-a-healthy-man-training-for-sport-fitness-and-wellness.jpg?s=612x612&w=0&k=20&c=IVR0ZPuq6lDA7BKmVfG_1Zya1Z1qNjSzj2q4KNc9M_I=" // Replace with your image link
                alt="Kids' Fashion"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#4ecdc4", fontWeight: "500" }}>Gym Wear</h3>
            </div>
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/front-view-male-student-green-checkered-shirt-wearing-black-backpack-holding-files-coffee_140725-42398.jpg?t=st=1735544954~exp=1735548554~hmac=197675cb54b25091ff2d5d30cccc82d9bed1d31b3be6066dafe6e75f14af7a22&w=1060" // Replace with your image link
                alt="Kids' Fashion"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#4ecdc4", fontWeight: "500" }}>
                College Outfit
              </h3>
            </div>
            <div
              style={{
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/impressed-young-handsome-curly-traveler-man-wearing-sunglasses-holding-swim-ring-pointing-left-side-isolated-pink-space-with-copy-space_141793-92213.jpg?t=st=1735545382~exp=1735548982~hmac=f963169ae7d5847aa1b82a6165d4475efcc8a5533bf19df8ae117fc65c85498b&w=1060" // Replace with your image link
                alt="Kids' Fashion"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#4ecdc4", fontWeight: "500" }}>
                Party Wear
              </h3>
            </div>
          </div>
        </section>
        <footer
          style={{
            background: "#111",
            padding: "4rem 2rem 1rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                }}
              >
                About Moleculor
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#about"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Who We Are
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#careers"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Careers
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#terms"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#privacy"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                }}
              >
                Help
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#track"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Track Your Order
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#returns"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Returns
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#shipping"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Shipping Info
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#faq"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                }}
              >
                Shop By
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#men"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Hoodies
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#women"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Shirts
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#kids"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    T-Shirts
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#collections"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Jeans
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#collections"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Trousers
                  </a>
                </li>
                <li style={{ marginBottom: "0.8rem" }}>
                  <a
                    href="#collections"
                    style={{
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#4ecdc4")}
                    onMouseOut={(e) => (e.target.style.color = "#888")}
                  >
                    Shorts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                }}
              >
                Follow Us
              </h3>
              <div style={{ display: "flex", gap: "1rem", fontSize: "1.5rem" }}>
                <a href="https://www.facebook.com/" style={{ color: "#fff" }}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" style={{ color: "#fff" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/" style={{ color: "#fff" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://in.pinterest.com/" style={{ color: "#fff" }}>
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              paddingTop: "1rem",
              borderTop: "1px solid #222",
              color: "#666",
            }}
          >
            <p>&copy; 2025 Moleculor. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Header;
