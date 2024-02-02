import React, {useState} from 'react';
import { IoMdAddCircle } from "react-icons/io";


function CreateArea(props) {
    
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    }

    function handleSubmit(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return (
        <div>
            <form className='create-note'> 
                <input onChange={handleChange} value={note.title} name="title" placeholder='Title' />
                <textarea onChange={handleChange} value={note.content} name="content" placeholder='Make a Note ...' rows="3" />
                <button onClick={handleSubmit}><IoMdAddCircle size="36" /></button>
            </form>
        </div>
    );
}

export default CreateArea;