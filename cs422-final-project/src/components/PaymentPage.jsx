import { FunctionComponent, useCallback } from "react";
import styles from "./PaymentPage.module.css";
import { useNavigate } from "react-router-dom";

const PaymentPage: FunctionComponent = () => {
  const onTabItemSTATEDEFAULTClick = useCallback(() => {
    // Please sync "Blog" to the project
  }, []);

  const onTabItemSTATEDEFAULT1Click = useCallback(() => {
    // Please sync "Profile Page" to the project
  }, []);

  const onTabItemSTATEACTIVEClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onButtonDISPLAYELEMENTSLabelClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '../payment-confirmation'; 
        navigate(path);
    }

  return (
    <div className={styles.paymentPage}>
      <div className={styles.footerStrip}>
        <div
          className={styles.metadata}
        >{`{"config":{},"nodeName":"Footer Strip","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.524Z"}`}</div>
        <b className={styles.termsOfService}>Terms of Service</b>
        <b className={styles.privacyPolicyStylestyle2}>Privacy Policy</b>
        <b className={styles.copyrightStylestyle2tagu}>
          © 2020 Mockup. All Rights Reserved.
        </b>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.button}>
        <div
          className={styles.metadata1}
        >{`{"config":{},"type":"Button","nodeName":"Button","children":["12029703-c8e6-45e9-885d-fc008043c43c","9d05a477-8b87-48b0-a01e-5ad7e3fcf9b4","8b03404f-1356-4d04-9495-064f8bac0ab0","0cce5174-910e-46cb-992f-de7c314377bd","d57b8a18-faff-4394-a8c2-d186f09ebb88","3d338bf7-9eef-41ff-b583-94379cda3a5b","4fad2102-1eba-4985-b850-e48d6ffa61c9","6a4b45a8-c0df-4143-8357-5e4e73884112"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:12:23.942Z"}`}</div>
        <div className={styles.icon}>
          <div
            className={styles.metadata2}
          >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:12:23.807Z"}`}</div>
          <div className={styles.icon1}>
            <div
              className={styles.metadata3}
            >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:12:23.662Z"}`}</div>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div
          className={styles.metadata4}
        >{`{"config":{},"nodeName":"Header","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:21.281Z"}`}</div>
        <label className={styles.titleTagh6}>TinnCann</label>
        <div className={styles.tabs}>
          <div
            className={styles.metadata5}
          >{`{"config":{},"type":"Tabs","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.698Z","nodeName":"Tabs"}`}</div>
          <div className={styles.placeholderTabItem}>
            <div
              className={styles.metadata6}
            >{`{"config":{},"nodeName":"[PLACEHOLDER] Tab Item","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:19.137Z"}`}</div>
            <div className={styles.area}>
              <div
                className={styles.metadata6}
              >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:19.087Z"}`}</div>
              <div className={styles.bar} />
            </div>
            <div className={styles.label}>Label</div>
          </div>
          <button
            className={styles.tabItemStatedefault}
            onClick={onTabItemSTATEDEFAULTClick}
          >
            <div
              className={styles.metadata8}
            >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.179Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
            <div className={styles.area1}>
              <div
                className={styles.metadata9}
              >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:19.190Z"}`}</div>
              <div className={styles.bar} />
            </div>
            <div className={styles.label1}>Forum</div>
          </button>
          <button
            className={styles.tabItemStatedefault1}
            onClick={onTabItemSTATEDEFAULT1Click}
          >
            <div
              className={styles.metadata8}
            >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.319Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
            <div className={styles.area2}>
              <div
                className={styles.metadata9}
              >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.225Z"}`}</div>
              <div className={styles.bar} />
            </div>
            <div className={styles.label1}>Account</div>
          </button>
          <button className={styles.tabItemStatedefault2}>
            <div
              className={styles.metadata8}
            >{`{"config":{},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.466Z","nodeName":"Tab Item [STATE=DEFAULT]"}`}</div>
            <div className={styles.area3}>
              <div
                className={styles.metadata9}
              >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.371Z"}`}</div>
              <div className={styles.placementAreaStatedefault} />
              <div className={styles.barStatedefault2} />
            </div>
            <button className={styles.label3}>Search Experts</button>
          </button>
          <div
            className={styles.tabItemStateactive}
            onClick={onTabItemSTATEACTIVEClick}
          >
            <div
              className={styles.metadata5}
            >{`{"config":{"STATE":"ACTIVE"},"type":"TabItem","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.607Z","nodeName":"Tab Item [STATE=ACTIVE]"}`}</div>
            <div className={styles.area4}>
              <div
                className={styles.metadata6}
              >{`{"config":{},"nodeName":"Area","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.515Z"}`}</div>
            </div>
            <button className={styles.label3}>Home</button>
          </div>
        </div>
        <button
          className={styles.buttonDisplayElementslabel}
          onClick={onButtonDISPLAYELEMENTSLabelClick}
        >
          <div
            className={styles.metadata9}
          >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:21.071Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className={styles.label5}>Contact</div>
          <div className={styles.iconDisplayElementslabel}>
            <div
              className={styles.metadata9}
            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:20.976Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon2} alt="" src="/icon.svg" />
          </div>
        </button>
        <button className={styles.iconIconfeathersearchsiz}>
          <div
            className={styles.metadata9}
          >{`{"config":{"SIZE":"LARGE","ICON":"feather/search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:21.235Z","nodeName":"Icon [ICON=feather/search][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
          <img className={styles.icon3} alt="" src="/icon1.svg" />
        </button>
      </div>
      <button className={styles.button1} onClick={routeChange}>
        <div
          className={styles.metadata9}
        >{`{"config":{},"type":"Button","nodeName":"Button","children":["9f2bfd3f-4095-472b-9a3f-18ed724fd8cc","768309d9-ab66-4e0f-86e8-e049b6329cde","54a53208-0170-46ce-9617-21de84ec1210","c95f27ae-7eb2-4c6a-8dff-9c9f5980b59c","3508429e-10ef-4d9b-8561-886d858def10","a1d59147-518b-4710-98cc-e019f0bb2ec9","48140d29-0530-4e6b-84bb-1d3f513090ad","9a766233-5037-4f0f-bd1d-cc5f2cbef881"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:03:43.724Z"}`}</div>
        <div className={styles.area5} />
        <div className={styles.label6}>Pay Now</div>
        <div className={styles.icon4}>
          <div
            className={styles.metadata20}
          >{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:03:43.673Z"}`}</div>
          <div className={styles.icon5}>
            <div
              className={styles.metadata21}
            >{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-18T01:03:43.614Z"}`}</div>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
          </div>
        </div>
      </button>
      <div className={styles.securePaymentInfoWrapper}>
        <h1 className={styles.securePaymentInfo}> Secure Payment Info</h1>
      </div>
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <b className={styles.b}>{`    `}</b>
      <h3 className={styles.nameAsIt}>Name (as it appears on your card)</h3>
      <input className={styles.paymentPageChild} type="text" />
      <h3 className={styles.cardNumberNo}>
        {" "}
        Card number (no dashes or spaces)
      </h3>
      <input className={styles.paymentPageItem} type="text" />
      <h3 className={styles.expirationData}>Expiration data</h3>
      <input className={styles.paymentPageInner} type="text" />
      <input className={styles.rectangleInput} type="text" />
      <h3 className={styles.securityCode3}>
        Security code (3 one back, Amex: 4 on front)
      </h3>
      <input className={styles.paymentPageChild1} type="text" />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
    </div>
  );
};

export default PaymentPage;
