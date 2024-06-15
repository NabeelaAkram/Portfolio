import MERN from "../assets/aboutme.svg"
function About(){

    return(
        <section id='about' className="flex flex-col md:flex-row bg-primary px-5 ">
            <div className="py-5 md:w-1/2 ml-5">
            <div className="w-[500px] h-[500px]flex justify-center items-center ">
            <img src={MERN} />
            </div>
                </div>
            <div className=" md:w-1/2 flex justify-center">
              <div className="flex flex-col justify-center text-white"> 
               <h1 className="text-4xl text-white border-b-4 border-[#110f8322] mb-5 w-[170px] font-bold">About Me</h1>
                <p className="pb-4 ">Hi, I'm Nabeela A, a passionate and dedicated MERN stack developer. I specialize in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.</p>
<p className="pb-4">I graduated with a B.E  in CSE from Government College of Engineering, where I developed a solid foundation in software development and computer science principles.
As a fresher in the MERN stack development field, I aspire to work on challenging projects that push the boundaries of web development.</p>
<p className="pb-4"> My goal is to grow as a developer, contribute to innovative projects, and be part of a collaborative team that values creativity and excellence.
I am a problem-solver at heart, always eager to learn new technologies and improve my skills.</p>
 <p className="pb-4">My enthusiasm for coding is matched by my dedication to writing clean, efficient code and continuously refining my development practices. In my free time, I enjoy contributing to open-source projects and staying updated with the latest industry trends.
</p><p className="pb-4">I am always open to discussing new opportunities or collaborations. Feel free to reach out to me via nabeerasheed@gmail.com or connect with me on LinkedIn.</p>
                </div>
            </div>
        </section>
    )
}
export default About