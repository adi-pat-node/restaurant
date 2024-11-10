import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex h-screen justify-center items-center ">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative flex h-screen flex-col justify-end z-20 pb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt=""
          className="w-full p-4"
        />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </div>
    </section>
  );
};

export default Hero;
