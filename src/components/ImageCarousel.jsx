import AwesomeSlider from "react-awesome-slider";
import "../slidesstyles.css";

const ImageCarousal = () => {
  return (
    <div className="overflow-hidden">
      <AwesomeSlider>
        <div>
          <img
            className="absolute w-[70%] sm:w-[30%] sm:left-[100px] top-[240px] left-[20px]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/03/text01.png"
          />
          <img
            className="object-cover w-[100vw] h-[100vh]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/03/bg-slide01-1-2-768x467.jpg"
          />
        </div>
        <div>
          <img
            className="absolute w-[70%] sm:w-[30%] sm:left-[100px] top-[240px] left-[20px]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/04/text02.png"
          />
          <img
            className="object-cover w-[100vw] h-[100vh]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/03/bg-slide02--768x467.jpg"
          />
        </div>
        <div>
          <img
            className="absolute w-[70%] sm:w-[30%] sm:left-[100px] top-[240px] left-[20px]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/04/text03.png"
          />
          <img
            className="object-cover w-[100vw] h-[100vh]"
            src="https://nationalbroadband.pk/wp-content/uploads/2018/05/bg-slide03-768x467.jpg"
          />
        </div>
        <div className="relative flex items-center justify-center">
   <img
             className="absolute w-[75%] sm:w-[50%] sm:left-[27%] sm:top-[30%] top-[30%] left-[12%] transform translate(-50%, -50%)"
             src="https://nationalbroadband.pk/wp-content/uploads/2022/09/text04.png"
          />
          <img
            className="object-cover w-[100vw] h-[100vh] "
            src="https://nationalbroadband.pk/wp-content/uploads/2022/09/bg-slide04-768x467.jpg"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default ImageCarousal;
