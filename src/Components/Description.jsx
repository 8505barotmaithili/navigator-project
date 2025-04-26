import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Description = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        console.log("Error fetching product");
      });
  }, [id]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img src={data.image} alt={data.title} width="150" />
      <h2>{data.title}</h2>
      <h3>{data.price}</h3>
      <p>{data.category}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default Description;
