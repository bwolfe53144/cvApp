import { useState } from 'react';

export default function AddSkill({onAddSkill}) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add skill"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddSkill(text);
        }}>
        Add
      </button>
    </>
  );
}

