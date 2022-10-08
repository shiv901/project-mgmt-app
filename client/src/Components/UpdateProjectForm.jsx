import { useMutation } from "@apollo/client"
import { useState } from "react"
import { UPDATE_PROJECT } from "./query/projectMutations"

const UpdateProjectForm = ({project, hideUpdateForm}) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState('')

  const [updateProject] = useMutation(UPDATE_PROJECT,{
    variables: {id:project.id, name, description, status},
    // refetchQueries: [{query: GET_PROJECT}]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(name === '' || description === '') alert('Please fill all fields')
    
    updateProject(name, description, status)
    // Hide Update Form
    hideUpdateForm()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5">
        <h3>Update Project</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input id="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default UpdateProjectForm;