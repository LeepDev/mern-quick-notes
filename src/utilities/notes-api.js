// users-api.js
import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/notes';

export async function index(user) {
  return sendRequest(BASE_URL)
}

export async function create(noteData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', noteData)
}