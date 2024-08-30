

"use client"

import React, { useState } from 'react'
import admin from './components.module.css'

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice]= useState("");
    const [offer, setOffer] = useState("");
    const [amen, setAmen]= useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("")

    const recordHandler = async(e)=>{
        e.preventDefault()

        const recordDetails = {title, price, offer, amen, desc, image}
        console.log(recordDetails)

          const data = new FormData()
          data.append('title', title);
          data.append('price', price);
          data.append('offer', offer);
          data.append('desc', desc);
          data.append('amen', amen);
          data.append('image', image);
      
          try {
              const response = await fetch(`https://next-resort-project.vercel.app/api/admin/add-product`,{
                method:'POST',
                body:data
              })   
              const result = await response.json()
              if(result.success){
                alert("Record Added Successfully")
                setTitle("")
                setPrice("")
                setOffer("")
                setDesc("")
                setAmen("")
                setImage("")
              }
          } catch (error) {
              console.log(error)
          }


    }

  return (
    <div className={admin.container}>
    <h1>Add Record</h1>
    <form onSubmit={recordHandler} encType='multipart/form-data'>
     <div className={admin.fields}>
    <div className="">
    <h3>Title</h3>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </div>
     <div>
     <h3>Price</h3>
     <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
     </div>
     </div>
     <div  className={admin.fields}>
    <div className="">
    <h3>Offer</h3>
    <input type="number" value={offer} onChange={(e)=>setOffer(e.target.value)}/>
    </div>
      <div className="">
      <h3>Amenities</h3>
      <input type="text" value={amen} onChange={(e)=>setAmen(e.target.value)}/>
      </div>
     </div>
    <div className={admin.textField}>
    <h3>Description</h3>
    <textarea type="text" rows="5" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    </div>
     <div className={admin.textField}>
     <h3>Upload Image</h3>
     <input type="file" accept='image/*' onChange={(e)=>setImage(e.target.files[0])}/>
     </div>
    <div className={admin.submit}>
    <button type='submit'>
      Submit
     </button>
    </div>
    </form>
  </div>
  )
}

export default AddProduct
