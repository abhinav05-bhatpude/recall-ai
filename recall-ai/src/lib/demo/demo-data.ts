export const demoFolders = [
  {
    id: "frontend",
    name: "Frontend",
  },
  {
    id: "backend",
    name: "Backend",
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
  },
];

export const demoNotes = [
  {
    id: "1",
    title: "React Hooks",
    content:
      "React Hooks allow functional components to manage state and lifecycle without using classes.",
    folderId: "frontend",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "REST API Best Practices",
    content:
      "Use proper HTTP methods, validation, authentication and meaningful status codes.",
    folderId: "backend",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Prompt Engineering",
    content:
      "Clear prompts with context and constraints produce better AI responses.",
    folderId: "ai",
    createdAt: new Date(),
  },
];

export const demoResources = [
  {
    id: "1",
    title: "React Documentation",
    url: "https://react.dev",
    type: "Website",
    description: "Official React documentation.",
  },
  {
    id: "2",
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    type: "Website",
    description: "Official Next.js documentation.",
  },
];