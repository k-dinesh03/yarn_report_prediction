import React from 'react';
import { IoShirt, IoShirtOutline } from "react-icons/io5";
import { Data } from '../../types';
import ThreadItem from './ThreadItem';

interface ThreadDetailsProps {
    data: Data[];
    pieces: number;
    getWeight: (weight: number, percent: number) => number;
}

const ThreadDetails: React.FC<ThreadDetailsProps> = ({ data, pieces, getWeight }) => {
    return (
        <div className="w-full h-full flex flex-col justify-around lg:justify-evenly">
            {data.map((item, index) => (
                <div className="flex flex-col w-full items-center justify-center space-y-3 relative" key={index}>
                    <div className="space-y-7 flex flex-col w-full items-center justify-center">
                        <div className="w-11/12 lg:w-10/12 flex flex-row items-center justify-center relative">
                            <div className="w-full absolute z-40 flex flex-col items-center">
                                <IoShirtOutline size={40} color="black" />
                            </div>
                            <div className="h-[0.1px] w-full absolute -z-40 bg-slate-300" />
                            <div className="w-full flex flex-row justify-between h-9 px-[2px]">
                                {item.threads.map((thread, index) => (
                                    <ThreadItem key={index} thread={thread} totalWeight={item.totalWeight} getWeight={getWeight} />
                                ))}
                            </div>
                            <div className="absolute -z-20 bg-white">
                                <p className="tracking-wider font-bold text-[70px] text-slate-100">{pieces}</p>
                            </div>
                        </div>
                        <div className="w-1/3 lg:w-[26%]">
                            {item.threads.map((thread, index) => (
                                <div className="flex flex-row items-center justify-between" key={index}>
                                    <IoShirt />
                                    <p className="font-medium text-sm text-secondary">{thread.name}</p>
                                    <p className="font-medium text-sm text-secondary">-</p>
                                    <p className="font-medium text-sm text-secondary">{thread.value}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="font-semibold tracking-wider text-purple-500">{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ThreadDetails;
