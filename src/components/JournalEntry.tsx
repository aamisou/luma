import React, { useState } from 'react';

const JournalEntry = () => {
    const [entryText, setEntryText] = useState('');
    const [entryDate, setEntryDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSave = () => {
        console.log('Entry saved:', { date: entryDate, content: entryText });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Journal Entry</h2>
            <input type="date" value={entryDate} onChange={(e) => setEntryDate(e.target.value)} style={{ marginBottom: '10px', padding: '5px' }} />
            <textarea value={entryText} onChange={(e) => setEntryText(e.target.value)} placeholder="Write your thoughts here..." style={{ width: '100%', height: '200px', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', }} />
            <button onClick={handleSave} style={{ padding: '10px 20px', cursor: 'pointer' }}> Save Entry </button>
        </div>
    );
};

export default JournalEntry;