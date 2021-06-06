import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesLists";
import Search from "./components/Search";
import { Header } from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div``;

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState("");
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

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
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledApp>
				<div className="container">
					<Header themeToggler={themeToggler} />
					<Search handleSearchNote={setSearchText} />
					<NotesList
						notes={notes.filter((note) =>
							note.text.toLowerCase().includes(searchText)
						)}
						handleAddNote={addNote}
						handleDeleteNote={deleteNote}
					/>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;
