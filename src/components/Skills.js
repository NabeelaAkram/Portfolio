import html from '../assets/html1.png';
import css from '../assets/css1.png'
import tailwindcss from '../assets/tailwindcss1.jfif'
import javascript from '../assets/javascript1.png'
import react from '../assets/react1.jpg'
import express from '../assets/express1.png'
import node from '../assets/node1.png'
import mongo from '../assets/mongo1.png'
import firebase from '../assets/firebase1.png'
import redux from '../assets/redux1.jpg'
export default function Skills () {
    return (
        <section id='skills' className="flex flex-col  py-20 px-5 justify-center items-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl text-white border-b-4 border-[#110f8322] mb-5 w-[80px] font-bold">Skills</h1>
 </div>
            </div>
            <div className="w-full">
                <div className=" md:flex flex-col md:flex-row px-10 gap-8">
                <div className='py-5 md:flex justify-center  '>
            <img className='w-[100px] h-[100px]' src={html} />
        </div>
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={css} />
        </div>
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={tailwindcss} />
        </div> 
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={javascript} />
        </div> 
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={react} />
        </div> <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={node} />
        </div> <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={express} />
        </div> <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={mongo} />
        </div> 
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={redux} />
        </div>
        <div className='py-5 md:flex justify-center '>
            <img className='w-[100px] h-[100px]' src={firebase} />
        </div>
                </div>

            </div>
 </section>
    )
}
