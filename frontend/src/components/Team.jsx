import React from 'react'
import MainLayout from './MainLayout'
import Navbar from './Navbar'
import WIP from './WIP'
import TeamPage from './Team/TeamPage'
import Teamtext from "../assets/images/TeamText.png"

export default function Team() {
  return (
    <MainLayout>
        <Navbar/>
        <div  className=''>
          <img src={Teamtext} alt="Our Supporters" className='absolute left-[4rem]'/>
          <TeamPage/>
        </div>
    </MainLayout>
  )
}
