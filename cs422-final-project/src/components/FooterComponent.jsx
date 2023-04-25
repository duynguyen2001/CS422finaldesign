import React from "react";

const FooterStrip = () => (
  <svg width="1200" height="80" viewBox="0 0 1920 80">
    <g id="Group_41" data-name="Group 41" transform="translate(0 -1023)">
      <g id="Footer_Strip" data-name="Footer Strip" transform="translate(1656 -2125)">
        <rect
          id="Background_STYLE:STYLE2_"
          data-name="Background [STYLE:STYLE2]"
          width="1920"
          height="80"
          transform="translate(-1656 3148)"
          fill="#4525f2"
        />
        <text
          id="Terms_of_Service_STYLE:STYLE2_TAG:UI_S_"
          data-name="Terms of Service [STYLE:STYLE2][TAG:UI_S]"
          transform="translate(64 3193)"
          fill="#f2f4f8"
          fontSize="13"
          fontFamily="NotoSans-Bold, Noto Sans"
          fontWeight="700"
          letterSpacing="0.03em"
        >
          <tspan x="-55.796" y="0">
            Terms of Service
          </tspan>
        </text>
        <text
          id="Privacy_Policy_STYLE:STYLE2_TAG:UI_S_"
          data-name="Privacy Policy [STYLE:STYLE2][TAG:UI_S]"
          transform="translate(-254 3193)"
          fill="#f2f4f8"
          fontSize="13"
          fontFamily="NotoSans-Bold, Noto Sans"
          fontWeight="700"
          letterSpacing="0.03em"
        >
          <tspan x="-47.014" y="0">
            Privacy Policy
          </tspan>
        </text>
        <text
          id="Copyright_STYLE:STYLE2_TAG:UI_S_"
          data-name="Copyright [STYLE:STYLE2][TAG:UI_S]"
          transform="translate(-1385 3193)"
          fill="#f2f4f8"
          fontSize="13"
          fontFamily="NotoSans-Bold, Noto Sans"
          fontWeight="700"
          letterSpacing="0.03em"
        >
          <tspan x="-125.827" y="0" xmlSpace="preserve">
            © 2020 Mockup. All Rights Reserved.
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

export const FullFooter = ({fromTop}) => {
  return (
    <div style={{ backgroundColor: "#4525f2", color: "#b4a8f9", textAlign: "center", padding: "20px 0", position: "absolute",  width: "100%", top: fromTop,  }}>
      <p>&copy; 2023 TinnCann. All rights reserved.</p>
      <div>
        <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="https://www.facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="mailto:info@tinncann.com"><i className="far fa-envelope fa-2x"></i></a>
      </div>
      <h4>TinnCann</h4>
    </div>
  );
};


export default FooterStrip;
