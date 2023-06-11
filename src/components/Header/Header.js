import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movies in your area 🎥
    </span>
  );
};

export default Header;