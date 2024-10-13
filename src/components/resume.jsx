import './resumestyle.css'

export default function Resume({person, skills, educations, jobs}) {
    return(
        <div className='resume'>
            <div className='genInfo'>
                <div className='myName'>{person.fullName}</div>
                <div className='address'>
                    <div>{person.address}</div>
                    <div>{person.location}</div>
                </div>
                <>{person.phoneNumber}{' - '}{person.email}</>
            </div>
            <div className='resumeSection'>
                <div className='resumeTitle'>{'Skills'}</div>
                <ul className='mySkills'>
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <span className='skillName'>{'• '}{skill.text}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className='resumeTitle'>{'Job Experience'}</div>
            <div className='jobSection'>
                {jobs.map((job) => (
                    <div className='resumeJob' key={job.id}>
                        <span className='jobName'>{job.employer}{' - '}{job.title}</span>
                        <span className='jobInfo'>{job.startDate}{' - '}{job.endDate}</span>
                        <span className='jobInfo'>{'• '}{job.responsibility}</span>
                        <span className='jobInfo'>{'• '}{job.responsibilityTwo}</span>
                        <span className='jobInfo'>{'• '}{job.responsibilityThree}</span>
                    </div>
                ))}
            </div>
            <div className='resumeTitle'>{'Education'}</div>
            <div className='lastSection'>
                {educations.map((education) => (
                    <div className='resumeEducation' key={education.id}>
                        <span className='schoolName'>{education.school}</span>
                        <span className='schoolInfo'>{education.startDate}{' - '}{education.endDate}</span>
                        <span className='schoolInfo'>{education.degree}</span>
                    </div>
                ))}
            </div> 
        </div>
    )
}


