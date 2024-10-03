import "../Header/Header.css";
export function Header() {
  return (
    <>
      <header className="header">
        <ul className="header__item_container">
          <button className="header__item">Become a Mentor</button>
          <button className="header__item">Community</button>
          <button className="header__item">Ux Design</button>
          <button className="header__item">Software Engineering</button>
          <button className="header__item">Marketing</button>
          <button className="header__item">About Us</button>
          <button className="header__item">Blog</button>
          <button className="header__item">Donate</button>
        </ul>
      </header>
    </>
  );
}
