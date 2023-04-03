import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//homepage by default

const CarDetail = () => {
    const{car_id}=useParams();

    const[cardata,cardatachange]=useState({})

    useEffect(()=>{
        fetch("http://ccgc5368backend.canadacentral.cloudapp.azure.com:8000/car/"+car_id).then((res) => {
            return res.json();
        }).then((resp)=>{
            console.log(resp);
            cardatachange(resp);

        }).catch((err)=>{
            console.log(err.message);
        })
    // empty dependencies array to prevent fetch rerun
    },[]);

    return(
            <div>
                <div className="card" style={{"textAligh":"middle"}}>
                    <div className="card-title">
                          <br></br>
                          <h1> Showing Car Info ({cardata.car_id})</h1>
                    </div>
                    <div className="card-body">
                        {cardata &&
                        <div>
                            <br></br>
                            <h2> Name:              {cardata.model}</h2>
                            <h2> Manufacture Year:  {cardata.year}</h2>
                            <h2> Manufacture By:    {cardata.brand}</h2>
                            <h2> Vehicle Type:      {cardata.type}</h2>
                            <br></br>
                            <Link className="btn btn-danger" to="/"> Back </Link>
                        </div>
                        }
                    </div>
                </div>
            </div>
    );

}

export default CarDetail;