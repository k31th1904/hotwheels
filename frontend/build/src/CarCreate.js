import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



const CarCreate = () => {

    const[model,modelchange]=useState("");
    const[brand,brandchange]=useState("");
    const[type,typechange]=useState("");
    const[year,yearchange]=useState("");


    //redirect function
    const navigate=useNavigate();

    //red word reminder pre-verification
    const[validation,valchange]=useState(false);

    // handle non numeric input
    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        yearchange(result);


    };


    // handle post data
    const handlesubmit=(e)=>{
        e.preventDefault();
        const cardata={model,year,brand,type};
        //console.log({model,year,brand,type})

        fetch("http://ccgc5368backend.canadacentral.cloudapp.azure.com:8000/cars/",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(cardata)
        }).then((res)=>{
            alert('Save successfully.')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"middle"}}>
                            <div className="card-title">
                                <h2 style={{"textAlign":"middle"}}> Add New Car </h2>
                            </div>
                            <div className="card-body" style={{"textAlign":"left"}}>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Model</label>
                                            <input required value={model} onMouseDown={e=>valchange(true)} onChange={e=>modelchange(e.target.value)} className="form-control"></input>
                                            {model.length===0 && validation && <span className="text-danger">Enter Model!</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Year</label>
                                            <input required value={year} onChange={e=>yearchange(e.target.value)} onChange={handleChange} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Brand</label>
                                            <input required value={brand} onChange={e=>brandchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Type</label>
                                            <input required value={type} onChange={e=>typechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <br></br>
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CarCreate;