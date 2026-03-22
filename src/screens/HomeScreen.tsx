import React from 'react';
import CreatureAnimated from '../components/CreatureAnimated';
import MoodSelector from '../components/MoodSelector';

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