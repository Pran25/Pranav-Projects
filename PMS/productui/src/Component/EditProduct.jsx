import React, { useEffect, useState } from 'react'
import Productservice from '../Service/Productservice';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [msg,setMsg] = useState("")

  useEffect(()=>{
    Productservice.getProductById(id).then((resp)=>{
      setProduct(resp.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  const [product,setProduct] = useState({

      id : "",
      prodName: "",
      prodDes: "",
      prodPrice: "",
      Status: ""

  });
  
   const navigate = useNavigate()

  const {id} = useParams()
  console.log(id)

  const handleChange=(e)=>{

      const value = e.target.value;
      setProduct({...product, [e.target.name]: value });
  }


  const Productupd=(e) =>{

      e.preventDefault();
      
      Productservice.editProduct(product).then((res)=>{

         navigate("/");
      
          setMsg("Product Updated Successfully")

      }).catch((error)=>{

          console.log(error);
      })
  }

return (
  <>
    <h1>Add Product Page</h1>

    <div className='container mt-3'>
     <div className='row'>
      <div className='col-md-6 offset-md-3'>
          <div className='card'>
              <div className="card-header fs-3 text-center">
                  Edit Products
              </div>
              {
                  msg && 
                  <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                  <form onSubmit={(e)=> Productupd(e)}>
                      <div className='mb-3'>
                          <label>Enter Product Name</label>
                          <input type='text' name='prodName' className='form-control' value={product.prodName} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className='mb-3'>
                          <label>Enter Description</label>
                          <input type='text' name='prodDes' className='form-control' value={product.prodDes} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className='mb-3'>
                          <label>Enter Product Price</label>
                          <input type='text' name='prodPrice' className='form-control' value={product.prodPrice} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className='mb-3'>
                          <label>Enter Product Status</label>
                          <input type='text' name='Status' className='form-control' value={product.Status} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <button className='btn btn-primary col-md-12'>Update</button>
                  </form>
              </div>
          </div>
      </div>
     </div>

    </div>

  </>
)
}

export default EditProduct
