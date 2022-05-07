import React from "react";

const Projects = ({ projects }) => {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-2">Projects</h3>
            <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                {projects.map((project) => (
                    <div key={project.id} className="card mb-2 p-3">
                        <p>
                            <b>Name: </b>
                            {project.name}
                        </p>
                        <p>
                            <b>Link: </b>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={project.github}>
                                {project.github}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

export async function getServerSideProps(context) {
    const response = await fetch(
        `http://localhost:5000/profile/${context.params.id}`
    );
    const result = await response.json();
    return {
        props: {
            projects: result.projects,
        },
    };
}
