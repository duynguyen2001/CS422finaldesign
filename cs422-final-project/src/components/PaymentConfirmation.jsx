import { useCallback } from "react";
import "./PaymentConfirmation.css";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = ({ onClose }) => {
  const onButtonDISPLAYELEMENTSLabelContainerClick = useCallback(() => {
    // Please sync "Message Page" to the project
  }, []);

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '../message'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
      let path = '../vc'; 
      navigate(path);
  }

  return (
    <div className="payment-confirmation">
      <div className="sign-up">
        <div className="metadata">{`{"config":{},"nodeName":"Sign Up","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.493Z"}`}</div>
        <div className="card-display-elementsdefault">
          <div className="metadata1">{`{"config":{},"type":"Card","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.285Z","nodeName":"Card [DISPLAY_ELEMENTS=DEFAULT]"}`}</div>
        </div>
        <img
          className="background-stylestyle2-icon"
          alt=""
          src="/background-stylestyle2.svg"
        />
        <div className="location-pin">
          <div className="metadata2">{`{"config":{},"nodeName":"Location Pin","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.293Z"}`}</div>
          <img className="ellipse-icon" alt="" src="/ellipse.svg" />
          <img className="ellipse-icon1" alt="" src="/ellipse1.svg" />
        </div>
        <div
          className="button-display-elementslabel"
          onClick={routeChange}
        >
          <div className="metadata3">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.345Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className="label-wrapper">
            <div className="label">Send message</div>
          </div>
          <div className="icon-display-elementslabel">
            <div className="metadata4">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.334Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
        </div>
        <div className="circle-button-sizemediumst">
          <div className="metadata4">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.447Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className="icon-iconfeatherxsizemed">
            <div className="metadata4">{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"feather/x"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.441Z","nodeName":"Icon [ICON=feather/x][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className="icon1" alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className="icon-iconfeathermap-pinsi">
          <div className="metadata4">{`{"config":{"SIZE":"LARGE","ICON":"feather/map-pin"},"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.457Z","type":"Icon","nodeName":"Icon [ICON=feather/map-pin][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
          <img className="icon2" alt="" src="/icon2.svg" />
        </div>
        <div className="icon-iconfeatherphonesize">
          <div className="metadata4">{`{"config":{"SIZE":"LARGE","ICON":"feather/phone"},"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.469Z","type":"Icon","nodeName":"Icon [ICON=feather/phone][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
          <img className="icon3" alt="" src="/icon3.svg" />
        </div>
        <div className="icon-iconfeathersmartphone">
          <div className="metadata4">{`{"config":{"SIZE":"LARGE","ICON":"feather/smartphone"},"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.484Z","type":"Icon","nodeName":"Icon [ICON=feather/smartphone][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
          <div className="icon4">
            <div className="a423c526-5962-48ea-9909-41bfff" />
          </div>
        </div>
        <div className="address">123 Mockup St., New York</div>
        <div className="phone">{`(+1) 123 456 7890 `}</div>
        <div className="mobile">(+1) 123 456 7891</div>
        <b className="title-tagh4">Payment Confirmation</b>
        <img
          className="icon-feather-clock"
          alt=""
          src="/icon-featherclock.svg"
        />
        <div className="mobile1">7:30AM - 8:30AM Jan 03, 2022</div>
        <img className="bill-gates-icon" alt="" src="/bill-gates@2x.png" />
        <div className="button-display-elementslabel1" onClick={routeChange2}>
          <div className="metadata3">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.345Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className="label-wrapper">
            <div className="label1">Video Call</div>
          </div>
          <div className="icon-display-elementslabel">
            <div className="metadata4">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:37.334Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;