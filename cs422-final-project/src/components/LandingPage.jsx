import { FunctionComponent, useState, useCallback, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import PortalPopup from "./PortalPopup";
import SignIn from "../components/SignIn";
import styles from "./LandingPage.module.css";
import HeaderComponent from "./HeaderComponent";

const LandingPage = () => {
    const navigate = useNavigate();

    const endRef = useRef(null);
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add(styles.animate);
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }

        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);


    return (
        <>
        <HeaderComponent/>
            <nav className={styles.landingPage}>
                <div className={styles.feature}>
                    <div
                        className={styles.metadata1}
                    >{`{"config":{},"nodeName":"Feature","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.890Z"}`}</div>
                    <img
                        className={styles.backgroundIcon}
                        alt=""
                        src="/background222.svg"
                    />
                    <div className={styles.feature1}>
                        <p
                            className={styles.nequePorroQuisquam}
                        >{`“As an expert in my field, it’s always exciting to work with young professionals who are just starting out on their careers. I’ve had the opportunity to connect with many talented individuals through this platform, and I’m consistently impressed by their drive, passion, and willingness to learn. The platform makes it easy to communicate with these young professionals and provide them with the guidance and mentorship they need to succeed. I’ve seen firsthand how the platform has helped many young professionals launch their careers and achieve their goals, and I’m proud to be a part of that process. If you’re an expert looking to make a difference in the lives of young professionals, I highly recommend this platform.” `}</p>
                        <label className={styles.instantThemeSwitching}>
                            Expert Reviews
                        </label>
                        
                        <div className={styles.card}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.367Z"}`}</div>
                        </div>
                        <div className={styles.card1}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.413Z"}`}</div>
                        </div>
                        
                        <img
                            className={styles.featureChild}
                            alt=""
                            src="/group-4222.svg"
                        />
                        <h3 className={styles.postTitleTagh5}>Dr. Alam Mala</h3>
                    </div>
                    <div className={styles.shapeParent}>
                        <div className={styles.shape}>
                            <div
                                className={styles.metadata9}
                            >{`{"config":{"SHAPE":"illustrations/Humaaans/02. In Action/At Home"},"type":"qm::Illustration","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:49:16.389Z"}`}</div>
                            <img
                                className={styles.sceneIcon}
                                alt=""
                                src="/scene222.svg"
                            />
                            <img
                                className={styles.personIcon}
                                alt=""
                                src="/person222.svg"
                            />
                        </div>
                        <div className={styles.groupParent}>
                            <div
                                className={styles.shapeShapeshapes01BasicParent}
                                id="review-div"
                            >
                                <img
                                    className={styles.shapeShapeshapes01Basic}
                                    alt=""
                                    src="/shape-shapeshapes01-basicbasic--circle@2x222.png"
                                />
                                <p className={styles.textTagp}>
                                    . The communication was smooth, and the
                                    project was completed on time. I highly
                                    recommend this platform to anyone who needs
                                    to find experts quickly and efficiently.”
                                </p>
                                <h4 ref={endRef} className={styles.postTitleTagh51}>
                                    Adam Mada
                                </h4>
                                <h5 className={styles.categoryTaguiS}>
                                    4.5 stars
                                </h5>
                            </div>
                            <div
                                className={styles.shapeShapeshapes01BasicGroup}
                            >
                                <img
                                    className={styles.shapeShapeshapes01Basic1}
                                    alt=""
                                    src="/shape-shapeshapes01-basicbasic--circle1@2x222.png"
                                />
                                <p className={styles.textTagp1}>
                                    “The quality of the work was outstanding,
                                    and the rates were very reasonable. I’m
                                    definitely going to use this platform again
                                    in the future and recommend it to my
                                    colleagues.”
                                </p>
                                <b className={styles.postTitleTagh52}>
                                    Madam Madam
                                </b>
                                <b className={styles.categoryTaguiS1}>
                                    4 stars
                                </b>
                            </div>
                            
                        </div>
                        <div className={styles.feature2}>
                            <div
                                className={styles.nequePorroQuisquam1}
                            >{`At our expert finding webpage, we’re passionate about helping people find the right professionals to meet their needs. Our mission is to make it easy for anyone to access top-quality expertise and guidance, no matter where they are or what they’re working on. `}</div>
                            <label className={styles.freePopularTemplates} >
                                Users Reviews
                            </label>
                        </div>
                        <div className={styles.shape1}>
                            <img
                                className={styles.headfrontIcon}
                                alt=""
                                src="/headfront222.svg"
                            />
                            <img
                                className={styles.bottomskinnyJeans1}
                                alt=""
                                src="/bottomskinny-jeans-1222.svg"
                            />
                            <img
                                className={styles.bodylongSleeve1}
                                alt=""
                                src="/bodylong-sleeve-1222.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.shape2}>
                        <img
                            className={styles.backgroundShape2}
                            alt=""
                            src="/background-shape-2222.svg"
                        />
                        <img
                            className={styles.leafBottomIcon}
                            alt=""
                            src="/leaf-bottom222.svg"
                        />
                        <img
                            className={styles.leafTopIcon}
                            alt=""
                            src="/leaf-top222.svg"
                        />
                        <img
                            className={styles.plantRightIcon}
                            alt=""
                            src="/plant-right222.svg"
                        />
                        <img
                            className={styles.plantLeftIcon}
                            alt=""
                            src="/plant-left222.svg"
                        />
                        <img
                            className={styles.macetaIcon}
                            alt=""
                            src="/maceta222.svg"
                        />
                        <img
                            className={styles.topLeavesIcon}
                            alt=""
                            src="/top-leaves222.svg"
                        />
                    </div>
                    <button
                        className={styles.buttonDisplayElementslabel3}
                        onClick={() => navigate('/search')}
                    >
                        <div className={styles.label3} >Book an expert now!</div>
                        <div className={styles.iconDisplayElementslabel3}>
                            <img
                                className={styles.icon3}
                                alt=""
                                src="/icon110222.svg"
                            />
                        </div>
                    </button>
                </div>
                <div className={styles.hero} data-animate-on-scroll onClick={() => 
                            endRef.current.scrollIntoView({ behavior: 'smooth' })}>
                    <div className={styles.shape3}>
                        <img
                            className={styles.sceneIcon1}
                            alt=""
                            src="/scene1222.svg"
                        />
                        <img
                            className={styles.figuresIcon}
                            alt=""
                            src="/figures222.svg"
                        />
                        
                    </div>
                    <b className={styles.scrollDownTagh6}>Scroll Down</b>
                    <div
                        className={styles.buttonDisplayElementslabel4}
                        
                    >
                       <div className={styles.label4} onClick={() => {
                          navigate('/search')
                        }}>
                            Search An Expert Now
                        </div>
                        <div className={styles.iconDisplayElementslabel4}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.417Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <img
                                className={styles.icon4}
                                alt=""
                                src="/icon2222.svg"
                            />
                        </div>
                    </div>
                    <h2
                        className={styles.descriptionTaguiL}
                    >{`Just tell us what you’re looking for, and we’ll match you with the most qualified experts in our network. `}</h2>
                    <button className={styles.iconIconfeatherarrowDown}>
                         <img
                            className={styles.icon5}
                            alt=""
                            src="/icon3222.svg"
                        />
                    </button>
                    <div className={styles.pagination}>
                        <div className={styles.item}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot222.svg"
                            />
                        </div>
                        <div className={styles.item1}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item2}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item3}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item4}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item5}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                    </div>
                    <h1 className={styles.titleTagh1}>
                        <p className={styles.tinncann}>TinnCann</p>
                        <p className={styles.tinncann}>Where we meet experts</p>
                    </h1>
                </div>
                <nav className={styles.header}>
                    
                    <div className={styles.iconIconfeathersearchsiz}>
                       <img
                            className={styles.icon7}
                            alt=""
                            src="/icon5222.svg"
                        />
                    </div>
                </nav>
                <b className={styles.titleTagh11}>
                    <p className={styles.tinncann}>
                        “Whether you need assistance with a technical problem,
                        legal matter, creative project, or any other area of
                        expertise, we can help you find the perfect professional
                        for your needs.”
                    </p>
                    <p className={styles.tinncann}>- CEO Vadam Yadav</p>
                </b>
                
                
            </nav>
            
        </>
    );
};


export default LandingPage;
