import { useState } from 'react';

export default function SkillList({skills, onChangeSkill, onDeleteSkill}) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          <Skill skill={skill} onChange={onChangeSkill} onDelete={onDeleteSkill} />
        </li>
      ))}
    </ul>
  );
}

function Skill({skill, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let skillContent;
  if (isEditing) {
    skillContent = (
      <>
        <input
          value={skill.text}
          onChange={(e) => {
            onChange({
              ...skill,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    skillContent = (
      <>
        {skill.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      {skillContent}
      <button onClick={() => onDelete(skill.id)}>Delete</button>
    </label>
  );
}