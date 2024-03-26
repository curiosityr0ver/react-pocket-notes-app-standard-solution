import React, { useContext } from "react";
import styles from "../SelectNotes/selectednotes.module.css";
import CreateNote from "./subcomponents/CreateNote/CreateNote";
import NoteHeading from "./subcomponents/NoteHeading/NoteHeading";
import { NotesContext } from "../../context/NoteContext";

function SelectNotes() {
	const { modal, toggleModal, noteHeadings, hide } = useContext(NotesContext);

	return (
		<div className={`${styles.container} ${hide && styles.hidden} `}>
			<h2>Pocket Notes</h2>
			<CreateNote />
			{noteHeadings.length > 0 && (
				<>
					{noteHeadings.map((noteHeading) => {
						return (
							<div key={noteHeading.name}>
								<NoteHeading noteHeading={noteHeading} />
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}

export default SelectNotes;
