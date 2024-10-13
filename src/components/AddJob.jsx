import { useState } from 'react';

export default function AddJob({onAddJob, hideJobForm} ) {
  const [myJob, setMyJob] = useState({id: '', employer: '', title: '', startDate: '', endDate: '', responsibility: '', responsibilityTwo: '', responsibilityThree: ''});
  const handleAddJob = (e) => {
    e.preventDefault();
    onAddJob(myJob);
    setMyJob({id: '', employer: '', title: '', startDate: '', endDate: '', responsibility: '', responsibilityTwo: '', responsibilityThree: ''});
    hideJobForm(false);
  }

  return (
    <form onSubmit={(e) => handleAddJob(e)}>
      <label>Employer</label>
      <input
        required
        placeholder="Employer"
        value={myJob.employer}
        onChange={(e) => setMyJob({id: myJob.id, employer: e.target.value, title: myJob.title, startDate: myJob.startDate, endDate: myJob.endDate, responsibility: myJob.responsibility, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: myJob.responsibilityThree})}
      />
      <label>Title</label>
      <input
        required
        placeholder="Title"
        value={myJob.title}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: e.target.value, startDate: myJob.startDate, endDate: myJob.endDate, responsibility: myJob.responsibility, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: myJob.responsibilityThree})}
      />
      <label>Start Date</label>
      <input
        required
        type='date'
        value={myJob.startDate}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: myJob.title, startDate: e.target.value, endDate: myJob.endDate, responsibility: myJob.responsibility, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: myJob.responsibilityThree})}
      />
      <label>End Date</label>
      <input
        label="End Date"
        type='date'
        value={myJob.endDate}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: myJob.title, startDate: myJob.startDate, endDate: e.target.value, responsibility: myJob.responsibility, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: myJob.responsibilityThree})}
      />
      <label>Key Responsibilities</label>
      <input
        required
        placeholder="Responsibilities"
        value={myJob.responsibility}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: myJob.title, startDate: myJob.startDate, endDate: myJob.endDate, responsibility: e.target.value, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: myJob.responsibilityThree})}
      />
      <input
        placeholder="Responsibilities"
        value={myJob.responsibilityTwo}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: myJob.title, startDate: myJob.startDate, endDate: myJob.endDate, responsibility: myJob.responsibility, responsibilityTwo: e.target.value, responsibilityThree: myJob.responsibilityThree})}
      />
      <input
        placeholder="Responsibilities"
        value={myJob.responsibilityThree}
        onChange={(e) => setMyJob({id: myJob.id, employer: myJob.employer, title: myJob.title, startDate: myJob.startDate, endDate: myJob.endDate, responsibility: myJob.responsibility, responsibilityTwo: myJob.responsibilityTwo, responsibilityThree: e.target.value})}
      />
      <input type="submit" value="Submit"/>
    </form>
  );
}