import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

let HeatmapValue = { date: Date, count: Number }

const RandomCalendar = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          showWeekdayLabels
          classForValue={(i = HeatmapValue) => {
            let clampedCount = 0

            if(i !== null){
              clampedCount = Math.max(i.count, 0)
              clampedCount = Math.min(i.count, 4)
            }

            return `scale-${clampedCount}`
          }}
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  )
};

const generateHeatmapValues = (startDate, endDate) => {
  const values = HeatmapValue = []

  let currentDate = startDate
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4

    values.push({ date: currentDate, count: Math.round(count) })

    currentDate = addDays(currentDate, 1)
  }

  return values
}

export default RandomCalendar;
