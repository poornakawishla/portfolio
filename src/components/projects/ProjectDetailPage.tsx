import React from "react";
import { useParams } from "react-router-dom";
import { featuredProjects, additionalProjects } from "../../data/projectsData";

const ProjectDetailPage: React.FC = () => {
  const { category, slug } = useParams();
  const allProjects = [...featuredProjects, ...additionalProjects];
  const project = allProjects.find(
    (p) => p.category.replace(/\s/g, "-").toLowerCase() === category && p.title.replace(/\s/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "") === slug
  );

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.fullDescription}</p>
      {/* Add more project details as needed */}
    </div>
  );
};

export default ProjectDetailPage;