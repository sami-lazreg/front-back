import React from 'react'
import {useState}from 'react'
import {addAction} from "../actions/addAction"
import {useDispatch} from 'react-redux'



export default function () {
    const [info,setInfo]=useState({
        url:"",
        name:"",
        category:"",
        amount:"",
        price:""
    })
    const handle=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const dispatch=useDispatch()
    const addNewProduct=e=>{
        e.preventDefault()
        dispatch(addAction(info))
    }

    return (
        <div className='container register'>
            <form onSubmit={addNewProduct}>
            <div className='row my-4'>
            <div className="col-md-3" ><h4 style={{fontWeight:'bold',color:'violet'}}>Add product</h4></div> 
            </div>
            <div className='row my-4'>
            <div className="col-md-2 ">url</div>
            <div className='col-md-5 col-xs-9'><input type ="url" name="url" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">name</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="name" style={{width:'100%'}} onChange={handle} ></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">category</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="category" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">amount</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="amount" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            < div className='row my-4'>
            <div className="col-md-2">price</div>
            <div className='col-md-5 col-xs-9'><input type ="text" name="price" style={{width:'100%'}} onChange={handle}></input></div>
            </div>
            
            <div>
            <div className='row my-4'>
             <div className='col-md-2'></div>
             <div className='col-md-5'> <button type='submit' style={{margin:"auto"}}>Add</button></div>
            </div>
           </div>
    
            </form>
            </div>
    )
}
