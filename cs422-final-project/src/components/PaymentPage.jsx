import { FunctionComponent, useState, useCallback } from "react";
import FooterStrip from "./FooterComponent";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

const PaymentPage: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <h2>Card number (on dashes or spaces)</h2>
      <input
        style={{width:'300px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <h2>Expiration date</h2>
      <input
        style={{width:'100px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <h2>Security code</h2>
      <input
        style={{width:'100px', height:'40px', padding:'5px', margin: '0px'}}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button style={{position:"absolute", top: "770px"}} onClick={routeChange}>Pay Now</button>
      <div>
        <FooterStrip/>
      </div>
    </div>
    
  );
};

export default PaymentPage;
