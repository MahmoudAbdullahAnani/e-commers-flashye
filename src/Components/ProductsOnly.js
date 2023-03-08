import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import {  useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../Data/Slices/ProductsSlices";
const ProductsOnly = () => {
    const { Id } = useParams()
    const [onlyProduct, setProductOnly] = useState([])
    const fetchProductOnly = () => {
        axios.get(`https://fakestoreapi.com/products/${Id}`)
            .then(res => setProductOnly(res.data))
    }
    useEffect(() => {
        fetchProductOnly()
    }, [])
    const dispatch = useDispatch()
    const sccesfull = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added successfully 🎉🎊😘',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const fail = () => {
        Swal.fire({
            position: 'top-start',
            icon: 'info',
            title: 'Already exists 🤨',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const vallCartget = useSelector(store => store.cartProducts)
    const countKey = [];
    countKey.push(vallCartget.map(product=>{
        return product.id
    }))
    return (
        <>
            <Container className="my-5 d-flex align-items-center cartContainer">

                <div className="row  w-full m-auto  my-2 border-2 border-zinc-600 p-10 rounded-tl-3xl rounded-br-3xl">
                    <div className="viowImage col-xs-9 overflow-hidden col-md-6">
                        <img src={onlyProduct.image} className="w-50 m-auto " alt={onlyProduct.title} />
                    </div>
                    <div className="ditels d-flex flex-col col-xs-9 col-md-6">
                        <h3>{onlyProduct.title}</h3>
                        <hr />
                        <div>
                            <b>Description:</b>
                            <br />
                            {onlyProduct.description}
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <h3 >
                                Price:
                            </h3>
                            <del className="text-danger fs-5">
                                {Math.ceil(onlyProduct.price * 1.6)}$
                            </del>
                            <span className="fs-4">
                                &nbsp;&nbsp;{Math.ceil(onlyProduct.price)}$
                            </span>
                        </div>
                        <p><b>ID:</b> &nbsp;
                            {onlyProduct.id}</p>
                        <Button onClick={() => {
                                if(countKey[0].includes(onlyProduct.id)){
                                    fail()
                                }
                                else{
                                    dispatch(addProduct(onlyProduct))
                                    sccesfull()
                                }
                        }} className="w-100 rounded-lg text-white bg-slate-700">Add Cart</Button>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ProductsOnly;