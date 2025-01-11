import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
};

export default Project;