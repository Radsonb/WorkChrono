import { useState, useEffect } from 'react';

interface TimerProps {
  project: string;
}

function Timer({ project }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0);
    
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [project]);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const remainingSeconds = secs % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="text-xl font-bold mt-6">
      <p>Time worked on {project}: {formatTime(seconds)}</p>
    </div>
  );
}

export default Timer;
