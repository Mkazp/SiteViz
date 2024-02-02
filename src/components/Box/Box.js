import React, { useEffect, useState } from 'react';
import s from './Box.module.scss';

const PdfList = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const url = 'https://rusakanna.ru';

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch(`${url}/pdf-list`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Преобразуем объект в массив значений
        const filesArray = Object.values(data.files);
        setPdfFiles(filesArray);
      } catch (error) {
        console.error('Error fetching PDF files:', error.message);
      }
    };

    fetchPdfFiles();
  }, [url]);

  const downloadPdf = (filename) => {
    const downloadUrl = `${url}/pdf/${filename}`;
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
            <button className={s.bat} onClick={() => downloadPdf(file)}>Просмотреть</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;