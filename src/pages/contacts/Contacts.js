import './contacts.css'

export default function Contacts() {
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
                <form>
                  <div class="form-group">
                    <label for="exampleInputName">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Subject</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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