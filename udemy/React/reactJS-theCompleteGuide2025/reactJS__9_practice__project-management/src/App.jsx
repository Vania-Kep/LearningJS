import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const PORJECTS_MOCK = [
  { id: 'p1', title: 'Project 1', dueDate: '01-11-2021', tasks: [] },
  { id: 'p2', title: 'Project 2', dueDate: '11-11-2024', description: "asd", tasks: [] },
  { id: 'p3', title: 'Project 3', dueDate: '12-31-2028', tasks: ['task1', 'task2', 'task3'] },
];

function App() {
  const [projects, setProjects] = useState(PORJECTS_MOCK);
  const [isCreatingNewProject, setIsCreatingNewProject] = useState('');
  const [selectedProjectID, setSelectedProject] = useState('');

  function addNewProjectHandler(newProjectData) {
    let newProject = {
      ...newProjectData,
      id: new Date().getTime(), // or Math.random() or any other unique ID generator
      tasks: []
    };

    setProjects((prevProjects) => (
      [
        ...prevProjects,
        newProject
      ]
    ));
    setIsCreatingNewProject(false);
  }

  function handleCreateNewProject() {
    setIsCreatingNewProject(true);
    setSelectedProject(null);
  }

  function handleDeleteProject() {
    setProjects((prevProjects) => (
      prevProjects.filter((project) => project.id !== selectedProjectID)
    ));
    setSelectedProject(null);
  }

  function handleAddTaskToProject(task) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === selectedProjectID) {
          return {
            ...project,
            tasks: [...project.tasks, task],
          };
        }
        return project;
      });
    });
  }

  function handleRemoveTaskFromProject(taskToRemove) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === selectedProjectID) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task !== taskToRemove),
          };
        }
        return project;
      });
    });
  }

  const handleProjectSelection = (id) => {
    setSelectedProject(id);
    setIsCreatingNewProject(false);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          projects={projects}
          selectedProjectID={selectedProjectID}
          onAddProject={handleCreateNewProject}
          onSelectProject={handleProjectSelection}
        />
        {!isCreatingNewProject && !selectedProjectID && (<NoProjectSelected onCreateNewProjectClick={handleCreateNewProject} />)}
        {selectedProjectID && (
          <SelectedProject
            project={projects.find(itm => itm.id === selectedProjectID)}
            onClose={() => setSelectedProject(null)}
            onAddTask={handleAddTaskToProject}
            onRemoveTask={handleRemoveTaskFromProject}
            onDeleteProject={handleDeleteProject} />
        )
        }
        {isCreatingNewProject && (
          <NewProject
            onCancel={() => setIsCreatingNewProject(false)}
            onSave={addNewProjectHandler} />
        )
        }
      </main>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}


      {/* <div>
        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        <p className="flex flex-col gap-1 my-4">........................</p>
        <label className="text-sm font-bold uppercase text-stone-500">........................</label>
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">........................</dialog>
        <form className="mt-4 text-right">........................</form>
        <h2 className="text-xl font-bold text-stone-700 my-4">........................</h2>
        <p className="text-stone-600 mb-4">........................</p>
        <div className="w-[35rem] mt-16">........................</div>
        <menu className="flex items-center justify-end gap-4 my-4">........................</menu>
        <div className="flex items-center gap-4"></div>
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <div className="mt-24 text-center w-2/3">asdasd</div>
        <img className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 my-4">........................</h2>
        <p className="text-stone-400 mb-4">........................</p>
        <p className="mt-8">........................</p>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">........................</h2>
        <ul className="mt-8">........................</ul>
        <div className="w-[35rem] mt-16">........................</div>
        <header className="pb-4 mb-4 border-b-2 border-stone-300">........................</header>
        <div className="flex items-center justify-between">........................</div>
        <h1 className="text-3xl font-bold text-stone-600 mb-2">........................</h1>
        <p className="mb-4 text-stone-400">........................</p>
        <p className="text-stone-600 whitespace-pre-wrap">........................</p>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <p className="text-stone-800 my-4">........................</p>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">........................</ul>
        <li className="flex justify-between my-4">........................</li>
      </div>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">........................</button>
        <button className="text-stone-800 hover:text-stone-950">........................</button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">........................</button>
        <button className="text-stone-700 hover:text-stone-950">........................</button>
        <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">........................</button>
        <button className="text-stone-600 hover:text-stone-950">........................</button>
        <button className="text-stone-700 hover:text-red-500">........................</button>
      </div> */}
    </>
  );
}

export default App;
