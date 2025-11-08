import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-8 mb-8 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Upgrade your quantitative & interview skills</h2>
          <p className="mb-4 text-indigo-100">Short courses, mock tests, and live sessions designed by experts.</p>
          <div className="flex gap-3">
            <a href="/courses" className="bg-white text-indigo-700 px-4 py-2 rounded shadow font-medium">Explore Courses</a>
            <a href="/contact" className="border border-white px-4 py-2 rounded text-white">Contact Us</a>
          </div>
        </div>
        <div className="w-64">
          <div className="bg-white/10 rounded p-4">
            <p className="text-sm">Next batch starts soon</p>
            <h3 className="text-lg font-semibold">Problem Solving Bootcamp</h3>
            <p className="text-xs">4 weeks • Live Sessions • Mock Tests</p>
          </div>
        </div>
      </div>
    </section>
  )
}