import "./Awards.css";

function Awards() {
  return (
    <section className="container">
      <h2>Awards & Certificates</h2>

      <div className="awards-grid">
        <div className="award-card">
          <img src="/img/3rdH.png" alt="Certificate" />
          <div className="award-content">
            <h3>3RD HONORS S. Y. 2024 - 2025</h3>
            <span>2025</span>
          </div>
        </div>
        <div className="award-card">
          <img src="/img/cmsc.jpg" alt="Certificate" />
          <div className="award-content">
            <h3>CMSC-PFSC 2025 (PHILIPPINE ASSOSCIATION FOR COMMUNICATION EDUCATORS)</h3>
            <span>2025</span>
          </div>
        </div>
        <div className="award-card">
          <img src="/img/pinoy.png" alt="Certificate" />
          <div className="award-content">
            <h3>PINOY MEDIA CONGRESS 2025 (PHILIPPINE ASSOSCIATION FOR COMMUNICATION EDUCATORS)</h3>
            <span>2025</span>
          </div>
        </div>
        <div className="award-card">
          <img src="/img/pinoy2.png" alt="Certificate" />
          <div className="award-content">
            <h3>PINOY MEDIA CONGRESS 2025 (PHILIPPINE ASSOSCIATION FOR COMMUNICATION EDUCATORS)</h3>
            <span>2025</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Awards;
