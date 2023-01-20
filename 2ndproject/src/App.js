import { useEffect, useState } from "react";
import Description from "./description";
import Picture from "./picture";
import Title from "./Title";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=mZOd04B04VfddJyxgt29puJAvUmuV9Yr9w0tuLbD")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container">
      <Title />
      <Picture data={data} />
      <Description data={data} />
      <h6>This website is made with love by KAJAL BISWAS with the help of NASA open API</h6>
    </div>
  );
}

export default App;
