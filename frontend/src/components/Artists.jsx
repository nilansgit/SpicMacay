import React from 'react'
import MainLayout from './MainLayout'
import Navbar from './Navbar'
import WIP from './WIP'
import TeamGrid from './Team/TeamGrid'


// const member = [
//   {
//     name: "Alex Johnson",
//     role: "Frontend Developer",
//     image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Priya Sharma",
//     role: "UI/UX Designer",
//     image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Michael Chen",
//     role: "Backend Engineer",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
//   },
// ];


export default function Artists() {
  return (
    <MainLayout>
      <Navbar/>
      <WIP/>
    </MainLayout>
  )
}
