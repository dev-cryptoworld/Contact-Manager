import React from "react";
import { Link } from "react-router-dom";
let EditContact = () => {
    return(
        <React.Fragment>
            <section className="add-contact p-5">
                <div className="container">
                    <div className="row">
                        <p className="h4 text-success fw-bold">Edit Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta neque nostrum beatae placeat. Dolorem quam officia ratione voluptatum omnis.</p>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-4">
                        <form >
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Photo Url" />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Number" />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Title" />
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                        <option value="">Select a Group</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Update" />
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src="https://imgs.search.brave.com/zHmfyShBVVnh9C7OdYB5aT2N_Dnu5qHK8zl7gtrolBw/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXVzZXIt/aWNvbi1pY29ucy1s/b2dvcy1lbW9qaXMt/dXNlcnMtMjQwMC5w/bmc" className="contact-img" alt="" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default EditContact;