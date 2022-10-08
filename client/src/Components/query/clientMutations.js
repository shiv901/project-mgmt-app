import { gql } from '@apollo/client'

// * Add Client
const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name:$name,email:$email,phone:$phone){
      id name email phone
    }
  }
` 
// * Delete Client
const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!){
    deleteClient(id:$id) {
      id name
    }
  }
`

export { ADD_CLIENT, DELETE_CLIENT }