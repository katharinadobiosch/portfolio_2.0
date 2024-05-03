import React, { useState } from "react";
import SectionFrame from "../SectionFrame";
import Modal from "../Modal";

const ProjectsOverview = () => {
    const projects = [
        {
            name: "Burger Creator",
            url: "https://katharinadobiosch-burger-builder.netlify.app/",
        },
        {
            name: "Adventskalender",
            url: "https://katharinadobiosch-adventcalendar.netlify.app/",
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <SectionFrame section="personal-projects">
            <div className="projects-overview">
                {projects.map((project) => (
                    <div
                        className="projects-overview__thumbnail"
                        key={project.name}
                        onClick={() => openModal(project)}
                    >
                        <h3>{project.name}</h3>
                    </div>
                ))}
                {/* Modal anzeigen, wenn modalOpen true ist */}
                {modalOpen && selectedProject && (
                    <Modal onClose={closeModal}>
                        <button onClose={closeModal}>Close</button>

                        <h1>{selectedProject.name}</h1>
                        <iframe
                            src={selectedProject.url}
                            title={selectedProject.name}
                            width="100%"
                            height="500px"
                            frameBorder="0"
                        />
                    </Modal>
                )}
            </div>
        </SectionFrame>
    );
};

export default ProjectsOverview;
