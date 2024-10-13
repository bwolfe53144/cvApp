import { useState } from 'react';
import './App.css'

export default function EducationList({educations, onChangeEducation, onDeleteEducation, hideEducationForm, isEducationActive, changeEducationActive}) {
   
    return (
      <ul>
        {educations.map((education) => (
          <li key={education.id}>
            <Education education={education} onChange={onChangeEducation} onDelete={onDeleteEducation} hideEducationForm={hideEducationForm} isEducationActive={isEducationActive} changeEducationActive={changeEducationActive} />
          </li>
        ))}
        
      </ul>
    );
  }

function Education({education, onChange, onDelete, hideEducationForm, changeEducationActive, isEducationActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [educationPlaceholder, setEducationPlaceholder] = useState({});
  let educationContent;
  let editEducationContent;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false)
    hideEducationForm(true);
    changeEducationActive(true);
  }

function startEdit() {
    setIsEditing(true);
    setEducationPlaceholder(education);
    hideEducationForm(false);
    changeEducationActive(false);
}

  if (isEditing) {
    editEducationContent = (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>School</label>
        <input 
          type='text'
          value={education.school}
          onChange={(e) => {
            onChange({
              ...education,
              school: e.target.value,
            });
          }}
        />
        <label>Degree</label>
        <input
          type='text'
          value={education.degree}
          onChange={(e) => {
            onChange({
              ...education,
              degree: e.target.value,
            });
          }}
        />
        <label>Start Date</label>
        <input
          type='date'
          value={education.startDate}
          onChange={(e) => {
            onChange({
              ...education,
              startDate: e.target.value,
            });
          }}
        />
        <label>End Date</label>
        <input
          type='date'
          value={education.endDate}
          onChange={(e) => {
            onChange({
              ...education,
              endDate: e.target.value,
            });
          }}
        />
        <input type="submit" value="Save"/>
        <button onClick={(e) => {
            onChange({
              ...education,
              school: educationPlaceholder.school,
              degree: educationPlaceholder.degree,
              startDate: educationPlaceholder.startDate,
              endDate: educationPlaceholder.endDate
            });
          }}>Cancel</button>
        <button onClick={() => onDelete(education.id)}>Delete</button>
      </form>
      
    );
  } else {
    educationContent = (
        <div className={isEducationActive? null : 'educationList'}>
          {education.school}
          <button onClick={() => startEdit()}>Edit</button>
          <button onClick={() => onDelete(education.id)}>Delete</button>
        </div>
      );
  }
  return (
    <label>
      {editEducationContent}
      {educationContent}
    </label>
  );
}