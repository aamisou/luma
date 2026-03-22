import React, { useEffect, useState } from 'react';
import './CreatureAnimated.css'; // Assuming you have some CSS for animations

const CreatureAnimated = () => {
    const [mood, setMood] = useState('idle'); // idle, happy, sad, anxious, calm
    const [animationClass, setAnimationClass] = useState('idle-animation');

    useEffect(() => {
        const updateAnimation = () => {
            switch(mood) {
                case 'happy':
                    setAnimationClass('happy-animation');
                    break;
                case 'sad':
                    setAnimationClass('sad-animation');
                    break;
                case 'anxious':
                    setAnimationClass('anxious-animation');
                    break;
                case 'calm':
                    setAnimationClass('calm-animation');
                    break;
                case 'mixed':
                    setAnimationClass('mixed-animation');
                    break;
                default:
                    setAnimationClass('idle-animation');
                    break;
            }
        };
        updateAnimation();
    }, [mood]);

    const handleMouseEnter = () => {
        setMood('happy');
    };

    const handleMouseLeave = () => {
        setMood('calm');
    };

    const handleClick = () => {
        const randomMood = ['happy', 'sad', 'anxious', 'calm', 'mixed'][Math.floor(Math.random() * 5)];
        setMood(randomMood);
    };

    return (
        <div className={`creature ${animationClass}`} 
             onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave} 
             onClick={handleClick}>
            <div className="creature-body"></div>
            <div className="creature-eyes"></div>
            <div className="creature-mouth"></div>
        </div>
    );
};

export default CreatureAnimated;