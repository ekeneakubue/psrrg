import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className='container-fluid'>
        <div className="col-md-1"></div>
        <div className="col-md-10">           
          <div className="row">              
            <div className="col-md-4">
              <ul>
                <li className='text-white'>
                  <Link to='/' class="navbar-brand text-light"><img src='images/unn-logo.gif' alt='logo' className='mylogo' />PSRRG</Link>
                </li>
                <br/>
                <li>
                  <p>
                    The Association of Nsukka Professor(ANP) offers scholarship to indigent undergraduates 
                    of Nsukka Cultural Zone of Isi-uzo, Udenu, Igbo-Eze North, Igbo-Eze South, 
                    Nsukka, Igbo-Etiti and Uzo-Uwani Local Government Areas of Enugu State.
                  </p>
                </li>                
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li className='text-white'>Company</li><br/>
                <Link to='/' className='links'><li>Home</li></Link>
                <Link to='/about' className='links'><li>About</li></Link>
                <Link to='/scholarship' className='links'><li>Scholarships</li></Link>
                <Link to='/activity' className='links'><li>Activities</li></Link>
                <Link to='/contacts' className='links'><li>Contacts</li></Link>
                <Link to='/login' className='links'><li>Admin Login</li></Link>
              </ul>
            </div>  
            <div className="col-md-4">
              <ul>
                <li className='text-white'>Contact Us</li><br/>
                <li>
                  Department of Public Administration And Local Government, 
                  University of Nigeria, Nsukka.
                </li><br/>
                <li>E-mail: fab.onah@unn.edu.ng</li><br/>
                <li>Phone: +234 8037 791 088</li>
                
              </ul>
            </div> 
          </div>                       
        </div>
        <div className="col-md-1"></div>

        <div className="row text-center">
          <hr className='bg-secondary bg-hr'/>
          <div className="col-12">@ 2023 | Powered by <span className='text-info'>GigoPlanet</span> Services Ltd.</div>
        </div>
      </div>
    </div>
  )
}
