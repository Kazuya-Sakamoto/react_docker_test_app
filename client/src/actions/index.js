import axios from 'axios';

export const READ_USERS = 'READ_USERS';
export const READ_USER = 'READ_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = 'http://localhost:8080/api/v1';

export const readUsers = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/user`);
  dispatch({ type: READ_USERS, response });
};

export const getUser = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/user/${id}`);
  dispatch({ type: READ_USER, response });
};

export const putUser = (values) => async (dispatch) => {
  const response = await axios.put(`${ROOT_URL}/user/${values.id}`, values);
  dispatch({ type: UPDATE_USER, response });
};

export const postUser = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/user`, values);
  dispatch({ type: CREATE_USER, response });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/user/${id}`);
  dispatch({ type: DELETE_USER, id });
};
