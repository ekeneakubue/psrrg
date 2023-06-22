import './scholarships.css'
import { Link } from 'react-router-dom'

export default function Scholarships() {
  return (
    <div className='scholar'>
      <div className="container">
        <div className="scholarship">
          <h1>Our Scholarships</h1>
          <i className="bi bi-mortarboard-fill hat-icon"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum unde 
            necessitatibus, quasi perspiciatis beatae minima autem porro earum quos ab 
            cum labore doloribus, vero eos alias officia ad, soluta expedita. Lorem ipsum 
            dolor sit amet, consectetur adipisicing elit. Laborum unde necessitatibus, quasi 
            perspiciatis beatae minima autem porro earum quos ab cum labore doloribus, vero 
            
          </p><br/>
          <Link to='/application'>
            <h5><button type="button" class="btn btn-outline-light">Start Your Application</button></h5>
          </Link>
        </div>
      </div>
    </div>
  )
}
