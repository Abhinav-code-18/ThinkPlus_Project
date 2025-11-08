import React, {useEffect, useState} from 'react'
export default function CoursesPreview(){
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ fetch('https://thinkplus-project.onrender.com').then(r=>r.json()).then(setCourses) }, []);
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Popular Courses</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.slice(0,3).map(c=>(
          <div key={c.id} className="border rounded p-4 bg-white shadow-sm">
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-sm text-slate-500">{c.level} • {c.duration}</p>
            <p className="mt-2">{c.description}</p>
            <div className="mt-3"><span className="font-medium">{c.price}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}