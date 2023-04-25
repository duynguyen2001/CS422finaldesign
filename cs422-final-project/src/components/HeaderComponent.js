import React from "react";
import "./HeaderComponent.css";
import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";

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

const HeaderComponent = () => {
    const handleButtonClick = (label) => {
        console.log(`${label} button clicked`);
    };
    const navigate = useNavigate();

    const handleTabClick = (label) => {
        console.log(`${label} tab clicked`);
        if (label === "Home") {
            navigate("/");
        } else if (label === "Forum") {
            navigate("/forum");
        } else if (label === "Account") {
            navigate("/profile");
        } else if (label === "Search Experts") {
            navigate("/search");
        }
    };

    return (
        <div className="header-container">
            <div className="logo">TinnCann</div>
            <div className="tabs">
                <TabItem label="Home" onClick={() => handleTabClick("Home")} />
                <TabItem
                    label="Forum"
                    onClick={() => handleTabClick("Forum")}
                />
                <TabItem
                    label="Account"
                    onClick={() => handleTabClick("Account")}
                />
                <TabItem
                    label="Search Experts"
                    onClick={() => handleTabClick("Search Experts")}
                />
            </div>
            <div className="buttons">
                <Button
                    label="Sign in"
                    onClick={() => handleButtonClick("Sign in")}
                />
                <Button
                    label="Contact"
                    onClick={() => handleButtonClick("Contact")}
                />
            </div>
        </div>
    );
};

export default HeaderComponent;
