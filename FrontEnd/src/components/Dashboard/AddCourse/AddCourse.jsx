import styled from "styled-components"
import { Button } from "components/Button/Button"
import {Button as ButtonBs} from "react-bootstrap"
import { Modal } from "react-bootstrap"
import AddForm from "./AddForm"

const AddCourseStyled = styled.div`
    .add-course{
        position: fixed;
        z-index: 10;
        top: 0;
        bottom: 0;
        max-height: 400px;
        background-color: gray;
    }
`

const AddCourseFormStyled = styled.div`
    width: 200px;
    height: 200px;
    background-color: red;
    display: block;
    p{
        width: 300px;
    }
`

const addCourse = () => {
    console.log('add course')
}

const addCourseForm = () => {
    console.log('addCourseForm')

    return <AddCourseFormStyled>
        <p>Add Course</p>
        
    </AddCourseFormStyled>
}

export const AddCourse = () => {

    return <AddCourseStyled>
        <Button onClick={() => addCourse()}
            width="165px"
            height="52px"
            borderRadius="37px"
            bgColor="#0C4CA3">
            Add course
        </Button>
        <div className="add-course">
            <p>Add Course</p>
            <AddForm/>
            {/* {addCourseForm} */}
        </div>

    </AddCourseStyled>
}