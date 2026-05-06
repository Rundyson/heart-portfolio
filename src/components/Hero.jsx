import "./Hero.css";
function Hero() {
  return (
    <section className="hero container">
      <div className="details">
        <h1>Heart Ashley Espiritu</h1>
      
        <p>
         Bachelor of Arts in Communication student with a versatile background in feature writing, live production
management, and media research. Demonstrated leadership in overseeing technical event logistics and
production finance, with a strong commitment to journalistic ethics and creative storytelling. Seeking a
comprehensive internship to contribute to and gain professional exposure
        </p>
        <div className="contact-box">
        <p>Email: athath.espi@gmail.com</p>
        <p>Phone: +639216548818</p>
        <p>©Heart Ashley Espiritu</p>
      </div>

        <button><a href="https://drive.google.com/file/d/1ipwuhFC48eKYi7SkN3FV6cOwT1Drp5sr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" >VIEW MY CV</a></button>
      </div>

      <div className="hero-img">
        <img src="/img/hero.jpg" alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
