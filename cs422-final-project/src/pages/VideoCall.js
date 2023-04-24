import { useState, useCallback } from "react";
import Contact from "../components/Contact";
import PortalPopup from "../components/PortalPopup";
import styles from "./VideoCall.module.css";
const VideoCall = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const onTitleTAGH6TextClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onLabelText1Click = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onTabItemSTATEDEFAULT1Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  const onLabelText3Click = useCallback(() => {
    // Please sync "Searching Page" to the project
  }, []);

  const onTabItemSTATEACTIVEClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Feedback-Page" to the project
  }, []);

  return (
    <>
      <main className={styles.videoCall}>
        <div className={styles.header} onClick={openContact}>
          <div
            className={styles.metadata}
          >{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.847Z"}`}</div>
          <b className={styles.titleTagh6} onClick={onTitleTAGH6TextClick}>
            TinnCann
          </b>
          <div className={styles.tabs}>
            <div
              className={styles.metadata1}
            >{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.791Z","nodeName":"Tabs"}`}</div>
            <div className={styles.placeholderTabItem}>
              <div
                className={styles.metadata2}
              >{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.679Z"}`}</div>
              <div className={styles.area}>
                <div
                  className={styles.metadata2}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.672Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label}>Label</div>
            </div>
            <div className={styles.tabItemStatedefault}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.718Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area1}>
                <div
                  className={styles.metadata2}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.706Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label1} onClick={onLabelText1Click}>
                Forum
              </div>
            </div>
            <div
              className={styles.tabItemStatedefault1}
              onClick={onTabItemSTATEDEFAULT1Click}
            >
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.130Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata2}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.098Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label}>Account</div>
            </div>
            <div className={styles.tabItemStatedefault2}>
              <div
                className={styles.metadata1}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.759Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata2}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.744Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label1} onClick={onLabelText3Click}>
                Search Experts
              </div>
            </div>
            <div
              className={styles.tabItemStateactive}
              onClick={onTabItemSTATEACTIVEClick}
            >
              <div
                className={styles.metadata1}
              >{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.778Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
              <div className={styles.area4}>
                <div
                  className={styles.metadata2}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.765Z"}`}</div>
              </div>
              <div className={styles.label}>Home</div>
            </div>
          </div>
          <div className={styles.buttonDisplayElementslabel}>
            <div
              className={styles.metadata2}
            >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <div className={styles.label5}>Contact</div>
            <div className={styles.iconDisplayElementslabel}>
              <div
                className={styles.metadata2}
              >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className={styles.icon} alt="" src="/icon4.svg" />
            </div>
          </div>
          <div className={styles.iconIconfeathersearchsiz}>
            <div
              className={styles.metadata2}
            >{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.838Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon1} alt="" src="/icon5.svg" />
          </div>
        </div>
        <textarea className={styles.videoCallChild} />
        <div className={styles.footerStrip}>
          <div
            className={styles.metadata15}
          >{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.524Z"}`}</div>
          <b className={styles.termsOfService}>Terms of Service</b>
          <b className={styles.privacyPolicyStylestyle2}>Privacy Policy</b>
          <b className={styles.copyrightStylestyle2tagu}>
            © 2020 Mockup. All Rights Reserved.
          </b>
        </div>
        <img className={styles.path6Icon} alt="" src="/path-6.svg" />
        <img
          className={styles.iconFeatherSend}
          alt=""
          src="/icon-feathersend1.svg"
        />
        <div className={styles.productStylestyle3tagui}>Product 1</div>
        <div className={styles.m}>M</div>
        <div className={styles.buttonDisplayElementslabel1}>
          <div
            className={styles.metadata2}
          >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className={styles.iconDisplayElementslabel1}>
            <div
              className={styles.metadata17}
            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon2} alt="" src="/icon13.svg" />
          </div>
        </div>
        <div className={styles.videoCallItem} />
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
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.557Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins}>
              <div
                className={styles.metadata20}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.548Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon3} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst1}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.582Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatheryoutubesi}>
              <div
                className={styles.metadata22}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/youtube"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.572Z","nodeName":"Icon [ICON=feather/youtube][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon4} alt="" src="/icon7.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst2}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.604Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata2}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.596Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon5} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst3}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.626Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks}>
              <div
                className={styles.metadata2}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.619Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon6} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst4}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.649Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherphonesize}>
              <div
                className={styles.metadata28}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/phone"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.639Z","nodeName":"Icon [ICON=feather/phone][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon7} alt="" src="/icon10.svg" />
            </div>
          </div>
          <div className={styles.serviceStylestyle3tagui}>Service 4</div>
          <div className={styles.serviceStylestyle3tagui1}>Service 3</div>
          <div className={styles.serviceStylestyle3tagui2}>Service 2</div>
          <div className={styles.serviceStylestyle3tagui3}>Service 1</div>
          <b className={styles.servicesStylestyle3tagh5}>Services</b>
          <div className={styles.productStylestyle3tagui1}>Product 4</div>
          <div className={styles.productStylestyle3tagui2}>Product 3</div>
          <div className={styles.productStylestyle3tagui3}>Product 2</div>
          <div className={styles.productStylestyle3tagui4}>Product 1</div>
          <b className={styles.productsStylestyle3tagh5}>Products</b>
          <div className={styles.resourceStylestyle3tagui}>FAQs</div>
          <div className={styles.resourceStylestyle3tagui1}>Videos</div>
          <div className={styles.resourceStylestyle3tagui2}>Blog</div>
          <div className={styles.resourceStylestyle3tagui3}>News</div>
          <b className={styles.resourcesStylestyle3tagh}>Resources</b>
        </div>
        <img
          className={styles.iconAwesomePlayCircle}
          alt=""
          src="/icon-awesomeplaycircle.svg"
        />
        <div className={styles.videoCallInner} />
        <img
          className={styles.iconMetroVolumeMedium}
          alt=""
          src="/icon-metrovolumemedium.svg"
        />
        <img
          className={styles.iconMapFullscreen}
          alt=""
          src="/icon-mapfullscreen.svg"
        />
        <div className={styles.testSpeakerAnd}>Test speaker and microphone</div>
        <img className={styles.lampIcon} alt="" src="/lamp.svg" />
        <footer className={styles.footer1} id="footer">
          <div
            className={styles.metadata29}
          >{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.277Z"}`}</div>
          <div className={styles.copyright2020}>
            Copyright © 2023 TinnCann. All rights reserved.
          </div>
          <div className={styles.circleButtonSizemediumst5}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.225Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata2}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/instagram"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.224Z","nodeName":"Icon [ICON=feather/instagram][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <div className={styles.icon8}>
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
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.249Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi1}>
              <div
                className={styles.metadata2}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.248Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon9} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst7}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks1}>
              <div
                className={styles.metadata35}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon10} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst8}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.267Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins}>
              <div
                className={styles.metadata20}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.264Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon11} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst9}>
            <div
              className={styles.metadata2}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.275Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathermailsize}>
              <div
                className={styles.metadata39}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/mail"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.274Z","nodeName":"Icon [ICON=feather/mail][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon12} alt="" src="/icon12.svg" />
            </div>
          </div>
          <b className={styles.mockupShopClassic}>TinnCann</b>
        </footer>
        <div className={styles.buttonDisplayElementslabel2} id="reqZoom">
          <div
            className={styles.metadata40}
          >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.215Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <button className={styles.areaDisplayElementslabel}>
            <img
              className={styles.areaDisplayElementslabelIcon}
              alt=""
              src="/area-display-elementslabelsizemediumstatedefaultstylestyle12.svg"
            />
          </button>
          <button className={styles.label6}>Request Zoom Link</button>
          <div className={styles.iconDisplayElementslabel2}>
            <div
              className={styles.metadata40}
            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.201Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon13} alt="" src="/icon14.svg" />
          </div>
        </div>
        <img className={styles.plantRightIcon} alt="" src="/plant-right.svg" />
        <div className={styles.shape}>
          <div
            className={styles.metadata42}
          >{`{"config":{"SHAPE":"illustrations/Humaaans/03. Scenes/Scene - Plants"},"type":"qm::Illustration","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T15:10:18.699Z"}`}</div>
          <img
            className={styles.leafBottomIcon}
            alt=""
            src="/leaf-bottom.svg"
          />
          <img className={styles.leafTopIcon} alt="" src="/leaf-top.svg" />
          <img
            className={styles.plantRightIcon1}
            alt=""
            src="/plant-right1.svg"
          />
          <img className={styles.plantLeftIcon} alt="" src="/plant-left.svg" />
          <img className={styles.macetaIcon} alt="" src="/maceta.svg" />
        </div>
        <section className={styles.rectangleSection} />
        <div className={styles.pleaseWaitThe}>
          Please wait, the meeting host will let you in soon.
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <div
            className={styles.metadata43}
          >{`{"config":{},"type":"Button","nodeName":"Button","children":["1cb01e11-706f-42be-84fc-5112e28b7084","363a71a4-cf20-4ff0-880f-c337a06fdeb4","7995dfbd-e1a4-4a3e-bfe1-1e02d89489a1","a6d929fe-a133-4ecd-bc76-b4ab65eee6f8","ab1438d5-40cd-4d52-a27c-55599072cd21","c303c2c1-0072-4172-aa49-3813abee4639","f70a4cca-1810-4a7a-9c11-0404e65dfc4f","a6ad7be0-170c-4518-9a86-5cb578deeb32"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:32:12.244Z"}`}</div>
          <div className={styles.label7}>Provide Feedback on the meeting</div>
          <div className={styles.icon14}>
            <div
              className={styles.metadata44}
            >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:32:11.918Z"}`}</div>
            <div className={styles.icon15}>
              <div
                className={styles.metadata45}
              >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:32:11.604Z"}`}</div>
              <img className={styles.pathIcon} alt="" src="/path.svg" />
            </div>
          </div>
        </button>
      </main>
      {isContactOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContact}
        >
          <Contact onClose={closeContact} />
        </PortalPopup>
      )}
    </>
  );
};

export default VideoCall;
