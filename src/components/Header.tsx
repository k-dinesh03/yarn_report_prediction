import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

interface HeaderProps {
    clothColor: string;
    handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ clothColor, handleColorChange }) => {

    const generatePDF = async () => {
        const reportElement = document.querySelector("#report");
        if (reportElement) {
            const canvas = await html2canvas(reportElement as HTMLElement);
            const img = canvas.toDataURL("image/png");

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "pt",
                format: "a4",
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

            const width = imgWidth * scale;
            const height = imgHeight * scale;

            pdf.addImage(img, 'PNG', 0, 0, width, height);
            pdf.save("report.pdf");
        } else {
            console.error("Report element not found");
        }
    };


    return (
        <div className="space-y-4 w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-4xl text-purple-400 font-bold uppercase">Yarn Report</h1>
                <button
                    onClick={generatePDF}
                    className="bg-purple-600 text-white font-medium px-5 pb-[5px] pt-[3px] rounded-md"
                >
                    Export
                </button>
            </div>
            <select
                className="pr-12 py-[3px] border-[1px] border-black rounded-sm focus:outline-none cursor-pointer"
                value={clothColor}
                onChange={handleColorChange}
            >
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
        </div>
    );
}

export default Header;
