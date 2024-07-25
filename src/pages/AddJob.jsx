import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Job from "../components/forms/Job";

const AddJob = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const handleAddJobSubmit = (newJob) => {
    addJobSubmit(newJob)
      .then(() => {
        toast.success("Job added successfully");
        navigate("/jobs");
      })
      .catch((error) => {
        toast.error(`Error adding job: ${error.message}`);
      });
  };

  return (
    <Job
      initialData={null}
      onSubmit={handleAddJobSubmit}
      buttonText="Add Job"
    />
  );
};

export default AddJob;
