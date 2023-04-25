import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = ({ onClose }) => {
    const navigate = useNavigate();

    const onCreateAnAccountClick = useCallback(() => {
        navigate("/sign-up");
    }, [navigate]);

    return (
        <div
            style={{ zIndex: 20000, position: "absolute", top: 0 }}
        >
            <div className={styles.signIn1}>
                <div className={styles.cardDisplayElementsdefault}></div>
                <div className={styles.illustration}>
                    <div
                        className={styles.metadata3}
                    >{`{"config":{},"nodeName":"Illustration","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.649Z"}`}</div>
                    <img
                        className={styles.pathIcon}
                        alt=""
                        src="/path110333.svg"
                    />
                    <img
                        className={styles.pathIcon1}
                        alt=""
                        src="/path21333.svg"
                    />
                    <img
                        className={styles.pathIcon2}
                        alt=""
                        src="/path31333.svg"
                    />
                    <img
                        className={styles.pathIcon3}
                        alt=""
                        src="/path41333.svg"
                    />
                    <img
                        className={styles.pathIcon4}
                        alt=""
                        src="/path51333.svg"
                    />
                    <img
                        className={styles.pathIcon5}
                        alt=""
                        src="/path61333.svg"
                    />
                    <img
                        className={styles.pathIcon6}
                        alt=""
                        src="/path71333.svg"
                    />
                    <img
                        className={styles.pathIcon7}
                        alt=""
                        src="/path81333.svg"
                    />
                    <img
                        className={styles.pathIcon8}
                        alt=""
                        src="/path91333.svg"
                    />
                    <img
                        className={styles.pathIcon9}
                        alt=""
                        src="/path101333.svg"
                    />
                    <img
                        className={styles.pathIcon10}
                        alt=""
                        src="/path111333.svg"
                    />
                    <img
                        className={styles.pathIcon11}
                        alt=""
                        src="/path121333.svg"
                    />
                    <img
                        className={styles.pathIcon12}
                        alt=""
                        src="/path131333.svg"
                    />
                    <img
                        className={styles.pathIcon13}
                        alt=""
                        src="/path141333.svg"
                    />
                    <img
                        className={styles.pathIcon14}
                        alt=""
                        src="/path151333.svg"
                    />
                    <img
                        className={styles.pathIcon15}
                        alt=""
                        src="/path161333.svg"
                    />
                </div>
                <div className={styles.buttonDisplayElementslabel}>
                    <div className={styles.label}>Sign In</div>
                    <div className={styles.iconDisplayElementslabel}>
                        <img
                            className={styles.icon}
                            alt=""
                            src="/icon13333.svg"
                        />
                    </div>
                </div>
                <div className={styles.circleButtonSizemediumst}>
                    <div className={styles.iconIconfeathertwittersi}>
                        <img
                            className={styles.icon1}
                            alt=""
                            src="/icon14333.svg"
                        />
                    </div>
                </div>
                <div className={styles.circleButtonSizemediumst1}>
                    <div className={styles.iconIconfeathertwittersi}>
                        <img
                            className={styles.icon2}
                            alt=""
                            src="/icon15333.svg"
                        />
                    </div>
                </div>
                <div className={styles.circleButtonSizemediumst2}>
                    <div className={styles.iconIconfeathertwittersi}>
                        <img
                            className={styles.icon3}
                            alt=""
                            src="/icon16333.svg"
                        />
                    </div>
                </div>
                <div className={styles.circleButtonSizemediumst3}>
                    <div className={styles.iconIconfeathertwittersi}>
                        <img
                            className={styles.icon4}
                            alt=""
                            src="/icon17333.svg"
                        />
                    </div>
                </div>
                <div className={styles.signInWith}>
                    <div className={styles.line} />
                    <div className={styles.line1} />
                    <b className={styles.typographyTaguiS}>Or Sign In With</b>
                </div>
                <div className={styles.checkboxDisplayElementslab}>
                    <div className={styles.areaDisplayElementslabel} />
                    <img
                        className={styles.checkDisplayElementslabelIcon}
                        alt=""
                        src="/check-display-elementslabelstateactive333.svg"
                    />
                    <div className={styles.label1}>Keep me signed in</div>
                </div>
                <div className={styles.inputDisplayElementsdefaul}>
                    <div className={styles.value}>Password</div>
                    <div className={styles.iconDisplayElementsdefault}>
                        <img
                            className={styles.icon5}
                            alt=""
                            src="/icon18333.svg"
                        />
                    </div>
                    <b className={styles.label2}>Label</b>
                </div>
                <div className={styles.inputDisplayElementsdefaul1}>
                    <input className={styles.value} placeholder="Username or email"></input>
                    <div className={styles.iconDisplayElementsdefault}>
                        <img
                            className={styles.icon5}
                            alt=""
                            src="/icon18333.svg"
                        />
                    </div>
                    <b className={styles.label2}>Label</b>
                </div>
                <div
                    className={styles.createAnAccount}
                    onClick={onCreateAnAccountClick}
                >
                    Create an account
                </div>
                <b className={styles.newUserTagh6}>New user?</b>
                <b className={styles.titleTagh4}>Sign In</b>
                <button className={styles.circleButtonSizemediumst4}
                            onClick={() => navigate("/")}>
                    <div className={styles.iconIconfeathertwittersi}>
                        <img
                            className={styles.icon7}
                            alt=""
                            src="/icon19333.svg"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignIn;
