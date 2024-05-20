import React, { useState } from "react";
import SectionFrame from "../SectionFrame";
import Modal from "../Modal";
import projects from "./variants";
import github from "../../assets/ProjectsOverview/github.svg";
import newWindow from "../../assets/ProjectsOverview/new-window.svg";

const ProjectsOverview = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project, e) => {
        if (e.target.classList.contains("projects-overview__img")) {
            return;
        }
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
                            onClick={(e) => openModal(project, e)}
                        >
                            <img src={project.src} alt={project.name} />

                            <h3>{project.name}</h3>
                            <div className="projects-overview__icons">
                                {project.github && (
                                    <a href={project.github}>
                                        <img
                                            className="projects-overview__img"
                                            src={github}
                                            alt="github link"
                                        />
                                    </a>
                                )}
                                {project.url && (
                                    <a href={project.url}>
                                        <img
                                            className="projects-overview__img"
                                            src={newWindow}
                                            alt="open project in new window"
                                        />
                                    </a>
                                )}
                            </div>

                            <div
                                className="projects-overview__description-short"
                                dangerouslySetInnerHTML={{
                                    __html: `${project.description}`,
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
                            {selectedProject.url && (
                                <iframe
                                    src={selectedProject.url}
                                    title={selectedProject.name}
                                    width="100%"
                                    height="500px"
                                    frameBorder="0"
                                />
                            )}
                            <div
                                className="projects-overview__description-long"
                                dangerouslySetInnerHTML={{
                                    __html: selectedProject.description,
                                }}
                            ></div>
                        </Modal>
                    )}{" "}
                </div>
            </SectionFrame>
        </div>
    );
};

export default ProjectsOverview;
