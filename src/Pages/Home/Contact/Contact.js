import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
    const sendEmail = e =>{
        e.preventDefault();

        emailjs.sendForm('service_ofeehzp','template_fadvf2x',e.target,'user_IsZBcEwswacr9UZQ3NbFS')
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
    }
    return (
        <div id="contact" style={{backgroundColor:'#800000',paddingBottom:'5px',marginTop:'10px'}} >
            <h3 className="text-white">Contact  With Me</h3>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="Your Name">Name</label>
                        <input type="text" name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Your Email">Email : </label>
                        <input type="email" name="user_email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message : </label>
                        <textarea  name="message" cols="10" rows="4" className="form-control"></textarea>
                    </div>
                    <input type="submit" value="Send"/>
                </form>

            </div>

        </div>
    );
};

export default Contact;