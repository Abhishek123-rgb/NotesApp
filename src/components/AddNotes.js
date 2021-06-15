import React from 'react'
import {useState} from 'react'
const AddNotes = ({addTextNode, deleteNotes}) => {
    const [noteText, setNoteText] = useState("");


    const characterLimit = 200;

    const handleClick = () => {
        if(noteText.trim().length > 0)
        {
            addTextNode(noteText);
            setNoteText("");
        }
    }

    const handleChange = (e) =>{
        if(characterLimit - e.target.value.length >=0){
            setNoteText(e.target.value)
        }
    }
    return (
        <div className='notes new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleClick}>
					Save
				</button>
			</div>
		</div>
    )
}

export default AddNotes
