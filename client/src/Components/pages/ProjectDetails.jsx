import React, { Suspense, useState } from 'react'
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../query/projectQuries";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Spinner from "../Spinner";
import ClientInfo from "../ClientInfo";
import DeleteProjectButton from "../DeleteProjectButton";
// import UpdateProjectForm from '../UpdateProjectForm';
const UpdateProjectForm = React.lazy(() => import("../UpdateProjectForm"));


const ProjectDetails = () => {
  const { id } = useParams()
  const [update, setUpdate] = useState(false)

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  })

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong! Can't fetch this Project</p>

  const hideUpdateForm = () => setUpdate(false)

  return (
    <>
      <div className="mx-auto w-75 card p-5">
        <Link to="/" className="btn btn-light ms-auto v-align-center"><BsFillArrowLeftCircleFill /> Back</Link>
        <h2>Project Name: {data.project.name}</h2>
        <p>Description: {data.project.description}</p>
        <span className="mt-5">Status: <b>{data.project.status}</b></span>

        <ClientInfo client={data.project.client} />

        {!update && <div className='mt-5 text-end'>
          <button onClick={() => setUpdate(true)} className="btn btn-secondary ms-auto">Edit Project Details</button>
        </div>}

        {update && <Suspense fallback="Loading...">
          <UpdateProjectForm project={data.project} hideUpdateForm={hideUpdateForm} />
        </Suspense>}

        <DeleteProjectButton id={id} />
      </div>
    </>
  );
}

export default ProjectDetails;