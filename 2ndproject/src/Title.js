import { motion } from "framer-motion";
const Title = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5,type:"spring" }}
      className="title"
    >
      <h1>NASA Astronomy Picture Of The Day</h1>
    </motion.div>
  );
};
export default Title;
