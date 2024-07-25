export const addJob = async (newJob) => {
  const resp = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return resp;
};

export const updateJob = async (job) => {
  const resp = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return resp;
};

export const deleteJob = async (id) => {
  const resp = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return resp;
};
