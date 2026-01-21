import React from 'react'
import "./Contact.css";
import msgicon from "../assets/msg-icon.png";
import mailicon from "../assets/mail-icon.png";
import phoneicon from "../assets/phone-icon.png";
import locationicon from "../assets/location-icon.png";
import whitearrow from "../assets/white-arrow.png";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d8f6cea3-687a-4c94-a781-678aac460c9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msgicon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum excepturi assumenda repellendus pariatur eum, nostrum veniam ipsum? Fugiat, voluptates, eos nesciunt porro numquam libero eveniet deleniti consequuntur quia eius fugit!</p>
            <ul>
                <li><img src={mailicon} alt="" />Contactpratik@gmail.com</li>
                <li><img src={phoneicon} alt="" />+1 123-456-7890</li>
                <li><img src={locationicon} alt="" />77 Massachusetts Ave, Cambridge <br />Ma 02139, united states</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name'required/>
                <label>Your name</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number required'/>
                <textarea name="message"  rows="6" placeholder='Enter your message required'></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact