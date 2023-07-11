import React, { useState, useEffect } from "react";
import axios from "axios";
import './contacts.css'

export default function Contacts() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");  
   
  const saveMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://psrrg-backend.onrender.com/messages", {
        name,
        subject,
        email,
        message,        
      });      
      success.style.display = 'block';
      setName(e.target.name)
      setSubject(e.target.name)
      setEmail(e.target.name)
      setMessage(e.target.name)
    } 
    catch (error) {
      console.log(error);
      danger.style.display = 'block'
      setName(e.target.name)
      setSubject(e.target.name)
      setEmail(e.target.name)
      setMessage(e.target.name)
    }
  };

  return (
    <div className='contacts'>        
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='contact-info'>              
                <i class="bi bi-geo-alt-fill social-icon"></i> 
                <h5>Address: Department of Public 
                  Administration And Local Government, University of Nigeria, Nsukka.
                </h5><br/><hr/>  
                <i className="bi bi-envelope-at social-icon"></i> <h5>fab.onah@unn.edu.ng</h5><br/><hr/>
                <i className="bi bi-telephone social-icon"></i> <h5>+234 8037 791 088</h5><br/><hr/>
                <div className='socials'>
                  <i class="bi bi-whatsapp social-item text-success"></i>
                  <i class="bi bi-twitter social-item text-info"></i>
                  <i class="bi bi-linkedin social-item text-primary"></i>
                </div>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>              
              <div className='contact-form'>
                <h5 className='text-center'>SEND US A MESSAGE</h5><br/>
                <form onSubmit={saveMessage}>              
                  <div className="message">                    
                    <div className="success" id="success">Message Sent! Thank you for contacting PSRRG</div>
                    <div className="danger" id="danger">Message not Sent, check your network and try again</div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputName">Full Name</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Subject</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea 
                      class="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="3" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div><br/>
                  
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
