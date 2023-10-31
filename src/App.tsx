import './App.css';

import React, { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Item } from './components/note/item';
import { Note } from './types';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [note, setNote] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleAddClick = () => {
    if (note) {
      setNotes([...notes, { data: note, id: uuid() }]);
      setNote('');
    }

    clearInput();
  };

  return (
    <div className="main-container">
      <input
        className="note-input"
        placeholder="Enter your note"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button className="add-button" onClick={handleAddClick}>
        Add Note
      </button>
      {notes.map((props) => (
        <Item {...props} key={props.id} />
      ))}
    </div>
  );
}

export default App;
