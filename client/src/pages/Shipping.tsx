const Shipping= () => {
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

  };
return(
 <main style={containerStyle}>
    <h1>Shipping & Returns</h1>
    <p style={paragraphStyle}>
    This website is operated for <b>practice and demonstration purposes only</b>. No real transactions, deliveries, or services are provided.
    </p>
    <h3 style={headingStyle}>Shipping Policy:</h3>
    <p style={paragraphStyle}>
    This website does <b>not</b> offer real shipping services. Any shipping information or options displayed during checkout are <b>simulated</b> and for demonstration purposes only. No physical products will be delivered, and no orders will be fulfilled.
    </p>
    <h3 style={headingStyle}>No Customer Service for Orders:</h3>
    <p style={paragraphStyle}>
    As this is a practice project, there is no real customer support for issues related to orders, shipping, or product quality.
    </p>
    <h3 style={headingStyle}>Contact</h3>
    <p style={paragraphStyle}>
    This is a practice project. If you have questions or feedback: <br/>
    📧 Email: <a href="mailto:Faride.thr@gmail.com">Faride.thr@gmail.com</a>
    </p>
    </main>
)
}
export default Shipping;