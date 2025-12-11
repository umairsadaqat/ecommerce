import "../styles/about.css";
import aboutImg from "../assets/home.jpg";

export default function About() {
  return (
    
    <div className="About">
      <h1 className="about-title">About Us</h1>

      <section id="about" className="about-container">
        <div className="about-left">
          <h2>About Tapal Chai</h2>

          <p>
            Tapal Chai is one of Pakistan’s most iconic tea brands. For decades,
            we have delivered rich flavor, aroma, and the unforgettable taste
            that brings families together.
          </p>

          <p>
            From handpicked tea leaves to our careful blending process, Tapal
            ensures quality in every sip. Our commitment is to preserve the
            traditional taste of chai while continuously innovating to meet
            modern tastes.
          </p>

          <p>
            Whether it's morning tea, evening gatherings, or relaxing moments
            alone — Tapal Chai makes every cup special.
          </p>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="About Tapal Chai" />
        </div>
      </section>
      </div>
   
    
  );
}
