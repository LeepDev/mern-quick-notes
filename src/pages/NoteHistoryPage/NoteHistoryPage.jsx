import { useEffect, useState } from "react";
import {index} from '../../utilities/notes-service';

export default function NoteHistoryPage() {
    const [notes, setNotes] = useState([])

    const fetchNotes = async () => {
        const notes = await index()
        setNotes(notes)
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
            <h1>NoteHistoryPage</h1>
            { notes.length > 0 ? 
            <ul className="flex-ctr-ctr flex-col">
                {notes.map(note =>
                    <li key={note.createdAt}>
                        <div>
                            <label>Text:</label>
                            <span>{note.text}</span>
                            <label>Created At:</label>
                            <span>{note.createdAt.toLocaleString()}</span>
                        </div>
                    </li>
                )}
            </ul>
            :
            <>
                <p>No Notes Yet!</p>
            </>
            }
        </>
    );
}