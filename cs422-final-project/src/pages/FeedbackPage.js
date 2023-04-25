import { useState, useCallback } from "react";
import Contact from "../components/Contact";
import PortalPopup from "../components/PortalPopup";
import styles from "./FeedbackPage.module.css";
import HeaderComponent from "../components/HeaderComponent";


const FeedbackPage = () => {
  // const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const [buttonColor, setButtonColor] = useState('orange');
  const [displayText, setDisplayText] = useState('');
  const [buttonText, setButtonText] = useState('Submit Feedback');
  const handleB1 = () => {

    setButtonColor('limegreen');
    setButtonText('Feedback Submitted');
    
}

  // const openContactPopup = useCallback(() => {
  //   setContactPopupOpen(true);
  // }, []);

  // const closeContactPopup = useCallback(() => {
  //   setContactPopupOpen(false);
  // }, []);

  const onTabItemSTATEDEFAULTClick = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onTabItemSTATEDEFAULT1Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  const onTabItemSTATEDEFAULT2Click = useCallback(() => {
    // Please sync "Searching Page" to the project
  }, []);

  const onTabItemSTATEACTIVEClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <>
      <div className={styles.feedbackPage}>
        <div className={styles.div} />
        <div className={styles.card}>
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
        </div>
        <label className={styles.component161}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </label>
        <div className={styles.card2}>
          <div
            className={styles.metadata1}
          >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
        </div>
        <nav className="header-nav">
          <HeaderComponent/>
        </nav>
        <nav className={styles.header}>
          <div
            className={styles.metadata3}
          >{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.847Z"}`}</div>
          <b className={styles.titleTagh6}>TinnCann</b>
          <nav className={styles.tabs}>
            <div
              className={styles.metadata4}
            >{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.791Z","nodeName":"Tabs"}`}</div>
            <div className={styles.placeholderTabItem}>
              <div
                className={styles.metadata5}
              >{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.679Z"}`}</div>
              <div className={styles.area}>
                <div
                  className={styles.metadata5}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.672Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label}>Label</div>
            </div>
            <div
              className={styles.tabItemStatedefault}
              onClick={onTabItemSTATEDEFAULTClick}
            >
              <div
                className={styles.metadata4}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.718Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area1}>
                <div
                  className={styles.metadata5}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.706Z"}`}</div>
                <div className={styles.bar} />
              </div>
              {/* <a className={styles.label1}>Forum</a> */}
            </div>
            <div
              className={styles.tabItemStatedefault1}
              onClick={onTabItemSTATEDEFAULT1Click}
            >
              <div
                className={styles.metadata4}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.130Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata5}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.098Z"}`}</div>
                <div className={styles.bar} />
              </div>
              {/* <a className={styles.label1}>Account</a> */}
            </div>
            <div
              className={styles.tabItemStatedefault2}
              onClick={onTabItemSTATEDEFAULT2Click}
            >
              <div
                className={styles.metadata4}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.759Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata5}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.744Z"}`}</div>
                <div className={styles.bar} />
              </div>
              {/* <a className={styles.label1}>Search Experts</a> */}
            </div>
            <div
              className={styles.tabItemStateactive}
              onClick={onTabItemSTATEACTIVEClick}
            >
              <div
                className={styles.metadata4}
              >{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.778Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
              <div className={styles.area4}>
                <div
                  className={styles.metadata5}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.765Z"}`}</div>
              </div>
              {/* <a className={styles.label4}>Home</a> */}
            </div>
          </nav>
          <div className={styles.buttonDisplayElementslabel}>
            <div
              className={styles.metadata5}
            >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            {/* <div className={styles.label5}>Contact</div> */}
            <div className={styles.iconDisplayElementslabel}>
              <div
                className={styles.metadata5}
              >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className={styles.icon} alt="" src="/icon4.svg" />
            </div>
          </div>
          <div className={styles.iconIconfeathersearchsiz}>
            <div
              className={styles.metadata5}
            >{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.838Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon1} alt="" src="/icon5.svg" />
          </div>
        </nav>
        <div className={styles.footer}>
          <div
            className={styles.metadata18}
          >{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.664Z"}`}</div>
          <div className={styles.descriptionStylestyle3tag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <b className={styles.companyStylestyle3tagh4}>Mockup Company</b>
          <div className={styles.circleButtonSizemediumst}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.557Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins}>
              <div
                className={styles.metadata20}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.548Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon2} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst1}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.582Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatheryoutubesi}>
              <div
                className={styles.metadata22}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/youtube"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.572Z","nodeName":"Icon [ICON=feather/youtube][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon3} alt="" src="/icon7.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst2}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.604Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata1}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.596Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon4} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst3}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.626Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks}>
              <div
                className={styles.metadata1}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.619Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon5} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst4}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.649Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherphonesize}>
              <div
                className={styles.metadata28}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/phone"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.639Z","nodeName":"Icon [ICON=feather/phone][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon6} alt="" src="/icon10.svg" />
            </div>
          </div>
          <div className={styles.serviceStylestyle3tagui}>Service 4</div>
          <div className={styles.serviceStylestyle3tagui1}>Service 3</div>
          <div className={styles.serviceStylestyle3tagui2}>Service 2</div>
          <div className={styles.serviceStylestyle3tagui3}>Service 1</div>
          <b className={styles.servicesStylestyle3tagh5}>Services</b>
          <div className={styles.productStylestyle3tagui}>Product 4</div>
          <div className={styles.productStylestyle3tagui1}>Product 3</div>
          <div className={styles.productStylestyle3tagui2}>Product 2</div>
          <div className={styles.productStylestyle3tagui3}>Product 1</div>
          <b className={styles.productsStylestyle3tagh5}>Products</b>
          <div className={styles.resourceStylestyle3tagui}>FAQs</div>
          <div className={styles.resourceStylestyle3tagui1}>Videos</div>
          <div className={styles.resourceStylestyle3tagui2}>Blog</div>
          <div className={styles.resourceStylestyle3tagui3}>News</div>
          <b className={styles.resourcesStylestyle3tagh}>Resources</b>
        </div>
        <div className={styles.footerStrip}>
          <div
            className={styles.metadata29}
          >{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.524Z"}`}</div>
          <b className={styles.termsOfService}>Terms of Service</b>
          <b className={styles.privacyPolicyStylestyle2}>Privacy Policy</b>
          <b className={styles.copyrightStylestyle2tagu}>
            © 2020 Mockup. All Rights Reserved.
          </b>
        </div>
        <img className={styles.markIcon} alt="" src="/mark@2x.png" />
        <div className={styles.markZuckerebrg}>Mark Zuckerebrg</div>
        <img className={styles.path6Icon} alt="" src="/path-6.svg" />
        <div className={styles.am111123}>11:11 am 11/11/23</div>
        <div className={styles.productStylestyle3tagui4}>Product 1</div>
        <div className={styles.m}>M</div>
        <img
          className={styles.iconMaterialVideocam}
          alt=""
          src="/icon-materialvideocam.svg"
        />
        <div className={styles.iconAwesomeStarParent}>
          <img
            className={styles.iconAwesomeStar}
            alt=""
            src="/icon-awesomestar.svg"
          />
          <img
            className={styles.iconAwesomeStar1}
            alt=""
            src="/icon-awesomestar.svg"
          />
          <img
            className={styles.iconAwesomeStar2}
            alt=""
            src="/icon-awesomestar.svg"
          />
          <img
            className={styles.iconAwesomeStar3}
            alt=""
            src="/icon-awesomestar.svg"
          />
          <img
            className={styles.iconAwesomeStarHalfAlt}
            alt=""
            src="/icon-awesomestarhalfalt.svg"
          />
        </div>
        <input className={styles.iconMaterialCheckBoxOutlin} type="checkbox" />
        <label className={styles.feedbackPageInner}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </label>
        <input className={styles.iconMaterialCheckBoxOutlin1} type="checkbox" />
        <label className={styles.feedbackPageChild}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </label>
        <label className={styles.groupLabel}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </label>
        <label className={styles.feedbackPageInner1}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </label>
        <input className={styles.iconMaterialCheckBoxOutlin2} type="checkbox" />
        <input className={styles.iconMaterialCheckBoxOutlin3} type="checkbox" />
        <input className={styles.iconMaterialCheckBoxOutlin4} type="checkbox" />
        <b className={styles.howWasThe}>How was the meeting</b>
        <div className={styles.wasThisMeeting}>Was this meeting helpful</div>
        <div className={styles.wasTheExpert}>
          Was the expert acting professional
        </div>
        <div className={styles.wasTheExpert1}>
          Was the expert on time for the meeting
        </div>
        <div className={styles.theExpertWas}>
          The expert was not available for the meeting
        </div>
        <div className={styles.wouldYouLike}>
          Would you like to meet this expert again
        </div>
        <b className={styles.writeCustomFeedback}>Write custom feedback</b>
        <footer className={styles.footer1}>
          <div
            className={styles.metadata34}
          >{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.277Z"}`}</div>
          <div className={styles.copyright2020}>
            Copyright © 2023 TinnCann. All rights reserved.
          </div>
          <div className={styles.circleButtonSizemediumst5}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.225Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata1}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/instagram"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.224Z","nodeName":"Icon [ICON=feather/instagram][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <div className={styles.icon7}>
                <img
                  className={styles.b2db7afC968429f91c9Dd08dadIcon}
                  alt=""
                  src="/5b2db7afc968429f91c9dd08dadbf9de.svg"
                />
                <div className={styles.c99ee68Eb46481f8704178ca8e} />
              </div>
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst6}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.249Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi1}>
              <div
                className={styles.metadata38}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.248Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon8} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst7}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks1}>
              <div
                className={styles.metadata40}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon9} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst8}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.267Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins1}>
              <div
                className={styles.metadata42}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.264Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon10} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst9}>
            <div
              className={styles.metadata1}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.275Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathermailsize}>
              <div
                className={styles.metadata44}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/mail"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.274Z","nodeName":"Icon [ICON=feather/mail][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon11} alt="" src="/icon12.svg" />
            </div>
          </div>
          <b className={styles.mockupShopClassic}>TinnCann</b>
        </footer>
        <img className={styles.figureIcon} alt="" src="/figure.svg" />
        <img className={styles.plantRightIcon} alt="" src="/plant-right.svg" />
        
        <button className={styles.buttonDisplayElementslabel1}>
        <div className="btn">
        <button style = {{backgroundColor: buttonColor}}onClick = {handleB1} className="ZoomButton">{buttonText}</button>
        
        </div>
          <div
            className={styles.metadata45}
          >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.215Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className={styles.areaDisplayElementslabel} />
          <div className={styles.iconDisplayElementslabel1}>
            {/* <div
              className={styles.metadata45}
            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.201Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon12} alt="" src="/icon14.svg" /> */}
          </div>
        </button>
        <img
          className={styles.iconAwesomeCheck}
          alt=""
          src="/icon-awesomecheck.svg"
        />
        <img
          className={styles.iconAwesomeCheck1}
          alt=""
          src="/icon-awesomecheck.svg"
        />
        <img
          className={styles.iconAwesomeCheck2}
          alt=""
          src="/icon-awesomecheck.svg"
        />
        <img
          className={styles.iconAwesomeCheck3}
          alt=""
          src="/icon-awesomecheck.svg"
        />
        <img
          className={styles.iconAwesomeCheck4}
          alt=""
          src="/icon-awesomecheck.svg"
        />
        <div className={styles.feedbackPageInner2}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardWrapper}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
              <div className={styles.cardChild} />
            </div>
          </div>
        </div>
        <textarea
          className={styles.textarea}
          placeholder="..."
          rows={10}
          cols={30}
        />
      </div>
      {/* {isContactPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContactPopup}
        >
          <Contact onClose={closeContactPopup} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default FeedbackPage;
