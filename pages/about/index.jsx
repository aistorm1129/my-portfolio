import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
  FaVuejs,
  FaWordpress,
  FaPython,
  FaLaravel,
  FaNodeJs,
  FaShopify,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiMui,
  SiAntdesign,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSvelte,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiZapier,
  SiTwilio,
  SiRasa,
  SiDialogflow,
  SiYolo,
  SiScipy,
  SiPandas,
  SiScikitlearn,
  SiNumpy
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: <p>Language & Framework</p>,
        data: [
          {
            text: "Python",
            icon: <FaPython />
          },
          {
            text: "Tensorflow",
            icon: <SiTensorflow />
          },
          {
            text: "Pytorch",
            icon: <SiPytorch />
          },
          {
            text: "Keras",
            icon: <SiKeras />
          },
          {
            text: "Scikit-learn",
            icon: <SiScikitlearn />
          },
          {
            text: "Opencv",
            icon: <SiOpencv />
          },
          {
            text: "Numpy",
            icon: <SiNumpy />
          },
          {
            text: "Pandas",
            icon: <SiPandas />
          },
          {
            text: "Scipy",
            icon: <SiScipy />
          },
          {
            text: "Yolo",
            icon: <SiYolo />
          },
          {
            text: "Rasa",
            icon: <SiRasa />
          },
          {
            text: "Dialogflow",
            icon: <SiDialogflow />
          },
          {
            text: "Zapier",
            icon: <SiZapier />
          },
          {
            text: "Twilio",
            icon: <SiTwilio />
          },
          {
            text: "HTML",
            icon: <FaHtml5 />
          },
          {
            text: "CSS",
            icon: <FaCss3 />
          },
          {
            text: "Javascript",
            icon: <FaJs />
          },
          {
            text: "PHP",
            icon: <FaPhp />
          },
          {
            text: "React",
            icon: <FaReact />
          },
          {
            text: "Vue",
            icon: <FaVuejs />
          },
          {
            text: "Next",
            icon: <SiNextdotjs />
          },
          {
            text: "Nuxt",
            icon: <SiNuxtdotjs />
          },
          {
            text: "Mui",
            icon: <SiMui />
          },
          {
            text: "Tailwind css",
            icon: <SiTailwindcss />
          },
          {
            text: "Antd",
            icon: <SiAntdesign />
          },
          {
            text: "WordPress",
            icon: <FaWordpress />
          },
          {
            text: "Svelte",
            icon: <SiSvelte />
          },
          {
            text: "Django",
            icon: <SiDjango />
          },
          {
            text: "Laravel",
            icon: <FaLaravel />
          },
          {
            text: "Node",
            icon: <FaNodeJs />
          },          
        ],
      },
    ],
  },
  {
    title: "Certification",
    info: [     
      {
        title: "Coursera: Machine Learning by Stanford (Andrew Ng)",
        stage: "2021 - 2022",
      },
      {
        title: "TensorFlow Developer Certificate",
        stage: "2019 - 2020",
      },
      {
        title: "Certified AI & Machine Learning Professional (CAMP)",
        stage: "2019 - 2020",
      },      
      {
        title: "Complete React Developer in 2017 (Redux, Hooks, Node.js)",
        stage: "2017 - 2018",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AI Researcher - Axiata Digital",
        stage: "2021 - 2024",
      },
      {
        title: "Machine Learning Engineer - Machine Learning Malaysia ",
        stage: "2018 - 2021",
      },
      {
        title: "MERN stack Developer - Naiise ",
        stage: "2017 - 2018",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: " Asia Pacific University (APU)",
        stage: "2014-2017",
      }
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 xl:py-32 text-center xl:text-left">
      <Circles />

      <div className="w-full xl:w-[70%] xl:mt-[8%] mx-auto flex flex-col items-center xl:items-start xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            6 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collabrated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={1} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={58} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={75} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-6 items-center xl:items-start w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="w-full flex-1 flex flex-col xl:flex-row xl:max-w-max gap-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden xl:flex">-</div>
                <div>{item.stage}</div>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 flex-wrap">
                  {/* icons */}
                  {item.data?.map((skill, index) => (
                    <div key={index} className="text-2xl flex flex-col items-center text-white">
                      <div>
                        {skill.icon}
                      </div>
                      <div className="text-sm">
                        {skill.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
