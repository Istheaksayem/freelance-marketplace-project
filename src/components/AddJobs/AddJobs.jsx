import React, { use, } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';

const AddJob = () => {
  const { user } =use(AuthContext); 
  
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const postedBy = user?.displayName;
    const userEmail = user?.email;
    const postedDate = new Date().toISOString();

    const newJob = {
      title,
      category,
      summary,
      coverImage,
      postedBy,
      userEmail,
      postedDate,
    };

    // এখন Backend এ পাঠাও
    fetch('https://freelance-marketplace-server-zeta.vercel.app/jobs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newJob)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Job added successfully!',
            icon: 'success',
          });
          form.reset();
        }
      })
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Add a New Job</h2>
      <form onSubmit={handleAddJob} className="space-y-5">
        
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          required
          className="input input-bordered w-full"
        />

        {/* Posted By */}
        <input
          type="text"
          name="postedBy"
          value={user?.displayName || ''}
          disabled
          className="input input-bordered w-full bg-gray-100"
        />

        {/* Category Dropdown */}
        <select name="category" required className="select select-bordered w-full">
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Data Entry">Data Entry</option>
        </select>

        {/* Summary */}
        <textarea
          name="summary"
          placeholder="Write job summary..."
          required
          className="textarea textarea-bordered w-full"
        ></textarea>

        {/* Cover Image */}
        <input
          type="url"
          name="coverImage"
          placeholder="Cover Image URL"
          required
          className="input input-bordered w-full"
        />

        {/* User Email */}
        <input
          type="email"
          name="userEmail"
          value={user?.email || ''}
          disabled
          className="input input-bordered w-full bg-gray-100"
        />

        {/* Submit */}
        <button className="btn btn-primary w-full">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
