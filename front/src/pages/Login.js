import React from 'react';
import {useState} from 'react'

export default function Login() {
    const [info,setInfo]=useState({
        Email:"",
        Password:" ",
    })
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    return (
        <div className='container register'>
            <form>
            < div className='row my-4'>
            <div className="col-md-2">Email</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="Email" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">Password</div>
            <div className='col-md-5 col-xs-9'><input type ="password" name="Password" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button type='submit' style={{margin:"auto"}}>Login</button></div>
            </div>
            </form>
        </div>
    )
}
