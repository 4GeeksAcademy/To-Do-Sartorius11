import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'

export const Form = () => {

    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);


    const handleEmail = (event) => { setEmail(event.target.value); };
    const handleViewPassword = () => { setViewPassword(!viewPassword); };

    return (
        <div>
            <div className="container text-center my-3 ">
                <div className="col-6 m-auto ">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleEmail} value={email} />
                                <div className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <div className="input-group">



                                <input type={viewPassword ? 'text' : "password"} className="form-control" id="exampleFormControlInput1" value={password} onChange={event => SetPassword(event.target.value)} />
                                <div className="input-group-text" onClick={handleViewPassword} >
                                    {viewPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} className="text-danger" />}


                                </div>
                            </div>
                        </div>

                    </form>

                </div>

            </div >

        </div >
    );
}