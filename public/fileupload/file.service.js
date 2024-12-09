const BASE_API_URL = 'http://localhost:3000/api';

const FILES_API = `${BASE_API_URL}/files`; // http://localhost:3000/api/files

const _post = (url, data) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const _get = (url) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const _delete = (url) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const uploadFile = (formData) =>
  _post(`${FILES_API}/upload`, formData);

const getFile = (fileId) =>
  _get(`${FILES_API}/${fileId}`);

const deleteFile = (fileId) =>
  _delete(`${FILES_API}/${fileId}`);

export { uploadFile, getFile, deleteFile };