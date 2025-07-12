import React, { useEffect, useRef, useState } from 'react'

type Props = {
    initialProgress?: number;
    onProgressChange?: (progress: number) => void;
    widthClass?: string;
}

const Bar = ({
        initialProgress = 0,
        onProgressChange,
        widthClass = 'w-3xs',
    }: Props) => {
    const barRef = useRef<HTMLDivElement | null>(null);
    const [dragging, setDragging] = useState(false);
    const [progress, setProgress] = useState(initialProgress || 0);

    useEffect(() => {
        if(!dragging) {
            setProgress(initialProgress || 0);
        }
    }, [dragging, initialProgress]);

    useEffect(() => {
        const barElement = barRef.current;
        if (!barElement) return;
    
        const handleMouseUp = (e: MouseEvent) => {
            if (!barRef.current) return;
            if (onProgressChange) {
                onProgressChange(progress);
            }
            setDragging(false);
        };
    
        const handleMouseMove = (e: MouseEvent) => {
            if (dragging && barRef.current) {
                const rect = barRef.current.getBoundingClientRect();
                const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
                setProgress(percent * 100);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [barRef, dragging, progress, onProgressChange]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (barRef.current) {
            const rect = barRef.current.getBoundingClientRect();
            const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
            setProgress(percent * 100);
            if (onProgressChange) {
                onProgressChange(percent * 100);
            }
        }
    };

    const handleMouseDown = () => {
        setDragging(true);
    };

    return (
        <div
            ref={barRef}
            onClick={handleClick}
            className={`relative ${widthClass} h-1 bg-neutral-700 rounded cursor-pointer select-none group`}
        >
            <div
                className={`absolute top-0 left-0 h-full bg-[#f9e16a] rounded`}
                style={{ width: `${progress}%` }}
            />

            <div
                onMouseDown={handleMouseDown}
                className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg group-hover:opacity-100 ${dragging ? 'opacity-100' : 'opacity-0'}`}
                style={{ left: `calc(${progress}% - 0.5rem)` }}
            />
        </div>
    )
}

export default Bar