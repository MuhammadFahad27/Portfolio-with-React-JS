import { motion } from "framer-motion"
import {Typewriter}  from "react-simple-typewriter"
import me from "../assets/me.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-slate-950 mt-[72px] w-full h-screen 
    lg:flex lg:pr-5 xl:justify-between ">

      <section className="lg:ml-16  lg:mt-10">
    
          <div className="">

                <motion.h1 className="text-white text-center mt-10 text-4xl mb-5
                sm:mt-18 sm:text-6xl lg:text-4xl xl:text-7xl  "
                initial={{ 
                    x:"-100%",
                    opacity:1
                }} whileInView={{
                  x:1,
                  opacity:1
                }}  
                transition={{ duration: 0.5 }}>

              <div className="space-y-4 flex flex-col ">
                  <h1>Hi There ! I am </h1>
                  
                  <h1><span className="text-purple-400 lg:ml-6">Full Stack</span> Developer</h1>
              </div>
              </motion.h1>

            <span className="text-white ml-[130px] text-2xl  sm:text-4xl
            sm:ml-[190px] md:ml-[260px] lg:ml-[60px] xl:ml-[180px]">
              <Typewriter 
             words={[
              "A Programmer       ",  
              "A Developer        ",  
              "A Tech Enthusiast  ",  
              "An AI Researcher   "
            ]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={90}
              deleteSpeed={100}
              delaySpeed={1000}
              autoStart={true}
              />
              </span>
           
          </div>
            <div>
                
                <button
                  className=" text-white     rounded-md ml-[130px] mt-8 sm:ml-[235px]
                  border-1 border-white  duration-500 md:ml-[310px] lg:ml-[80px] xl:ml-[240px]
                  px-6 p-1 cursor-pointer hover:border-red-600 
                  hover:animate-pulse" >
                    <a href="./resme.pdf"> Download Cv </a>
                </button>
            </div>
      </section>
      <section>
          <div className="ml-[85px] mt-10 sm:ml-[140px] md:ml-[250px] sm:mt-14 lg:mr-10 lg:mt-24">
            <img src={me} alt="fahad" className="w-[250px] rounded-full sm:w-[320px] lg:w-[250px]
            " />
          </div>
      </section>
        <section className="flex flex-col  gap-4 ml-5 mt-6 text-3xl sm:hidden">
          <a href="https://wa.me/923233323883"><FaWhatsapp className="text-green-400" /></a>
          <a href="https://www.linkedin.com/in/muhammad-fahad-ashraf-20963a286/"> <FaLinkedin className="text-blue-300" /></a>
          <a href="https://github.com/MuhammadFahad27"> <FaGithub  className="text-white"/></a>
         <a href="https://www.facebook.com/share/1ALJyMNyrm/"> <FaFacebook className="text-blue-400"/></a>
        </section>
      
    </div>
  )
}

export default Home