// utils/getImageByPath.js
export const getImageByPath = (folder, filename) => {
  try {
    // Vite's dynamic import pattern
    const images = import.meta.glob('../../assets/**/*.jpg');
    const imagePath = `../../assets/${folder}/${filename}.jpg`;
    return images[imagePath] ? imagePath : null;
  } catch (err) {
    console.error('Error loading image:', err);
    return null;
  }
};