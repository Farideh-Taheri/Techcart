const AboutUs = () => {
    const containerStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.1,
  }; 
    const headingStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  };
  const paragraphStyle = {
    margin: "0.5rem 0",
    padding: "1rem",
    lineHeight: "1.8",
  };
return (
    <main style={containerStyle}>
    <h1>About This Website</h1>
    <p style={paragraphStyle}>
    This website is operated for <b>practice and demonstration purposes only</b>. No real transactions, deliveries, or services are provided.
    </p>
    <h3 style={headingStyle}>Products:</h3>
    <p style={paragraphStyle}>
    All products are <b>fictional</b>, provided by the <b>Fake Store API</b>, and displayed for <b>testing, styling, or learning</b> purposes only.
    They do not represent real items, prices, or availability.
    </p>
    <h3 style={headingStyle}>Orders and Payments:</h3>
    <p style={paragraphStyle}>
    This site does not process real orders or collect actual payments.
    Any checkout or cart features are <b>simulated</b> and for frontend/backend practice only.
    No real shipping or return processes exist. 
    </p>
    <h3 style={headingStyle}>Contact</h3>
    <p style={paragraphStyle}>
    This is a practice project. If you have questions or feedback: <br/>
    📧 Email: <a href="mailto:Faride.thr@gmail.com">Faride.thr@gmail.com</a>
    </p>
    </main>
)
}
export default AboutUs;