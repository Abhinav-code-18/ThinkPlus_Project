import React, {useState} from 'react'

export default function Contact(){
  const [s, setS] = useState({name:'', email:'', message:''});
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold mb-3">Contact</h2>
      <p className="text-slate-600 mb-4">Send us a message and we'll get back soon.</p>
      <form className="max-w-lg bg-white p-4 rounded shadow" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)'); setS({name:'',email:'',message:''})}}>
        <input className="w-full mb-2 p-2 border rounded" placeholder="Name" value={s.name} onChange={e=>setS({...s,name:e.target.value})} />
        <input className="w-full mb-2 p-2 border rounded" placeholder="Email" value={s.email} onChange={e=>setS({...s,email:e.target.value})} />
        <textarea className="w-full mb-2 p-2 border rounded" placeholder="Message" value={s.message} onChange={e=>setS({...s,message:e.target.value})} />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </section>
  )
}