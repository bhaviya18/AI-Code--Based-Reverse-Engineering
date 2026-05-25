import dayjs from "dayjs";
import PropTypes from 'prop-types';

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');
  
    return (
        <div className="mx-40 mb-10 ">
            <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg transform transition-transform duration-200 ease-out hover:scale-105 hover:border-blue-500">
                <div className="flex flex-col items-start gap-3 ">
                    <h1>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                    <div className="flex items-center gap-2">
                        {props.skills.map((skill) => (
                            <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black transition-all hover:bg-black hover:text-white">{skill}</p>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">Posted {diffInDays} days ago</p>
                    <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                        <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md transition hover:bg-blue-500 hover:text-white">Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    postedOn: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    job_link: PropTypes.string.isRequired
};

export default JobCard;
