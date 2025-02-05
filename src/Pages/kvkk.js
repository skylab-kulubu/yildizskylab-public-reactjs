import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFViewer() {
    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl="/kvkk-metni.pdf" />
            </Worker>
        </div>
    );
}
