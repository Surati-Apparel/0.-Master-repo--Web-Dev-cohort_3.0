import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'

function App() {
  //postgresql://neondb_owner:npg_boe4vtV2gqdl@ep-morning-water-a8b63h75-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
    
  )
  
}

export default App
