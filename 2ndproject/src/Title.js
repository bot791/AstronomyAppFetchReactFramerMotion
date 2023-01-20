import { motion } from "framer-motion";
const Title = () => {
  return (
    <div className="title">
      <motion.h1 initial={{y:-30}}animate={{y:10}}>
        NASA Astronomy Picture Of The Day
      </motion.h1>
    </div>
  );
};
export default Title;
