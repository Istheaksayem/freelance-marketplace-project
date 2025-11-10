import React, { use, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const JobDetails = () => {
    const {user} =use(AuthContext)
    const jobModelRef = useRef(null)

    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/allJobs/${id}`)
            .then((res) => res.json())
            .then((data) => setJob(data));
    }, [id]);

    if (!job) return <p className="text-center mt-10">Loading...</p>;

    const handleJobModelOpen = () => {
        jobModelRef.current.showModal()
    }

      const handleApplyJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;
        const postedBy = user?.displayName;
        const userEmail = user?.email;
        const postedDate = new Date().toLocaleString();

        const appliedJob = {
            title,
            category,
            summary,
            coverImage,
            postedBy,
            userEmail,
            postedDate
        };

        console.log("Form Data Submitted:", appliedJob);
        toast.success("Job applied successfully (frontend demo)");
        form.reset();
        jobModelRef.current.close();
    };

    return (
        <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md mt-10 mb-10">
            <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-1">Category: {job.category}</p>
            <p className="text-gray-700 mb-1">Posted By: {job.postedBy}</p>
            <p className="text-gray-600 mt-3">{job.summary}</p>
            <div>
                <button
                    onClick={handleJobModelOpen}
                    className='btn btn-secondary w-full'>Apply</button>

                <dialog ref={jobModelRef} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg text-center">Apply for this Job!</h3>
                        <p className="py-4">Click the button below to close</p>
                        <form onSubmit={handleApplyJob} className="space-y-3">
                            <input
                                type="text"
                                name="title"
                                placeholder="Job Title"
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                type="text"
                                name="postedBy"
                                value={user?.displayName || ""}
                                readOnly
                                className="input input-bordered w-full"
                            />

                            <select
                                name="category"
                                className="select select-bordered w-full"
                                required
                            >
                                <option disabled selected>
                                    Select Category
                                </option>
                                <option>Web Development</option>
                                <option>Design</option>
                                <option>Writing</option>
                                <option>Marketing</option>
                                <option>Others</option>
                            </select>

                            <textarea
                                name="summary"
                                placeholder="Write job summary..."
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>

                            <input
                                type="url"
                                name="coverImage"
                                placeholder="Cover Image URL"
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
                                Accept
                            </button>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default JobDetails;