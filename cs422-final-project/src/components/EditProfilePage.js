import { FunctionComponent, useState, useCallback } from "react";
import Contact from "./Contact";
import PortalPopup from "./PortalPopup";
import styles from "./EditProfilePage.module.css";

const EditProfilePage: FunctionComponent = () => {
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const onLabelClick = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onTabItemSTATEDEFAULT1Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  const onLabelText6Click = useCallback(() => {
    // Please sync "Searching Page" to the project
  }, []);

  const onLabel1Click = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const openContactPopup = useCallback(() => {
    setContactPopupOpen(true);
  }, []);

  const closeContactPopup = useCallback(() => {
    setContactPopupOpen(false);
  }, []);

  const [buttonColor, setButtonColor] = useState("blue");
  const [displayText, setDisplayText] = useState("");
  const [buttonText, setButtonText] = useState("Save Changes");

  const handleB1 = () => {
    setDisplayText("Please Wait! The meeting Host will let you in soon");
    setButtonColor("limegreen");
    setButtonText("Saved");
  };

  const [buttonColor2, setButtonColor2] = useState("blue");
  const [displayText2, setDisplayText2] = useState("");
  const [buttonText2, setButtonText2] = useState("Cancel");

  const handleB2 = () => {
    setDisplayText2("Please Wait! The meeting Host will let you in soon");
    setButtonColor2("red");
    setButtonText2("Canceled");
  };

  return (
    <>
      <div className={styles.profilePage1}>
        <h2 className={styles.userProfilePhoto}>User Profile Photo</h2>
        <button
          className={styles.button}
          style={{ backgroundColor: buttonColor }}
          onClick={handleB1}
        >
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Button","nodeName":"Button","children":["a536778f-1449-4dab-b1ed-24cd95fc9f10","53a120ee-30dd-4a1a-8ca4-3b1f8101747f","0d27cb47-31ee-452c-9680-cddaab84c12e","0ad20d14-8ef7-4c1b-9a0e-cfffe56eb62e","297e7533-f85c-444c-860f-64e814788222","9d0b6289-9acc-4653-80a8-88103365fb1b","dea5ad68-77ad-4229-b046-a2294bace065","be316f99-4913-4705-93be-b87d4f35f902"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.975Z"}`}</div>
          <div className={styles.area} />
          <div className={styles.label}>{buttonText}</div>
          <div className={styles.icon}>
            <div
              className={styles.metadata1}
            >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.669Z"}`}</div>
            <div className={styles.icon1}>
              <div
                className={styles.metadata2}
              >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.338Z"}`}</div>
              <img className={styles.pathIcon} alt="" src="/path.svg" />
            </div>
          </div>
        </button>
        <button
          className={styles.button1}
          style={{ backgroundColor: buttonColor2 }}
          onClick={handleB2}
        >
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Button","nodeName":"Button","children":["a536778f-1449-4dab-b1ed-24cd95fc9f10","53a120ee-30dd-4a1a-8ca4-3b1f8101747f","0d27cb47-31ee-452c-9680-cddaab84c12e","0ad20d14-8ef7-4c1b-9a0e-cfffe56eb62e","297e7533-f85c-444c-860f-64e814788222","9d0b6289-9acc-4653-80a8-88103365fb1b","dea5ad68-77ad-4229-b046-a2294bace065","be316f99-4913-4705-93be-b87d4f35f902"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.975Z"}`}</div>
          <div className={styles.area} />
          <div className={styles.label1}>{buttonText2}</div>
          <div className={styles.icon2}>
            <div
              className={styles.metadata1}
            >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.669Z"}`}</div>
            <div className={styles.icon3}>
              <div
                className={styles.metadata2}
              >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:12:32.338Z"}`}</div>
              <img className={styles.pathIcon} alt="" src="/path.svg" />
            </div>
          </div>
        </button>
        <div className={styles.component331}>
          <div className={styles.button2}>
            <div
              className={styles.metadata6}
            >{`{"config":{},"type":"Button","nodeName":"Button","children":["0baa658a-9f8c-410d-82fb-2422a63aca46","643d1019-ea92-499b-8075-d80c98c1f3cd","20756fa9-be32-4869-bd70-fbcff2345c8a","2b9f6d81-e9b1-4e70-b951-265206a7c200","836a85bc-6030-4ceb-88f6-dd940d52378f","6377f2c1-11e3-4fb2-be02-cb399a3e95f0","cc1c8e3c-d71a-4239-aa79-07c7239e48d8","e7262d95-8c2c-424d-a4c5-fab785288741"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.848Z"}`}</div>
            <div className={styles.label2}>Change Profile Photo</div>
            <div className={styles.icon4}>
              <div
                className={styles.metadata7}
              >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.715Z"}`}</div>
              <div className={styles.icon5}>
                <div
                  className={styles.metadata8}
                >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.585Z"}`}</div>
                <img className={styles.pathIcon} alt="" src="/path.svg" />
              </div>
            </div>
          </div>
          <img className={styles.womenIcon} alt="" src="/women@2x.png" />
          <img className={styles.markIcon} alt="" src="/mark@2x.png" />
        </div>
        <div className={styles.inputParent}>
          <input
            className={styles.input}
            type="text"
            placeholder="Date of Birth: March 5 1988"
          />
          <input
            className={styles.input1}
            type="text"
            placeholder="Profession: CEO of Meta"
          />
          <div className={styles.input2}>
            <div
              className={styles.metadata7}
            >{`{"config":{},"type":"Input","nodeName":"Input","children":["48201bf0-56ea-40c0-a73b-00d23832243b","17e12417-8673-40c4-9000-c571bad090ac","cb4b1714-92c1-45c8-9cae-0801e0810e66","1c0e9b79-1526-461d-838e-30219e4f9230","c702771f-ac89-478b-9957-52fa5099be34","24953994-28be-4cd1-8ebb-ed3e3842521a","64a20093-b69b-499e-82d6-f1824ddf0bdd","42449b04-3687-4f34-a7ec-a69018dd9bfa","703a733f-b0da-4905-a12a-d8b4fa18e1b3"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:50:58.773Z"}`}</div>
            <div className={styles.tabItemStateactive}>
              <input
                className={styles.area2}
                type="text"
                placeholder="Name: Elizbeth Zuckerberg"
              />
              <input className={styles.value} type="text" />
            </div>
            <div className={styles.icon6}>
              <div
                className={styles.metadata7}
              >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:50:58.633Z"}`}</div>
              <div className={styles.icon7}>
                <div
                  className={styles.metadata11}
                >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:50:58.481Z"}`}</div>
                <img className={styles.pathIcon3} alt="" src="/path1.svg" />
              </div>
            </div>
            <b className={styles.label3}>Label</b>
          </div>
          <input
            className={styles.input3}
            type="text"
            placeholder="Email: elizuck@meta.com "
          />
          <input
            className={styles.input4}
            type="text"
            placeholder="Area of Interest: Cooking"
          />
        </div>
        <div className={styles.header}>
          <div
            className={styles.metadata12}
          >{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.847Z"}`}</div>
          <h1 className={styles.titleTagh6}>TinnCann</h1>
          <label className={styles.tabs}>
            <div
              className={styles.metadata13}
            >{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.791Z","nodeName":"Tabs"}`}</div>
            <div className={styles.placeholderTabItem}>
              <div
                className={styles.metadata6}
              >{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.679Z"}`}</div>
              <div className={styles.area3}>
                <div
                  className={styles.metadata6}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.672Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label4}>Label</div>
            </div>
            <div className={styles.tabItemStatedefault}>
              <div
                className={styles.metadata13}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.718Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area4}>
                <div
                  className={styles.metadata6}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.706Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <button className={styles.label5} onClick={onLabelClick}>
                Forum
              </button>
            </div>
            <button
              className={styles.tabItemStatedefault1}
              onClick={onTabItemSTATEDEFAULT1Click}
            >
              <div
                className={styles.metadata18}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.130Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area5}>
                <div
                  className={styles.metadata}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.098Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label6}>Account</div>
            </button>
            <button className={styles.tabItemStatedefault2}>
              <div
                className={styles.metadata18}
              >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.759Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className={styles.area5}>
                <div
                  className={styles.metadata}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.744Z"}`}</div>
                <div className={styles.bar} />
              </div>
              <div className={styles.label7} onClick={onLabelText6Click}>
                Search Experts
              </div>
            </button>
            <div className={styles.tabItemStateactive}>
              <div
                className={styles.metadata13}
              >{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.778Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
              <div className={styles.area7}>
                <div
                  className={styles.metadata6}
                >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.765Z"}`}</div>
                <div className={styles.placementAreaStateactive} />
                <div className={styles.barStateactive} />
              </div>
              <button className={styles.label5} onClick={onLabel1Click}>
                Home
              </button>
            </div>
          </label>
          <button
            className={styles.buttonDisplayElementslabel}
            onClick={openContactPopup}
          >
            <div
              className={styles.metadata}
            >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <div className={styles.label9}>Contact</div>
            <div className={styles.iconDisplayElementslabel}>
              <div
                className={styles.metadata}
              >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className={styles.icon8} alt="" src="/icon4.svg" />
            </div>
          </button>
          <div className={styles.iconIconfeathersearchsiz}>
            <div
              className={styles.metadata6}
            >{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.838Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon9} alt="" src="/icon5.svg" />
          </div>
        </div>
        <footer className={styles.footerStrip}>
          <div
            className={styles.metadata27}
          >{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.524Z"}`}</div>
          <b className={styles.termsOfService}>Terms of Service</b>
          <b className={styles.privacyPolicyStylestyle2}>Privacy Policy</b>
          <b className={styles.copyrightStylestyle2tagu}>
            © 2020 Mockup. All Rights Reserved.
          </b>
        </footer>
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

export default EditProfilePage;
