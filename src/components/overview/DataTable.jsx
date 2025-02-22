import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Search } from 'lucide-react';

function DataTable({userData, onDelete}) {
    
     const [searchTerm, setSearchTerm] = useState('');
        const [filteredUsers, setFilteredUsers] = useState(userData);

        useEffect(() => {
            setFilteredUsers(userData);
          }, [userData]);
        
          const handleDelete = (index) => {
            onDelete(index); 
          };
        
        const handleSearch = (e) => {
            const term = e.target.value.toLowerCase();
            setSearchTerm(term);
            const filtered = userData.filter((user) => user.title.toLowerCase().includes(term) || user.Assignee.toLowerCase().includes(term));
            setFilteredUsers(filtered);
          }
    
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
                <div className="relative">
                    <input type="text" placeholder='Search Users...' 
                      className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={handleSearch} value={searchTerm}/>
                      <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            Title
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            Assignee
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            Start Date
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            End Date
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            Status
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider '>
                            Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
                        {filteredUsers.map((user,index) => (
                            <motion.tr key={index}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.3}}>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className="flex items-center">
                                        <div className="size-10 flex-shrink-0">
                                            <div className="size-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                                                {user.title.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-100">{user.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className="text-sm text-gray-100">{user.assignee}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">{user.startDate}</span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-800 text-red-100">{user.endDate}</span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        user.status === "Ready" ? "bg-green-800 text-green-100" : user.status === "Backlog" ? "bg-red-800 text-red-100" : user.status ===
                                        "Paused" ? "bg-yellow-800 text-yellow-100" : "bg-blue-800 text-blue-100"
                                    }`}>{user.status}</span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    <button className='text-red-400 hover:text-red-300' onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
  )
}

export default DataTable