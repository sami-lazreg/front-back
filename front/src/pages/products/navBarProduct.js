import React from 'react'
import {Link} from 'react-router-dom'

const navBarProduct = () => {
    return (
        <div className="navBarProduct">
           <ul className="menu">
               <li className="list">
               <Link to = "/electromenager/Electromenager" style={{textDecoration:"none",color:"black",paddingRight:20}} >Electromenager</Link> 
                <ul className='sub-menu'>
                    <li><Link style={{textDecoration:"none",color:'black'}} to='/electromenager/machineLaver'><p>Machine À Laver</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/electromenager/refregirateur'><p>Refreginateur</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/electromenager/mixeur'><p>Mixeur</p></Link></li>
                </ul>
               </li>
               <li className="list">
               <Link style={{textDecoration:"none",color:"black",paddingRight:20}} >Informatique</Link>
                   <ul className='sub-menu'>
                   <li><Link style={{textDecoration:"none",color:"black"}} to='/informatique/pc'><p>Ordinateurs portables</p></Link></li>
                   <li><Link style={{textDecoration:"none",color:"black"}} to='/informatique/phone'><p>Smartphone et Mobile</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/informatique/tablette'><p>Tablettes Tactiles</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/informatique/accessoire'><p>Périphérique et Accessoires</p></Link></li>
                   </ul>
               </li>
               <li className="list">
               <Link style={{textDecoration:"none",color:"black",paddingRight:20}} >Audiovisuel</Link>
                   <ul className='sub-menu'>
                   <li><Link style={{textDecoration:"none",color:"black"}} to='/tvSonPhoto/televiseur'><p>Téléviseurs</p></Link></li>
                   <li><Link style={{textDecoration:"none",color:"black"}} to='/tvSonPhoto/recepteur'><p>Récepteurs Numériques</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/tvSonPhoto/homeCinema'><p>Home Cinéma</p></Link></li>
                    
                   </ul>
               </li>
               <li className="list">
               <Link style={{textDecoration:"none",color:"black",paddingRight:20}} >Bureautique</Link>
                   <ul className='sub-menu'>
                   <li><Link style={{textDecoration:"none",color:"black"}} to='/bureautique/photocopieurs'><p>PHOTOCOPIEURS</p></Link></li>
                    <li><Link style={{textDecoration:"none",color:"black"}} to='/bureautique/tableaux'><p>TABLEAUX</p></Link></li>
                    
                   </ul>
               </li>
           </ul> 
        </div>
    )
}

export default navBarProduct
