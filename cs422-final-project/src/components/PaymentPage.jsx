import { FunctionComponent, useCallback } from "react";
import styles from "./PaymentPage.module.css";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
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
      <HeaderComponent />
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
      <button style={{position:"absolute", top: "1000px"}} onClick={routeChange}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
