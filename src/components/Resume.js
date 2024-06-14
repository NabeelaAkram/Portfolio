import html from '../assets/html.png';
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwind css.png'
import javascript from '../assets/JavaScript.png'
import react from '../assets/react.jfif'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import firebase from '../assets/firebase.png'
import redux from '../assets/redux.jfif'
export default function skills () {
    

    return (<section id='skills' className='flex flex-col items-center md:flex-row bg-secondary px-5 justify-between '>
       <h1 className='text-center'>Skills</h1>
       
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
        
    </section>)
}