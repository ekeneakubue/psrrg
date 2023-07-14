import './scholarships.css'
import { Link } from 'react-router-dom'

export default function Scholarships() {
  return (
    <div className='scholar'>
      <div className="container">
        <div className="scholarship">
          <div className="text-center">
          <h1>Our Scholarships</h1>
          <i className="bi bi-mortarboard-fill hat-icon"></i>
          </div>
          <p>The Association of Nsukka Professor (ANP) offers scholarship to indigent
            undergraduates of Nsukka Cultural Zone of Isi-uzo, Udenu, Igbo-Eze North, Igbo-Eze
            South, Nsukka, Igbo-Etiti and Uzo-Uwani Local Government Areas of Enugu State.
            <br/>Objective: The purpose of the ANP scholarship scheme is to support outstanding but
            indigent students from Nsukka cultural zone pursuing degree programme in any
            discipline in Nigeria Federal State Universities.             
          </p><br/>
          <Link to='/application'>
            <div className="text-center">
              <h5><button type="button" class="btn btn-outline-light">Start Your Application</button></h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
