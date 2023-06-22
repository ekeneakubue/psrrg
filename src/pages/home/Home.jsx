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

      {/* Intro Section */}

      <div className="col-md-12 intro">
        <div className="sub-title">Public Sector Reforms Research Group</div>
        <div className='contents'>
          The Association of Nsukka Professor (ANP) offers scholarship to indigent
          undergraduates of Nsukka Cultural Zone of Isi-uzo, Udenu, Igbo-Eze North, Igbo-Eze
          South, Nsukka, Igbo-Etiti and Uzo-Uwani Local Government Areas of Enugu State.
        </div>
        <div className='contents'>
          <b>Objective:</b> The purpose of the ANP scholarship scheme is to support outstanding but
          indigent students from Nsukka cultural zone pursuing degree programme in any
          discipline in Nigeria Federal State Universities.
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
                  <p>
                    Fab. Obeta Onah is a Professor of Public Administration and Local Government,
                    University of Nigeria, Nsukka, a post he attained on 1 st October 2004. His area of
                    specialization is Human Resource Management and Development Studies. Fab. Onah, a
                    consummate researcher, served as the Head of Department of Public Administration and
                    Local Government, UNN, from August 2010 to July 2013. He is an active member in the
                    University community serving as Chairman/Member of University Committees. He has
                    also served other Universities as external examiner, external assessor, visiting Professor
                    and member of 25 NUC Accreditation Panels for different Universities in Nigeria. On the
                    external scene, he was a member of the Governing Council of Enugu State University of
                    Science and Technology from 2004 to 2010 and a Member of ASCON Governing Board
                    from 2010 to 2013.
                  </p>
                  <p>
                    Fab. O. Onah has published and co-published four books, one monograph, seventeen
                    book chapters, six technical reports and sixty five journal articles. Fab. Onah, a Christian
                    by religion and a Catholic by denomination hails from Ovoko-Agu, Igbo-Eze South
                    Local Government Area, Enugu State. He is married to Dr.Mrs Francisca Nkem Onah
                    and they have four children.
                  </p>
                  <p class="card-text card-foot">                                
                    <small><button className='btn btn-dark'>View Profile</button></small>
                  </p>  
                </p>                          
              </div>
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
              <h5 class="card-header text-center">Current Research Activities</h5>
              <div class="card-body">
                <h5>
                  Inventorization and Assessment of Institutional Childcare Centres for Vulnerable
                  Children in Southeast Nigeria.
                </h5>
                <h5>Sponsor: TETFUND, Nigeria</h5>                
              </div>
            </div>        
          </div>
        </div>
      </div>
      
    </div>      
    <div className="home-scholar">
      <div className='scholar-left'>ARE YOU INTERESTED IN OUR SCHOLARSHIP SCHEME?</div> 
      <Link to = 'scholarship'><div className='btn btn-light scholar-right'>Read More...</div></Link>      
    </div>
  </>  
  )
}
