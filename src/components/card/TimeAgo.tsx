import React from 'react';

interface TimeAgoProps {
  timestamp: number;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const getTimeAgo = (timestamp: number): string => {
    const currentDate = new Date();
    const previousDate = new Date(timestamp);
    const timeDifference = currentDate.getTime() - previousDate.getTime();

    // Convert time difference to appropriate units
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return 'a day ago';
    } else if (hours > 1) {
      return `${hours}h ago`;
    } else if (hours === 1) {
      return '1h ago';
    } else if (minutes > 1) {
      return `${minutes}m ago`;
    } else if (minutes === 1) {
      return '1m ago';
    } else {
      return `${seconds}s ago`;
    }
  };

  return <small className='text-end text-neutral-400'>{getTimeAgo(timestamp)}</small>;
};

export default TimeAgo;