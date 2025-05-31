const Terms = () => {
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
    <h1>Terms & Conditions</h1>
    <p style={paragraphStyle}>
    This website is operated for <b>practice and demonstration purposes only</b>. No real transactions, deliveries, or services are provided.
    </p>
    <h3 style={headingStyle}>Data Privacy:</h3>
    <p style={paragraphStyle}>
    No personal data is collected, stored, or shared. Any data entered into forms (e.g., during checkout) is not processed or saved in any persistent way..
    </p>
    <h3 style={headingStyle}>Limitation of Liability:</h3>
    <p style={paragraphStyle}>
    The website owner assumes no responsibility for any misunderstanding or misuse of the content presented on the site. By accessing and using this site, you acknowledge and agree that it is a mock project and should not be treated as a functioning online store.
    </p>
    <h3 style={headingStyle}>Contact</h3>
    <p style={paragraphStyle}>
    This is a practice project. If you have questions or feedback: <br/>
    📧 Email: <a href="mailto:Faride.thr@gmail.com">Faride.thr@gmail.com</a>
    </p>
    </main>
)
}
export default Terms;