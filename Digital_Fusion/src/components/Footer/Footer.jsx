import "../Footer/Footer.css";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__item_container">
          <button className="footer__item">Instagram</button>
          <button className="footer__item">Twitter</button>
          <button className="footer__item">Tik Tok</button>
          <button className="footer__item">Terms of Service</button>
          <button className="footer__item">Contact Us</button>
          <p>&copy; 2024 Digital Fusion All rights reserved.</p>
        </ul>
      </footer>
    </>
  );
}
