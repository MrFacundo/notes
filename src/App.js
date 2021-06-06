import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesLists";
import Search from "./components/Search";
import { Header } from "./components/Header";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "This is a note",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "This is a 2nd note",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "This is a 3rd note",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "This is a 4th note",
			date: "15/04/2021",
		},
	]);

	const [searchText, setSearchText] = useState("");
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("notes-data", JSON.stringify(notes));
	}, [notes]);

	return (
		<div className={`${darkMode && "dark-mode"}`}>
			<div className="container">
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
