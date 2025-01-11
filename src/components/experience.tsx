import React from 'react';

interface ExperienceProps {
    company: string;
    position: string;
    duration: string;
    description: string;
}

const Experience: React.FC<ExperienceProps> = ({ company, position, duration, description }) => {
    return (
        <div>
            <h2>{company}</h2>
            <h3>{position}</h3>
            <p>{duration}</p>
            <p>{description}</p>
        </div>
    );
};

export default Experience;