import React from 'react';
import {useState} from 'react'

export default function Register() {
    const [info,setInfo]=useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Password:" ",
        Phone:" "
    })
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    return (
        <div className='container register'>
            <form>
            <div className='row my-4'>
            <div className="col-md-3" ><h4 style={{fontWeight:'bold',color:'violet'}}>Créer votre compte</h4></div> 
            </div>
            <div className='row my-4'>
            <div className="col-md-2 ">firstname</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Firstname" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Lastname</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Lastname" style={{width:'100%'}} onChange={handle} ></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Email</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Email" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Password</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Password" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Phone</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Phone" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            <div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button type='submit' style={{margin:"auto"}}>Register</button></div>
            </div>
           </div>
            </form>
        </div>
    )
}
