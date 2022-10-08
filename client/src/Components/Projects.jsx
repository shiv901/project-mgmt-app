import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "./query/projectQuries";
import Spinner from "./Spinner";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if(loading) return <Spinner />
  if(error) return <p>Something went Wrong! Can't fecth Projects</p>
  
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map(project=><ProjectCard key={project.id} project={project} />)}
       </div>) : (<p>No Projects found</p>)}
    </>
  );
}

export default Projects;