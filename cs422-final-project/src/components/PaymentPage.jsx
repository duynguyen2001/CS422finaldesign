import { FunctionComponent, useState, useCallback } from "react";
import FooterStrip from "./FooterComponent";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

const PaymentPage: FunctionComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
  };
  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '../payment-confirmation'; 
    navigate(path);
  };

  return (
    <div>
      <HeaderComponent />
      <img src="/image-6@2x.png" alt="Your alt text here"></img>
      <h2>Name (as it appears on your card)</h2>
      <input
        style={{width:'300px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue1}
        onChange={handleInputChange1}
      ></input>
      <h2>Card number (on dashes or spaces)</h2>
      <input
        style={{width:'300px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue2}
        onChange={handleInputChange2}
      ></input>
      <h2>Expiration date</h2>
      <input
        style={{width:'100px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue3}
        onChange={handleInputChange3}
      ></input>
      <h2>Security code</h2>
      <input
        style={{width:'100px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue4}
        onChange={handleInputChange4}
      ></input>
      <button style={{position:"absolute", top: "770px"}} onClick={routeChange}>Pay Now</button>
      <div>
        <FooterStrip/>
      </div>
    </div>
    
  );
};

export default PaymentPage;
