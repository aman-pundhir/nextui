import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { CircleX } from 'lucide-react';

function AddingData({name,icon:Icon,value,color,handleFormSubmit}) {

  const [showModal, setShowModal] = useState(false);
  
    const [formData, setFormData] = useState({
      title: '',
      assignee: '',
      status: 'Backlog',
      startDate: '',
      endDate: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      handleFormSubmit(formData);
      setShowModal(false);
      setFormData({ 
        title: '',
        Assignee: '',
        startdate: '',
        endDate: '',
        status: 'Backlog',
      });
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  

return (
<motion.div
className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
whileHover={{y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'}}
>
<div className='px-4 py-5 sm:p-6'>
    
    <span className='flex flex-row items-center text-sm font-medium text-gray-400'>
        <Icon size={20} className='mr-2' style={{color}}/>
        {name}
    </span>
    <button className='mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200' onClick={() => {setShowModal(true)}}>{value}</button>

    {showModal && <div> <div className='flex mt-4 justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold text-gray-200'>Add Card</h2>
              <button onClick={closeModal} aria-label='Close modal'>
                <CircleX className='text-red-400 hover:text-red-500' />
              </button> </div>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='title'
                placeholder='Enter Title...'
                value={formData.title}
                onChange={handleInputChange}
                className='bg-gray-700 text-white placeholder-gray-400 mt-4 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              <input
                type='text'
                name='assignee'
                placeholder='Enter Assignee...'
                value={formData.assignee}
                onChange={handleInputChange}
                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              <select
                name='status'
                value={formData.status}
                onChange={handleInputChange}
                className='bg-gray-700 text-white rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='Backlog'>Backlog</option>
                <option value='In Progress'>In Progress</option>
                <option value='Paused'>Paused</option>
                <option value='Ready'>Ready</option>
              </select>
              <div className='flex flex-col space-x-4 mb-4'>
                <label htmlFor="startdate" className='bg-gray-700 text-white rounded-lg w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>Start Date</label>
                <input
                  type='date'
                  name='startDate'
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className='bg-gray-700 text-white mt-4 rounded-lg w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                /> <br />
                <label htmlFor="enddate" className='bg-gray-700 text-white rounded-lg w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>End Date</label>
                <input
                  type='date'
                  name='endDate'
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className='bg-gray-700 text-white mt-4  rounded-lg w-full px-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200'>Submit</button>
            </form></div>}
  </div>
</motion.div>
  )
}

export default AddingData