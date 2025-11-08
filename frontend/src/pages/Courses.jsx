import React, {useEffect, useState} from 'react'

export default function Courses(){
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ fetch('/api/courses').then(r=>r.json()).then(setCourses) }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">All Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.map(c => (
          <div key={c.id} className="border rounded p-4 bg-white shadow-sm">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-slate-500">{c.level} • {c.duration}</p>
            <p className="mt-2">{c.description}</p>
            <div className="mt-3"><span className="font-medium">{c.price}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}