import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn= ({ onClose }) => {
  const navigate = useNavigate();

  const onCreateAnAccountClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <div
        className={styles.metadata}
      >{`{"config":{},"type":"SignIn–Desktop","nodeName":"Sign In – Desktop","children":["5a52807a-0625-4c69-881b-d4f50ec1921e","7fc1aed4-07a7-4845-926b-c9cbee1aaec6","1254f206-608d-41d7-9daf-6f6cea1fe9eb","24926bfe-9392-4b01-9384-62d724d683b3","22e9458b-9278-4b0e-8bc5-78b296707002","2e60f91a-d22e-4b07-9725-032e11ed58d8","506fe95a-9c3a-425b-91f6-275f06c7459f","d1dc0c5f-f54e-4ee9-8c3e-1e2071c8bccf","c71eff6f-ef17-4fa5-8e6a-d804d189dad6","e12ced4a-a858-46cd-944d-9befbc527f5c","009ff52f-4f53-4968-b2e8-0f5b2e7b5013","45b1c878-bd37-4c8a-9e2f-8882774516bb","c8feea9c-3a2f-464d-9526-8a1ebb2a54e9","61549802-5392-42b8-a2ac-ff7ee90b3104","394a4ee6-f0f6-4498-8a92-0e819b239a5d","cfa2ddad-ee5a-418c-9fb2-5716c441aeb2","5304c4dc-fd55-47dd-8859-f4f733bda1f2","c1d59cd8-899c-4dab-bd25-f52ec9185f2a","23f70f55-506c-4417-8b6a-0049beb27068","d9e8e781-1307-4e69-aafe-559d1e4eb194","1e9d26d2-af9d-4b78-b9b2-e1ec177842a6","f2d95cda-2a78-48c6-a13e-51f09509ebeb","5968d109-214f-4c6b-bd9e-473ba8ae80ef","2a0b7649-d5ed-4dd8-8bdc-51d6087d5a39","5652c922-4e49-4c23-a698-ec59d433777b","811cdad2-c1d0-44c1-9b10-ac3eadc575ce","8ffc7fde-c4e0-4f05-8e83-1809c0c104f6","c879d37e-f820-42bc-b8b7-c488fa9a9acc","e5c95bce-4a24-45db-939d-387cd0fcef4b","3fc35558-1a2d-4921-8f13-1817e417d46b","73ffaebb-3b57-4e4e-9ef4-8b2296554516","103c9b90-13e8-4b36-a611-1139db5b0c54","67884cf3-4921-4897-b6ce-e6816e70bfe8","b3a98653-c1a9-40e6-af1c-1cc9490be15b","23416396-7942-4b32-b309-9d660f25121f","5e21aff9-acf0-4d27-b35d-084525af035a","9c0e301b-84ca-4918-964f-8bb077b16860","a67a09cc-9762-4381-bdb9-e2ffa0168ce5","05224811-c9ee-4e68-a56a-5903fb0787ff","8329eb57-f341-4741-886c-7024a171ca99","6136e7a3-35bf-499c-b9ce-90a7308f87b0","ba72f3db-1bea-4199-886d-36f9f177bf69","c3dc1bcf-a16a-4fc6-88a0-81cbb8b8413e","3bdd8b96-b0e5-4b72-b1ba-64058a91bd0c","9a08f4ce-e6fc-4dbd-b3a5-eb1ea1a3592c","b046f085-1bc8-4bc2-999f-5b7089b5065e","6ff9c8ac-b17f-45eb-9cbf-8a75089f02a2","b84a01d2-1b9d-4efd-8b4d-2f2599a173fe","cf6b0814-6feb-41f4-a155-661b6b142872","217529ec-ad81-45ee-8b1c-29a3e4145fdc","8a5c6a7a-242a-4e78-8629-373d16c3d40e","55f537b1-1c15-4a0b-827c-d24b463d0e7a","3572630f-456c-4ae8-878a-a5dccbc42033","73856d47-d6c1-4fef-bba3-c77147cfb5b8","6efe3a6a-aaea-41a7-8d95-9650001e7fa0","f0a5c371-abc2-43cb-8463-d8d0e3adc22a","723a794a-802f-4da2-a52c-e6ff4636c641","dead86fb-2b29-4e81-b262-977e24f27493","1d8c4cfc-2c7c-4bb7-8990-5b9da527da11","9dbc7124-9ece-41cb-9a94-36e441ce5c7c","7234a3cf-c34b-493a-8f60-ce54cb62de96","98069f91-bfa7-48c2-aa30-1b9778c3be09","50feef9e-eb8e-4ac3-b234-0f92074f36be","cf5ee626-eb64-48fe-a8ab-c29f84ac3f6f","920b5fbc-91d9-4488-86da-5becca36dd8f","3920021a-a6b6-41a2-bec2-ea5abebd8c16","c67787e3-4608-4325-9699-c1fa2096975b","41b2d770-be21-4b6a-aea0-928b366a0605","7004f3ea-fb58-40d9-8e8f-f9ea511a65cd","8a7ac785-9a5f-4783-9b77-263c9f4f9cc4","6ca99977-d102-4c04-b71c-9102eae2073a","a98096f3-952b-4308-b2fb-ea8c84d9f593","7e967815-c089-4078-9804-8dc315be3110","2f318b86-0e45-4d3c-9686-f75165205e4e","3b97fa5d-97eb-41b3-993d-568c3a3e804b","0f3ffcc1-ac6e-4b90-8213-3fc204473fea","a859cc57-80b7-4ac9-ad24-c9271a45ba9a","36f7f655-9e4b-4617-ba4a-32e9084342af","bb8db583-959b-475f-a192-e9ee72d9d77e","28c72412-6e4c-4271-95b5-b7a12e25f557","21b028ad-c632-4c13-a41a-663d4b2cf463","eac1e398-a9cd-4c72-9b58-6901898ba43c","9f3a957f-0ec1-4cca-9729-d83b87d507fb","961c8758-9ce5-4fbd-8f18-b7297e93c832","484dcf7b-93c9-4239-a671-ddaaa6f29eb0","2c98dad8-991e-4791-8f69-45c2234ca526","471a2151-9497-4313-a022-c48bd72081dd","d0bb65dc-2774-422e-9b41-e9ff92ed80dd","433ac1f7-340b-4999-b8e0-8ab61af80796","b51194ad-43b1-4d65-b7d2-55bca8d7a72e","468ab7f1-3e11-4105-b407-d0052ad10a8b","80958fd4-3f7b-4021-9418-e4fe8fb1e389","ece89b9f-f030-47de-8628-c92edfb4bc72","ba8c7a92-4560-47b7-b537-87d43cf1b56d","cfc823a7-1952-4471-b4f0-3165edc48807","8c5b8b5c-dd79-44a9-9817-cb17616aab8b","5bf4eaef-4cd9-48c7-bcab-5b4d9e2c26ea","8c450603-7489-446a-8fb8-59215b07cf45","a9e1b460-6804-4a88-8c15-61c8776eda12","8db535f1-3f9a-41c8-a14a-ce309fb20727","d7813a0a-ef9d-4024-be90-c43bc16fd0a7","b6486023-3dde-4e67-8f32-881efb6ad97d","e4f77629-79df-4ac9-8431-eb589e21d6ab","0720ef2c-6f46-47b2-8921-affc38d58c46","5b4f73bf-0054-4d18-bf95-ee9311cc1731","e922d8bd-88ce-4c43-9f3f-0776fbc5f319","af6345c7-86c8-4fea-a1ba-a683fdf62c19","8a6cc22a-1b49-4aeb-821e-8bdc4809a4da","531dd545-317a-4d24-9dce-69a6fe89f886","0d78522f-1a23-4df1-89a7-d924064fd1df","aa22c4dc-8c2c-4893-bd70-b3b362f4ee03"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:02.018Z"}`}</div>
      <div className={styles.signIn1}>
        <div
          className={styles.metadata1}
        >{`{"config":{},"nodeName":"Sign In","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:02.008Z"}`}</div>
        <div className={styles.cardDisplayElementsdefault}>
          <div
            className={styles.metadata2}
          >{`{"config":{},"type":"Card","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.641Z","nodeName":"Card [DISPLAY_ELEMENTS=DEFAULT]"}`}</div>
        </div>
        <div className={styles.illustration}>
          <div
            className={styles.metadata3}
          >{`{"config":{},"nodeName":"Illustration","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.649Z"}`}</div>
          <img className={styles.pathIcon} alt="" src="/path110333.svg" />
          <img className={styles.pathIcon1} alt="" src="/path21333.svg" />
          <img className={styles.pathIcon2} alt="" src="/path31333.svg" />
          <img className={styles.pathIcon3} alt="" src="/path41333.svg" />
          <img className={styles.pathIcon4} alt="" src="/path51333.svg" />
          <img className={styles.pathIcon5} alt="" src="/path61333.svg" />
          <img className={styles.pathIcon6} alt="" src="/path71333.svg" />
          <img className={styles.pathIcon7} alt="" src="/path81333.svg" />
          <img className={styles.pathIcon8} alt="" src="/path91333.svg" />
          <img className={styles.pathIcon9} alt="" src="/path101333.svg" />
          <img className={styles.pathIcon10} alt="" src="/path111333.svg" />
          <img className={styles.pathIcon11} alt="" src="/path121333.svg" />
          <img className={styles.pathIcon12} alt="" src="/path131333.svg" />
          <img className={styles.pathIcon13} alt="" src="/path141333.svg" />
          <img className={styles.pathIcon14} alt="" src="/path151333.svg" />
          <img className={styles.pathIcon15} alt="" src="/path161333.svg" />
        </div>
        <div className={styles.buttonDisplayElementslabel}>
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.721Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
          <div className={styles.label}>Sign In</div>
          <div className={styles.iconDisplayElementslabel}>
            <div
              className={styles.metadata}
            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.711Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon} alt="" src="/icon13333.svg" />
          </div>
        </div>
        <div className={styles.circleButtonSizemediumst}>
          <div
            className={styles.metadata}
          >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.741Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className={styles.iconIconfeathertwittersi}>
            <div
              className={styles.metadata}
            >{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.735Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className={styles.icon1} alt="" src="/icon14333.svg" />
          </div>
        </div>
        <div className={styles.circleButtonSizemediumst1}>
          <div
            className={styles.metadata}
          >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.761Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className={styles.iconIconfeathertwittersi}>
            <div
              className={styles.metadata}
            >{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.752Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className={styles.icon2} alt="" src="/icon15333.svg" />
          </div>
        </div>
        <div className={styles.circleButtonSizemediumst2}>
          <div
            className={styles.metadata}
          >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.783Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className={styles.iconIconfeathertwittersi}>
            <div
              className={styles.metadata}
            >{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.776Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className={styles.icon3} alt="" src="/icon16333.svg" />
          </div>
        </div>
        <div className={styles.circleButtonSizemediumst3}>
          <div
            className={styles.metadata}
          >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.809Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className={styles.iconIconfeathertwittersi}>
            <div
              className={styles.metadata}
            >{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"custom/google"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.803Z","nodeName":"Icon [ICON=custom/google][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className={styles.icon4} alt="" src="/icon17333.svg" />
          </div>
        </div>
        <div className={styles.signInWith}>
          <div
            className={styles.metadata14}
          >{`{"config":{},"nodeName":"- Sign in with -","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.816Z"}`}</div>
          <div className={styles.line} />
          <div className={styles.line1} />
          <b className={styles.typographyTaguiS}>Or Sign In With</b>
        </div>
        <div className={styles.checkboxDisplayElementslab}>
          <div
            className={styles.metadata}
          >{`{"config":{"STATE":"ACTIVE","DISPLAY_ELEMENTS":"Label"},"type":"Checkbox","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.831Z","nodeName":"Checkbox [DISPLAY_ELEMENTS=Label][STATE=ACTIVE]"}`}</div>
          <div className={styles.areaDisplayElementslabel} />
          <img
            className={styles.checkDisplayElementslabelIcon}
            alt=""
            src="/check-display-elementslabelstateactive333.svg"
          />
          <div className={styles.label1}>Keep me signed in</div>
        </div>
        <div className={styles.inputDisplayElementsdefaul}>
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Input","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.867Z","nodeName":"Input [DISPLAY_ELEMENTS=Default][STATE=DEFAULT]"}`}</div>
          <div className={styles.value}>Password</div>
          <div className={styles.iconDisplayElementsdefault}>
            <div
              className={styles.metadata17}
            >{`{"config":{"STATE":"DEFAULT","ICON":"Feather/Search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.847Z","nodeName":"Icon [DISPLAY_ELEMENTS=Default][ICON=Feather/Search][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon5} alt="" src="/icon18333.svg" />
          </div>
          <b className={styles.label2}>Label</b>
        </div>
        <div className={styles.inputDisplayElementsdefaul1}>
          <div
            className={styles.metadata}
          >{`{"config":{},"type":"Input","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.928Z","nodeName":"Input [DISPLAY_ELEMENTS=Default][STATE=DEFAULT]"}`}</div>
          <div className={styles.value}>Username or email</div>
          <div className={styles.iconDisplayElementsdefault}>
            <div
              className={styles.metadata17}
            >{`{"config":{"STATE":"DEFAULT","ICON":"Feather/Search"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.888Z","nodeName":"Icon [DISPLAY_ELEMENTS=Default][ICON=Feather/Search][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
            <img className={styles.icon5} alt="" src="/icon18333.svg" />
          </div>
          <b className={styles.label2}>Label</b>
        </div>
        <div
          className={styles.createAnAccount}
          onClick={onCreateAnAccountClick}
        >
          Create an account
        </div>
        <b className={styles.newUserTagh6}>New user?</b>
        <b className={styles.titleTagh4}>Sign In</b>
        <button className={styles.circleButtonSizemediumst4}>
          <div
            className={styles.metadata20}
          >{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:02.000Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
          <div className={styles.iconIconfeathertwittersi}>
            <div
              className={styles.metadata20}
            >{`{"config":{"STATE":"DEFAULT","STYLE":"STYLE2","ICON":"feather/x"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:23:01.974Z","nodeName":"Icon [ICON=feather/x][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
            <img className={styles.icon7} alt="" src="/icon19333.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
