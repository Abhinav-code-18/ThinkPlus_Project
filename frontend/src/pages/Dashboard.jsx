import React, {useEffect, useState} from 'react'

export default function Dashboard(){
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ fetch('/api/courses').then(r=>r.json()).then(setCourses) }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-slate-600 mb-4">Overview of platform (demo).</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Total Courses: <strong>{courses.length}</strong></div>
        <div className="p-4 bg-white rounded shadow">Active Learners: <strong>—</strong></div>
        <div className="p-4 bg-white rounded shadow">Revenue: <strong>—</strong></div>
      </div>
    </section>
  )
}