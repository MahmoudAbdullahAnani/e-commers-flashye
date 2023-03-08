import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from 'react-redux';
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import {  clearProduct, removeProduct } from "../Data/Slices/ProductsSlices";
import Swal from 'sweetalert2'
import FormaterPrice from './../Data/FormaterCurrence';
const Cart = () => {
    const cartProductVall = useSelector(store => store.cartProducts)
    const dispatch = useDispatch()
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    var itemsPrice = 0;
    var cartProductsIds = [];
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    cartProductVall.map(cartPro => {
                        return (
                            <SwiperSlide
                                key={Math.random()}>
                                <Container className="my-5 d-flex align-items-center cartContainer">
                                    <div className="row  w-full m-auto  my-2 border-2 border-zinc-600 p-10 rounded-tl-3xl rounded-br-3xl">
                                        <div className="viowImage col-xs-9 overflow-hidden col-md-6">
                                            <img src={cartPro.image} className="w-50 m-auto " alt={cartPro.title} />
                                        </div>
                                        <div className="ditels d-flex flex-col col-xs-9 col-md-6">
                                            <h3>{cartPro.title}</h3>
                                            <hr />
                                            <div>
                                                <b>Description:</b>
                                                <br />
                                                {cartPro.description}
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <h3 >
                                                    Price:
                                                </h3>
                                                <del className="text-danger fs-5">
                                                    {Math.ceil(cartPro.price * 1.6)}$
                                                </del>
                                                <span className="fs-4">
                                                    &nbsp;&nbsp;{Math.ceil(cartPro.price)}$
                                                </span>
                                            </div>
                                            <p><b>ID:</b> &nbsp;
                                                {cartPro.id}</p>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="overflow-auto px-10">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th>Title</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProductVall.map(cartProduct => {
                                const count = {};
                                itemsPrice += Math.ceil(cartProduct.price)
                                cartProductsIds.push(cartProduct.id)
                                cartProductsIds.forEach(val => count[val] = (count[val] || 0) + 1)
                                return (
                                    <tr key={Math.random()}>
                                        <td className="text-center">
                                            <b>
                                                {cartProduct.id}
                                            </b>
                                        </td>
                                        <td>{cartProduct.title}</td>
                                        <td className="text-center">{cartProduct.category}</td>
                                        <td className="text-center">{FormaterPrice(Math.ceil(cartProduct.price))}</td>
                                        <td className="overflow-hidden ">
                                            <img src={cartProduct.image} className="w-12 m-auto" alt={cartProduct.title} />
                                        </td>
                                        <td className="text-center">
                                            <Button onClick={() => {
                                                swalWithBootstrapButtons.fire({
                                                    title: 'Are you sure?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonText: 'Yes, delete it!',
                                                    cancelButtonText: 'No, cancel!',
                                                    reverseButtons: true
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(removeProduct(cartProduct.id))
                                                        swalWithBootstrapButtons.fire(
                                                            'Deleted!',
                                                            'Your file has been deleted.',
                                                            'success'
                                                        )
                                                    } else if (
                                                        result.dismiss === Swal.DismissReason.cancel
                                                    ) {
                                                        swalWithBootstrapButtons.fire(
                                                            'Cancelled',
                                                            'It was canceled successfully',
                                                        )
                                                    }
                                                })
                                            }} variant="danger">
                                                <i className="fa-solid fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total: {cartProductVall.length}</th>
                            <th></th>
                            {/* <th></th> */}
                            <th></th>
                            <th className="text-center">
                                {FormaterPrice(itemsPrice)}
                            </th>
                            <th></th>
                            <th className="w-16"><Button onClick={() => {
                                swalWithBootstrapButtons.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yes, delete it!',
                                    cancelButtonText: 'No, cancel!',
                                    reverseButtons: true
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(clearProduct())
                                        swalWithBootstrapButtons.fire(
                                            'Deleted All!',
                                            'The dog has been removed successfully.',
                                            'success'
                                        )
                                    } else if (
                                        result.dismiss === Swal.DismissReason.cancel
                                    ) {
                                        swalWithBootstrapButtons.fire(
                                            'Cancelled',
                                            'It was canceled successfully',
                                        )
                                    }
                                })
                            }}
                                variant="danger" >Clear All({cartProductVall.length})</Button></th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </>
    );
}

export default Cart;