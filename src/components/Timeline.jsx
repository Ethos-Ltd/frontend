import timelineItems from '@/app/dump/timelineItems'
import React from 'react'
import { Chrono } from 'react-chrono'

const Timeline = () => {
  return (
    <div style={{width: 600, height: 500}}>
      <Chrono items={timelineItems}/>
    </div>
  )
}

export default Timeline