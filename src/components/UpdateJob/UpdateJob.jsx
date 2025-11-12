import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router';
import { toast } from 'react-toastify';

const UpdateJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  // const [previewSummary, setPreviewSummary] = useState("")

  // Get Single Job Info
  useEffect(() => {
    fetch(`https://freelance-marketplace-server-zeta.vercel.app/allJobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
    // setPreviewSummary(data.summary)
  }, [id]);

  //  Handle Update
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedJob = {
      title: form.title.value,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
    };

    fetch(`https://freelance-marketplace-server-zeta.vercel.app/jobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("✅ Job updated successfully!");
        } else {
          toast.error("❌ No changes were made!");
        }
      });
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-5">
        Update Job
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={job.title}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={job.category}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Summary</label>
          <textarea
            name="summary"
            defaultValue={job.summary}
            rows="3"
            className="w-full border rounded-lg p-2"
            // onChange={(e) => setPreviewSummary(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            defaultValue={job.coverImage}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          Update Job
        </button>

      </form>
      {/* ✅ Summary Preview UI
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2 text-gray-700">Live Summary Preview:</h3>
        <p className="text-gray-600 whitespace-pre-line">{previewSummary}</p>
      </div> */}
    </div>
  );
};

export default UpdateJob;