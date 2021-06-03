import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;

	const handleChange = (event) => {
		if (event.target.value.length <= 200) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = (event) => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};

	return (
		<div className="note new">
			<textarea
				cols="100"
				rows="8"
				placeholder="Type to add a note..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				{characterLimit - noteText.length <= 50 && (
					<small>{characterLimit - noteText.length} remaining characters</small>
				)}
				<button className="save" onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
