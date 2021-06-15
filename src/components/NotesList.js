import React from 'react'
import AddNotes from './AddNotes'
import Notes from './Notes'

const NotesList = ({notes,addTextNode, deleteNotes}) => {
    return (
        <div className="notes-list">
            {
                notes.map((note) => <Notes text={note.text} id={note.id} date={note.date} deleteNotes={deleteNotes}/>)
            }
            <AddNotes addTextNode={addTextNode} deleteNotes={deleteNotes}/>
        </div>
    )
}

export default NotesList
