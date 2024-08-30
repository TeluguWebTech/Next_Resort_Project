

"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProductCollection = () => {
    const [collections, setCollections] = useState("")

    const collectionHandler = async()=>{
        const response = await fetch(`http://localhost:3000/api/admin/add-product`)
        const newData = await response.json()

        console.log("productData:", newData)

        setCollections(newData.data)

    }

    useEffect(()=>{
        collectionHandler()
    }, [])

    return (
        <div className="productSection">
        <h1 align='center'>Select your Stay</h1>
        {collections ? ( collections.map((item)=>{
          return(
              <div key={item._id} className="proDetail">
              <div className="left">
                <div className="title">{item.title}</div>
                <br />
                <img src={item.image} alt={item.title} className="roomImage" />
              </div>
              <div className="center">
               <div className='pamen'>
               <h2 className="price">Rs. {item.price}</h2>
                <div>
                  <h3>Amenities</h3>
                  {item.amen.map((serve, i) => {
                    return (
                      <div className="amenities" key={i}>
                        <div>*{serve}</div>
                      </div>
                    );
                  })}
                </div>
               </div>
                <div className="right">
                  <Link href={`/detail/${item._id}`}>
        <button className="detail">Details  </button>
                  </Link >
                
      </div>
              </div>
            </div>
          )
        }) ): (
            <h1 style={{textAlign:'center', color:'green', marginTop:'200px'}}>Loading...</h1>
        )
    }
    
      </div>
      )
    }
    
export default ProductCollection
