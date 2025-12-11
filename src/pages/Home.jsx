import "../styles/home.css";

export default function Home() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-hero">
      <div className="hero-text">
        <h1>Welcome to Tapal Chai Store</h1>
        <p>The taste of Pakistan delivered to your doorstep.</p>
        <button className="shop-btn" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
