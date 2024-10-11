import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="w-screen h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-0"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <ul style={{listStyle:"outside"}}>
                <li><u>Programming Languages :</u> Python, JavaScript</li>
                <li><u>AI/ML Tools & Libraries :</u> TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV, NLTK, OpenAI, Hugging Face</li>
                <li><u>Deep Learning :</u> Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Transformers, GANs, VAE</li>
                <li><u>Data Science & Analytics :</u> Data preprocessing, Feature engineering, Model evaluation, Statistical analysis</li>
                <li><u>NLP & Computer Vision :</u> Text classification, Image recognition, Object detection, Sentiment analysis</li>
                <li><u>ChatBot Developemt :</u> Rasa, Dialogflow</li>
                <li><u>Cloud & Deployment :</u> AWS, Google Cloud, Docker, Flask, FastAPI</li>
                <li><u>Web Technologies :</u> HTML5, CSS3, JavaScript, React, Next, MongoDB, Django</li>
              </ul>          
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
