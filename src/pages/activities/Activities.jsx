import './activities.css'

export default function Activities() {
  return (
    <div className='container'>
      <div className="activities">
        <div className="row">

          <div className="col-md-4">
            <div class="card">
              <div class="card-header text-center bg-success">
                Status: Ongoing
              </div>
              <div class="card-body">
                <p class="card-text">
                  Inventorization and Assessment of Institutional Childcare Centres for 
                  Vulnerable Children in Southeast Nigeria.
                </p>                
              </div>
              <div class="card-header text-center bg-success">
                Sponsor: TETFUND, Nigeria
              </div>
            </div>
          </div> 

          <div className="col-md-4">
            <div class="card">
              <div class="card-header text-center">
                Status: Completed
              </div>
              <div class="card-body">
                <p class="card-text">
                  Inventorization and Assessment of Institutional Childcare Centres for 
                  Vulnerable Children in Southeast Nigeria.
                </p>                
              </div>
              <div class="card-header text-center">
                Sponsor: TETFUND, Nigeria
              </div>
            </div>
          </div> 

          <div className="col-md-4">
            <div class="card">
              <div class="card-header text-center">
                Status: Completed
              </div>
              <div class="card-body">
                <p class="card-text">
                  Inventorization and Assessment of Institutional Childcare Centres for 
                  Vulnerable Children in Southeast Nigeria.
                </p>                
              </div>
              <div class="card-header text-center">
                Sponsor: TETFUND, Nigeria
              </div>
            </div>
          </div> 

        </div>    
      </div>
    </div>
  )
}
