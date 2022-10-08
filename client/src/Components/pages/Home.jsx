import AddClientModal from "../AddClientModal";
import AddProjectModal from "../AddProjectModal";
import Clients from "../Clients";
import Projects from "../Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3">
        <AddClientModal />
        <AddProjectModal />

      </div>

      <Projects />
      <hr />

      <h3 className="text-center text-decoration-underline mt-5">Client Info</h3>
      <Clients />
    </>
  );
}

export default Home;