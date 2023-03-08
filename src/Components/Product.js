import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from "../Data/Slices/ProductsSlices";
import Swal from 'sweetalert2'
import FormaterPrice from "../Data/FormaterCurrence";
import { motion } from "framer-motion";


const Product = (props) => {
    const { product } = props
    const loc = `/product/${product.id}`
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
    const cartProductVall = useSelector(store => store.cartProducts)
    const countKey = [];
    countKey.push(cartProductVall.map(product => {
        return product.id
    }))
    const [countProduct, setCountProduct] = useState(1)
    return (

      <Card style={{ width: "18rem" }}>
              <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, damping: 50 }}
      >
          <div className="fathere-img d-flex overflow-hidden">
            <Card.Img
              className="w-50 m-auto "
              variant="top"
              src={product.image}
            />
          </div>
          <Card.Body className="p-0 pb-2">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description !== undefined &&
                product.description.substr(0, 60)}
              ...
            </Card.Text>
            <Card.Text>
              <span className="fs-5">price:</span>
              <span className="fs-5">
                {FormaterPrice(
                  product.price * countProduct === 0
                    ? product.price
                    : product.price * countProduct
                )}
              </span>
            </Card.Text>
            <div className="text-center d-flex father-btn">
              {countKey[0].includes(product.id) & (countProduct > 0) ? (
                <div className="d-flex text-center h-fit gap-2 justify-center  font-bold">
                  <Button
                    className="bg-primary"
                    onClick={() => {
                      countProduct <= 1 && dispatch(removeProduct(product.id));
                      setCountProduct(countProduct - 1);
                    }}
                  >
                    -
                  </Button>
                  <div className="bg-secondary text-white bg-gradient px-3 rounded ">
                    {countProduct}
                  </div>
                  <Button
                    className="bg-primary"
                    onClick={() => {
                      setCountProduct(countProduct + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    if (countKey[0].includes(product.id)) {
                      fail();
                    } else {
                      dispatch(addProduct(product));
                      sccesfull();
                    }
                  }}
                  className="bg-primary"
                  variant="primary"
                >
                  Add Cart
                </Button>
              )}
              <Link to={loc} className="ms-4 btn btn-outline-primary">
                See More
              </Link>
            </div>
          </Card.Body>
          </motion.div>
        </Card>
    );
}

export default Product;