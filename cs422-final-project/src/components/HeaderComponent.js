import React from "react";
import "./HeaderComponent.css";
import "./HeaderComponent.css";

const TabItem = ({ label, onClick }) => (
  <div className="tab-item" onClick={onClick}>
    {label}
  </div>
);

const Button = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);

const handleTabClick = (label) => {
  console.log(`${label} tab clicked`);
  if (label === "Home") {
<<<<<<< HEAD
    // onHomeClick();
  }};
=======
    // FIXME, add actuall click listener
  }
}

>>>>>>> 11f7ef2af4ffffb21a5bb2fcb2820efbd92b3f1f

const HeaderComponent = () => {
  const handleTabClick = (label) => {
    console.log(`${label} tab clicked`);
  };


  const handleButtonClick = (label) => {
    console.log(`${label} button clicked`);
  };

  return (
    <div className="header-container">
      <div className="logo">TinnCann</div>
      <div className="tabs">
        <TabItem label="Home" onClick={() => handleTabClick("Home")} />
        <TabItem label="Forum" onClick={() => handleTabClick("Forum")} />
        <TabItem label="Account" onClick={() => handleTabClick("Account")} />
        <TabItem
          label="Search Experts"
          onClick={() => handleTabClick("Search Experts")}
        />
      </div>
      <div className="buttons">
        <Button label="Sign in" onClick={() => handleButtonClick("Sign in")} />
        <Button
          label="Contact"
          onClick={() => handleButtonClick("Contact")}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;