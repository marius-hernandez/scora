import { pdfjs } from "react-pdf";

if (typeof Promise.withResolvers === 'undefined') {
  if (window)
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
          let resolve, reject;
          const promise = new Promise((res, rej) => {
              resolve = res;
              reject = rej;
          });
          return { promise, resolve, reject };
      };
}
// there is your `/legacy/build/pdf.worker.min.mjs` url
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@4.4.168/legacy/build/pdf.worker.min.mjs"


export const pdfToText = async (file: File | Blob | MediaSource) => {
    // Create a blob URL for the PDF file
    const blobUrl = URL.createObjectURL(file);
  
    // Load the PDF file
    const loadingTask = pdfjs.getDocument(blobUrl);
  
    let extractedText = "";
    let hadParsingError = false;
    try {
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;
  
      // Iterate through each page and extract text
      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");
        extractedText += pageText;
      }
    } catch (error) {
      hadParsingError = true;
      console.error("Error extracting text from PDF:", error);
    }
  
    // Clean up the blob URL
    URL.revokeObjectURL(blobUrl);
  
    // Free memory from loading task
    loadingTask.destroy();
  
    if (!hadParsingError) {
      return extractedText;
    }
  };


// or you can use this
// pdfjs.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@4.4.168/legacy/build/pdf.worker.min.mjs"
