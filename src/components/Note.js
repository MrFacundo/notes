import { MdDeleteForever } from "react-icons/md";
import Moment from "react-moment";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
				<small>
					<i>
						<Moment format="DD/MM/YY kk:mm" date={date} />
					</i>
				</small>

				{/* <small>{date}</small> */}
				<MdDeleteForever
					className="delete-icon"
					size="1.3em"
					onClick={() => handleDeleteNote(id)}
				/>
			</div>
		</div>
	);
};

export default Note;
