

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;


export default function PdfDemo () {
    const [numPages, setNumPages] = useState(5);
    const [pageNumber] = useState(1);

    const pdfFile = 'https://firebasestorage.googleapis.com/v0/b/sl-gateway.appspot.com/o/news-items-pdfs%2F1629993372089_elevage-des-poules-a-petite-echelle.pdf?alt=media&token=7f3a46f9-d9c8-4c67-b5b8-e0926dbd4130';
    // https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf
    //https://firebasestorage.googleapis.com/v0/b/sl-gateway.appspot.com/o/news-items-pdfs%2F1629993372089_elevage-des-poules-a-petite-echelle.pdf?alt=media&token=7f3a46f9-d9c8-4c67-b5b8-e0926dbd4130
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

  return( <div>
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  </div>)
};
