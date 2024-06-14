// ThreadItem.tsx
import React from 'react';
import { Thread } from '../../types';

interface ThreadItemProps {
    thread: Thread;
    totalWeight: number;
    getWeight: (weight: number, percent: number) => number;
}

const ThreadItem: React.FC<ThreadItemProps> = ({ thread, totalWeight, getWeight }) => {
    return (
        <div className={`flex flex-row h-full ${thread.value % 2 === 0 ? 'items-start' : 'items-end'}`}>
            <p className="tracking-wider font-medium text-xs text-secondary">{thread.name}</p>
            <p className="tracking-wider font-medium text-xs text-secondary">&nbsp;-&nbsp;</p>
            <p className="tracking-wider font-medium text-xs text-secondary">{getWeight(totalWeight, thread.value)}gm</p>
        </div>
    );
}

export default ThreadItem;
