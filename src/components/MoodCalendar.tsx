import React from 'react';
import './MoodCalendar.css';

const MoodCalendar = ({ moodData }) => {
    const renderDays = () => {
        const days = [];
        let currentDate = new Date();
        for (let i = 0; i < 30; i++) {
            const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
            const mood = moodData[day.toISOString().split('T')[0]];
            const color = mood ? moodColors[mood] : 'transparent';
            days.push(
                <div key={i} className="day" style={{ backgroundColor: color }}>
                    {day.getDate()}
                </div>
            );
        }
        return days;
    };

    const moodColors = {
        happy: 'lightgreen',
        sad: 'lightblue',
        angry: 'red',
        neutral: 'lightgray',
    };

    return (
        <div className="mood-calendar">
            <h2>Mood Calendar</h2>
            <div className="calendar-grid">
                {renderDays()}
            </div>
        </div>
    );
};

export default MoodCalendar;