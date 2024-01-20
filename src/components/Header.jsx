import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - scrollY; // Adjust the value (200) as needed
      setScrollOpacity(Math.max(0.8, newOpacity)); // Ensure opacity doesn't go below 0.2
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutUsClick = () => {
    const about = document.getElementsByClassName("AboutUS");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleWhyClick = () => {
    const about = document.getElementsByClassName("Whymaindiv");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleNBBClick = () => {
    const about = document.getElementsByClassName("NBBmaindiv");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleGetClick = () => {
    const about = document.getElementsByClassName("getmaindiv");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleFaqsClick = () => {
    const about = document.getElementsByClassName("faqsmaindiv");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleContactClick = () => {
    const about = document.getElementsByClassName("contactmaindiv");
    about[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="">
      <div
        style={{ opacity: scrollOpacity }}
        className="transition-all duration-700 h-[70px] flex flex-row justify-between items-center  fixed top-0 w-full bg-white z-50"
      >
        <img
          src="https://nationalbroadband.pk/wp-content/uploads/2018/03/logo-nbb-dark.png"
          alt="logo"
          className="w-[150px] ml-5 mt-4"
        />
        <button onClick={toggleSidebar}>
          <CiMenuBurger className="mr-6 text-2xl text-black" />
        </button>
      </div>
      <div
        className={`bg-[#1d1e20] h-[100vh] fixed top-0 left-0 z-40 mt-[70px] ${
          isOpen ? "w-[80%] sm:w-[50%]" : "w-[0]"
        } transition-width duration-700`}
      >
        <div
          className={` ${
            isOpen ? " transform-gpu scale-1" : "transform scale-0"
          } transition duration-700`}
        >
          <button
            onClick={toggleSidebar}
            className="flex flex-row justify-end w-full"
          >
            <IoClose className="text-white mr-4 mt-4" />
          </button>
          <div className="text-white font-bold text-[12px] flex flex-col gap-6 ml-[30px] mt-[50px] items-start">
            <h3
              className="cursor-pointer"
              onClick={() => {
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              HOME
            </h3>
            <h3 className="cursor-pointer" onClick={handleAboutUsClick}>
              ABOUT US
            </h3>
            <h3 onClick={handleWhyClick} className="cursor-pointer">
              WHY NBB
            </h3>
            <h3 onClick={handleNBBClick} className="cursor-pointer">
              NBB CODE
            </h3>
            <button
              onClick={handleGetClick}
              className="bg-green-500 w-[115px] h-[40px] rounded-full -ml-3"
            >
              GET NBB
            </button>
            <h3 className="cursor-pointer" onClick={handleFaqsClick}>
              FAQS
            </h3>
            <h3 onClick={handleContactClick} className="cursor-pointer">
              CONTACT US
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
