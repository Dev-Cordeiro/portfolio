import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/Dev-Cordeiro"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/viniciuscordeiroo__/"><FaInstagram /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2025 Cordeiro</p>
        
    </div>
  )
}

export default Footer