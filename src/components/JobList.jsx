import { useState } from 'react';
import { format } from 'date-fns';
import './App.css'

export default function JobList({jobs, onChangeJob, onDeleteJob, hideJobForm, isJobActive, changeJobActive}) {
   
    return (
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Job job={job} onChange={onChangeJob} onDelete={onDeleteJob} hideJobForm={hideJobForm} isJobActive={isJobActive} changeJobActive={changeJobActive} />
          </li>
        ))}
        
      </ul>
    );
  }

function Job({job, onChange, onDelete, hideJobForm, changeJobActive, isJobActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [jobPlaceholder, setJobPlaceholder] = useState({});
  let jobContent;
  let editJobContent;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false)
    hideJobForm(true);
    changeJobActive(true);
  }

function startEdit() {
    setIsEditing(true);
    setJobPlaceholder(job);
    hideJobForm(false);
    changeJobActive(false);
}

  if (isEditing) {
    editJobContent = (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Employer</label>
        <input 
          type='text'
          value={job.employer}
          onChange={(e) => {
            onChange({
              ...job,
              employer: e.target.value,
            });
          }}
        />
        <label>Title</label>
        <input
          type='text'
          value={job.title}
          onChange={(e) => {
            onChange({
              ...job,
              title: e.target.value,
            });
          }}
        />
        <label>Start Date</label>
        <input
          value={job.startDate}
          onChange={(e) => {
            onChange({
              ...job,
              startDate: e.target.value,
            });
          }}
        />
        <label>End Date</label>
        <input
          value={job.endDate}
          onChange={(e) => {
            onChange({
              ...job,
              endDate: e.target.value,
            });
          }}
        />
        <label>Key Responsibilities</label>
        <input
          type='text'
          value={job.responsibility}
          onChange={(e) => {
            onChange({
              ...job,
              responsibility: e.target.value,
            });
          }}
        />
        <input
          type='text'
          value={job.responsibilityTwo}
          onChange={(e) => {
            onChange({
              ...job,
              responsibilityTwo: e.target.value,
            });
          }}
        />
        <input
          type='text'
          value={job.responsibilityThree}
          onChange={(e) => {
            onChange({
              ...job,
              responsibilityThree: e.target.value,
            });
          }}
        />
        <input type="submit" value="Save"/>
        <button onClick={(e) => {
            onChange({
              ...job,
              school: jobPlaceholder.employer,
              degree: jobPlaceholder.title,
              startDate: jobPlaceholder.startDate,
              endDate: jobPlaceholder.endDate,
              responsibility: jobPlaceholder.responsibility,
              responsibilityTwo: jobPlaceholder.responsibilityTwo,
              responsibilityThree: jobPlaceholder.responsibilityThree
            });
          }}>Cancel</button>
        <button onClick={() => onDelete(job.id)}>Delete</button>
      </form>
      
    );
  } else {
    jobContent = (
        <div className={isJobActive? null : 'jobList'}>
          {job.employer}
          <button onClick={() => startEdit()}>Edit</button>
          <button onClick={() => onDelete(job.id)}>Delete</button>
        </div>
      );
  }
  return (
    <label>
      {editJobContent}
      {jobContent}
    </label>
  );
}