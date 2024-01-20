import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardStylefront = {
  padding: "20px",
  margin: "20px",
  width: "240px",
  backgroundColor: "#dddddd",
  height: "210px",
};

const CardStyleback = {
  backgroundColor: "#01652f",
  padding: "20px",
  margin: "20px",
  width: "240px",
  height: "210px",
  color: "white",
};
const Why = () => {
  const carddata = [
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-buffering.png",
      title: "No Buffering",
      back: "Now enjoy buffering free videos on your favorite video streaming sites.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-lags.png",
      title: "No Lags",
      back: "Improve your online gaming experience with lower latency. Go online and beat the best to become the best.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-fast.png",
      title: "Equal Upload & Download",
      back: "You can now upload large files on internet while downloading, without loss of bandwidths.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-volume.png",
      title: "Unlimited Volume",
      back: "Experience the true essence of internet browsing without the limitations of internet volume.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-entertainment.png",
      title: "Seamless Entertainment",
      back: "Have an access to one-stop solution to movies, music, videos, dramas, games, and much more.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-streaming.png",
      title: "Live Streaming",
      back: "Get TV-like experience whilst watching live TV shows, matches, news, and much more.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-calls.png",
      title: "Uninterrupted Video Calls",
      back: "Make an online video calls without any voice termination or lag over video calls.",
    },
    {
      img: "https://nationalbroadband.pk/wp-content/uploads/2016/11/icon-game.png",
      title: "Ultimate Gaming Experience",
      back: "Get the ultimate gaming experience with our highly consistent internet speed.",
    },
  ];

  const [isFlippedArray, setIsFlippedArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCardFlip = (index) => {
    setIsFlippedArray((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };
  return (
    <div className="overflow-hidden Whymaindiv">
      <h1 className="text-[28px] sm:text-[60px] font-bold text-[#313131] text-center mt-9 mb-3">
        Why National Broadband
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {carddata.map((data, index) => {
          return (
            <ReactCardFlip
              key={index}
              isFlipped={isFlippedArray[index]}
              flipDirection="vertical"
            >
              <div
                style={CardStylefront}
                onMouseEnter={() => handleCardFlip(index)}
                className="flex flex-col text-center justify-center items-center"
              >
                <img src={data.img} alt={data.title} />
                <h3>{data.title}</h3>
              </div>
              <div
                style={CardStyleback}
                onMouseLeave={() => handleCardFlip(index)}
                className="CardBack text-center flex justify-center items-center"
              >
                <p>{data.back}</p>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
