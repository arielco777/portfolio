import Project, { ProjectType } from "./Project";

const Personal: React.FC<{ projects: ProjectType[] }> = ({ projects }) => {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    paragraph={project.paragraph}
                    images={project.images}
                    flip={project.flip}
                    link={project.link}
                    linkTitle={project.linkTitle}
                />
            ))}
        </div>
    );
};

export default Personal;
