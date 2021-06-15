import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
const Notes = ({text,id,date, deleteNotes}) => {
    return (
        <div className="notes">
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdDeleteForever className="delete-icons" size="1.3em" onClick={() => deleteNotes(id)} />
            </div>
        </div>
    )
}

export default Notes
