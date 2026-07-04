import { ResourceCard } from "./resource-card";

interface Resource {
  id: string;
  title: string;
  description?: string | null;
  url: string;
  type: string;
}

interface ResourceGridProps {
  resources: Resource[];
}

export function ResourceGrid({
  resources,
}: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <div className="mb-4 text-6xl">
          📚
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          No Resources Yet
        </h2>

        <p className="mt-2 text-slate-500">
          Save useful websites, GitHub
          repositories, videos and PDFs
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={
            resource.description
          }
          url={resource.url}
          type={resource.type}
        />
      ))}
    </div>
  );
}