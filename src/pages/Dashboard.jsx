import React, { useState, useEffect } from 'react';
import {  getTasks, getSingleTask, createTask, updateTaskApi, DeleteTask, isComplateTask } from '../API/taskApi';
import { CheckIcon, RoundCheckIcon, TrashIcon, EditIcon, CircleLoderIcon } from '../components/SVGList';
import Model from '../components/Model'
const Dashboard = ({ isLoggedIn, setIsLoggedIn, setEmail }) => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [TaskDisc, setTaskDisc] = useState('');
    const [loading, setLoading] = useState(true);

    const [isShowModal, setIsShowModal] = useState(false);

    const [dataToUpdate, setDataToUpdate] = useState({});




    const handleCloseModal = () => {
      setIsShowModal(false);
    };


    useEffect(() => { 
        fetchData()
    }, [])

 
    const fetchData = async () =>{
        try {
            const response = await getTasks(localStorage.getItem("token"));
            const responseData = response.data;
            setTasks(responseData.data);
            setLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
  
    const handleAddTask = async (event) => {
        try {
            event.preventDefault();
            if (taskTitle.trim() !== '' && TaskDisc.trim() !== '') {
                const addTask = await createTask({
                    "title": taskTitle,
                    "description":TaskDisc
                }, localStorage.getItem('token'));
                setTasks([...tasks, addTask?.data?.data]);
                setTaskTitle('');
                setTaskDisc('');
            }

              
        } catch (error) {
            
        }
      
    };
  
    const handleCompleteTask = async (id, status) => {
        try {
            await isComplateTask(id, localStorage.getItem('token'), status)
            await fetchData();
        } catch (error) {
            console.log("error CompleteTask ====>", error)
        }
      
    };
  
    const handleDeleteTask = async(id) => {
        try {
            await DeleteTask(id, localStorage.getItem('token'));
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
        } catch (error) {
            
        }
    };


    const getDataToUpdate = async(id) => {
        try {
            const taskToUp = await getSingleTask(id, localStorage.getItem('token'));
            setDataToUpdate(taskToUp.data.data)
            setIsShowModal(true)
        } catch (error) {
            
        }
    };

    const updateTask = async (data) =>{
        try {
           await updateTaskApi(dataToUpdate.id, data,localStorage.getItem('token'));
            setIsShowModal(false);
            await fetchData();
        } catch (error) {
            console.log('error ===',error);
        }
    }

    

    return (
      <div class="min-h-screen bg-gray-50 pb-10">
        <div class="mx-auto">
          <main class="">
            <div class="px-4">
              <div>
                <h2 class="text-lg font-semibold text-gray-900">Tasks List {tasks.length}</h2>
              </div>
              <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <div class="w-full">
                  <form id="todo-form" onSubmit={handleAddTask}>
                    <div class="flex mb-4">
                      <input
                        type="text"
                        class="w-full px-4 py-2 mr-2 rounded-lg text-black
                             border-gray-300 focus:outline-none
                              focus:border-blue-500"
                        id="todo-input"
                        placeholder="Add Title"
                        required
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                      />
                      <button
                        class="bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </div>
                    <input
                        type="text"
                        class="w-full px-4 py-2 mr-2 rounded-lg
                             border-gray-300 focus:outline-none
                              focus:border-blue-500 text-black" 
                        id="todo-input"
                        placeholder="Add Discription"
                        required
                        value={TaskDisc}
                        onChange={(e) => setTaskDisc(e.target.value)}
                      />
                  </form>
                </div>
                <p class="text-slate-500 mt-2">
                  Hello, here are your latest tasks
                </p>

                {loading ? (
        <div class="w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
            <CircleLoderIcon />
        Loading...
        </div>
      ) : (
        <div id="tasks" class="my-5">
                    {tasks.map((task) => (
                      <div className=' border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150'>
                        <div
                          id="task"
                          class="flex justify-between items-center"
                        >
                          <div class="inline-flex items-center space-x-2">
                            <button  onClick={() => handleCompleteTask(task.id, !task.is_completed)}>
                              {task.is_completed ? (
                                <CheckIcon />
                              ) : (
                                <RoundCheckIcon />
                              )}
                            </button>
                            <div className="flex">
                              <div
                                className={
                                  task.is_completed
                                    ? "text-slate-500 line-through"
                                    : 'text-slate-500'
                                }
                              >
                                {task.title}
                              </div>
                            </div>
  
                            
                          </div>
                              <div className="flex">
                              
                              <button onClick={() => getDataToUpdate(task.id)}>
                            <EditIcon />
                          </button>
                              <button onClick={() => handleDeleteTask(task.id)}>
                            <TrashIcon />
                          </button>
                              </div>
                          
                        </div>
                        <div
                              className={task.is_completed ? "ml-8 text-slate-500 line-through" : 'ml-8 text-slate-500'} >
                              {task.description}
                            </div>
                      </div>
                    ))}
                  </div>
      )}
              </div>
            </div>
          </main>
        </div>

        <Model isShow={isShowModal} onClose={handleCloseModal} dataToUpdate={dataToUpdate} updateTask={updateTask}/>
      </div>
    );
};

export default Dashboard;