import React, { useState } from 'react';

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = ['happy', 'sad', 'anxious', 'calm', 'mixed'];

  return (
    <div>
      <h1>Select Your Mood</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {moods.map(mood => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: selectedMood === mood ? 'lightblue' : 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            {mood}
          </button>
        ))}
      </div>
      {selectedMood && <p>You selected: {selectedMood}</p>}
    </div>
  );
};

export default MoodSelector;