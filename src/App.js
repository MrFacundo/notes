import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesLists";

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
	return (
		<div className="container">
			<NotesList notes={notes} />
		</div>
	);
};

export default App;
