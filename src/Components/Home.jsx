import { motion } from "framer-motion"
import {Typewriter}  from "react-simple-typewriter"
import me from "../assets/me.jpg"

const Home = () => {
  return (
    <div className="bg-slate-950 mt-[72px] w-full h-[100vh] ">

      <section>

          <div>

          <motion.h1 className="text-white text-center mt-10 text-4xl mb-5  "
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
                  
                  <h1><span className="text-purple-400">Full Stack</span> Developer</h1>
              </div>
          </motion.h1>

            <span className="text-white ml-[130px] text-2xl  ">
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
                  className=" text-white  px-3   rounded-md ml-[145px] mt-8
                  border-1 border-white  duration-500">
                  Download Cv 
                </button>
            </div>
      </section>
      <section>
          <div className="ml-[85px] mt-10">
            <img src={me} alt="fahad" className="w-[250px] rounded-full " />
          </div>
      </section>
      
    </div>
  )
}

export default Home