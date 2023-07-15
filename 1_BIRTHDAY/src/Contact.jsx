import React from "react";

import "./conatct.css";


const Contact = () => {
  return (
   <div className="container">
    <h1>Suvidha Mahila mandal</h1>
   <p>ujhyhfijdhfjkfv</p>

    <div className="contact-box">
        <div className="contact-left"><h3>Send your request</h3>
        <form action="">
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Your Name"></input> 
                </div>

                <div className="input-group">
                    <label htmlFor="">email</label>
                    <input type="email" placeholder="Enter Your Email"></input> 
                </div>
                
            </div>
        </form>
        </div>
        <div className="contact-right"><h3>Send your request</h3></div>
    </div>
   </div>
  );
};

export default Contact;
