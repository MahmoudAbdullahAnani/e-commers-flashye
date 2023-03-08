import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from '../Components/Product';
import { motion } from "framer-motion";

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [products, setProducts] = useState([])
    const [API, setAPI] = useState('https://fakestoreapi.com/products')
    const [Category, setCategory] = useState([])
    const fetchProducts = () => {
        axios.get(API)
            .then(res => setProducts(res.data))
    }
    const fetchProductsCategory = () => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => setCategory(res.data))
    }
    useEffect(() => {
        fetchProducts()
        fetchProductsCategory()
    }, [])
    const [valeuMinPrice, setValeuMinPrice] = useState(0)
    const [ValueMax, setValueMax] = useState(0)
    
    return (
      <>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, damping: 50 }}
          className="App mt-2 d-flex container"
        >
          <input
            placeholder="Searche"
            type="text"
            className="m-auto px-3 border-2 border-primary rounded-lg h-12 w-72"
          />
          <div className="h-full ">
            <button
              type="button"
              onClick={handleShow}
              className="ms-1 mt-auto btn btn-outline-info text-dark"
            >
              filtration
            </button>
          </div>
        </motion.div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h2>Category:</h2>
              <div className="mt-3 border p-3 d-flex flex-col gap-3 rounded">
                {Category.map((cat) => {
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        axios
                          .get(
                            `https://fakestoreapi.com/products/category/${cat}`
                          )
                          .then((res) => setProducts(res.data));
                      }}
                      className="text-dark btn btn-outline-warning"
                    >
                      {cat}
                    </button>
                  );
                })}
                <Button
                  className="bg-primary"
                  onClick={() => {
                    setAPI("https://fakestoreapi.com/products");
                    fetchProducts();
                  }}
                >
                  All Products
                </Button>
              </div>
            </div>
            <div className="mt-3">
              <h2>Price:</h2>
              <div>
                <input
                  type="number"
                  onChange={(e) => {
                    setValeuMinPrice(+e.target.value);
                  }}
                  placeholder="Min Price"
                  className="rounded placeholder:text-red-300 font-bold me-3 border px-3 w-32 h-14"
                />

                <input
                  type="number"
                  onChange={(e) => {
                    setValueMax(+e.target.value);
                  }}
                  placeholder="Max Price"
                  className="rounded placeholder:text-red-300 me-1 font-bold border px-3 w-32 h-14"
                />

                <Button
                  className="mt-2"
                  onClick={() => {
                    const listTest = [];
                    products.filter((product) => {
                      (+product.price >= +valeuMinPrice) &
                        (+product.price <= +ValueMax) &&
                        listTest.push(...[product]);
                      return setProducts(listTest);
                    });
                  }}
                >
                  Filtering
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* Create Carts */}
        <Container className="mt-4 pb-12">
          <Row className="justify-content-around gap-3">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </Row>
        </Container>
      </>
    );
}

export default Home;