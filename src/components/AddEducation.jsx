import { useState } from 'react';

export default function AddEducation({onAddEducation, hideEducationForm} ) {
  const [mySchool, setMySchool] = useState({id: '', school: '', degree: '', startDate: '', endDate: ''});
  const handleAddSchool = (e) => {
    e.preventDefault();
    onAddEducation(mySchool);
    setMySchool({id: '', school: '', degree: '', startDate: '', endDate: ''});
    hideEducationForm(false);
  }

  return (
    <form onSubmit={(e) => handleAddSchool(e)}>
      <label>School</label>
      <input
        required
        placeholder="Add School"
        value={mySchool.school}
        onChange={(e) => setMySchool({id: mySchool.id, school: e.target.value, degree: mySchool.degree, startDate: mySchool.startDate, endDate: mySchool.endDate})}
      />
      <label>Degree</label>
      <input
        required
        placeholder="Degree"
        value={mySchool.degree}
        onChange={(e) => setMySchool({id: mySchool.id, school: mySchool.school, degree: e.target.value, startDate: mySchool.startDate, endDate: mySchool.endDate})}
      />
      <label>Start Date</label>
      <input
        required
        type='date'
        value={mySchool.startDate}
        onChange={(e) => setMySchool({id: mySchool.id, school: mySchool.school, degree: mySchool.degree, startDate: e.target.value, endDate: mySchool.endDate})}
      />
      <label>End Date</label>
      <input
        label="End Date"
        type='date'
        value={mySchool.endDate}
        onChange={(e) => setMySchool({id: mySchool.id, school: mySchool.school, degree: mySchool.degree, startDate: mySchool.startDate, endDate: e.target.value})}
      />
      <input type="submit" value="Submit"/>
    </form>
  );
}




