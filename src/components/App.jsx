import { useState } from 'react';
import AddSkill from './AddSkill.jsx';
import SkillList from './SkillList.jsx';
import AddEducation from './AddEducation.jsx';
import EducationList from './EducationList.jsx';
import GeneralInfo from './General.jsx';
import AddJob from './AddJob.jsx';
import JobList from './JobList.jsx';
import Resume from './resume.jsx';
import './App.css'

export default function App() {
    const [person, setPerson] = useState({
        fullName: 'Barbara Hepworth',
        address: '4121 30th street',
        location: 'Kenowhere, WI 53144',
        phoneNumber: '(210) 455-3777',
        email: 'bhepworth@gmail.com',
        id: 1
      });

  const [isGeneralFormVisible, setIsGeneralFormVisible] = useState(false);

  const toggleGeneralFormVisibility = () => {
    if(isGeneralFormVisible === false) {
        setIsEducationVisible(false)
        setIsSkillFormVisible(false)
        /*setIsJobVisble(false)*/
    }
    setIsGeneralFormVisible(!isGeneralFormVisible);
  };

  /*Logic for skills*/
  const [skills, setSkills] = useState(initialSkills);
  const [isSkillFormVisible, setIsSkillFormVisible] = useState(false);

  function handleAddSkill(text) {
    setSkills([
      ...skills,
      {
        id: nextSkillId++,
        text: text,
      },
    ]);
  }

  function handleChangeSkill(skill) {
    setSkills(
      skills.map((t) => {
        if (t.id === skill.id) {
          return skill;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteSkill(skillId) {
    setSkills(skills.filter((t) => t.id !== skillId));
  }

  const toggleSkillFormVisibility = () => {
    if(isSkillFormVisible === false) {
        setIsEducationVisible(false)
        setIsGeneralFormVisible(false)
        setIsJobVisible(false)
    }
    setIsSkillFormVisible(!isSkillFormVisible);
  };

   /*Logic for education*/
   const [educations, setEducations] = useState(initialEducations);
   const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
   const [isEducationButtonVisible, setIsEducationButtonVisible] = useState(true);
   const [isEducationVisible, setIsEducationVisible] = useState(false);
   const [isEducationActive,setisEducationActive] = useState(true);

   /*Toggle Forms Depending on what is opened */
   const toggleEducationVisibility = () => {
    if(isEducationVisible === false) {
        setIsGeneralFormVisible(false)
        setIsSkillFormVisible(false)
        setIsJobVisible(false)
    }
     setIsEducationVisible(!isEducationVisible);
     setIsEducationButtonVisible(true);
     setisEducationActive(true);
   };

const toggleEducationFormVisibility = () => {
    {isEducationFormVisible ? setisEducationActive(true) : setisEducationActive(false)}
    setIsEducationFormVisible(!isEducationFormVisible);
  };

   function hideEducationForm(i) {
    {i == false ? setIsEducationFormVisible(i) : null}
    setIsEducationButtonVisible(i);
   }

   function changeEducationActive(i) {
    setisEducationActive(i);    
 }

 /*Handle button clicks for education*/
   function handleAddEducation(mySchool) {
    {mySchool.endDate === '' ? mySchool.endDate = 'current' : null}
     setEducations([
       ...educations,
       {
         id: nextEducationId++,
         school: mySchool.school,
         degree: mySchool.degree,
         startDate: mySchool.startDate,
         endDate: mySchool.endDate
       },
     ]);
   }

   function handleChangeEducation(education) {
     setEducations(
       educations.map((t) => {
         if (t.id === education.id) {
           return education;
         } else {
           return t;
         }
       })
     );
   }

   function handleDeleteEducation(educationId) {
     setEducations(educations.filter((t) => t.id !== educationId));
   }

      /*Logic for jobs*/
      const [jobs, setJobs] = useState(initialJobs);
      const [isJobFormVisible, setIsJobFormVisible] = useState(false);
      const [isJobButtonVisible, setIsJobButtonVisible] = useState(true);
      const [isJobVisible, setIsJobVisible] = useState(false);
      const [isJobActive,setisJobActive] = useState(true);
   
      /*Toggle Forms Depending on what is opened */
      const toggleJobVisibility = () => {
       if(isJobVisible === false) {
           setIsGeneralFormVisible(false)
           setIsSkillFormVisible(false)
           setIsEducationVisible(false)
       }
        setIsJobVisible(!isJobVisible);
        setIsJobButtonVisible(true);
        setisJobActive(true);
      };
   
   const toggleJobFormVisibility = () => {
       {isJobFormVisible ? setisJobActive(true) : setisJobActive(false)}
       setIsJobFormVisible(!isJobFormVisible);
     };
   
      function hideJobForm(i) {
       {i == false ? setIsJobFormVisible(i) : null}
       setIsJobButtonVisible(i);
      }
   
      function changeJobActive(i) {
       setisJobActive(i);    
    }
   
    /*Handle button clicks for education*/
      function handleAddJob(myJob) {
       {myJob.endDate === '' ? myJob.endDate = 'current' : null}
        setJobs([
          ...jobs,
          {
            id: nextJobId++,
            employer: myJob.employer,
            title: myJob.title,
            startDate: myJob.startDate,
            endDate: myJob.endDate,
            responsibility: myJob.responsibility,
            responsibilityTwo: myJob.responsibilityTwo,
            responsibilityThree: myJob.responsibilityThree
          },
        ]);
      }
   
      function handleChangeJob(job) {
        setJobs(
          jobs.map((t) => {
            if (t.id === job.id) {
              return job;
            } else {
              return t;
            }
          })
        );
      }
   
      function handleDeleteJob(jobId) {
        setJobs(jobs.filter((t) => t.id !== jobId));
      }
 
  return (
    <div className='mainContainer'>
        <div className='infoContainer'>
            <div className='skillContainer'>
                <div className='skillHeader'>
                    <h1>General Information</h1>
                    <button className = 'genButton' onClick={toggleGeneralFormVisibility}>
                        {isGeneralFormVisible ? '▲' : '▼'}
                    </button>
                </div>
                <div className='skillBody'>
                    {isGeneralFormVisible && (
                        <GeneralInfo
                         person={person}
                         setPerson={setPerson}
                        />
                    )}
                </div>
            </div>
            <div className='skillContainer'>
                <div className='skillHeader'>
                    <h1>Education</h1>
                    <button className = 'eduButton' onClick={toggleEducationVisibility}>
                        {isEducationVisible ? '▲' : '▼'}
                    </button>
                </div> 
                {isEducationVisible && (
                <div className='skillBody'>
                    {isEducationFormVisible && (
                        <AddEducation 
                        onAddEducation={handleAddEducation}
                        hideEducationForm={hideEducationForm}
                     />
                    )}
                    {isEducationButtonVisible && (
                        <button className = 'addButton' onClick={toggleEducationFormVisibility}>
                            {isEducationFormVisible ? 'Cancel' : 'Add School'}
                        </button>
                    )}
                    <EducationList
                    educations={educations}
                    hideEducationForm={hideEducationForm}
                    isEducationActive={isEducationActive}
                    changeEducationActive={changeEducationActive}
                    onChangeEducation={handleChangeEducation}
                    onDeleteEducation={handleDeleteEducation}
                    />
                </div>
            )}
            </div>
            <div className='skillContainer'>
                <div className='skillHeader'>
                    <h1>Job Experience</h1>
                    <button className = 'genButton' onClick={toggleJobVisibility}>
                        {isJobVisible ? '▲' : '▼'}
                    </button>
                </div> 
                {isJobVisible && (
                <div className='skillBody'>
                    {isJobFormVisible && (
                        <AddJob 
                        onAddJob={handleAddJob}
                        hideJobForm={hideJobForm}
                     />
                    )}
                    {isJobButtonVisible && (
                        <button className = 'addButton' onClick={toggleJobFormVisibility}>
                            {isJobFormVisible ? 'Cancel' : 'Add Job'}
                        </button>
                    )}
                    <JobList
                    jobs={jobs}
                    hideJobForm={hideJobForm}
                    isJobActive={isJobActive}
                    changeJobActive={changeJobActive}
                    onChangeJob={handleChangeJob}
                    onDeleteJob={handleDeleteJob}
                    />
                </div>
            )}
            </div>
            <div className='skillContainer'>
                <div className='skillHeader'>
                    <h1>Skills</h1>
                    <button className = 'eduButton' onClick={toggleSkillFormVisibility}>
                        {isSkillFormVisible ? '▲' : '▼'}
                    </button>
                </div> 
                {isSkillFormVisible && (
                <div className='skillBody'>
                    <AddSkill 
                    onAddSkill={handleAddSkill} />
                    <SkillList
                    skills={skills}
                    onChangeSkill={handleChangeSkill}
                    onDeleteSkill={handleDeleteSkill}
                    />
                </div>
            )}
            </div>
        </div>    
        <Resume
        person={person}
        skills={skills}
        educations={educations}
        jobs={jobs} 
        />
    </div>
);
}

let nextSkillId = 6;
const initialSkills = [
  {id: 0, text: 'CSS'},
  {id: 1, text: 'HTML'},
  {id: 2, text: 'Javascript'},
  {id: 3, text: 'React'},
  {id: 4, text: 'Customer Service'},
  {id: 5, text: 'Problem-Solving'},
];

let nextEducationId = 2;
const initialEducations = [
  {id: 0, school: 'UW Whitewater', degree: 'Bachelors of Mathematics', startDate: '2000-09-04', endDate: '2004-04-15'},
  {id: 1, school: 'UW Madison', degree: 'Master of Science in CS', startDate: '2004-09-07', endDate: '2007-04-17'}
];

let nextJobId = 3;
const initialJobs = [
    {employer: 'Google', title: 'Lead Web Developer', startDate: '2000-04-14', endDate: '2010-04-14', responsibility: 'Lead developer that helped implement websites.', responsibilityTwo: 'Taught the CS department react to make more streamlined websites', responsibilityThree: 'Helped code some AI programs to help with efficiency', id: 1 }, 
    {employer: 'Microsoft', title: 'Senior developer', startDate: '2010-04-15', endDate: '2020-04-14', responsibility: "Collaborated on Microsoft's website.", responsibilityTwo: 'Part of the team that maintained Microsoft office', responsibilityThree: 'Worked on the database using SQL' , id: 2 }, 
    {employer: 'McDonalds', title: 'Cashier', startDate: '2020-04-15', endDate: '2024-09-15', responsibility: 'Worked the cash register', responsibilityTwo: 'Cleaned the bathrooms is another responsibility I had', responsibilityThree: 'Helped train other associates so that they could actually get the order right', id: 3 }, 
  ]

