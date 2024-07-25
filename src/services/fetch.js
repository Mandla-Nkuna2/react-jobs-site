export const getJob = async (id) => {
  try {
    const resp = await fetch(`/api/jobs/${id}`, {
      method: "GET",
    });

    if (!resp.ok) {
      throw new Error(`Error code: ${resp.status} message: ${resp.statusText}`);
    }

    const data = await resp.json();
    return data;
  } catch (e) {
    console.error("Failed to get job:", e);
    throw e;
  }
};

export const addJob = async (newJob) => {
  try {
    const resp = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (!resp.ok) {
      throw new Error(`Error code: ${resp.status} message: ${resp.statusText}`);
    }

    return resp;
  } catch (e) {
    console.error("Failed to add job:", e);
    throw e;
  }
};

export const updateJob = async (jobId, job) => {
  try {
    const resp = await fetch(`/api/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    if (!resp.ok) {
      throw new Error(`Error code: ${resp.status} message: ${resp.statusText}`);
    }

    return resp;
  } catch (e) {
    console.error("Failed to update job:", e);
    throw e;
  }
};

export const deleteJob = async (jobId) => {
  try {
    const resp = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });

    if (!resp.ok) {
      throw new Error(`Error code: ${resp.status} message: ${resp.statusText}`);
    }

    return resp;
  } catch (e) {
    console.error("Failed to delete job:", e);
    throw e;
  }
};
