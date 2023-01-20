import { motion } from "framer-motion";
const Picture = (props) => {
  const data = props.data;
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:5}} className="picture">
      <img src={data.url} alt=""/>
      <h6>This image is taken by {data.copyright}</h6>
      <h6>Date {data.date}</h6>
    </motion.div>
  );
};
export default Picture;
