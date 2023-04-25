import React from "react";
import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import Contact from "./Contact";

const TabItem = ({ label, onClick }) => {
    const currentTab = window.location.pathname;
    
    if (label === "Home" && currentTab === "/") {
        return (
            <div
                className="tab-item"
                style={{ color: "#000" }}
                onClick={onClick}
            >
                <b>{label}</b>
            </div>
        );
    }
    if (label === "Forum" && currentTab === "/forum") {
        return (
            <div
                className="tab-item"
                style={{ color: "#000" }}
                onClick={onClick}
            >
                <b>{label}</b>
            </div>
        );
    }
    if (label === "Search Experts" && currentTab === "/search") {
        return (
            <div
                className="tab-item"
                style={{ color: "#000" }}
                onClick={onClick}
            >
                <b>{label}</b>
            </div>
        );
    }
    if (label === "Account" && currentTab === "/profile") {
        return (
            <div
                className="tab-item"
                style={{ color: "#000" }}
                onClick={onClick}
            >
                <b>{label}</b>
            </div>
        );
    }

    return (
        <div className="tab-item" onClick={onClick}>
            {label}
        </div>
    );
};

const Button = ({ label, onClick }) => (
    <button className="button-header" onClick={onClick}>
        {label}
    </button>
);

const HeaderComponent = () => {

    
    const handleButtonClick = (label) => {
        if (label === "Sign In") {
            navigate("/signin");
        } else if (label === "Conntact") {
            navigate("/contact");
        }
    };
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = React.useState(false);
    const [showContact, setShowContact] = React.useState(false);

    const routeChange = () =>{ 
        let path = '../signin'; 
        navigate(path);
    }

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
        } else if (label === "Sign in") {
            navigate("/signin");
        } else if (label === "Contact") {
            setShowContact(!showContact)
        }
    };

    return (
        <div>
            <div className="header-container">
            <div className="logo">TinnCann</div>
            <div className="tabs">
                <TabItem label="Home" onClick={() => handleTabClick("Home")} />
                <TabItem
                    label="Forum"
                    onClick={() => handleTabClick("Forum")}
                />

                <TabItem
                    label="Search Experts"
                    onClick={() => handleTabClick("Search Experts")}
                />
                <TabItem
                    label="Account"
                    onClick={() => handleTabClick("Account")}
                />
            </div>
            <div>
                <button
                    onClick={() => handleTabClick("Sign in")}
                >Sign in</button>
            </div>
            {showLogin && <SignIn onClose={navigate("/")}/>}
        </div>
        </div>
        
    );
};

export default HeaderComponent;
