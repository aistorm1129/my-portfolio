import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="w-[80%] text-left flex flex-col xl:justify-center md:pl-32 pt-22 xl:pt-40 h-full container mx-auto">
          {/* title */}
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-0"
          >
            <span className="text-neutral-300" style={{ fontSize: 34 }}></span><br/>
            <span className="text-accent" style={{ fontSize: 24 }}> Artificial Intelligence | Machine Learning | Deep Learning | Chatbot | Full Stack</span>
          </motion.h3>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:max-w-full xl:max-w-[40vw] mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            &nbsp; I am a senior Python, AI/ML, Big Data, Full Stack developer with over 6 years of experience in software developments.
            <br />&nbsp;✔ I have enough experience in building various deep learning models such as GAN and VAE using Tensorflow, Keras, Pytorch.
            I also have a lot of experience implementing shallow learning such as Random Forest, SVM, and Gradient Boosting using Scikit-learn.
            <br />&nbsp;✔ I am particularly skilled in image recognition, object detection, natural language processing, generative AI. Recently, I have been focusing on developing chatbots using LLM.
            <br />&nbsp;✔ I have worked with MERN stack since 2017, building various websites and applications using React, Redux,Vue, MUI, Antd, Tailwind CSS, Laravel, Node, and Django.
            <br />&nbsp;&nbsp;So through this process, I have plenty of experience in AI and attractive website building.
            <br />&nbsp;Not only that, but I have always been a quick learner, so I can quickly adapt to new things.
            <br />&nbsp;Also, I always provide the best solutions and have strong problem solving skills.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] max-h-[300px] absolute top-[30%] lg:right-[10%] -translate-x-[50%] -translate-y-[50%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
