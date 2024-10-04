// src/components/ProjectSelector.tsx
import React, { useState, useEffect } from 'react';
import api from '../../service/api';

interface ProjectSelectorProps {
  project: number | null;
  setProject: (project: number | null) => void;
}


const ProjectSelector: React.FC<ProjectSelectorProps> = ({ project, setProject }) => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    api.get('/projects/1')
      .then(response => {
        setProjects(response.data)
        console.log('Projetos Recebidos', response.data);
        setProject(response.data)        
      })
      .catch(error => console.error(error));
  }, []);

const startSession = () => {
  if(project) {
    const now = new Date();
    api.post('/session', { projectId: project, startTime: now.toISOString() })
      .then(response => {
        console.log('Sessão iniciada: ', response.data);
      })
      .catch(error => console.error('Erro ao iniciar sessão', error));
  }
}

return (
  <div className='mb-4 space-x-4'>
    <label className='block mb-2 text-lg' htmlFor="project">
      Select Project:
    </label>
    <select 
      id="project" 
      className='p-2 border rounded' 
      onChange={e => setProject(Number(e.target.value))}
    >
      <option value="" disabled>Select a project</option>
      {projects.map((proj) => {
        <option key={proj.id} value={proj.id}>{ proj.name }</option>
      })}
    </select>
      <button 
      className=' bg-blue-500 text-white uppercase rounded-lg p-2' 
      onClick={startSession}
      disabled={!project}
      >
        Iniciar Sessão
      </button>
  </div>
  );
};

export default ProjectSelector;
