import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <div className="text-center mt-5">
        <h2><strong>404!</strong> Sorry, Page not found</h2>
        <Link className='btn btn-secondary mt-4' to="/">Back to Home Page</Link>
      </div>
    </>
  );
}

export default NotFound;