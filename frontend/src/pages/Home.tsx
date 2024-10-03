import React, { useState } from "react";
import ProjectSelector from "../components/selector/ProjectSelector";
import Timer from "../components/timer/Timer";

const Home: React.FC = () => {
    const [project, setProject] = useState('Project A')

    return(
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6">Track your time</h2>
            <ProjectSelector project={project} setProject={setProject}/>
            <Timer project={project} />
        </div>
    )
}

export default Home;