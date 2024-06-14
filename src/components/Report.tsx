import React from 'react';
import { ThreadWeight } from '../../types';

interface ReportProps {
    totalWeights: ThreadWeight[];
}

const Report: React.FC<ReportProps> = ({ totalWeights }) => {

    return (
        <div className="w-full h-full shadow-lg border-[1px] rounded-md shadow-slate-300">
            <div className="w-full h-full flex flex-col py-2 px-3 lg:px-4 space-y-5" id="report">
                <h1 className="text-xl text-purple-400 font-semibold text-center tracking-wide uppercase underline">Yarn Report</h1>
                <div className="w-full h-full space-y-2">
                    {totalWeights.map((threads, index) => (
                        <div key={index} className="w-full grid grid-cols-8 items-center text-sm">
                            <p className="font-medium">{index + 1}.&nbsp;</p>
                            <p className="col-span-4 flex flex-row items-center space-x-1">{threads.name}{threads.subname.includes('Combed') && <p className="col-span-2">(100% Cotton)</p>}</p>
                            <p>&nbsp;-&nbsp;</p>
                            <p className="text-end font-medium">{threads.weight.toFixed(2)}</p>
                            <p className="text-center">Kgs</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Report;
