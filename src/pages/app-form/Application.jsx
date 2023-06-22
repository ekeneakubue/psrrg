import { Link } from 'react-router-dom'
import './application.css'

export default function Application() {
  return (
    <>
        <div className='myapplication d-flex justify-content-center align-items-center'>
            <div className='application-form text-light rounded'>
                <h3 className='text-center'>Application Form</h3><br/>
                <p className="text-center instruction">
                    Carefully complete this form. Enter your name as they occur in your institution’s academic profile.
                    This application is for 2nd year undergraduate students with minimum CGPA of 3.5 from Nsukka 
                    Cultural Zone in all Federal and State Universities in Nigeria, irrespective of academic discipline.  
                </p>
                <form action="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input type='text' placeholder='Surname' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input type='text' placeholder='Other Names' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Phone Number' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type='email' placeholder='Email' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <select id="inputState" class="form-control fieldset">
                                    <option selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Age' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input type='text' placeholder='Name of Your Institution' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Department' className='form-control fieldset'/>
                                </div>
                            </div>                            
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Years of Study' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Current CGPA' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Matric/Reg.No' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Place of Birth' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Local Government of Origin' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Name of Community' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Name of Parents' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Occupation of your Father' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Occupation of your Mother' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Your Sponsor if Different from Parents' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Your Address' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    Are you indigent?
                                    <div className="myradio">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                No
                                            </label>
                                        </div>         
                                    </div>                                   
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="mb-3">
                                    <textarea class="form-control fieldset" placeholder='If yes type your reason(s) for your indigence' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Your Traditional Ruler' className='form-control fieldset'/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="mb-3">
                                    <input type='text' placeholder='Your Head of Department' className='form-control fieldset'/>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="notes">
                            <p>Note: that if you are shortlisted you will be required to provide the following at interview</p>
                            <ul>
                                <li>Evidence of CGPA from your University</li>
                                <li>Letter from your Traditional Ruler</li>
                                <li>Letter of attestation and identification from your Head of Department</li>
                                <li>Current University ID card</li>
                            </ul>
                        </div>

                        <div className="apply-btn">
                            <button className="btn btn-success"><strong>Apply</strong></button>
                        </div>                    
                    </div>               
                </form>
            </div>
        </div>
    </>
  )
}
