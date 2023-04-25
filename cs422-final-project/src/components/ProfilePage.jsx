import { useState, useCallback } from "react";
import PaymentConfirmation from "../components/PaymentConfirmation";
import PortalPopup from "../components/PortalPopup";
import Contact from "../components/Contact";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const [isPaymentConfirmationOpen, setPaymentConfirmationOpen] =
    useState(false);
  const [isPaymentConfirmation1Open, setPaymentConfirmation1Open] =
    useState(false);
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const openPaymentConfirmation = useCallback(() => {
    setPaymentConfirmationOpen(true);
  }, []);

  const closePaymentConfirmation = useCallback(() => {
    setPaymentConfirmationOpen(false);
  }, []);

  const openPaymentConfirmation1 = useCallback(() => {
    setPaymentConfirmation1Open(true);
  }, []);

  const closePaymentConfirmation1 = useCallback(() => {
    setPaymentConfirmation1Open(false);
  }, []);

  const onLabelText2Click = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onLabelText4Click = useCallback(() => {
    // Please sync "Searching Page" to the project
  }, []);

  const onLabelText5Click = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const openContactPopup = useCallback(() => {
    setContactPopupOpen(true);
  }, []);

  const closeContactPopup = useCallback(() => {
    setContactPopupOpen(false);
  }, []);

  const onButton1Click = useCallback(() => {
    // Please sync "Meetings" to the project
  }, []);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
      let path = '../edit-profile'; 
      navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = '../booking-history'; 
    navigate(path);
}

  return (
    <>
      <div className="profile-page">
        <div className="card" onClick={openPaymentConfirmation}>
          <div className="metadata23">{`{"config":{},"type":"Card","nodeName":"Card","children":["53637430-e22a-4de5-810d-aafd1e50fa0d","f0a7f188-ee88-42ad-9360-e648cda2d4f3"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:47:10.183Z"}`}</div>
        </div>
        <div className="card1" onClick={openPaymentConfirmation1}>
          <div className="metadata23">{`{"config":{},"type":"Card","nodeName":"Card","children":["53637430-e22a-4de5-810d-aafd1e50fa0d","f0a7f188-ee88-42ad-9360-e648cda2d4f3"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:47:10.183Z"}`}</div>
        </div>
        <div className="card2">
          <div className="metadata25">{`{"config":{},"type":"Card","nodeName":"Card","children":["4bc90b68-3490-4631-b185-2f0fda2afc4f","7b32dc15-3cb2-40c5-a2ad-ecb2ba4cb9fa"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:39:09.597Z"}`}</div>
        </div>
        <div className="footer-strip">
          <div className="metadata26">{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:21.877Z"}`}</div>
          <b className="terms-of-service">Terms of Service</b>
          <b className="privacy-policy-stylestyle2">Privacy Policy</b>
          <b className="copyright-stylestyle2tagu">
            © 2020 Mockup. All Rights Reserved.
          </b>
        </div>
        <img className="mark-icon" alt="" src="/mark@2x.png" />
        <a className="name-mark-zuckerberg">Name: Mark Zuckerberg</a>
        <a className="email-markzuckmetacom">Email: markzuck@meta.com</a>
        <a className="date-of-birth">Date of Birth: 03/20/2001</a>
        <a className="profession-computer-science">
          Profession: Computer Science
        </a>
        <img className="bill-gates-icon1" alt="" src="/bill-gates1@2x.png" />
        <a className="previous-meetings">Previous Meetings</a>
        <img className="elon-musk-icon" alt="" src="/elon-musk@2x.png" />
        <h2 className="bill-gates">Bill Gates</h2>
        <h2 className="elon-musk">Elon Musk</h2>
        <a className="bill-gates-senior-software-container">
          <p className="senior-software-enginneer">Bill Gates</p>
          <p className="senior-software-enginneer">Senior Software Enginneer</p>
        </a>
        <a className="elon-musk-senior-software-container">
          <p className="senior-software-enginneer">Elon Musk</p>
          <p className="senior-software-enginneer">Senior Software Engineer</p>
        </a>
        <a className="area-of-interest">Area of Interest: Software</a>
        <button className="button" onClick={routeChange}>
          <div className="metadata27">{`{"config":{},"type":"Button","nodeName":"Button","children":["0baa658a-9f8c-410d-82fb-2422a63aca46","643d1019-ea92-499b-8075-d80c98c1f3cd","20756fa9-be32-4869-bd70-fbcff2345c8a","2b9f6d81-e9b1-4e70-b951-265206a7c200","836a85bc-6030-4ceb-88f6-dd940d52378f","6377f2c1-11e3-4fb2-be02-cb399a3e95f0","cc1c8e3c-d71a-4239-aa79-07c7239e48d8","e7262d95-8c2c-424d-a4c5-fab785288741"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.848Z"}`}</div>
          <div className="label3">Edit Profile</div>
          <div className="icon11">
            <div className="metadata28">{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.715Z"}`}</div>
            <div className="icon12">
              <div className="metadata29">{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:13:17.585Z"}`}</div>
              <img className="path-icon" alt="" src="/path.svg" />
            </div>
          </div>
        </button>
        <div className="header">
          <div className="metadata30">{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.847Z"}`}</div>
          <b className="title-tagh6">TinnCann</b>
          <div className="tabs">
            <div className="metadata31">{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.791Z","nodeName":"Tabs"}`}</div>
            <div className="placeholder-tab-item">
              <div className="metadata25">{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.679Z"}`}</div>
              <div className="area">
                <div className="metadata25">{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.672Z"}`}</div>
                <div className="bar" />
              </div>
              <div className="label4">Label</div>
            </div>
            <div className="tab-item-statedefault">
              <div className="metadata31">{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.718Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className="area1">
                <div className="metadata25">{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.706Z"}`}</div>
                <div className="bar" />
              </div>
              <div className="label5" onClick={onLabelText2Click}>
                Forum
              </div>
            </div>
            <div className="tab-item-statedefault1">
              <div className="metadata31">{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.130Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className="area2">
                <div className="metadata25">{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:37:01.098Z"}`}</div>
                <div className="bar" />
              </div>
              <div className="label4">Account</div>
            </div>
            <div className="tab-item-statedefault2">
              <div className="metadata31">{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.759Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
              <div className="area2">
                <div className="metadata25">{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.744Z"}`}</div>
                <div className="bar" />
              </div>
              <div className="label5" onClick={onLabelText4Click}>
                Search Experts
              </div>
            </div>
            <div className="tab-item-stateactive">
              <div className="metadata31">{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.778Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
              <div className="area4">
                <div className="metadata25">{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.765Z"}`}</div>
                <div className="placement-area-stateactive" />
                <div className="bar-stateactive" />
              </div>
              <div className="label5" onClick={onLabelText5Click}>
                Home
              </div>
            </div>
          </div>
          <div
            className="button-display-elementslabel3"
            onClick={openContactPopup}
          >
            <div className="metadata25">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.826Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <div className="label9">Contact</div>
            <div className="icon-display-elementslabel3">
              <div className="metadata25">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.814Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
              <img className="icon13" alt="" src="/icon4.svg" />
            </div>
          </div>
          <div className="icon-iconfeathersearchsiz">
            <div className="metadata25">{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.838Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
            <img className="icon14" alt="" src="/icon5.svg" />
          </div>
        </div>
        <label className="input">
          <div className="metadata45">{`{"config":{},"type":"Input","nodeName":"Input","children":["7d8dfbca-99e0-446a-8c65-ab933a187b07","a7c112ad-19ce-4a6a-9280-98a8d8fa062b","3fcbd01f-d1dd-4117-b0a1-4d773ca90d09","b0c93189-87f4-46b3-bd22-12d2a11f5be5","12965070-0d78-4a32-801b-803ab9666cc1","862c884b-b971-486f-8a0f-4f1441ba220d","619fc9d0-e8a4-4684-8e14-05d0791622a1","642d1705-c560-4128-af02-22f6175a73a3","9606fa8f-0515-4a13-8030-268ed3a2f715"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:42:29.916Z"}`}</div>
          <div className="value">User Information</div>
          <div className="icon15">
            <div className="metadata46">{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:42:29.768Z"}`}</div>
            <div className="icon16">
              <div className="metadata47">{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:42:29.623Z"}`}</div>
              <img className="path-icon1" alt="" src="/path1.svg" />
            </div>
          </div>
          <b className="label10">Label</b>
        </label>
        <button className="button1" onClick={routeChange2}>
          <div className="metadata27">{`{"config":{},"type":"Button","nodeName":"Button","children":["9280995a-deea-4a67-986d-8b1ceea30d3c","359d505c-6dc7-47fc-926d-8f0f0b9b122b","81237356-d1f1-4029-9252-e6e3e2285bce","ab62af0a-89c3-4445-8208-4f3d7fb59f3d","8fcac690-51bb-42eb-9d96-99c77f9aa962","bde4130e-89bf-4071-b14d-c7cbb7583b2d","a5d17bde-a1c9-4867-b561-897d8969f4b4","6139e4b8-ccce-446d-94b3-83a5ec63461a"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:45:34.313Z"}`}</div>
          <div className="label11">Check Bookings</div>
          <div className="icon17">
            <div className="metadata28">{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:45:34.173Z"}`}</div>
            <div className="icon18">
              <div className="metadata29">{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:45:34.022Z"}`}</div>
              <img className="path-icon" alt="" src="/path.svg" />
            </div>
          </div>
        </button>
      </div>
      {isPaymentConfirmationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentConfirmation}
        >
          <PaymentConfirmation onClose={closePaymentConfirmation} />
        </PortalPopup>
      )}
      {isPaymentConfirmation1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentConfirmation1}
        >
          <PaymentConfirmation onClose={closePaymentConfirmation1} />
        </PortalPopup>
      )}
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

export default ProfilePage;
