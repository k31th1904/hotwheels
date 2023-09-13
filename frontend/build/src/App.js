import './App.css';
import { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CarListing from './CarListing'
import CarCreate from './CarCreate'
import CarDetail from './CarDetail'
import CarEdit from './CarEdit'




function App() {

    const[hostdata,hostdatachange]=useState("");

    useEffect(()=>{
        fetch("http://ccgc5368backend.canadacentral.cloudapp.azure.com:8000/hostname/").then((res)=>{
            return res.json();
        }).then((resp)=>{
            hostdatachange(resp);
            console.log(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])


  return (
    <div className="App">
        <br></br>
        <h1> HotWheels Cars Collection List </h1>
        <br></br>
        { hostdata &&
                <h2 className="text-primary" > {hostdata.hostname} </h2>
        }
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CarListing />}></Route>
                    <Route path='/car/create' element={<CarCreate />}></Route>
                    <Route path='/car/detail/:car_id' element={<CarDetail />}></Route>
                    <Route path='/car/edit/:car_id' element={<CarEdit />}></Route>

                </Routes>
            </BrowserRouter>
    </div>
  );

}

export default App;
