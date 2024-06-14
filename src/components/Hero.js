import NABEE from "../assets/NABEE.jpeg"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
    const config  = {
                social: {
            whatsapp: 'https://wa.me/8610013528',
            github: 'https://github.com/NabeelaAkram',
            linkedin: 'https://www.linkedin.com/in/nabeela-a-4b697520a/'
        }
    }

    return (<section id='hero' className="flex flex-col md:flex-row px-5 gap-8 py-32 bg-secondary  justify-around">
        <div className="md:w-1/2 flex flex-col"><h1 className=" text-white text-4xl font-hero-font">Hi,I am Nabeela
         <br/>   < p className="text-3xl font-"><br/><span className="text">MERN Stack Developer</span></p><br/>
            <p className="text-xl">Aspiring MERN stack developer with a strong foundation in MongoDB, Express.js, React, and
                Node.js,
                eager to apply my skills in building dynamic web applications. Passionate about learning and
                ready
                to contribute to innovative projects.</p></h1>
            <div className="flex py-10">
                <a href={config.social.github} className="pr-5 hover:text-white"  ><FaGithub size={35}></FaGithub></a>
    
                <a href={config.social.whatsapp}className="pr-5  hover:text-white" ><RiWhatsappFill size={35}></RiWhatsappFill></a>
                <a href={config.social.linkedin} className="pr-5  hover:text-white" ><FaLinkedin size={35}></FaLinkedin></a>
            </div>
            <p className='pb-5'>You can view my resume <a className='btn' href="/resume.pdf" download='resume.pdf'> Download</a></p>
            </div>

        <img className="md:w-1/4" src={NABEE} />
    </section>)
}
export default Hero