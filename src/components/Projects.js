
import ecommerce from '../assets/ecommerce1.jpg'
import weather from "../assets/weatherapp.jpg"
import bulkmail from "../assets/bulkmail.png"
function Project() {
    const config = {
        projects : [
            {
                image: weather,
                description: 'A weather app using JavaScript fetches real-time weather data from an API, displaying current conditions and forecasts in a user-friendly interface. It dynamically updates based on user location or search inputs, providing a seamless experience.',
                link: 'https://github.com/NabeelaAkram/weather'
            },
            {
                image: bulkmail,
                description: 'A bulk mail app built with the MERN stack (MongoDB, Express, React, Node.js) allows users to efficiently send mass emails, manage mailing lists, and track email campaign performance. It offers a scalable, user-friendly solution for handling large volumes of email communication.',
                link: 'https://github.com/NabeelaAkram/bulkmailapp'
            },
            {
                image: ecommerce,
                description: 'An ECommerce website built with the MERN stack (MongoDB, Express, React, Node.js) and deployed on Amazon Web Services provides a robust, scalable platform for online shopping. It offers seamless user experiences, secure transactions, and efficient handling of large traffic volumes.',
                link: 'http://13.53.200.76:8000/'
            }
        ]
    }
    return (
        <section id='projects' className="flex flex-col  px-5 justify-center items-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl text-white border-b-4 border-[#110f8322] mb-5 w-[140px] font-bold">Projects</h1>
      <p className="text-xl">These are my best projects.I have built this using Javascript,React,Node,Express and MongoDB</p>
                </div>
            </div>
            <div className="w-full">
                <div className=" md:flex flex-col md:flex-row px-10 gap-8">
                {config.projects.map((project) => (
                     <div className='relative mb-4'>
                        <img className='h-[400px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className="text-center px-5 py-5 mt-12">{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
                    
                </div>

            </div>




        </section>
    )
}
export default Project 