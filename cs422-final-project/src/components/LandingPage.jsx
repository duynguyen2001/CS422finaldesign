import { FunctionComponent, useState, useCallback, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import PortalPopup from "./PortalPopup";
import SignIn from "../components/SignIn";
import styles from "./LandingPage.module.css";
import HeaderComponent from "./HeaderComponent";

const LandingPage = () => {
    const navigate = useNavigate();

    const endRef = useRef(null);
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add(styles.animate);
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }

        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);


    return (
        <>
        <HeaderComponent/>
            <nav className={styles.landingPage}>
                <div
                    className={styles.metadata}
                >{`{"config":{},"type":"MarketingHome-Desktop","nodeName":"Marketing Home - Desktop","children":["0558f328-e40e-4991-88b7-591a55941070","9e82ef60-5311-49dc-9183-9ddc160b8128","459b2063-78d4-484f-81a0-96ccbd17cee7","dd06368c-a539-42cc-95c5-a3c42d173058","17a3ec38-f6d9-4199-8319-ee726db512f5","e55a0891-da2f-48c4-b0aa-9f590bd75a65","edac3041-aac3-4a35-97bd-af43ac19a5fe","be228d56-07f1-4f34-a997-7cea84d7a8ba","f17e15ac-023b-45b9-81b4-c056ac1f47bd","2ebb5ad6-c1ce-4599-bd1e-286b46762f10","cbab66b7-ce4c-496a-9800-bde72a063620","0d574f91-e267-4e1a-86ba-97f56001ccea","b6f8e7f3-ac0d-4ae1-bf69-adfb8b74fd15","c2d5512a-f34d-4b79-996f-addc3b1ecccc","fdd561bc-c1e8-4428-b48a-5a691dfe857c","a8ddec28-218c-4f83-b640-625001c992a6","df20e046-406f-4dc2-b8e2-327c19af71ff","9160ea43-eb51-4c79-a9e4-085f5c3bed3a","68ac7c3e-edf0-4e4a-83f1-0e083b8e3c99","a5913018-6b23-49fc-b7ea-901c966ab38a","10c3da79-06ff-4130-ac60-1fe969fe6be2","497186fb-b7fd-43ba-8cef-bf42839e5dcb","fab05b31-ac45-434d-8813-6bca3adecf29","9aea3da0-4621-4e63-9620-c54da2a8729b","33aedbf0-ee20-435f-9b6a-558a0f00983c","9f640870-2a97-40f6-b053-a1a5cdfc221d","67703553-0978-4e40-9c19-925b1ebaa323","bb312f30-e9c9-4a18-ae91-986be5328a41","d178627f-b93d-440b-a6b6-39a163ddceec","2fee14c6-b2de-493c-b7c7-136527534732","d34e97bc-003a-49d3-9591-6537628dea48","e6927e16-6ca0-4a1f-be27-70f0c307e1fc","5a43be14-5e18-4763-ba1a-7b8b93c70d10","5fb16ee7-0c00-4296-a0c1-321592c96c38","323507b8-e534-43d5-8b44-72a17a553f6c","dbeb5978-b4d1-44db-8df0-755d073ebafc","6a83807d-8dcd-4631-ad09-765aa4b0e0df","7e0cfb31-20ba-44cd-b0b7-6cf3c261213e","7d7c5940-28c7-4e2d-add9-d7978413d73b","8c0a4c90-0456-4b96-97bc-d2aad23f7b8c","9e9d02bb-5c7c-4738-b8ee-605f5ddef2eb","4b8411b0-1eb6-4c3b-a4ca-6b88a015e826","ec714b44-82c1-4293-aa8b-bacd7943a5de","28974593-770f-48d2-afe3-0cf7bd21df46","49eebfcd-b364-4e49-b35b-98b9b62d289e","046d6fb0-a5bd-4902-8efc-477059fa3212","a3314427-f3c0-4150-ba9d-8cf95b9fc3cc","da7b29ec-1169-4444-ab51-20eaedd23d49","4bcddaca-1b7a-4684-a089-fadf21a6fe72","004c53d5-2c96-4b45-bc3e-b806d981eca0","b5d79bac-fe99-4516-9a48-45dbb4cb7d6c","6d4959ad-6f42-497f-b145-b201eba494a2","8d7f64ec-3687-4c83-81d8-14f768277fce","a92fd4b7-ac51-43f3-883a-aa9511784cb2","ef6c7efc-8f4a-428f-9d56-0d437f7f9f9d","c82ac4af-9a5c-43ca-90b0-5eca7a11a6dc","6b70510a-13bc-489d-8ada-d177fb63fc70","31073d17-1e46-41b4-9d7f-77f9667e61b4","06169d15-6135-4d21-ae14-35c3d1492aa9","a949522d-2f10-4525-b5dd-734e06ea865d","f50c591b-51c7-4256-a516-a0699be476f8","ac09ac88-628d-4613-a908-73a39da334b2","adaa5b7b-bba2-4ddd-be27-4d50de51df14","ec2dfae7-ebac-45a0-a1dd-28da56b456a0","77f1854b-8e6d-4f8a-ba78-f0c8072e3c88","d4e06794-03e0-414b-8fc2-71e833069a62","b1798e4b-50b6-4696-b40b-045edbe679f7","4bffbfc6-f996-40ff-b34a-865cf6ec4b9c","bae638af-0d27-4186-9aff-59cdc3862662","fffae0a5-d645-43cd-b72f-b8a92fce393f","a38f0631-f426-48af-aeb1-106da8e57409","765745a9-8713-47d2-96a5-5dcef4016305","a4c5ffbd-8932-49b3-9b37-7d3f548bbc84","d3347ad6-c732-41ce-a46b-06522181ba63","75218f64-42f8-44a4-b031-462f824683ad","e7a77a48-97b7-4804-81f9-39a18761480d","0cd3f2d7-72de-4a0b-95bc-4b27d29bc475","714681ec-c4d3-4838-a59e-bb0c5145bdbc","09631a97-060e-4262-8e1e-488ca14af60b","cc509321-e2cf-4f44-9b38-1c69a6786bc7","75a4c7fe-e49b-4d18-a876-c62c80c471bc","d09080fa-c57c-4e7f-9438-012e8bd9cfd3","9ddd0e8f-0ac0-472e-b46b-2d69fd805436","641562ef-f09e-4b49-8251-dfe681d369e4","62bd440e-5551-40a8-944a-bb4b1afa445c","ff9dac06-54ec-4db9-9911-5e442678bdbe","2955b470-98bf-461c-b86b-fe13cc871743","793fcfe3-ec51-40c6-96e7-8bf011fc17bb","1c241aa5-1f18-4a2f-b05d-9b39d22ecded","64c957eb-e520-40ca-84d9-01e63f7beb31","e57161c3-55c9-4aa4-b84e-a57abfa6068b","1ae01407-7ee6-4c66-82a3-14aac5c3c70a","6cf307dd-ac18-4c9f-a9fd-725cb79572a2","d5685304-635f-41b1-b5f6-6ed1d953d8c7","1817ed5f-94f3-45ef-9d86-fbaa329707eb","f0b60a5f-8886-44ec-aa75-d6e17ee70925","0b6d6992-113d-48f0-a9a3-9e745bc9f4a4","7ae7bf1c-7dba-4d8a-8bd9-c749b0d2f211","9260ad04-e177-4aa1-bc07-aaf232d23f4b","e2e81466-abb5-47d2-a752-0dc5ddad4f05","ba9c9e61-2d80-43ed-bfde-5fb7e75c2793","3f50ca1b-1d2b-4455-84ae-364889ca2dbb","ab0035dd-d503-413d-82d2-5b985b74d2a7","99925f24-b4b9-4cfb-a3bd-b30ba2786f2a","5a939d77-2376-4d02-afe4-5fb425d0177f","71a19f2b-74c3-4f53-9281-ecdef86049b5","5e409402-d80d-4166-a95e-30283a319c17","7d006518-3646-4b53-a435-919318e3f36f","8cdb600b-66bf-4b5a-8e6a-4c6693141d4d","ae9e7d7e-976c-46e1-a5e9-10c099719c97","f60f550f-0c00-4594-ad20-a19825ec7cec","12122249-1ffe-44ec-9f74-8b94d8f8926d","daa41359-c0e6-4df2-ae0b-2a7335af982e","88acfb6b-64b0-411e-9239-9d9bb62f2b50","6dce3844-aa61-442c-a98f-60251c560234","9606fd08-9b3e-4f94-9fa4-cb18793bae23","e856037b-e839-4003-b929-3f053e3fcd72","45abb006-a2b5-47ae-9150-f9d46bf415ef","d4f40555-63bb-445b-bd4c-2c1df5ecf5bc","beb5216e-55bb-4ef9-b66c-afd0bd062ab6","fa466d04-cbc7-44dc-b054-7a6cc1d28946","1934e74b-89fb-4a00-815f-4d825c79e0e4","2a93c31d-67ef-4414-81c4-ce893825c0b8","3efe6d38-d635-4b59-b3c7-5251a328c4e7","b1682b6a-01b4-45db-8e42-f94c3c2ab85f","66dd7ed9-06b7-4b90-a4a5-d32d9fb03894","8fdedebd-5252-4acf-ae87-93907c95d04b","f813cbc0-e69e-4463-b1fa-968b0a3bf128","6c14709c-7a9e-43e5-829b-6095d0f40c8e","ed421590-d752-4d6b-b462-ed46917cbd98","8153d5ae-3451-44cf-898c-b32a16f43915","c0843d4b-5945-4e5f-8b6c-e9ca8c1e7866","c2a1e927-0ca8-42cc-97ee-1256942767ca","282e2f32-9ca3-4a67-82bc-4481dbb20535","84e144fb-d3af-4777-8fb2-5828068c8963","72023001-f6bc-4454-bae7-7372a2c8b915","2b7e7aeb-0239-4fa7-b25f-a846a4a44fc7","a513b4fd-8c2c-4757-aee6-18b68b73a87e","92bc4c26-3df9-4bea-bce9-f430956b1908","021477de-762e-4045-977c-cb756dc16d99","630ae3dd-950f-4e78-86e7-efb7029897e9","7cc1be8b-09b2-4ee8-9fdf-52c3f5afaaf5","7d231159-ba7b-42a5-a46b-e9b3edd18fd9","b77a66e7-a718-49c8-90b7-a03acf9acacb","7e441517-7ca8-4eff-b45a-d2c44aa82659","a23d56a9-a40a-4912-85b7-1aaad6c5e0c3","452e2480-6437-4081-adaa-2d9b1da3bf4c","789e20c9-0ec4-41bc-b5c2-eddf60f37839","a7233fca-5abd-4e3e-9a63-002c42eee94f","3018fe0d-d0ed-40c1-8274-7ca3b45c9bbe","b79033c7-134a-4fa4-a896-4a5f9e854aa1","8307e3ad-9c3a-4d38-b0c4-c7fcd5483842","44b7e215-0d03-4e98-a713-1af5142307f8","770e13e7-f389-4fa5-b30f-e1395c089d6f","bf3be30f-aa0f-4d36-94dd-fdcdf6bbca5c","b48d3b2b-1234-4301-b209-6d06983564d9","ac713bb4-037b-45ba-91b0-dc0c7995d6b4","53b195b6-86ae-4150-89df-5453bf4a8919","174f1c7a-b2ba-4461-b20e-94f53521c4ff","05e4be9f-3a0d-4502-8488-427cfd781bd5","fa1831fc-099c-4af9-abcd-87723dd526df","18eb8e71-76ee-4dea-a40e-7fad259c7491","79c9362c-f87c-450e-bea3-9d19d4ba4bfd","998bbc88-2faa-40d5-ab96-b6bc24486662","ca00db7f-fc4e-48e5-bad5-13f1402d9974","73fc9e64-9b75-40c0-9be2-95ba5ad7bfe3","114efe0a-e54e-42c2-bd62-265e88821121","6c4ee48c-6087-4ecb-8d4e-537088579497","0bd41344-8a7d-4187-8709-51166a277f28","558154c2-2f7e-497c-be7a-ca5f27a2c94c","901b49cc-d4eb-476e-8bcf-e318d793bd12","ee99d92a-3d91-4330-9f98-4a92de686ba9","30a5ea12-6142-468e-a4b7-feed4eafa456","51ffb460-458e-40c9-a941-80722a151901","ddd41099-2a31-4b74-97ab-3fb3aa0610ae","74713ed9-4d36-4861-b4a2-144abbec267a","4cfb918f-9b58-4df0-95a5-e11e2859b5db","935500be-84b7-49d5-a4f2-9b785e6b95ea","021ce230-0850-4d10-b6c9-4a9245d038d4","f6afce16-bfe0-4a62-a70f-535d4a0d1178","4ce6c30a-9adf-4437-a810-96fbd3e33736","71f9ec39-64eb-4d36-98db-735cab20c153","1a8ed159-0a75-4185-86c6-c7f13c903972","7d50f360-7c26-429f-a6d9-33e9308f27ae","d2cfd649-a816-4d48-b80f-2f39cabe0907","5f06e6b8-3f74-40ae-82e4-891505ce5c56","463b9db4-06c6-4258-a429-f50c5b846eca","f057d446-08cd-4995-9105-f6f46ddcdd63","c71da636-5fe1-46e6-b133-8b5426304f08","d409c16c-9e06-4f9b-b0ba-198f1cda40c8","302761d8-c0d3-4406-bb6c-1f9f4e978545","765093a4-b764-4f4c-85b8-44c937701e26","7e0dad2e-7a4a-4a9f-b523-6ee75bec9566","ac344350-1e4d-42fa-a670-71bf1ad92a75","57eb15ea-2f3f-441a-a95c-ecbb0c6c5129","f26a7a23-2d7b-48d9-a777-285b610acbed","b71bebe4-a953-434c-bfa7-48aea3242b44","b92966bd-36d7-43e6-a20a-e53217c3166c","a4ca4376-c578-4d1a-b819-1ef6d71fc388","1836d222-a96d-4f81-8cf6-14d0af54aadd","cfd424e2-d979-40f6-b95b-b53db5c57f11","5e71cca3-6eab-4b8c-a71d-982e6a709a00","6043f88c-81ee-4c45-99f0-3b272afe3e12","d82655a6-2e24-4993-b9ba-f42d1d34c6c5","23bbd0e4-15e1-4bbd-af7e-7b661d217c0e","f5e48c50-ae24-4060-837d-3913359cd7ab","981706aa-2a1c-4e6e-99d1-63e31bb7a669","82fecde3-9219-4ff7-b7a2-e657c15b498e","87fb7d18-9a35-4ae8-93a3-3f5222c7a204","8b4fa0af-4e6a-46bc-be51-ed762214e382","cb990467-3628-4d75-891a-b6c7534b4ca3","edbb86fe-3b9e-448e-a95f-08f77fd3ed41","511c9171-16e9-48e6-ad97-ed6e715ae44e","53a59e44-dd15-4a5a-bf7c-b4703e9e0fe2","b784166a-b102-4e21-abc6-c1189c9f502b","0727bc5c-6541-4743-836f-90a62e0bbf9e","88887091-4e66-43ae-86ee-565b49a06149","44fb1a4b-f172-4ac4-bd35-bb286a352877","640041d1-3410-452a-9ca2-9ade0caf3bd4","8553b5b1-6e25-443a-9c33-a950f88cec85","a17dfb3c-4d77-4325-9275-ebf068e79bd4","e99941ed-8763-4ffb-ae81-e62229f49093","397d6af1-5545-4a18-b7b7-582172700b43","eacc2c24-8302-418e-a2ad-c44ae1c34824","ff66535e-7112-4879-add1-950b7b020e1f","cfc4ea9f-b2a6-42b5-a963-f07c84f11051","5cd28cea-5a64-4afa-aa4d-a67a92a70a0b","76a1b6d7-febf-4b1b-a734-38459976efa0","eb8b43ad-d5fb-425f-991f-7c884d08043a","1e49957f-5d95-4f60-b86d-b68a81ebe552","4e11a18e-dd85-4e84-a4dd-a7fa6a1add9a","2b5b1ff9-ceb4-457e-a4e9-3837f3e2bb52","d9862095-9ab4-4c2c-9427-72de9c38b66f","5d04f707-b2da-4eed-a2b8-aea4e0f5a786","c4f4058f-4abd-4e6b-805f-9c9a47f7abae","3ae15cd7-252e-4a86-a93e-b1829536baf9","627f21af-fdd9-4e4d-8052-a8c1b12e114c","6f16ad9c-9ac2-4b6f-8511-583a5f4151e0","f0b07e28-4153-46bd-9d11-a01a8a7bcd2a","569fc4de-b4c3-4813-8025-20574ff64154","d287c6a6-91f4-4c3d-a879-7b1b72c5438b","9c108a9f-f593-42bc-ba91-eccfbad71f1f","ed72d086-84ff-456a-a90e-a5f710aba36b","e66f081e-3534-42a4-8d20-3227bbed1d98","0f1c8459-68a9-4ca6-a683-5f4a7376dec8","30a54073-23c0-419b-a077-87d8b0e378d7","a3a91660-d266-4769-bbf8-1cb71cedba1e","277a3058-bc20-4a13-808c-8c1b8a924c1e","83f77969-8877-4a82-8a70-8c41593a44ea","da190c5b-6438-4494-8f49-0086c7b20021","f343874e-54d6-4ebb-8ed9-e4f3003799cf","42b54846-a273-4d03-b758-1aba9bf7c43f","814e38da-7d2b-43b5-b2bd-158b6e069a82","1a05acb5-e4a6-4512-ae60-bd366e6a56b0","69f3dae8-6ea6-4a82-b308-5541362a3d5e","3b038b55-3ac8-4c95-965f-243288629d5d","1f7ab802-5cbb-4e04-829f-991a8e7faf64","0b8ad9c8-71b7-4d9e-b6bd-68f8782f99bc","93b67cf2-21c2-4024-afbd-af14ebb22621","c9c72083-51d4-4a21-9da8-07f571d64155","b2618edd-e760-4399-8549-f578cbc55815","ae5d561b-fd0d-4609-8629-47a48d635a04","45c71de7-0330-4fd1-8288-5d45ea0670d0","9c1d6f39-41c5-4800-8d8e-54c7f0ae62d4","c05a2115-bd39-4ab2-9e58-cb17c9a96be3","c5e6d19a-fe7e-4f8e-abdc-d513a5c667c5","4599852d-ba77-4049-8c8c-df1b87b59980","1bc04930-3952-424e-800a-9ccc8d925c3f","4ddacb8f-0191-4d47-97b6-3ac883ea0b11","6c0714d6-2fea-496e-8856-f461ba619dd2","2f5bb374-44d3-445f-95c0-6641b48c79b5","d6060cd5-6430-470e-ae4a-1ab1cf94b543","65dbbc07-48b5-4be4-b004-3b392ca7cb3b","a5621b20-6b40-4782-98d6-5992a44acd93","2004a8ba-5685-4db8-acb5-690ba5b77f9a","6d8de15c-647b-4a4a-851a-53b0a0b4994f","d907af0f-856a-43e9-b65b-320c12fbbe66","3d43f69d-c37f-41eb-ab29-97a3cd718ff5","4e4f037c-1d5d-4a34-acae-2d19a35c64f8","10b0b71e-9107-4b37-9fbf-b5717793979f","fe98d7a9-b02b-400b-a201-ab0be626cea7","a193d70b-964a-4d98-8f47-ebfb683f7d12","dae858ff-eafa-4c16-a619-36fa31883070","66acbfc7-b062-4f1d-ad9e-9d29cde132e4","13db0a3d-3dbe-4055-a226-13f6d6dc36fb","80fe8ce4-e199-4fe7-85da-fe766c5211dd","36003452-bccb-4590-af59-d5c34c2a3b8c","9866fe7e-9c58-442e-9ba1-271d3b7a360a","e39dff09-ff1b-4e2e-bef1-942ce470e5d3","8078e2a8-6c2c-4592-9bc1-8c65ecff742e","65f38217-34de-46e2-82d5-64aece79f910","f71059fd-8289-463e-8ca8-7cd3dfc60fd5","718fdc78-9058-42bf-8e58-72dae38da142","991dede3-c74f-48bf-87b3-160d5aadfe7a","d3cf4f53-a4c1-4d4a-b71a-6f4cbd9282f9","cecda50e-2b05-4cc9-b5c1-cd2fc4ba4810","d072c991-1bb7-478c-a0e5-a3654c548a0f","b8531e15-8e76-469f-a65e-6a6c71784fb2","753e44b7-7956-4b3b-b8da-394ea97137ab","20f9d8e2-5993-4444-8498-482f35ce3530","2da571a1-105d-44da-a5e7-506c1e669463","5686d22b-abfe-4d3a-9006-a03e6eba91a7","9793cadd-69fc-4876-9a11-d85803a9badd","dd258b11-065b-4faf-8b6d-fc6a7a1d8e0f","990ba10f-153b-4ea6-ac00-f956e80d99fd","7b1e4095-c7b3-47e5-83f7-32f06529b449","683c13be-16e5-446c-82a2-b85457bbb6af","5c3da170-a117-4256-a567-86e97619a912","46e3d380-83cc-4e39-88e8-11c25cacc069","e9abfa8d-34d9-4826-9246-f22e883faa21","abddd0f0-4852-4c66-a6b1-5b2f70364198","03f19223-997c-402f-86a1-1f7d8873168a","498dd870-2863-486c-8897-bae0b705d512"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:18.961Z"}`}</div>
                <div className={styles.feature}>
                    <div
                        className={styles.metadata1}
                    >{`{"config":{},"nodeName":"Feature","type":"Group","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.890Z"}`}</div>
                    <img
                        className={styles.backgroundIcon}
                        alt=""
                        src="/background222.svg"
                    />
                    <div className={styles.feature1}>
                        <p
                            className={styles.nequePorroQuisquam}
                        >{`“As an expert in my field, it’s always exciting to work with young professionals who are just starting out on their careers. I’ve had the opportunity to connect with many talented individuals through this platform, and I’m consistently impressed by their drive, passion, and willingness to learn. The platform makes it easy to communicate with these young professionals and provide them with the guidance and mentorship they need to succeed. I’ve seen firsthand how the platform has helped many young professionals launch their careers and achieve their goals, and I’m proud to be a part of that process. If you’re an expert looking to make a difference in the lives of young professionals, I highly recommend this platform.” `}</p>
                        <label className={styles.instantThemeSwitching}>
                            Expert Reviews
                        </label>
                        
                        <div className={styles.card}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.367Z"}`}</div>
                        </div>
                        <div className={styles.card1}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{},"type":"Card","nodeName":"Card","children":["f59ca052-bd2b-453f-92be-c50a52c9373c","3e898a7f-0800-42c0-943f-715b5cf9b17d"],"__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-17T23:07:15.413Z"}`}</div>
                        </div>
                        
                        <img
                            className={styles.featureChild}
                            alt=""
                            src="/group-4222.svg"
                        />
                        <h3 className={styles.postTitleTagh5}>Dr. Alam Mala</h3>
                    </div>
                    <div className={styles.shapeParent}>
                        <div className={styles.shape}>
                            <div
                                className={styles.metadata9}
                            >{`{"config":{"SHAPE":"illustrations/Humaaans/02. In Action/At Home"},"type":"qm::Illustration","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T04:49:16.389Z"}`}</div>
                            <img
                                className={styles.sceneIcon}
                                alt=""
                                src="/scene222.svg"
                            />
                            <img
                                className={styles.personIcon}
                                alt=""
                                src="/person222.svg"
                            />
                        </div>
                        <div className={styles.groupParent}>
                            <div
                                className={styles.shapeShapeshapes01BasicParent}
                                id="review-div"
                            >
                                <img
                                    className={styles.shapeShapeshapes01Basic}
                                    alt=""
                                    src="/shape-shapeshapes01-basicbasic--circle@2x222.png"
                                />
                                <p className={styles.textTagp}>
                                    . The communication was smooth, and the
                                    project was completed on time. I highly
                                    recommend this platform to anyone who needs
                                    to find experts quickly and efficiently.”
                                </p>
                                <h4 ref={endRef} className={styles.postTitleTagh51}>
                                    Adam Mada
                                </h4>
                                <h5 className={styles.categoryTaguiS}>
                                    4.5 stars
                                </h5>
                            </div>
                            <div
                                className={styles.shapeShapeshapes01BasicGroup}
                            >
                                <img
                                    className={styles.shapeShapeshapes01Basic1}
                                    alt=""
                                    src="/shape-shapeshapes01-basicbasic--circle1@2x222.png"
                                />
                                <p className={styles.textTagp1}>
                                    “The quality of the work was outstanding,
                                    and the rates were very reasonable. I’m
                                    definitely going to use this platform again
                                    in the future and recommend it to my
                                    colleagues.”
                                </p>
                                <b className={styles.postTitleTagh52}>
                                    Madam Madam
                                </b>
                                <b className={styles.categoryTaguiS1}>
                                    4 stars
                                </b>
                            </div>
                            
                        </div>
                        <div className={styles.feature2}>
                            <div
                                className={styles.nequePorroQuisquam1}
                            >{`At our expert finding webpage, we’re passionate about helping people find the right professionals to meet their needs. Our mission is to make it easy for anyone to access top-quality expertise and guidance, no matter where they are or what they’re working on. `}</div>
                            <label className={styles.freePopularTemplates} >
                                Users Reviews
                            </label>
                        </div>
                        <div className={styles.shape1}>
                            <img
                                className={styles.headfrontIcon}
                                alt=""
                                src="/headfront222.svg"
                            />
                            <img
                                className={styles.bottomskinnyJeans1}
                                alt=""
                                src="/bottomskinny-jeans-1222.svg"
                            />
                            <img
                                className={styles.bodylongSleeve1}
                                alt=""
                                src="/bodylong-sleeve-1222.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.shape2}>
                        <img
                            className={styles.backgroundShape2}
                            alt=""
                            src="/background-shape-2222.svg"
                        />
                        <img
                            className={styles.leafBottomIcon}
                            alt=""
                            src="/leaf-bottom222.svg"
                        />
                        <img
                            className={styles.leafTopIcon}
                            alt=""
                            src="/leaf-top222.svg"
                        />
                        <img
                            className={styles.plantRightIcon}
                            alt=""
                            src="/plant-right222.svg"
                        />
                        <img
                            className={styles.plantLeftIcon}
                            alt=""
                            src="/plant-left222.svg"
                        />
                        <img
                            className={styles.macetaIcon}
                            alt=""
                            src="/maceta222.svg"
                        />
                        <img
                            className={styles.topLeavesIcon}
                            alt=""
                            src="/top-leaves222.svg"
                        />
                    </div>
                    <button
                        className={styles.buttonDisplayElementslabel3}
                        onClick={() => navigate('/search')}
                    >
                        <div className={styles.label3} >Book an expert now!</div>
                        <div className={styles.iconDisplayElementslabel3}>
                            <img
                                className={styles.icon3}
                                alt=""
                                src="/icon110222.svg"
                            />
                        </div>
                    </button>
                </div>
                <div className={styles.hero} data-animate-on-scroll>
                    <div className={styles.shape3}>
                        <img
                            className={styles.sceneIcon1}
                            alt=""
                            src="/scene1222.svg"
                        />
                        <img
                            className={styles.figuresIcon}
                            alt=""
                            src="/figures222.svg"
                        />
                    </div>
                    <b className={styles.scrollDownTagh6}>Scroll Down</b>
                    <div
                        className={styles.buttonDisplayElementslabel4}
                        onClick={() => 
                            endRef.current.scrollIntoView({ behavior: 'smooth' })}
                    >
                       <div className={styles.label4} onClick={() => {
                          navigate('/search')
                        }}>
                            Search An Expert Now
                        </div>
                        <div className={styles.iconDisplayElementslabel4}>
                            <div
                                className={styles.metadata}
                            >{`{"config":{"STATE":"DEFAULT"},"type":"Icon","__plugin":"Mockup","__version":"1.5.0","__lastUpdate":"2023-03-16T01:21:51.417Z","nodeName":"Icon [DISPLAY_ELEMENTS=Label][ICON=feather/heart][SIZE=MEDIUM][STATE=DEFAULT][STYLE=STYLE1]"}`}</div>
                            <img
                                className={styles.icon4}
                                alt=""
                                src="/icon2222.svg"
                            />
                        </div>
                    </div>
                    <h2
                        className={styles.descriptionTaguiL}
                    >{`Just tell us what you’re looking for, and we’ll match you with the most qualified experts in our network. `}</h2>
                    <button className={styles.iconIconfeatherarrowDown}>
                         <img
                            className={styles.icon5}
                            alt=""
                            src="/icon3222.svg"
                        />
                    </button>
                    <div className={styles.pagination}>
                        <div className={styles.item}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot222.svg"
                            />
                        </div>
                        <div className={styles.item1}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item2}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item3}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item4}>
                            <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                        <div className={styles.item5}>
                           <img
                                className={styles.dotIcon}
                                alt=""
                                src="/dot1222.svg"
                            />
                        </div>
                    </div>
                    <h1 className={styles.titleTagh1}>
                        <p className={styles.tinncann}>TinnCann</p>
                        <p className={styles.tinncann}>Where we meet experts</p>
                    </h1>
                </div>
                <nav className={styles.header}>
                    
                    <div className={styles.iconIconfeathersearchsiz}>
                       <img
                            className={styles.icon7}
                            alt=""
                            src="/icon5222.svg"
                        />
                    </div>
                </nav>
                <b className={styles.titleTagh11}>
                    <p className={styles.tinncann}>
                        “Whether you need assistance with a technical problem,
                        legal matter, creative project, or any other area of
                        expertise, we can help you find the perfect professional
                        for your needs.”
                    </p>
                    <p className={styles.tinncann}>- CEO Vadam Yadav</p>
                </b>
                <div className={styles.footer}>
                   <p className={styles.copyright2020}>
                        Copyright © 2023 TinnCann. All rights reserved.
                    </p>
                    <div className={styles.circleButtonSizemediumst}>
                       <div className={styles.iconIconfeatherinstagram}>
                            <div className={styles.icon8}>
                                <img
                                    className={
                                        styles.bc1799d35ce9411296c7766fd5Icon
                                    }
                                    alt=""
                                    src="/bc1799d35ce9411296c7766fd57b49ab222.svg"
                                />
                                <div
                                    className={
                                        styles.bb24a43Ab29467cB41bFfd5876
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <button className={styles.circleButtonSizemediumst1}>
                        <div className={styles.iconIconfeathertwittersi}>
                            <img
                                className={styles.icon9}
                                alt=""
                                src="/icon6222.svg"
                            />
                        </div>
                    </button>
                    <button className={styles.circleButtonSizemediumst2}>
                        <div className={styles.iconIconfeatherfacebooks}>
                             <div className={styles.areaIconfeatherfacebooks} />
                            <div className={styles.icon10}>
                                <button
                                    className={
                                        styles.a793690c43fc928dFfe269f170
                                    }
                                />
                            </div>
                        </div>
                    </button>
                    <div className={styles.circleButtonSizemediumst3}>
                        <div className={styles.iconIconfeatherlinkedins}>
                            <img
                                className={styles.icon11}
                                alt=""
                                src="/icon7222.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.circleButtonSizemediumst4}>
                        <div className={styles.iconIconfeathermailsize}>
                            <div className={styles.areaIconfeathermailsize} />
                            <img
                                className={styles.icon12}
                                alt=""
                                src="/icon8222.svg"
                            />
                        </div>
                    </div>
                    <h4 className={styles.mockupShopClassic}>TinnCann</h4>
                </div>
                
            </nav>
            
        </>
    );
};

export default LandingPage;
