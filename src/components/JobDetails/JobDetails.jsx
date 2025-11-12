import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const jobModelRef = useRef(null);
  const { id } = useParams();
  const [job, setJob] = useState(null);

  // Fetch single job details
  useEffect(() => {
    fetch(`https://freelance-marketplace-server-zeta.vercel.app/allJobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <p className="text-center mt-10">Loading...</p>;

  // Modal open
  const handleJobModelOpen = () => {
    if (!user) {
      toast.error("Please login first!");
      return;
    }
    jobModelRef.current.showModal();
  };

  // Apply for job
  const handleApplyJob = (e) => {
    e.preventDefault();

    const appliedJob = {
      title: job.title,
      category: job.category,
      postedBy: job.postedBy,
      summary: job.summary,
      coverImage: job.coverImage,
      userName: user?.displayName,
      userEmail: user?.email,
      acceptedAt: new Date(),
    };

    fetch("https://freelance-marketplace-server-zeta.vercel.app/accepted-jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appliedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('save to db',data)
        toast.success("Job accepted successfully!");
        jobModelRef.current.close();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md mt-10 mb-10">
      <img
        src={job.coverImage}
        alt={job.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700 mb-1">Category: {job.category}</p>
      <p className="text-gray-700 mb-1">Posted By: {job.postedBy}</p>
      <p className="text-gray-600 mt-3">{job.summary}</p>

      <button onClick={handleJobModelOpen} className="btn btn-secondary w-full mt-4">
        Accept Job
      </button>

      {/* Modal */}
      <dialog ref={jobModelRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center mb-4">
            Confirm Job Acceptance
          </h3>

          <form onSubmit={handleApplyJob} className="space-y-3">
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full"
            />

            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Confirm & Accept
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
