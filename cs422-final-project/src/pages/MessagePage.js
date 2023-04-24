import { useState, useCallback } from "react";
import { Box, Slider } from "@mui/material";
import Contact from "../components/Contact";
import PortalPopup from "../components/PortalPopup";
import styles from "./MessagePage.module.css";
const MessagePage = () => {
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const openContactPopup = useCallback(() => {
    setContactPopupOpen(true);
  }, []);

  const closeContactPopup = useCallback(() => {
    setContactPopupOpen(false);
  }, []);

  const onTitleTAGH6TextClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onTabItemSTATEDEFAULTClick = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onLabelText2Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  const onLabelText3Click = useCallback(() => {
    // Please sync "Searching Page" to the project
  }, []);

  const onTabItemSTATEACTIVEClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onLabel1Click = useCallback(() => {
    // Please sync "Scheduling Page" to the project
  }, []);

  return (
    <>
      <div className={styles.messagePage}>
        <main className={styles.card}>
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Card","nodeName":"Card","children":["a2cd5de5-7dfb-4885-a97e-f7cc4355b173","b82067be-a777-4828-bb6b-e6cb4d241f45"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T22:56:50.361Z"}`}</div>
        </main>
        <div className={styles.messagePageChild} />
        <nav className={styles.header} id="navBar" onClick={openContactPopup}>
          <div
            className={styles.metadata1}
          >{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.847Z"}`}</div>
          <b className={styles.titleTagh6} onClick={onTitleTAGH6TextClick}>
            TinnCann
          </b>
          <a className={styles.tabs}>
            <div
              className={styles.metadata2}
            >{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.791Z","nodeName":"Tabs"}`}</div>
            <div className={styles.placeholderTabItem}>
              <div
                className={styles.metadata3}
              >{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.679Z"}`}</div>
              <div className={styles.area}>
                <div
                  className={styles.metadata3}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.672Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label}>Label</div>
            </div>
            <a
              className={styles.tabItemStatedefault}
              onClick={onTabItemSTATEDEFAULTClick}
            >
              <div
                className={styles.metadata2}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.718Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area1}>
                <div
                  className={styles.metadata3}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.706Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label}>Forum</div>
            </a>
            <a className={styles.tabItemStatedefault1}>
              <div
                className={styles.metadata2}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.130Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata3}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.098Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label2} onClick={onLabelText2Click}>
                Account
              </div>
            </a>
            <a className={styles.tabItemStatedefault2}>
              <div
                className={styles.metadata2}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.759Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area2}>
                <div
                  className={styles.metadata3}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.744Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label2} onClick={onLabelText3Click}>
                Search Experts
              </div>
            </a>
            <div
              className={styles.tabItemStateactive}
              onClick={onTabItemSTATEACTIVEClick}
            >
              <div
                className={styles.metadata2}
              >{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.778Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
              <div className={styles.area4}>
                <div
                  className={styles.metadata3}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.765Z"}`}</div>
              </div>
              <div className={styles.label4}>Home</div>
            </div>
          </a>
          <div className={styles.buttonDisplayElementslabel}>
            <div
              className={styles.metadata3}
            >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <div className={styles.label5}>Contact</div>
            <div className={styles.iconDisplayElementslabel}>
              <div
                className={styles.metadata3}
              >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className={styles.icon} alt="" src="/icon4.svg" />
            </div>
          </div>
          <div className={styles.iconIconfeathersearchsiz}>
            <div
              className={styles.metadata3}
            >{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.838Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon1} alt="" src="/icon5.svg" />
          </div>
        </nav>
        <div className={styles.footer}>
          <div
            className={styles.metadata16}
          >{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.664Z"}`}</div>
          <div className={styles.backgroundStylestyle3} />
          <div className={styles.descriptionStylestyle3tag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <b className={styles.companyStylestyle3tagh4}>Mockup Company</b>
          <div className={styles.circleButtonSizemediumst}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.557Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins}>
              <div
                className={styles.metadata18}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.548Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon2} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst1}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.582Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatheryoutubesi}>
              <div
                className={styles.metadata20}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/youtube"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.572Z","nodeName":"Icon [ICON=feather/youtube][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon3} alt="" src="/icon7.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst2}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.604Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.596Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon4} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst3}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.626Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks}>
              <div
                className={styles.metadata}
              >{`{"config":{"STYLE":"STYLE3","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.619Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
              <img className={styles.icon5} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst4}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.649Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
            <div className={styles.iconIconfeatherphonesize}>
              <div
                className={styles.metadata26}
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
          <div className={styles.descriptionStylestyle3tag1}>Tech Tycoon</div>
        </div>
        <div className={styles.footerStrip}>
          <div
            className={styles.metadata27}
          >{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.524Z"}`}</div>
          <b className={styles.termsOfService}>Terms of Service</b>
          <b className={styles.privacyPolicyStylestyle2}>Privacy Policy</b>
          <b className={styles.copyrightStylestyle2tagu}>
            © 2020 Mockup. All Rights Reserved.
          </b>
        </div>
        <img className={styles.path6Icon} alt="" src="/path-6.svg" />
        <section className={styles.cardParent}>
          <div className={styles.card1}>
            <div
              className={styles.metadata}
            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
          </div>
          <div className={styles.card2}>
            <div
              className={styles.metadata}
            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:51:59.369Z"}`}</div>
          </div>
          <img className={styles.markIcon} alt="" src="/mark@2x.png" />
          <div className={styles.bookingConfirmation}>Booking confirmation</div>
          <div className={styles.am111123}>11:11 am 11/11/23</div>
          <section className={styles.buttonDisplayElementslabel1}>
            <div
              className={styles.metadata30}
            >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.266Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <button className={styles.buttonDisplayElementslabelChild} />
            <a className={styles.label6}>View Details of Booking</a>
            <div className={styles.iconDisplayElementslabel1}>
              <div
                className={styles.metadata}
              >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.252Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className={styles.icon7} alt="" src="/icon11.svg" />
            </div>
            <button className={styles.areaDisplayElementslabelParent}>
              <img
                className={styles.areaDisplayElementslabelIcon}
                alt=""
                src="/area-display-elementslabelsizemediumstatedefaultstylestyle1.svg"
              />
              <a className={styles.label7} onClick={onLabel1Click}>
                Book Another Appoinment
              </a>
            </button>
          </section>
          <b className={styles.markZuckerberg}>Mark Zuckerberg</b>
        </section>
        <div className={styles.areaDisplayElementslabel} />
        <div className={styles.areaDisplayElementslabel1} />
        <img
          className={styles.areaDisplayElementslabelIcon1}
          alt=""
          src="/area-display-elementslabelsizemediumstatedefaultstylestyle11.svg"
        />
        <div className={styles.areaDisplayElementslabel2} />
        <div className={styles.areaDisplayElementslabel3} />
        <div className={styles.productStylestyle3tagui4}>Product 1</div>
        <div className={styles.productStylestyle3tagui5}>
          Yeah we have recently invested in VR tech
        </div>
        <div className={styles.productStylestyle3tagui6}>
          Hey I heard you were doing some research on the meta
        </div>
        <div className={styles.productStylestyle3tagui7}>
          <p
            className={styles.iWasAble}
          >{`I was able to get a video session with you, `}</p>
        </div>
        <div className={styles.productStylestyle3tagui8}>
          <p className={styles.iWasAble}>
            So I wanted to ask your opinion about my
          </p>
          <p className={styles.iWasAble}>VR prototype</p>
        </div>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.productStylestyle3tagui9}>
          Looks fun to me, we can talk more about this in the meeting !
        </div>
        <div className={styles.m}>M</div>
        <div className={styles.markZuckerberg1}>Mark Zuckerberg</div>
        <footer className={styles.footer1}>
          <div
            className={styles.metadata32}
          >{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.277Z"}`}</div>
          <div className={styles.copyright2020}>
            Copyright © 2023 TinnCann. All rights reserved.
          </div>
          <div className={styles.circleButtonSizemediumst5}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.225Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi}>
              <div
                className={styles.metadata}
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
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.249Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathertwittersi1}>
              <div
                className={styles.metadata}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.248Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon9} alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst7}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherfacebooks1}>
              <div
                className={styles.metadata}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.257Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon10} alt="" src="/icon9.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst8}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.267Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeatherlinkedins1}>
              <div
                className={styles.metadata40}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.264Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon11} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.circleButtonSizemediumst9}>
            <div
              className={styles.metadata}
            >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.275Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <div className={styles.iconIconfeathermailsize}>
              <div
                className={styles.metadata42}
              >{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/mail"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T02:11:12.274Z","nodeName":"Icon [ICON=feather/mail][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
              <img className={styles.icon12} alt="" src="/icon12.svg" />
            </div>
          </div>
          <b className={styles.mockupShopClassic}>TinnCann</b>
        </footer>
        <div className={styles.component181}>
          <div className={styles.typeYourText}>Type your text message here</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.iconFeatherSend}
            alt=""
            src="/icon-feathersend.svg"
          />
          <a className={styles.iconMetroAttachment} />
          <img
            className={styles.iconMetroFilePicture}
            alt=""
            src="/icon-metrofilepicture.svg"
          />
          <div className={styles.textarea}>
            <div
              className={styles.metadata43}
            >{`{"config":{"STATE":"ACTIVE"},"type":"Textarea","theme":"Base","nodeName":"Textarea","children":["8da81416-d570-4191-a0ea-a6fffdb90842","59efb8db-5efb-4688-9d6a-81a99960e398","364cc34a-0caa-433a-90aa-32d521390e82","93102903-0ba9-4f8d-af56-f5f1ba426c63"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:11:42.543Z"}`}</div>
            <input className={styles.area5} type="text" />
            <div className={styles.value}>Value</div>
            <b className={styles.label8}>Label</b>
          </div>
        </div>
        <Box className={styles.progressBar} sx={{ width: 767 }}>
          <Slider color="primary" orientation="horizontal" />
        </Box>
      </div>
      {isContactPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContactPopup}
        >
          <Contact onClose={closeContactPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MessagePage;
