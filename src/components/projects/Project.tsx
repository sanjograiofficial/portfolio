
import ProjectCard from "./ProjectCard";
import projects from "./projects";

const Project = () => {
  return (
    <div className="w-screen my-2 flex min-h-screen flex-col items-center p-4 bg-gray-700/50">
      <h1 className="mb-8 text-5xl font-bold">
        My projects:
      </h1>

      <div className="w-full flex-1 overflow-y-auto">
        <ul className="grid grid-cols-1 items-start justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((el) => (
            <li key={el.id} className="min-w-0">
              <ProjectCard
                title={el.title}
                description={el.description}
                image={el.image}
                technologies={el.technologies}
                liveUrl={el.liveUrl}
                githubUrl={el.githubUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
