import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { CircleCheck, CircleX, Loader, PauseCircle } from 'lucide-react'

import Header from '../common/Header'
import StateCard from '../common/StateCard'
import AddData from './AddData'
import DataTable from './DataTable'
import DataChart from './DataChart'

function OverviewPage() {

  const [submitData, setSubmitData] = useState([{title: "Aman", assignee: "Trainer", startDate: "10-02-2025", endDate: "24-02-2025", status: "Ready"},]);
  
    const handleFormSubmit = (formData) => {
      console.log(formData);
      
      setSubmitData((prevData) => [...prevData, formData]);
    };

    const handleDelete = (index) => {
      const updatedData = submitData.filter((_, i) => i !== index); 
      setSubmitData(updatedData);
    };

  const [backlogValue,setBacklogValue] = useState(0);
  const [progessValue, setProgressValue]= useState(0);
  const [pausedValue, setPausedValue] = useState(0);
  const [readyValue, setReadyValue] = useState(1);
  
  const updateStateCardValues = (data) => {
    let backlog = 0;
    let progress = 0;
    let paused = 0;
    let ready = 0;

    data.forEach((item) => {
      switch (item.status) {
        case 'Backlog':
          backlog++;
          break;
        case 'In Progress':
          progress++;
          break;
        case 'Paused':
          paused++;
          break;
        case 'Ready':
          ready++;
          break;
        default:
          break;
      }
    });

    setBacklogValue(backlog);
    setProgressValue(progress);
    setPausedValue(paused);
    setReadyValue(ready);
  };

  useEffect(() => {
    updateStateCardValues(submitData);
  }, [submitData]);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Overview'/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20'>
  
    <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
      initial={{opacity: 0, y: 20}}
      animate={{opacity:1, y: 0}}
      transition={{duration: 1}}
    >
      <StateCard name='Backlog' icon={CircleX} value={backlogValue} color='#6366F1'/>
      <StateCard name='In Progress' icon={Loader} value={progessValue} color='#8B5CF6'/>
      <StateCard name='Paused' icon={PauseCircle} value={pausedValue} color='#EC4899'/>
      <StateCard name='Ready' icon={CircleCheck} value={readyValue} color='#10B981'/>
    </motion.div>

      <AddData handleFormSubmit={handleFormSubmit}/>
      <DataTable userData={submitData} onDelete={handleDelete}/>
      <DataChart backlog={backlogValue} progress={progessValue} paused={pausedValue} ready={readyValue}/>
      </main>
    </div>
  )
}

export default OverviewPage