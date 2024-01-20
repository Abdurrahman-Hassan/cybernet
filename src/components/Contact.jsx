import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contactmaindiv text-white">
      <h1 className="text-[28px] sm:text-[60px] font-bold text-center pt-[100px] mb-3">
        Contact Us
      </h1>
      <h3 className="text-center text-sm">
        To get the best NBB network experience, check your address and contact
        your respective dealer
      </h3>
      <div className="flex flex-row flex-wrap justify-center items-center mt-5 gap-20 sm:gap-[150px] text-center">
        <div className="flex flex-col justify-center items-center font-bold">
          <img
            src="https://nationalbroadband.pk/wp-content/uploads/2016/11/cntct_blk1.png"
            alt=""
          />
          <h5>Ordering services over the NBB network</h5>
        </div>
        <div className="flex flex-col justify-center items-center font-bold">
          <img
            src="https://nationalbroadband.pk/wp-content/uploads/2016/11/cntct_blk2.png"
            alt=""
          />
          <h5>Installation and activation</h5>
        </div>
        <div className="flex flex-col justify-center items-center font-bold">
          <img
            src="https://nationalbroadband.pk/wp-content/uploads/2016/11/cntct_blk3.png"
            alt=""
          />
          <h5>Ongoing support and troubleshooting</h5>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center text-5xl gap-8 mt-6 pb-[200px]">
        <FaFacebook className="text-white bg-blue-700 rounded-full" />
        <FaInstagram className="text-white bg-pink-700 rounded-xl" />
      </div>
    </div>
  );
};

export default Contact;
