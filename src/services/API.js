import axios from "axios";
import {BASE_URL} from "./BASE_URL.js";

axios.defaults.baseURL = BASE_URL;
//get all
export const getAllNote = async () => {
   try {
      const response = await axios.get("/notes");
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}
//search
export const getSearchedNotes = async (search) => {
   try {
      const response = await axios.get(`/notes${search}`);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}
///add
export const addNewNote = async (data) => {
   try {
      const response = await axios.post("/notes",data);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}

export const getSingle = async (id) => {
   try {
      const response = await axios.get(`/notes/${id}`);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}

export const update = async (id,content) => {
   try {
      const response = await axios.put(`/notes/${id}`, content);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}

export const deleteN = async (id) => {
   try {
      const response = await axios.delete(`/notes/${id}`);
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}

