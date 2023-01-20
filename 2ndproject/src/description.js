import { motion } from "framer-motion";
const Description = (props) => {
  const data = props.data;
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:5}} className="description">
      About this image<p>{data.explanation}</p>
    </motion.div>
  );
};
export default Description;
