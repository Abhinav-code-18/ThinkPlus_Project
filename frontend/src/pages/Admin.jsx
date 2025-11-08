import React, {useEffect, useState} from 'react'

function CourseForm({onSave, initial}){
  const [data, setData] = useState(initial || {title:'', level:'Beginner', duration:'', price:'Free', description:''});
  useEffect(()=>setData(initial || {title:'', level:'Beginner', duration:'', price:'Free', description:''}), [initial]);
  return (
    <form onSubmit={e=>{ e.preventDefault(); onSave(data); setData({title:'',level:'Beginner',duration:'',price:'Free',description:''}) }} className="space-y-2">
      <input className="w-full p-2 border rounded" placeholder="Title" value={data.title} onChange={e=>setData({...data,title:e.target.value})} />
      <input className="w-full p-2 border rounded" placeholder="Level" value={data.level} onChange={e=>setData({...data,level:e.target.value})} />
      <input className="w-full p-2 border rounded" placeholder="Duration" value={data.duration} onChange={e=>setData({...data,duration:e.target.value})} />
      <input className="w-full p-2 border rounded" placeholder="Price" value={data.price} onChange={e=>setData({...data,price:e.target.value})} />
      <textarea className="w-full p-2 border rounded" placeholder="Description" value={data.description} onChange={e=>setData({...data,description:e.target.value})} />
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
      </div>
    </form>
  )
}

export default function Admin(){
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);
  useEffect(()=>load(), []);
  function load(){ fetch('/api/courses').then(r=>r.json()).then(setCourses) }
  async function createCourse(data){
    const res = await fetch('/api/courses', {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(data)});
    if(res.ok) load();
  }
  async function updateCourse(id, data){
    const res = await fetch('/api/courses/'+id, {method:'PUT', headers:{'content-type':'application/json'}, body:JSON.stringify(data)});
    if(res.ok) { setEditing(null); load(); }
  }
  async function deleteCourse(id){
    if(!confirm('Delete this course?')) return;
    const res = await fetch('/api/courses/'+id, {method:'DELETE'});
    if(res.ok) load();
  }
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Admin — Manage Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Create Course</h3>
          <CourseForm onSave={createCourse} />
        </div>
        <div className="md:col-span-2">
          <div className="space-y-3">
            {courses.map(c => (
              <div key={c.id} className="bg-white p-3 rounded shadow flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="text-sm text-slate-500">{c.level} • {c.duration} • {c.price}</p>
                  <p className="mt-2 text-sm">{c.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={()=>setEditing(c)} className="px-2 py-1 border rounded">Edit</button>
                  <button onClick={()=>deleteCourse(c.id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
          {editing && (
            <div className="mt-4 bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Edit Course</h3>
              <CourseForm initial={editing} onSave={(data)=>updateCourse(editing.id, data)} />
              <div className="mt-2">
                <button onClick={()=>setEditing(null)} className="text-sm text-slate-600">Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}