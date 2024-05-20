import React, { useState } from "react";
import SectionFrame from "../SectionFrame";
import Modal from "../Modal";
import projects from "./variants";

const ProjectsOverview = ({ id }) => {
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
        <div className="projects-overview" id={id}>
            <SectionFrame section="projects-overview">
                <div className="projects-overview__wrapper">
                    {projects.map((project) => (
                        <div
                            className="projects-overview__thumbnail"
                            key={project.name}
                            onClick={() => openModal(project)}
                        >
                            <img src={project.src} alt={project.name} />
                            <h3>{project.name}</h3>

                            <div
                                className="projects-overview__description"
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            ></div>
                        </div>
                    ))}
                    {/* Modal anzeigen, wenn modalOpen true ist */}
                    {modalOpen && selectedProject && (
                        <Modal onClose={closeModal}>
                            <div className="modal__header">
                                <h1>{selectedProject.name}</h1>
                                <button onClose={closeModal}>X</button>
                            </div>
                            {selectedProject.url ? (
                                <iframe
                                    src={selectedProject.url}
                                    title={selectedProject.name}
                                    width="100%"
                                    height="500px"
                                    frameBorder="0"
                                />
                            ) : (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: selectedProject.description,
                                    }}
                                ></div>
                            )}
                        </Modal>
                    )}{" "}
                </div>
            </SectionFrame>
        </div>
    );
};

export default ProjectsOverview;
