import {
  RxBoxModel,
  RxBarChart,
  RxDesktop,
  RxReader,
  RxChatBubble,
  RxRocket,
  RxArrowTopRight,  
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [  
  {
    Icon: RxBoxModel,
    title: "Machine Learning Model Development",
    description: "Create, train, and deploy machine learning models using frameworks such as TensorFlow, Keras, or PyTorch, tailored to specific datasets and objectives.",
  },
  {
    Icon: RxChatBubble,
    title: "Custom Chatbot Development",
    description: "Design and build tailored chatbots for different platforms (web, mobile, messaging apps) that meet specific business needs.",
  },
  {
    Icon: RxBarChart,
    title: "Data Analysis and Visualization",
    description: "Provide comprehensive data analysis services, including exploratory data analysis (EDA), feature engineering, and data visualization using tools like Matplotlib, Seaborn, or Tableau.",
  },
  {
    Icon: RxDesktop,
    title: "Computer Vision Solutions",
    description: "Implement computer vision applications, such as image classification, object detection, and facial recognition, using frameworks like OpenCV and deep learning models.",
  },
  {
    Icon: RxReader,
    title: "Natural Language Processing (NLP)",
    description: "Develop NLP applications for sentiment analysis, chatbots, document classification, and language translation, using libraries like NLTK, spaCy, or Hugging Face Transformers.",
  },
  {
    Icon: RxRocket,
    title: "Workflow Automation",
    description: "Design and implement workflows using tools like Zapier, Microsoft Power Automate, or Apache Airflow to automate business processes across different applications.",
  },

];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[300px] sm:h-[400px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-[350px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            {/* <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
