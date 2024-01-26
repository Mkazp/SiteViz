import React, { useEffect, useState } from 'react';
import s from'./Box.module.scss'

const PdfList = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        // Получаем имена файлов из папки public/pdf
        const response = await fetch('http://localhost:3001/pdf-list');
        const data = await response.json();
        setPdfFiles(data.files);
      } catch (error) {
        console.error('Error fetching PDF files:', error);
      }
    };

    fetchPdfFiles();
  }, []);

  const downloadPdf = (filename) => {
    const downloadUrl = `/pdf/${filename}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <div>
      <h1 className={s.hh1}>Методическая деятельность</h1>
      <ul className={s.ConteinerTl}>
        {pdfFiles.map((file, index) => (
          <li className={s.Title} key={index}>
            <div>
              <span>{file}</span>
            </div>
            <button className={s.bat} onClick={() => downloadPdf(file)}>Скачать</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;