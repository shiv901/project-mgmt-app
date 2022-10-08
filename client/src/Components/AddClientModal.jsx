import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "./query/clientMutations";
import { GET_CLIENTS } from "./query/clientsQueries";


const AddClientModal = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {name, email, phone},
    refetchQueries: [{query: GET_CLIENTS}]
  })


  const onSubmit = (e) => {
    e.preventDefault()
    
    if(name === '' || email === '' || phone === '') return alert('Please fill all fields')

    addClient(name,email,phone)

    setName('')
    setEmail('')
    setPhone('')
  } 

  return (
    <>
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
        <div className="d-flex align-items-center">
          <FaUser className="icon"/>
          <div>Add Client</div>
        </div>
      </button>

      <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModalLabel">Add Client</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Phone</label>
                  <input type="text" id="phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>

                <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClientModal;