const convertToMilliseconds = (durationInSeconds:any) => {
    return durationInSeconds * 1000;
  };
  
  const ProgressBar = ({ mainTime, currentTime }:any) => {
    const updatedMainTime = convertToMilliseconds(mainTime);
  
    const progress = (currentTime / updatedMainTime) * 100;
  
    return (
      <div className="absolute bottom-0 right-0 left-0 h-0.5 z-50 bg-gray-200">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;