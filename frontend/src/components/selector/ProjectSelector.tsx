interface ProjectSelectorProps {
    project: string;
    setProject: (project: string) => void;
  }
  
  function ProjectSelector({ project, setProject }: ProjectSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="project" className="block mb-2 text-lg">Select Project:</label>
        <select 
          id="project" 
          value={project} 
          onChange={(e) => setProject(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Project A">Project A</option>
          <option value="Project B">Project B</option>
          <option value="Project C">Project C</option>
        </select>
      </div>
    );
  }
  
  export default ProjectSelector;
  