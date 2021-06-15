import React from 'react'
import NotesList from './components/NotesList'
import {useState, useEffect} from 'react'
import uuid from "uuid/dist/v1";
import Search from './components/Search';
import Header from './components/Header';
const App = () => {
  const [notes, setNotes] = useState([
		{
			id: 1,
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: 2,
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: 3,
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: 4,
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addTextNode = (text) => {
    const date = new Date();
    const newNote = {
      id: uuid(),
      text: text,
      date: date.toLocaleDateString()
    } 
    setNotes([...notes, newNote])
  }

  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToogleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          addTextNode={addTextNode} 
          deleteNotes={deleteNotes}
        />
      </div>
    </div>
  )
}

export default App
