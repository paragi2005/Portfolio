import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
}) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[currentIndex];

            if (!isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length + 1));

                if (displayText === fullText) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length - 1));

                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev: number) => (prev + 1) % texts.length);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="inline-block border-r-2 border-blue-500 pr-1 min-h-[1em]">
            {displayText}
        </span>
    );
};

export default TypingText;
