import TabItem from "./TabItem";
import Button from "./Button";
import Icon from "./Icon";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h6>TinnCann</h6>
      </div>
      <nav>
        <TabItem label="Home" active />
        <TabItem label="Forum" />
        <TabItem label="Account" />
        <TabItem label="Search Experts" />
      </nav>
      <div className="actions">
        <Button label="Contact" />
        <Icon />
      </div>
    </header>
  );
}

export default Header;