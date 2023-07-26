import { useState } from "react";

const AddForm = () => {
    const [name, setName] = useState('')
    const [desc, setdesc] = useState('')

    function handleChangeName(event) {
        setName(event.target.value)
    }
    function handleChangeDesc(event) {
        setdesc(event.target.value)
    }
    
    function handleAdd() {
        console.log("name: ", name)
    }
    return (
        <div>
            <label for="course-name">
                Course name
                <input id="course-name" value={name} type="text" placeholder="Course name" onChange={handleChangeName} />
            </label>

            <label for="desciption-name">
                desciption
                <input id="desciption-name" value={desc} type="text" placeholder="desciption name" onChange={handleChangeDesc} />
            </label>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}
export default AddForm;