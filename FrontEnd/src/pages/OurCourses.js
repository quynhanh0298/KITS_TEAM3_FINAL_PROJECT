import React from "react";
import Help from "../components/Help/Help";
import { useNavigate } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/productsApi";
import "../pages/HelpPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "features/cartSlice";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const OurCoursesStyled = styled.div`
    .product{
        cursor: pointer;
    }
`


const OurCourses = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const [tutor, setTutor] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    console.log(data);

    useEffect(() => {
        const fetchTutor = async () => {
            const response = await fetch("http://localhost:8080/admin/courses-tutor")
                .then(res => {
                    return res.json()
                })
            setTutor(response);
        }
        fetchTutor();
    }, [])
    console.log("Tutor: ", tutor)

    const navi = useNavigate();
    return (
        // <>
        //   <Help />

        // </>

        <div className="home-container">
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <OurCoursesStyled>
                    <h2>New Arrivals</h2>
                    <div className="products">
                        {data?.map((product, index) => {
                            console.log(product)
                            return (
                                <div key={product.courseId} className="product" onClick={() => navi(`/coursedetails/${product.courseId}`)}>
                                    <h3>{product.name}</h3>
                                    <img src={product.thumbnail} alt={product.name} />

                                    <p>{product.desciption}</p>
                                    <h5 className="price">${product.price}</h5>

                                    <button onClick={() => handleAddToCart(product)}>
                                        Add To Cart
                                    </button>
                                </div>
                            )
                        }
                        )}
                    </div>
                </OurCoursesStyled>
            )}
        </div>
    );
};

export default OurCourses;
