const express = require('express');
const cors = require('cors'); // Добавь эту строку
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors()); // Добавь эту строку перед определением маршрутов

app.get('/pdf-list', (req, res) => {
  const pdfFolderPath = path.join(__dirname, 'public/pdf');
  fs.readdir(pdfFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading PDF files:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ files });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});