import React, { useEffect, useState } from 'react'
import "../ProductList/productList.css"
import { Card } from '../Card/Card'

import avatar1 from 'assets/images/avatars/avatar1.svg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

const ProductList = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        minidesktop: {
            breakpoint: { max: 1190, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1080, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const ProductListStyled = styled.div`
    `

    const [courses, setCourses] = useState([])
    var user = false
    // const [user, setUser] = useState([])
    const refValue = React.useRef();
    

    useEffect(() => {
        fetch("http://localhost:8080/admin/courses")
            .then(res => res.json())
            .then((result) => {
                setCourses(result)
            })
    }, [])

    async function getUser(id) {
        let link = "http://localhost:8080/admin/get-tutor-from-course/" + id
        const response = await fetch(link)
        return response.json();
    }

    return (
        <ProductListStyled>
            <Carousel responsive={responsive}>
                <div className='product-container'>

                    <ul className='ul-categories'>
                        {console.log("courses:")}
                        {console.log(courses)}

                        {courses.map((course) => {
                            
                            refValue.current = getUser(course.courseId)
                                .then((res) => {
                                    return "new value n";
                                },[])

                            console.log("userName2: ", refValue.current)
                            return (
                                <li>
                                    {/* <Card id={course.courseId} avatar={avatar1} tutorName={"lla"} courseName={"Java code"} rating={2} /> */}
                                    <p>userName: {refValue.current}</p>
                                    <p>la</p>
                                </li>
                            )
                            return ( 

                                <p>li</p>
                            )
                        })}

                    </ul>

                </div>

            </Carousel>;

        </ProductListStyled>
    )
}

export default ProductList