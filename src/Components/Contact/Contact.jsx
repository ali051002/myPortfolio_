import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "dc389342-c961-4b44-bf01-74564b2cea42");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Contact</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>malikali051002@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />  <p>Rawalpindi, Pakistan</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />  <p>+923022525375</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='name' />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows={8} placeholder='Enter Your Message'></textarea>
                <button className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact