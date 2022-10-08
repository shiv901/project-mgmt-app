import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "./query/projectMutations";
import { GET_PROJECTS } from "./query/projectQuries";


const DeleteProjectButton = ({ id }) => {
  const navigate = useNavigate()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }]
  })


  return (
    <>
      <button className="btn btn-danger w-25 mt-5 ms-auto" onClick={deleteProject} ><FaTrash className="icon" /> Delete Project!</button>
    </>
  );
}

export default DeleteProjectButton;