const Description = (props) => {
  const data = props.data;
  return (
    <div className="description">
      About this image<p>{data.explanation}</p>
    </div>
  );
};
export default Description;
