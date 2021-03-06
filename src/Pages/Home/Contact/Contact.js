import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
    
    const sendEmail = e =>{
        e.preventDefault();

        emailjs.sendForm('service_ofeehzp','template_fadvf2x',e.target,'user_IsZBcEwswacr9UZQ3NbFS')
        .then(res=>{
            alert('Massage done')
            console.log(res)})
        .catch(err=>console.log(err))
    }
    return (
        <div id="contact" style={{marginTop:'70px'}}>
            <h3 className="text-white fw-bold mb-5"><span className="text-danger">Contact</span>  With Me</h3>
            <div className="form-container" data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="Your Name">Name</label>
                        <input type="text" name="name"  className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Your Email">Email : </label>
                        <input type="email" name="user_email"  className="form-control" placeholder="Your Email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message : </label>
                        <textarea  name="message" cols="10" rows="4"  className="form-control" placeholder="Type Message" required></textarea>
                    </div>
                    <input type="submit" value="Send"/>
                </form>

            </div>

        </div>
    );
};

export default Contact;