import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//homepage by default

const CarListing = () => {

    const[carsdata,carsdatachange]=useState(null);

    const navigate=useNavigate();

    const CheckItem=(car_id)=>{
        navigate("/car/detail/"+car_id);
    }

    const EditItem=(car_id)=>{
        navigate("/car/edit/"+car_id);
    }

    const RemoveItem=(car_id)=>{
        if(window.confirm('Confirm deletion?')){
            fetch("http://ccgc5368backend.canadacentral.cloudapp.azure.com:8000/car/"+car_id,{
                method: "DELETE"
            }).then((res)=>{
                //alert('Delete successfully.')
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }


       // GET Method
    useEffect(()=>{
        fetch("http://ccgc5368backend.canadacentral.cloudapp.azure.com:8000/cars/").then((res) => {
            return res.json();
        }).then((resp)=>{
            console.log(resp);
            carsdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]);

    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <br></br>
                    <h2> Cars Listing </h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="car/create" className="btn btn-success"> Add New Car </Link>
                    </div>
                    <br></br>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Model</td>
                                <td>Year</td>
                                <td>Brand</td>
                                <td>Type</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            { carsdata&&
                                carsdata.map(item =>  (
                                    // item here parse json from api
                                    <tr key={item.car_id}>
                                        <td>{item.car_id}</td>
                                        <td>{item.model}</td>
                                        <td>{item.year}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.type}</td>
                                        <td>
                                        <a onClick={()=>{EditItem(item.car_id)}} className="btn btn-secondary">Edit</a>
                                        <a onClick={()=>{RemoveItem(item.car_id)}} className="btn btn-danger">Remove</a>
                                        <a onClick={()=>{CheckItem(item.car_id)}} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarListing;