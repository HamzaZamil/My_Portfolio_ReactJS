import { useCallback } from 'react';

const useDownloadPDF = (url) => {
    const downloadPDF = useCallback(() => {
        fetch(url)
            .then(response => {
                if (response.ok) return response.blob();
                throw new Error('Network response was not ok.');
            })
            .then(blob => {
                const newBlob = new Blob([blob], { type: 'application/pdf' });
                
                // Create a link element, use it to download the file and remove it
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(newBlob);
                downloadLink.setAttribute('download', 'My_CV.pdf');
                
                document.body.appendChild(downloadLink);
                downloadLink.click();
                
                document.body.removeChild(downloadLink);
                window.URL.revokeObjectURL(downloadLink.href); // Clean up
            })
            .catch(error => console.error('There was a problem with the fetch operation: ', error));
    }, [url]);

    return downloadPDF;
};

export default useDownloadPDF;
