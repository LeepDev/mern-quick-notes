import * as notesApi from './notes-api';
import { getUser } from './users-service';

export async function index() {
    const notes = await notesApi.index();
    return notes;
}

export async function create(noteText) {
    const noteJson = {}
    noteJson.text = noteText;
    noteJson.user = getUser();
    const note = await notesApi.create(noteJson);
    return note;
}