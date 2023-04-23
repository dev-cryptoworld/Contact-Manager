import React from "react";
import { Link } from "react-router-dom";
let ViewContact = () => {
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col ">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nisi tenetur necessitatibus assumenda dolor ducimus veritatis amet soluta delectus repudiandae.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
<img src="https://imgs.search.brave.com/zHmfyShBVVnh9C7OdYB5aT2N_Dnu5qHK8zl7gtrolBw/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXVzZXIt/aWNvbi1pY29ucy1s/b2dvcy1lbW9qaXMt/dXNlcnMtMjQwMC5w/bmc" className="contact-img" alt="" />
                    </div>
                
                <div className="col-md-8">
                <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name: <span className="fw-bold">Rajan</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile: <span className="fw-bold">+91871008094</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email: <span className="fw-bold">rajan@mail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Company: <span className="fw-bold">Tayo.ai</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title: <span className="fw-bold">SME</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Group: <span className="fw-bold">rajan@mail.com</span>
                                            </li>
                                        </ul>
                </div>
            
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>
        </React.Fragment>
    )
};

export default ViewContact;