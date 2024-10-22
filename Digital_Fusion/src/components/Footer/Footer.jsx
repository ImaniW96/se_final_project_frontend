import "../Footer/Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__item_container">
        <div className="footer__item">Instagram</div>
        <div className="footer__item">Twitter</div>
        <div className="footer__item">Tik Tok</div>
        <div className="footer__item">Terms of Service</div>
        <div className="footer__item">Contact Us</div>
      </div>
      <p className="footer__copyright">
        &copy; 2024 Digital Fusion All rights reserved.
      </p>
    </footer>
  );
}
