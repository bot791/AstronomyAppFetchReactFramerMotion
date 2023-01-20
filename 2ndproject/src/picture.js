const Picture = (props) => {
  const data = props.data;
  return (
    <div className="picture">
      <img src={data.url} alt=""/>
      <h6>This image is taken by {data.copyright}</h6>
      <h6>Date {data.date}</h6>
    </div>
  );
};
export default Picture;
