import "../styles/home.css";

export default function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="hero-text">
        <h1>Welcome to Tapal Chai Store</h1>
        <p>The taste of Pakistan delivered to your doorstep.</p>
        <button
          className="shop-btn"
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
