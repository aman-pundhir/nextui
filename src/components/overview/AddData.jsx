import React, { useState } from 'react'
import {motion} from 'framer-motion'
import AddingData from './AddingData'
import { CircleCheck, CircleX, Loader, PauseCircle } from 'lucide-react'

function AddData({handleFormSubmit}) {

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6
        lg:col-span-2 border border-gray-700 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.4}}
    >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>
            Add Data
        </h2>
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
              initial={{opacity: 0, y: 20}}
              animate={{opacity:1, y: 0}}
              transition={{duration: 1}}
            >
                <AddingData icon={CircleX} color={'#6366F1'} name={"Backlog"} value={'Add Backlog'} handleFormSubmit={handleFormSubmit} status={"Backlog"}/>
                <AddingData icon={Loader} color={'#8B5CF6'} name={"In Progress"} value={'Add Progress'} handleFormSubmit={handleFormSubmit} status={"Progress"}/>
                <AddingData icon={PauseCircle} color={'#EC4899'} name={"Paused"} value={'Add Paused'} handleFormSubmit={handleFormSubmit} status={"Paused"}/>
                <AddingData icon={CircleCheck} color={'#10B981'} name={"Ready"} value={'Add Ready'} handleFormSubmit={handleFormSubmit} status={"Ready"}/>
        </motion.div>
    </motion.div>
  )
}

export default AddData