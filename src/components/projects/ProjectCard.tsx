type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      {/* Project image */}
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project details */}
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="text-sm leading-6 text-zinc-400">{description}</p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Live Demo ↗
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
