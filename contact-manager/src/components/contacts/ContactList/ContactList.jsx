import React from "react";
import { Link } from 'react-router-dom';

let ContactList = () => {
    return(
        <React.Fragment>
            <section className="contact-search p-3" >
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Contact Manager
                                   <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-2"/>
                                    New</Link> 
                                </p>
                                <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, corporis facere? Assumenda inventore sequi totam quis porro nesciunt minus at?</p>
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="col md 6">
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names"/>
                                    </div>
                                
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                     </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                            <img src="https://imgs.search.brave.com/zHmfyShBVVnh9C7OdYB5aT2N_Dnu5qHK8zl7gtrolBw/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXVzZXIt/aWNvbi1pY29ucy1s/b2dvcy1lbW9qaXMt/dXNlcnMtMjQwMC5w/bmc" className="contact-img" alt="" />
                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>
                                         
                                    </div>
                                    
                                        <div className="col-md-1 ">
                                
                                            <Link to={'contacts/view/:contactId'} className="btn btn-warning my-1">
                                              <i className="fa fa-eye"/>     
                                            </Link>                                 
                                            <Link to={'contacts/edit/:contactId'} className="btn btn-primary my-1">
                                              <i className="fa fa-pen"/>      
                                            </Link>                                 
                                            <button className="btn btn-danger my-1">
                                              <i className="fa fa-trash"/>  
                                            </button>  
                                    </div>             
                                        </div>
                                    </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                    <div className="col-md-4">
                                            <img src="https://imgs.search.brave.com/zHmfyShBVVnh9C7OdYB5aT2N_Dnu5qHK8zl7gtrolBw/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXVzZXIt/aWNvbi1pY29ucy1s/b2dvcy1lbW9qaXMt/dXNlcnMtMjQwMC5w/bmc" className="contact-img" alt="" />
                                    </div>
                                    <div className="col-md-7">
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
                                        </ul>
                                         
                                    </div>
                                    
                                        <div className="col-md-1 ">
                                
                                        <Link to={'contacts/view/:contactId'} className="btn btn-warning my-1">
                                              <i className="fa fa-eye"/>     
                                            </Link>                                 
                                            <Link to={'contacts/edit/:contactId'} className="btn btn-primary my-1">
                                              <i className="fa fa-pen"/>      
                                            </Link>                                 
                                            <button className="btn btn-danger my-1">
                                              <i className="fa fa-trash"/>  
                                            </button>  
                                    </div>             
                                        </div>
                                    </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ContactList;