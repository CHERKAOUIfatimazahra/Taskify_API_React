

import React, { useState, useEffect } from 'react';
const Model = ({isShow, onClose, dataToUpdate, updateTask}) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [TaskDisc, setTaskDisc] = useState('');

    useEffect(() => {
        setTaskTitle(dataToUpdate.title);
        setTaskDisc(dataToUpdate.description);
    }, [dataToUpdate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTaskData = {
            title: taskTitle,
            description: TaskDisc
        };
        updateTask(updatedTaskData);
    };
  return (
    <div>
      {isShow ? (
        <div
          id="authentication-modal"
          tabindex="-1"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-gray-200 bg-opacity-80"
          aria-modal="true"
          role="dialog"
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onClose}

                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <form class="p-4 md:p-5" onSubmit={handleSubmit}>
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      title
                    </label>
                    <input
                        type="text"
                        class="w-full px-4 py-2 mr-2 rounded-lg
                             border-gray-300 focus:outline-none
                              focus:border-blue-500  text-black"
                        id="todo-input"
                        placeholder="Add title"
                        required
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                      />
                  </div>
                </div>
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Discription
                    </label>
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
                  </div>
                </div>
                  
                <button
                  type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  update Task
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Model;

