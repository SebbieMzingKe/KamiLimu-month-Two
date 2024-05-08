import './Contact.css'
import React from 'react'
import msg from '../../assets/fb.webp'
import mail from '../../assets/youtube.webp'
import phone from '../../assets/ig.webp'
import location from '../../assets/dribble.webp'
import arrow from '../../assets/Scroll.svg'

const Contact = () => {
    
    const [result, setResult] = React.useState('')
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "36b8922a-1619-4c58-8d16-0c0e9b3672f5");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Email Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
            event.target.reset()
          }
          }


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Me a Message <img src={msg} alt="" /></h3>
            <p>Feel free to reach out through my contact form or find my contact
                 info. below Your feedback will be of much value to me.
                 As I strive to get better and better every day</p>
                 <ul type='none'>
                    <li><img src={mail} alt="" />sebbiemzing.co.ke@gmail.com</li>
                    <li><img src={phone} alt="" />+254 789 568 256</li>
                    <li><img src={location} alt="" />51 Masinde Muliro University, Kakamega <br /> 50100, Kenya</li>
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>
                    Your Name
                </label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>
                    Phone Number
                </label>
                <input type="tel" name='phone' placeholder='Enter Your phone number' required />
                <label>
                    Write your Message Here
                </label>

                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  );
}

export default Contact;
