import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import PortalPopup from "./PortalPopup";
import SignIn from "./SignIn";
import "./BlogDetail.css";
import HeaderComponent from "./HeaderComponent";
const BlogDetail = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderComponent />
            <div className="blog-detail">
                <div className="component-9-1">
                    <div className="component-8-1">
                        <div className="component-8-1-child" />
                    </div>
                    <div className="previous-and-next">
                        <div className="metadata92">{`{"config":{},"nodeName":"Previous and Next","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.861Z"}`}</div>
                        <div className="previous">
                            <div className="metadata93">{`{"config":{},"nodeName":"Previous","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.851Z"}`}</div>
                            <div className="icon-iconfeatherchevron-lef">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE3","SIZE":"LARGE","ICON":"feather/chevron-left"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.847Z","nodeName":"Icon [ICON=feather/chevron-left][SIZE=LARGE][STYLE=STYLE3]"}`}</div>
                                <img
                                    className="icon28"
                                    alt=""
                                    src="/icon777.svg"
                                />
                            </div>
                            <b className="typography-stylestyle3tag">
                                Previous
                            </b>
                            <b className="typography-stylestyle3tag1">
                                <p className="a-beginners-guide">{`A beginner’s guide to `}</p>
                                <p className="a-beginners-guide">{`organizing a product `}</p>
                                <p className="a-beginners-guide">
                                    usability testing
                                </p>
                            </b>
                        </div>
                        <div className="next">
                            <div className="metadata95">{`{"config":{},"nodeName":"Next","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.860Z"}`}</div>
                            <div className="icon-iconfeatherchevron-rig">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE3","SIZE":"LARGE","ICON":"feather/chevron-right"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.857Z","nodeName":"Icon [ICON=feather/chevron-right][SIZE=LARGE][STYLE=STYLE3]"}`}</div>
                                <img
                                    className="icon28"
                                    alt=""
                                    src="/icon9777.svg"
                                />
                            </div>
                            <b className="typography-stylestyle3tag2">Next</b>
                            <b className="typography-stylestyle3tag3">
                                <p className="a-beginners-guide">{`7 ideation techniques to `}</p>
                                <p className="a-beginners-guide">{`supercharge your next `}</p>
                                <p className="a-beginners-guide">workshop</p>
                            </b>
                        </div>
                    </div>
                    <div className="shape4">
                        <div className="metadata97">{`{"config":{"SHAPE":"illustrations/Humaaans/03. Scenes/Scene - Plants"},"type":"qm::Illustration","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T15:59:52.963Z"}`}</div>
                        <img
                            className="background-shape-21"
                            alt=""
                            src="/background-shape-2777.svg"
                        />
                        <img
                            className="leaf-bottom-icon1"
                            alt=""
                            src="/leaf-bottom777.svg"
                        />
                        <img
                            className="leaf-top-icon1"
                            alt=""
                            src="/leaf-top777.svg"
                        />
                        <img
                            className="plant-right-icon1"
                            alt=""
                            src="/plant-right777.svg"
                        />
                        <img
                            className="plant-left-icon1"
                            alt=""
                            src="/plant-left777.svg"
                        />
                        <img
                            className="maceta-icon1"
                            alt=""
                            src="/maceta777.svg"
                        />
                        <img
                            className="top-leaves-icon1"
                            alt=""
                            src="/top-leaves777.svg"
                        />
                    </div>
                    <div className="shape5">
                        <div className="metadata97">{`{"config":{"SHAPE":"illustrations/Humaaans/03. Scenes/Scene - Plants"},"type":"qm::Illustration","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T15:59:52.963Z"}`}</div>
                        <img
                            className="background-shape-21"
                            alt=""
                            src="/background-shape-2777.svg"
                        />
                        <img
                            className="leaf-bottom-icon1"
                            alt=""
                            src="/leaf-bottom777.svg"
                        />
                        <img
                            className="leaf-top-icon1"
                            alt=""
                            src="/leaf-top777.svg"
                        />
                        <img
                            className="plant-right-icon1"
                            alt=""
                            src="/plant-right777.svg"
                        />
                        <img
                            className="plant-left-icon1"
                            alt=""
                            src="/plant-left777.svg"
                        />
                        <img
                            className="maceta-icon1"
                            alt=""
                            src="/maceta777.svg"
                        />
                        <img
                            className="top-leaves-icon1"
                            alt=""
                            src="/top-leaves777.svg"
                        />
                    </div>
                    <div className="blog-content">
                        <div className="metadata99">{`{"config":{},"nodeName":"Blog Content","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.983Z"}`}</div>
                        <img className="area-icon" alt="" src="/area777.svg" />
                        <div className="author-name">Adam Amda</div>
                        <b className="title-tagh3">
                            <p className="a-beginners-guide">{`What is the Ideal Design Workflow for UX/UI `}</p>
                            <p className="a-beginners-guide">Designers?</p>
                        </b>
                        <div className="category-and-date">
                            Skill Developing | Computer Science | May 17, 2020
                        </div>
                        <div className="blog-text-tagp-container">
                            <p className="uxui-design-is">
                                UX/UI design is a critical aspect of creating
                                digital products that resonate with users. By
                                providing a seamless and enjoyable experience,
                                designers ensure that customers are more likely
                                to engage and remain loyal to a product or
                                brand. Although there is no one-size-fits-all
                                approach, a well-defined workflow is crucial for
                                success. In this article, we will explore the
                                ideal design workflow for UX/UI designers,
                                covering essential stages and recommended
                                practices.
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Discovery and Research
                            </p>
                            <p className="uxui-design-is">
                                The design process starts with understanding the
                                target users, their needs, and the product’s
                                goals. This stage typically involves: Conducting
                                user interviews and surveys, Analyzing market
                                and competitor trends, Identifying user personas
                                and their pain points, Defining user stories and
                                scenarios
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Information Architecture
                            </p>
                            <p className="uxui-design-is">{`Next, designers should create a clear and logical structure for the product. This entails: Developing a site map or app flow, Crafting user flows that depict various user journeys, Establishing navigation patterns and hierarchies, Defining content requirements and labeling systems, `}</p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Wireframing and Low-Fidelity Prototyping
                            </p>
                            <p className="uxui-design-is">
                                In this stage, designers sketch out the basic
                                structure and layout of the product. This step
                                involves: Creating wireframes, which are simple,
                                non-interactive visual representations of the
                                interface; Using low-fidelity prototypes to
                                quickly iterate and validate design ideas;
                                Collaborating with stakeholders to gather
                                feedback and adjust the design accordingly
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Visual Design and High-Fidelity Prototyping
                            </p>
                            <p className="uxui-design-is">
                                Once the wireframes and low-fidelity prototypes
                                have been refined, designers can move on to
                                crafting the visual elements of the interface.
                                This includes: Establishing a visual design
                                language, including typography, color schemes,
                                and iconography; Designing high-fidelity mockups
                                that incorporate the visual design language;
                                Creating high-fidelity, interactive prototypes
                                to simulate the final product
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Usability Testing
                            </p>
                            <p className="uxui-design-is">
                                Before the final product is developed, it is
                                essential to test the design with real users.
                                This stage involves: Conducting usability tests
                                with target users to identify issues and areas
                                for improvement; Analyzing test results and
                                making necessary adjustments to the design;
                                Iterating on the design based on user feedback
                                and testing outcomes
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Handoff to Development
                            </p>
                            <p className="uxui-design-is">
                                With a well-tested and refined design in place,
                                designers should collaborate with developers to
                                ensure a smooth transition. This process
                                includes:Providing detailed design
                                specifications, including assets, style guides,
                                and interaction patterns; Communicating with the
                                development team to address questions and
                                concerns; Conducting design reviews throughout
                                the development process to ensure adherence to
                                the original design
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">
                                Post-Launch Evaluation and Iteration
                            </p>
                            <p className="uxui-design-is">
                                After the product has been launched, UX/UI
                                designers should continue to evaluate its
                                performance and make adjustments as needed. This
                                involves: Gathering user feedback through
                                surveys, interviews, and analytics
                            </p>
                            <p className="uxui-design-is">
                                Identifying areas for improvement and new
                                feature opportunities; Collaborating with the
                                development team to implement changes and
                                continuously refine the product
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="discovery-and-research">Conclusion</p>
                            <p className="uxui-design-is">
                                The ideal design workflow for UX/UI designers
                                involves a series of interconnected stages, each
                                with its own set of tasks and objectives. By
                                following this workflow, designers can create
                                user-centric products that not only meet user
                                needs but also offer delightful experiences. It
                                is essential to remember that the design process
                                is iterative, requiring continuous evaluation
                                and adaptation based on user feedback and
                                changing market conditions.
                            </p>
                            <p className="uxui-design-is">&nbsp;</p>
                            <p className="uxui-design-is">&nbsp;</p>
                        </div>
                        <div className="blog-content-child" />
                        <img
                            className="shape-shapeshapes01-basic2"
                            alt=""
                            src="/shape-shapeshapes01-basicbasic--circle@2x777.png"
                        />
                        <div className="icon-iconfeatherfacebooks2">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.972Z","nodeName":"Icon [ICON=feather/facebook][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon30"
                                alt=""
                                src="/icon10777.svg"
                            />
                        </div>
                        <div className="icon-iconfeathertwittersi2">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.974Z","nodeName":"Icon [ICON=feather/twitter][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon31"
                                alt=""
                                src="/icon11777.svg"
                            />
                        </div>
                        <div className="icon-iconfeatherlinkedins2">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.978Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon32"
                                alt=""
                                src="/icon12777.svg"
                            />
                        </div>
                        <div className="button-display-elementslabel8">
                            <div className="metadata91">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.955Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <div className="label17">Reply</div>
                            <div className="icon-display-elementslabel8">
                                <div className="metadata91">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.954Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                                <img
                                    className="icon33"
                                    alt=""
                                    src="/icon20777.svg"
                                />
                            </div>
                        </div>
                        <div className="component-12-1">
                            <b className="title-tagh31">20</b>
                            <img
                                className="icon-ionic-md-arrow-round-up"
                                alt=""
                                src="/icon-ionicmdarrowroundup777.svg"
                            />
                        </div>
                        <div className="component-13-1">
                            <b className="title-tagh31">3</b>
                            <img
                                className="icon-ionic-md-arrow-round-up1"
                                alt=""
                                src="/icon-ionicmdarrowroundup1777.svg"
                            />
                        </div>
                    </div>
                    <div className="footer1">
                        <div className="metadata105">{`{"config":{},"nodeName":"Footer","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.062Z"}`}</div>
                        <div className="copyright-20201">
                            Copyright © Date Name. All rights reserved.
                        </div>
                        <div className="circle-button-sizemediumst11">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.040Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                            <div className="icon-iconfeatherinstagram1">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/instagram"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.039Z","nodeName":"Icon [ICON=feather/instagram][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                                <div className="icon34">
                                    <img
                                        className="ecd662c-7cd9-4703-a2ad-4772d27-icon"
                                        alt=""
                                        src="/bc1799d35ce9411296c7766fd57b49ab777.svg"
                                    />
                                    <div className="dab1-8c6d-406c-84d3-58aa47f072" />
                                </div>
                            </div>
                        </div>
                        <div className="circle-button-sizemediumst12">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.046Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                            <div className="icon-iconfeatherinstagram1">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.045Z","nodeName":"Icon [ICON=feather/twitter][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                                <img
                                    className="icon35"
                                    alt=""
                                    src="/icon21777.svg"
                                />
                            </div>
                        </div>
                        <div className="circle-button-sizemediumst13">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.050Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                            <div className="icon-iconfeatherfacebooks3">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.049Z","nodeName":"Icon [ICON=feather/facebook][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                                <img
                                    className="icon36"
                                    alt=""
                                    src="/icon22777.svg"
                                />
                            </div>
                        </div>
                        <div className="circle-button-sizemediumst14">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.056Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                            <div className="icon-iconfeatherinstagram1">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.055Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                                <img
                                    className="icon37"
                                    alt=""
                                    src="/icon23777.svg"
                                />
                            </div>
                        </div>
                        <div className="circle-button-sizemediumst15">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE2"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.061Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                            <div className="icon-iconfeatherinstagram1">
                                <div className="metadata91">{`{"config":{"STYLE":"STYLE2","STATE":"DEFAULT","ICON":"feather/mail"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:35.060Z","nodeName":"Icon [ICON=feather/mail][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE2]"}`}</div>
                                <img
                                    className="icon38"
                                    alt=""
                                    src="/icon24777.svg"
                                />
                            </div>
                        </div>
                        <b className="mockup-shop-classic1">Mockup Blog</b>
                    </div>
                    <b className="title-tagh12">TinnCann’s Forum</b>
                    <div className="pagination1">
                        <div className="metadata116">{`{"config":{},"type":"Pagination","nodeName":"Pagination","children":["a1dda056-a798-4347-a7d5-80c69dcb317e","fab88ebc-2131-449e-81aa-7f2758281355","a4fa3ff2-8d8e-4fad-8394-622773578e20","dfebd96a-7eca-4a2d-8824-d90742126906","511e8d28-a765-4240-b674-3a411154084f","045a16cc-0c62-4735-b16f-fb7dfe43e24c","01fdd136-67c7-4f8f-8f98-d6570db304e9","511e7381-1802-4d3c-bb28-8f24ff85a914","1556d3f2-a032-4fdf-830f-e587a1a4f201","fc3379d2-37ae-4181-a9b1-ef86b7f0409c","170b60f6-0378-4643-9234-8f30dabbc71e","607a8225-9844-479b-9e7e-9ba9676b26ce","447400ca-6592-42b6-8a11-be799a232b73","631b3296-aff2-45a8-a249-2884f288d43c","93468898-1c31-485d-a327-98f8e1781f6d","79401a52-62cd-4232-a9bb-80271912ce0e","762013b1-2b14-458f-b4dd-5c9fbcddfb8c","270a0b4a-e590-4bd0-8502-dc7120c4d8e3","13113a93-9208-4892-8b17-20408b17e2c4"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.367Z"}`}</div>
                        <div className="item6">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.171Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot777.svg"
                            />
                        </div>
                        <div className="item7">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.207Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot1777.svg"
                            />
                        </div>
                        <div className="item8">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.234Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot1777.svg"
                            />
                        </div>
                        <div className="item9">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.262Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot1777.svg"
                            />
                        </div>
                        <div className="item10">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.289Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot1777.svg"
                            />
                        </div>
                        <div className="item11">
                            <div className="metadata116">{`{"config":{},"nodeName":"Item","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T03:31:10.315Z"}`}</div>
                            <img
                                className="dot-icon6"
                                alt=""
                                src="/dot1777.svg"
                            />
                        </div>
                    </div>
                    <div className="area-parent">
                        <img className="area-icon" alt="" src="/area1777.svg" />
                        <b className="title-tagh13">{`Forum > Page 2 > What is the Ideal Design Workflow for UX/UI Designers? `}</b>
                    </div>
                    <div className="blog-content1">
                        <div className="metadata99">{`{"config":{},"nodeName":"Blog Content","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.983Z"}`}</div>
                        <img className="area-icon" alt="" src="/area2777.svg" />
                        <div className="author-name1">Madam Madam</div>
                        <b className="title-tagh33">
                            <p className="a-beginners-guide">{`Reply: What is the Ideal Design Workflow for `}</p>
                            <p className="a-beginners-guide">
                                UX/UI Designers?
                            </p>
                        </b>
                        <div className="category-and-date">
                            Skill Developing | Computer Science | May 17, 2020
                        </div>
                        <div className="blog-text-tagp">
                            <p className="a-beginners-guide">
                                Thank you for sharing this comprehensive
                                overview of the ideal design workflow for UX/UI
                                designers. Your step-by-step breakdown of the
                                process, from discovery and research to
                                post-launch evaluation, provides valuable
                                insights for both novice and experienced
                                designers alike.
                            </p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">
                                Your suggestion of including visual
                                representations for each stage of the workflow
                                is a great idea. These images can serve as
                                helpful references and make the process more
                                tangible for those new to UX/UI design. I am
                                excited to create or source relevant visuals to
                                enhance my understanding of the design workflow
                                further.
                            </p>
                            <p className="a-beginners-guide">&nbsp;</p>
                            <p className="a-beginners-guide">
                                Once again, thank you for sharing your knowledge
                                and expertise in UX/UI design. I look forward to
                                applying these practices in my own design
                                projects and continually refining my approach
                                based on the insights provided in this article.
                            </p>
                        </div>
                        <div className="blog-content-item" />
                        <div className="icon-iconfeatherfacebooks4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.972Z","nodeName":"Icon [ICON=feather/facebook][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon30"
                                alt=""
                                src="/icon10777.svg"
                            />
                        </div>
                        <div className="icon-iconfeathertwittersi4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.974Z","nodeName":"Icon [ICON=feather/twitter][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon31"
                                alt=""
                                src="/icon11777.svg"
                            />
                        </div>
                        <div className="icon-iconfeatherlinkedins4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.978Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon32"
                                alt=""
                                src="/icon12777.svg"
                            />
                        </div>
                        <div className="button-display-elementslabel9">
                            <div className="metadata91">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.955Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <div className="label17">Reply</div>
                            <div className="icon-display-elementslabel8">
                                <div className="metadata91">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.954Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                                <img
                                    className="icon33"
                                    alt=""
                                    src="/icon20777.svg"
                                />
                            </div>
                        </div>
                        <div className="component-14-1">
                            <b className="title-tagh31">20</b>
                            <img
                                className="icon-ionic-md-arrow-round-up"
                                alt=""
                                src="/icon-ionicmdarrowroundup777.svg"
                            />
                        </div>
                        <div className="component-15-1">
                            <b className="title-tagh31">3</b>
                            <img
                                className="icon-ionic-md-arrow-round-up1"
                                alt=""
                                src="/icon-ionicmdarrowroundup1777.svg"
                            />
                        </div>
                        <img
                            className="shape-shapeshapes01-basic3"
                            alt=""
                            src="/shape-shapeshapes01-basicbasic--circle1@2x777.png"
                        />
                        <img
                            className="blog-content-inner"
                            alt=""
                            src="/rectangle-79@2x777.png"
                        />
                        <img
                            className="rectangle-icon"
                            alt=""
                            src="/rectangle-791@2x777.png"
                        />
                        <img
                            className="blog-content-child1"
                            alt=""
                            src="/rectangle-792@2x777.png"
                        />
                    </div>
                    <div className="blog-content2">
                        <img className="area-icon" alt="" src="/area2777.svg" />
                        <div className="author-name2">Cruz Antoine</div>
                        <b className="title-tagh36">S</b>
                        <div className="category-and-date">
                            Skill Developing | Computer Science | May 17, 2020
                        </div>
                        <div className="blog-text-tagp">A</div>
                        <div className="blog-content-item" />
                        <div className="icon-iconfeatherfacebooks4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/facebook"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.972Z","nodeName":"Icon [ICON=feather/facebook][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon30"
                                alt=""
                                src="/icon10777.svg"
                            />
                        </div>
                        <div className="icon-iconfeathertwittersi4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/twitter"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.974Z","nodeName":"Icon [ICON=feather/twitter][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon31"
                                alt=""
                                src="/icon11777.svg"
                            />
                        </div>
                        <div className="icon-iconfeatherlinkedins4">
                            <div className="metadata91">{`{"config":{"SIZE":"LARGE","ICON":"feather/linkedin"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.978Z","nodeName":"Icon [ICON=feather/linkedin][SIZE=LARGE][STYLE=STYLE1]"}`}</div>
                            <img
                                className="icon32"
                                alt=""
                                src="/icon12777.svg"
                            />
                        </div>
                        <div className="button-display-elementslabel9">
                            <div className="metadata91">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.955Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <div className="label17">Reply</div>
                            <div className="icon-display-elementslabel8">
                                <div className="metadata91">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.954Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                                <img
                                    className="icon33"
                                    alt=""
                                    src="/icon20777.svg"
                                />
                            </div>
                        </div>
                        <div className="component-10-1">
                            <b className="title-tagh31">71</b>
                            <img
                                className="icon-ionic-md-arrow-round-up"
                                alt=""
                                src="/icon-ionicmdarrowroundup777.svg"
                            />
                        </div>
                        <div className="component-15-1">
                            <b className="title-tagh31">6</b>
                            <img
                                className="icon-ionic-md-arrow-round-up1"
                                alt=""
                                src="/icon-ionicmdarrowroundup1777.svg"
                            />
                        </div>
                        <img
                            className="shape-shapeshapes01-basic3"
                            alt=""
                            src="/shape-shapeshapes01-basicbasic--circle2@2x777.png"
                        />
                    </div>
                    <div className="blog-content3">
                        <div className="metadata135">{`{"config":{},"nodeName":"Blog Content","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.983Z"}`}</div>
                        <img className="area-icon" alt="" src="/area3777.svg" />
                        <div className="author-name3">Me</div>
                        <div className="category-and-date3">
                            Skill Developing | Computer Science | May 17, 2020
                        </div>
                        <div className="blog-content-child2" />
                        <div className="button-display-elementslabel11">
                            <div className="metadata91">{`{"config":{},"type":"Button","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.955Z","nodeName":"Button [DISPLAY_ELEMENTS=Label][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <div className="label17">Reply</div>
                            <div className="icon-display-elementslabel8">
                                <div className="metadata91">{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:22:34.954Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                                <img
                                    className="icon33"
                                    alt=""
                                    src="/icon20777.svg"
                                />
                            </div>
                        </div>
                        <img
                            className="shape-shapeshapes01-basic3"
                            alt=""
                            src="/shape-shapeshapes01-basicbasic--circle3@2x777.png"
                        />
                        <div className="input">
                            <div className="metadata116">{`{"config":{},"type":"Input","nodeName":"Input","children":["f2359002-88a5-4bb9-9344-b7d857bf463e","3d22efda-f3ec-4430-abf6-2c72ddc72289","80a64582-7221-4dad-91c4-398700927263","b4a0b3ff-502b-4ac6-ac06-30651bac5bb4","aed8d0b6-d6fc-4fc2-b838-5085c10fd021","dd21d9ec-007a-4e5c-9402-7fcbdd643073","7652306d-edf5-4972-9255-a3644634f964","1e66a5e0-bd51-448b-8c22-163a468c977a","61b8d994-0f8a-4909-9b8b-aa6f7c5c4b96"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T04:51:49.896Z"}`}</div>
                            <div className="value2">
                                Reply: What is the Ideal Design Workflow for
                                UX/UI Designers?
                            </div>
                            <div className="icon48">
                                <div className="metadata116">{`{"config":{},"type":"Icon","nodeName":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T04:51:49.847Z"}`}</div>
                                <div className="icon49">
                                    <div className="metadata140">{`{"config":{},"nodeName":"Icon","type":"Group","theme":"Foundation","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T04:51:49.787Z"}`}</div>
                                    <img
                                        className="path-icon17"
                                        alt=""
                                        src="/path1777.svg"
                                    />
                                </div>
                            </div>
                            <b className="label21">Label</b>
                        </div>
                        <div className="textarea">
                            <div className="metadata141">{`{"config":{},"type":"Textarea","nodeName":"Textarea","children":["4aa5d326-9e17-4a2f-8da2-e071807ec228","af206aa4-5a26-4989-8469-dd880ccc4eec","6a7b221d-2007-41c6-ac97-67c70bf71a54","4bcdd474-afee-4b8f-a45f-2f8a05400711"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T04:52:36.593Z"}`}</div>
                            <div className="value3">
                                <p className="a-beginners-guide">
                                    Thank you for sharing this comprehensive
                                    overview of the ideal design workflow for
                                    UX/UI designers. Your step-by-step breakdown
                                    of the process, from discovery and research
                                    to post-launch evaluation, provides valuable
                                    insights for both novice and experienced
                                    designers alike.|
                                </p>
                            </div>
                            <b className="label22">Label</b>
                        </div>
                        <div className="circle-button-sizemediumst16">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.626Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
                            <img
                                className="icon-feather-paperclip"
                                alt=""
                                src="/icon-featherpaperclip777.svg"
                            />
                        </div>
                        <div className="circle-button-sizemediumst17">
                            <div className="metadata91">{`{"config":{"STYLE":"STYLE3"},"type":"CircleButton","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.626Z","nodeName":"Circle Button [SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE3]"}`}</div>
                            <img
                                className="icon-feather-image"
                                alt=""
                                src="/icon-featherimage777.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
