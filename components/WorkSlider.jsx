"use client"; // If using this as a client component in Next.js 13 or later  

import Image from "next/image";
// import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles  
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title1: "Business Chatbot",
          title2: "(RASA, OpenAI)",
          path: "/portfolio/chatbot_for_business.png",
          link: "",
        },

        {
          title1: "Student Sentiment Analysis System at School",
          title2: "(Hugging Face, NLTK, OpenCV)",
          path: "/portfolio/student's sentiment analysis.jpg",
          link: "",
        },
        {
          title1: "Whatsapp Chatbot",
          title2: "(Dialogflow, Hugging Face)",
          path: "/portfolio/whatsapp_chatbot.png",
          link: "",
        },
        { 
          title1: "Clothing Translate",
          title2: "(TensorFlow/Keras, Fashion MNIST, spaCy)",
          path: "/portfolio/clothing translate.png",
          link: "",
        },

      ],
    },
    {
      images: [
        {
          title1: "Cow Management System",
          title2: "(TensorFlow/Keras, DeepSort, OpenCV)",
          path: "/portfolio/cow_management.png",
          link: "",
        },
        {
          title1: "Medical Diagnosis System",
          title2: "(Pytorch, YOLO, OpenCV)",
          path: "/portfolio/object_detection_x_ray.png",
          link: "",
        },
        {
          title1: "Temperature Prediction System in Steel Mill",
          title2: "(Tensorflow/Keras, CNN, OpenCV)",
          path: "/portfolio/heat_steel.png",
          link: "",
        },
        {
          title1: "Commuting Management System",
          title2: "(Tensorflow, YOLO, OpenCV, Django)",
          path: "/portfolio/access_control.png",
          link: "",
        },        
      ],
    },
    {
      images: [       
        {
          title1: "License Plate Recognition System",
          title2: "(Tensorflow, Faster R-CNN, EasyOCR, DeepSort)",
          path: "/portfolio/license.png",
          link: "",
        },
        {
          title1: "Forest Fire Surveillance System",
          title2: "(Python, YOLO, Random Forests, MongoDB)",
          path: "/portfolio/forest_fire.png",
          link: "",
        },
        {
          title1: "Customer Support Automation",
          title2: "(Zapier, HubSpot)",
          path: "/portfolio/automation.png",
          link: "",
        },
        {
          title1: "Website Project",
          title2: "(Mern Stack)",
          path: "/portfolio/p11.jpg",
          link: "https://plate2plate.com",
        }
      ],
    },    
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={{
        enabled: true,
      }}
      modules={[Pagination, Navigation]}
      className=""
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-[150%] transition-all duration-300">
                    {/* { image.link ? 
                      <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      <div className="translate-y-[50%] group-hover:translate-y-[-150%] transition-all duration-300 delay-150">
                        {image.link.length > 29 ? image.link.substr(8,20) + "..." : image.link.substr(8,20)}
                      </div>
                      <div className="text-xl translate-y-[50%] group-hover:translate-y-[-150%] transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link> : ""
                    } */}
                    <div className="text-center">{image.title1}</div>
                    <div className="text-center">{image.title2}</div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;