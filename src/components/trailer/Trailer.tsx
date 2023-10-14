import React from 'react'
import ReactPlayer from 'react-player'


interface TrailerProps {
    trailer:string;
}

export default function Trailer({trailer}:TrailerProps) {
  return (
    <div className="w-full flex justify-center items-center">
                  <div className="w-[95%] h-[600px] p-6">
                    <ReactPlayer
                      url={`${trailer}`}
                      width="100%"
                      height="100%"
                      config={{
                        youtube: {
                          playerVars: { modestbranding: 0 },
                        },
                      }}
                      playing
                    />
                  </div>
                </div>
  )
}
