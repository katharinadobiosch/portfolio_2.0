import React, { useState } from "react";
import SectionFrame from "../SectionFrame";
import Modal from "../Modal";

const ProjectsOverview = ({ id }) => {
    const projects = [
        {
            name: "Burger Creator",
            url: "https://katharinadobiosch-burger-builder.netlify.app/",
            src: require("../../assets/ProjectsOverview/burger-creator.png"),
        },
        {
            name: "Adventskalender",
            url: "https://katharinadobiosch-adventcalendar.netlify.app/",
            src: require("../../assets/ProjectsOverview/advent-calendar.png"),
        },
        {
            name: "Freshbnb",
            url: "https://freshbnb.vercel.app",
            src: require("../../assets/ProjectsOverview/freshbnb.png"),
        },
        {
            name: "Press Clippings",
            content: `<p>Press Clippings ist eine Webanwendung, die es ermöglicht, Presseartikel zu verwalten.</p>`,
            src: require("../../assets/ProjectsOverview/freshbnb.png"),
        },
        {
            name: "Petstagram",
            content: `<p></p>`,
            src: require("../../assets/ProjectsOverview/petstagram.png"),
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
        <SectionFrame section="projects-overview">
            <div className="projects-overview" id={id}>
                {projects.map((project) => (
                    <div
                        className="projects-overview__thumbnail"
                        key={project.name}
                        onClick={() => openModal(project)}
                    >
                        <img src={project.src} alt="test" />
                        <h3>{project.name}</h3>
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
                                    __html: selectedProject.content,
                                }}
                            ></div>
                        )}
                    </Modal>
                )}
            </div>
        </SectionFrame>
    );
};

export default ProjectsOverview;
