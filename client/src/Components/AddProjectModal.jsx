import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { GET_CLIENTS } from "./query/clientsQueries";
import { ADD_PROJECT } from "./query/projectMutations";
import { GET_PROJECTS } from "./query/projectQuries";


const AddProjectModal = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('new')
  const [clientId, setClientId] = useState('')

  // Add Project
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    refetchQueries: [{ query: GET_PROJECTS }]
  })

  // Get Clients
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) return null
  if (error) return <p>Something went wrong! Can't fetch Clients</p>



  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || description === '' || status === '') return alert('Please fill all fields')

    addProject(name, description, status, clientId)

    setName('')
    setDescription('')
    setStatus('new')
    setClientId('')
  }

  return (
    <>
      {!loading && !error && (<>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
          <div className="d-flex align-items-center">
            <FaList className="icon" />
            <div>New Project</div>
          </div>
        </button>

        <div className="modal fade" id="addProjectModal" aria-labelledby="addProjectModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProjectModalLabel">New Project</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <input id="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Status</label>
                    <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} >
                      <option value="new">Not Started</option>
                      <option value="progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Clients</label>
                    <select id="clientId" className="form-select" value={clientId} onChange={(e) => setClientId(e.target.value)} >
                      <option value="new">Select</option>
                      {data.clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
                    </select>
                  </div>

                  <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal" >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>)}

    </>
  );
}

export default AddProjectModal;