import React, { useEffect, useState } from "react";
import "../App.css";
interface Props {
  isQuery: boolean;
}
function Advice({ isQuery }: Props) {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const { slip } = await response.json();
        setAdvice(slip.advice);
        console.log(advice);
        if (!response.ok) {
          return `Response status : ${response.status}`;
        }
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    };

    fetchData();
  }, [isQuery]);

  return (
    <div id="advice" className="opacityIN">
      {advice}
    </div>
  );
}

export default Advice;
