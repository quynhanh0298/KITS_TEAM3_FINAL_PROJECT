import React from "react";
import Help from "../components/Help/Help";
import { useNavigate } from "react-router-dom";
import avatar1 from "assets/images/avatars/avatar1.svg"

import "../pages/OurCourse.css";
import { useDispatch } from "react-redux";
import { addToCart } from "features/cartSlice";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const OurCoursesStyled = styled.div`
    .product{
    }
    .tutorInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 8px;
        margin-left: 18px;
    }
`


const OurCourses = () => {
    const [tutor, setTutor] = useState([]);
    const [courses, setCourses] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

    // console.log(data);

    useEffect(() => {
        fetch("http://localhost:8080/admin/courses")
          .then((res) => res.json())
          .then((data) => {
            setCourses(data);
          });
      }, []);



    const navi = useNavigate();
    return (
        // <>
        //   <Help />
        // </>

        <div className="home-container">
            
                <OurCoursesStyled>
                    <h2>New Arrivals</h2>
                    <div className="products">
                        {courses?.map((product, index) => {
                            console.log(product)
                            return (
                                <div key={product.courseId} className="product">
                                    <h3  onClick={() => navi(`/coursedetails/${product.courseId}`)}>{product.name}</h3>
                                    <img src={product.thumbnail} alt={product.name}  onClick={() => navi(`/coursedetails/${product.courseId}`)}/>

                                    <div className="tutorInfo">
                                        <div>
                                            <img src={avatar1} alt=""/>
                                        </div>
                                    </div>
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
           
        </div>
    );
};

export default OurCourses;