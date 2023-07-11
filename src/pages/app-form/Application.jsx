import React, { useState, useEffect } from "react";
import axios from "axios";
import './application.css'

export default function Application() {
    const [surname, setSurname] = useState("");
    const [othernames, setOthernames] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("select");
    const [age, setAge] = useState("");
    const [institution, setInstitution] = useState("");
    const [department, setDepartment] = useState("");
    const [study, setStudy] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [regno, setRegno] = useState("");
    const [pob, setPob] = useState("");
    const [lgao, setLgao] = useState("");
    const [community, setCommunity] = useState("");
    const [parents, setParents] = useState("");
    const [foccupation, setFoccupation] = useState("");
    const [moccupation, setMoccupation] = useState("");
    const [sponsor, setSponsor] = useState("");
    const [address, setAddress] = useState("");
    const [indigent, setIndigent] = useState("select");
    const [reason, setReason] = useState("");
    const [ruler, setRuler] = useState("");
    const [hod, setHod] = useState("");
    
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");  
    
    const saveApplication = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://psrrg-backend.onrender.com/students", {
                surname,
                othernames,
                phone,
                email,
                gender,
                age,
                institution,
                department,
                study,
                cgpa,
                regno,
                pob,
                lgao,
                community, 
                parents,
                foccupation,
                moccupation,
                sponsor,
                address,
                indigent,
                reason,
                ruler,
                hod,       
            });      
            success.style.display = 'block';
            setSurname(e.target.name)
            setOthernames(e.target.name)
            setPhone(e.target.name)
            setEmail(e.target.name)
            setGender(e.target.name)
            setAge(e.target.name)
            setInstitution(e.target.name)
            setDepartment(e.target.name)
            setStudy(e.target.name)
            setCgpa(e.target.name)
            setRegno(e.target.name)
            setPob(e.target.name)
            setCommunity(e.target.name)
            setParents(e.target.name)
            setFoccupation(e.target.name)
            setMoccupation(e.target.name)
            setSponsor(e.target.name)
            setAddress(e.target.name)
            setIndigent(e.target.name)
            setReason(e.target.name)
            setRuler(e.target.name)
            setHod(e.target.name)
        } 
        catch (error) {
            console.log(error);
            danger.style.display = 'block'
            setSurname(e.target.name)
            setOthernames(e.target.name)
            setPhone(e.target.name)
            setEmail(e.target.name)
            setGender(e.target.name)
            setAge(e.target.name)
            setInstitution(e.target.name)
            setDepartment(e.target.name)
            setStudy(e.target.name)
            setCgpa(e.target.name)
            setRegno(e.target.name)
            setPob(e.target.name)
            setCommunity(e.target.name)
            setParents(e.target.name)
            setFoccupation(e.target.name)
            setMoccupation(e.target.name)
            setSponsor(e.target.name)
            setAddress(e.target.name)
            setIndigent(e.target.name)
            setReason(e.target.name)
            setRuler(e.target.name)
            setHod(e.target.name)
        }
    };
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
                <form onSubmit={saveApplication}>
                    <div className="message">                    
                        <div className="success" id="success">Application Sent successfully!</div>
                        <div className="danger" id="danger">Application failed, check your network and try again</div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Surname'
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Other Names'
                                        value={othernames}
                                        onChange={(e) => setOthernames(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Phone Number'
                                        value={phone}
                                        maxLength={11}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>                            
                            <div class="form-group col-md-6">
                                <div className="field">
                                    <div className="form-group">
                                        <div className="select is-fullwidth">
                                            <select
                                            className="form-control fieldset"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            >
                                            <option value="select">---Select Gender---</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Age'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name of University'
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Department'
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>                           
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Year of Study'
                                        value={study}
                                        onChange={(e) => setStudy(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Current CGPA'
                                        value={cgpa}
                                        onChange={(e) => setCgpa(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Matric/Reg No'
                                        value={regno}
                                        onChange={(e) => setRegno(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Place of Birth'
                                        value={pob}
                                        onChange={(e) => setPob(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Local Government of Origin'
                                        value={lgao}
                                        onChange={(e) => setLgao(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name of Community'
                                        value={community}
                                        onChange={(e) => setCommunity(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name of Parents'
                                        value={parents}
                                        onChange={(e) => setParents(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Father's Occupation"
                                        value={foccupation}
                                        onChange={(e) => setFoccupation(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Mother's Occupation"
                                        value={moccupation}
                                        onChange={(e) => setMoccupation(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name Of Sponsor if different from parents'
                                        value={sponsor}
                                        onChange={(e) => setSponsor(e.target.value)}                                        
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                            </div> 
                            <div class="form-group col-md-6">
                                <div className="field">
                                    <div className="form-group">
                                        <div className="select is-fullwidth">
                                            <select
                                            className="form-control fieldset"
                                            value={indigent}
                                            onChange={(e) => setIndigent(e.target.value)}
                                            >
                                            <option value="select">Indigent ?</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="mb-3">
                                    <textarea 
                                        placeholder='If yes type your reason(s) for your indigence'
                                        className="form-control fieldset" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3" 
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}                                        
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name of Traditional Ruler'
                                        value={ruler}
                                        onChange={(e) => setRuler(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control fieldset" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder='Name of Head of Departent'
                                        value={hod}
                                        onChange={(e) => setHod(e.target.value)}
                                        required
                                    />
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
                            <button type="submit" className="btn btn-success"><strong>Apply</strong></button>
                        </div>                    
                    </div>               
                </form>
            </div>
        </div>
    </>
  )
}
