import React, { useEffect, useState } from 'react';
import { Data, ThreadWeight } from '../../types';
import Header from '../components/Header';
import Report from '../components/Report';
import ThreadDetails from '../components/ThreadDetails';

const Home = () => {
    const data: Data[] = [
        {
            name: '2 Thread loop kit',
            threads: [
                { name: <p>24<sup>s</sup> Combed</p>, subname: '24s Combed', value: 70 },
                { name: <p>20<sup>s</sup> Combed</p>, subname: '20s Combed', value: 30 }
            ],
            totalWeight: 260,
        },
        {
            name: 'Lycra rib',
            threads: [
                { name: <p>24<sup>s</sup> Combed</p>, subname: '24s Combed', value: 97 },
                { name: <p>40 DNR Lycra</p>, subname: '40 DNR Lycra', value: 3 }
            ],
            totalWeight: 86,
        },
        {
            name: 'S/Jersey',
            threads: [
                { name: <p>24<sup>s</sup> Combed</p>, subname: '24s Combed', value: 100 }
            ],
            totalWeight: 5,
        }
    ];

    const [clothColor, setClothColor] = useState("black");
    const pieces = clothColor === "black" ? 1500 : 1000;
    const [totalWeights, setTotalWeights] = useState<ThreadWeight[]>([]);

    const getWeight = (weight: number, percent: number) => {
        return weight * percent / 100;
    }

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setClothColor(event.target.value);
    };

    const getReportDetails = () => {
        data.map((item) => {
            item.threads.map((thread) => {
                const threadWeight = getWeight(item.totalWeight, thread.value) * pieces / 1000;
                const newThread = { name: thread.name, subname: thread.subname, weight: threadWeight };

                setTotalWeights((prevWeights) => {
                    const existingThread = prevWeights.find(t => t.subname === thread.subname);
                    if (existingThread) {
                        return prevWeights.map(t =>
                            t.subname === thread.subname
                                ? { ...t, weight: t.weight + threadWeight }
                                : t
                        );
                    } else {
                        return [...prevWeights, newThread];
                    }
                });
            });
        });
    };

    useEffect(() => {
        setTotalWeights([]);
        getReportDetails();
    }, [clothColor]);

    return (
        <div className="h-screen w-screen flex flex-row justify-around items-center py-4 select-none">
            <div className="w-[55%] h-full flex flex-col items-start">
                <Header clothColor={clothColor} handleColorChange={handleColorChange} />
                <ThreadDetails data={data} pieces={pieces} getWeight={getWeight} />
            </div>
            <div className="w-[0.1px] h-full bg-slate-400" />
            <div className="w-[40%] px-3 h-full bg-white">
                <Report totalWeights={totalWeights} />
            </div>
        </div>
    );
}

export default Home;
