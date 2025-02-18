import React from 'react'
import  { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Productservice from '../Service/Productservice';

const ProductList = () => {
    const [msg,setMsg] = useState("")
    const [productList, setProductlist] = useState([]);

    useEffect(() => {
      init()
    }, [])

    const init = () =>  {

        Productservice.getAllProduct()
        .then((res) => {
            setProductlist(res.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }

    const deleteProduct = (id) => {
        Productservice.deleteProduct(id).then((res)=>{
            setMsg("Deleted Successfully")
            init()
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
        <h1>ProductList Page</h1>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                <p>Product List</p>
                            </div>
                            {
                                msg &&
                                <p className='fs-4 text-center text-success'>{msg}</p>
                            }
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>ProductName</th>
                                            <th>Product Description</th>
                                            <th>Product Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productList.map((p, num) => (
                                            <tr key={p.id}>
                                                <td>{num + 1}</td>
                                                <td>{p.prodName}</td>
                                                <td>{p.prodDes}</td>
                                                <td>{p.prodPrice}</td>
                                                <td>
                                                    <Link to={`/editproduct/${p.id}`} className="btn btn-sm btn-primary">
                                                        Edit
                                                    </Link>
                                                   <button className='bt btn-danger btn-sm ms-3' onClick={()=>deleteProduct(p.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ProductList
