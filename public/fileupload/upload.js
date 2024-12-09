import { uploadFile } from './file.service.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('upload.js script loaded');
  const uploadButton = document.getElementById('upload-button');
  const artworkInput = document.getElementById('file-input');
  const artworkDisplay = document.getElementById('art-gallery');

  uploadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const file = artworkInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
  
    uploadFile(formData)
      .then((response) => {
        console.log('File uploaded successfully:', response);
        const fileUrl = response.url;
        const artworkImage = document.createElement('img');
        artworkImage.src = fileUrl;
  
        const artworkDisplay = document.getElementById('art-gallery');
        if (artworkDisplay) {
          artworkDisplay.appendChild(artworkImage);
        } else {
          console.error('Error: artworkDisplay element not found');
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  });
});