import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Job from "../components/forms/Job";

const EditJob = ({ getJobById, updateJobSubmit }) => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getJobById(id)
      .then((job) => {
        setInitialData({
          title: job.title,
          type: job.type,
          location: job.location,
          description: job.description,
          salary: job.salary,
          companyName: job.companyName,
          companyDescription: job.companyDescription,
          companyEmail: job.companyEmail,
          companyPhone: job.companyPhone,
        });
      })
      .catch((error) => {
        toast.error(`Error fetching job: ${error.message}`);
      });
  }, [id, getJobById]);

  const handleUpdateJobSubmit = (updatedJob) => {
    updateJobSubmit(id, updatedJob)
      .then(() => {
        toast.success("Job updated successfully");
        navigate("/jobs");
      })
      .catch((error) => {
        toast.error(`Error updating job: ${error.message}`);
      });
  };

  return (
    initialData && (
      <Job
        initialData={initialData}
        onSubmit={handleUpdateJobSubmit}
        buttonText="Update Job"
      />
    )
  );
};

export default EditJob;
