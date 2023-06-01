import Carousel from '../../components/carousel/Carousel'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className='container-fluid'>
      <div className="home">        
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="left">
              <div className="left-title">PUBLIC SECTOR REFORMS RESEARCH GROUP</div>
              <div className="left-title2">UNIVERSITY OF NIGERIA, NSUKKA</div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="right">
              <Carousel/>
            </div>              
          </div>          
        </div>     
      </div>
      
      <div className="focus-section">
        <div class="row">
          <div class="col-sm-6">          
            <div class="card text-white bg-dark mb-3">
              <h5 class="card-header text-center">Main Research Focus and Other Areas of Research Interest of the RG</h5>
              <div class="card-body">
                <ul>
                  <li>Engender pragmatic Reforms through research in the civil services at all the tiers and level of government including public enterprises and agencies</li>
                  <li>Human resources management</li>
                  <li>Human Capital Development</li>
                  <li>Perfomance Management</li>
                  <li>Programme Management</li>
                  <li>Productivity and Service Delivery</li>
                </ul>
              </div>
            </div> 
            <br/>       
          </div>
          <div class="col-sm-6">            
            <div class="card bg-light mb-3">
              <h5 class="card-header">Special title treatment</h5>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>        
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="col-md-12">
        <div className="sub-title">Research Coordinator</div><br/>
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="images/Fab-pp.jpg" alt="..." className='other-pp'/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title text-center">Professor Fab. Obeta Onah</h4>
                <p class="card-text text-center">
                  <p>B.Sc; M.Sc; Ph.D [Nig]</p>
                  <small class="text-success">fab.onah@unn.edu.ng</small>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis voluptates aperiam excepturi 
                    consequatur quidem? Modi commodi minima, officia quisquam quos optio obcaecati velit, 
                    labore eos deserunt architecto vel quia illo, eaque ipsa sequi delectus voluptas dolore 
                    porro? Accusamus, saepe.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis voluptates aperiam excepturi 
                    consequatur quidem? Modi commodi minima, officia quisquam quos optio obcaecati velit, 
                    labore eos deserunt architecto vel quia.</p>
                  <p class="card-text card-foot">                                
                    <small><button className='btn btn-dark'>View Profile</button></small>
                  </p>  
                </p>                          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
    <div className="scholar">
      <div className='scholar-left'>ARE YOU INTERESTED IN OUR SCHOLARSHIP SCHEME?</div> 
      <Link to = 'scholarship'><div className='btn btn-light scholar-right'>Read More...</div></Link>      
    </div>
  </>  
  )
}
