import Project, { ProjectType } from "./Project";

const Professional: React.FC<{ projects: ProjectType[] }> = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <Project
                    images={project.images}
                    title={project.title}
                    flip={project.flip}
                    key={project.title}
                    link={project.link}
                    paragraph={project.paragraph}
                />
            ))}
        </>
    );
};

export default Professional;
