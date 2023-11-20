import { instance } from '../axios/index';

// Function for register user endpoint
async function registerUser(name, email, password) {
  try {
    const response = await instance.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for login user endpoint
async function loginUser(email, password) {
  try {
    const response = await instance.post('/login', { email, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for create book endpoint
async function createBook(formData, token) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get all books endpoint
async function getAllBooks() {
  try {
    const response = await instance.get('/books');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit book endpoint
async function editBook(id, title, author, publisher, year, pages, token) {
  try {
    console.log(id, token);
    const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages }, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete book endpoint
async function deleteBook(id, token) {
  try {
    const response = await instance.delete(`/books/${id}`, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


async function getBookDetailById(id) {
  try {
    const response = await instance.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

export { registerUser, loginUser, createBook, getAllBooks, editBook, deleteBook, getBookDetailById };
