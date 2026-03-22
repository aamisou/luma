import React from 'react';
import CreatureAnimated from './CreatureAnimated';
import MoodSelector from './MoodSelector';

const HomeScreen = () => {
    return (
        <div>
            <h1>Home Screen</h1>
            <CreatureAnimated />
            <MoodSelector />
        </div>
    );
};

export default HomeScreen;