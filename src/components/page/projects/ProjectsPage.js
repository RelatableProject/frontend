import React, {useState} from 'react';
import ProjectsGrid from "./ProjectsGrid";
import ProjectDetailHead from "./ProjectDetailHead";

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <div>
            <ProjectsGrid setSelectedProject={setSelectedProject}/>
            {
                selectedProject && <ProjectDetailHead selectedProject={selectedProject}/>
            }
        </div>
    );
};

export default ProjectsPage;
