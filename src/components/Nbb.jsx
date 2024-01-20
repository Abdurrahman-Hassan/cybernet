import { useState } from "react";
import "animate.css";

const Nbb = () => {
  const [btnactive, setBtnactive] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const nbbdata = [
    {
      button: "Buried Fiber Backbone",
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/nbb-code-01-300x300.png",
      title: "Buried Fiber Backbone",
      body: "National Broadband provides consistent internet services over stable and resilient buried fiber backbone. NBB network signal travels over our buried fiber optic using the FTTN and HFE technologies ensuring maximum uptime.",
    },
    {
      button: "Fiber To The Node",
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/nbb-code-02-300x300.png",
      title: "Fiber To The Node",
      body: "FTTN is typically described as the connection from the node to the customer premises using Fiber or Ethernet from the cable company.",
    },
    {
      button: "Hybrid Fiber Ethernet",
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/nbb-code-03-300x300.png",
      title: "Hybrid Fiber Ethernet",
      body: "National Broadband also uses a Hybrid Fiber Ethernet (HFE) network, a telecommunication technology in which optical fiber cable and Ethernet cables are used in different portions of a network to carry a broadband content (such as video, data and voice).",
    },
    {
      button: "State Of The Art Infrastructure",
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/nbb-code-04-300x300.png",
      title: "State Of The Art Infrastructure",
      body: "National Broadband invests heavily in its cutting edge infrastructure to ensure network stability and high speed broadband. Our partners provide infrastructure support to dealers and National Broadband provides a network backbone.",
    },
    {
      button: "Redundant Upstream Carrier",
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/nbb-code-05-300x300.png",
      title: "Redundant Upstream Carrier",
      body: "National Broadband has an access to redundant submarine communication cables system.",
    },
  ];

  const handleBtnActive = (index) => {
    setBtnactive((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <div className="pb-10 NBBmaindiv">
      <h1 className="text-[28px] sm:text-[60px] font-bold text-[#313131] text-center mt-9 mb-3">
        NBB Code
      </h1>
      <div className=" flex flex-row justify-center items-center gap-[40px]  flex-wrap">
        {nbbdata.map((btn, index) => {
          return (
            <div
              className={`w-[192px] h-[78px] flex justify-center items-center ${
                btnactive[index] ? "bg-[#0c502b]" : "bg-[#e9e9e9]"
              } ${btnactive[index] ? "text-white" : "text-black"} ${
                btnactive[index]
                  ? "border-solid border-4 border-[#e9e9e9]"
                  : "border-none"
              } transition-colors duration-300  `}
              key={index}
              onClick={() => handleBtnActive(index)}
            >
              <button className="w-[140px] text-center">{btn.button}</button>
            </div>
          );
        })}
      </div>
      <div className="">
        {nbbdata.map((data, index) => {
          if (btnactive[index]) {
            return (
              <div
                className="animate__animated animate__fadeInRight mx-[100px] mt-[40px] flex flex-col sm:flex-row justify-center items-center gap-[40px]"
                key={index}
              >
                <img src={data.img} alt={data.title} />
                <div className="flex flex-col gap-8">
                  <h2 className="text-[35px] text-[#313131] font-bold">
                    {data.title}
                  </h2>
                  <p className="text-[24px] font-extralight">{data.body}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Nbb;
