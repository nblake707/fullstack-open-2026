const Total = (props) => {
  const totalData = props.parts;
  return (
    <p>
      Number of exercises{" "}
      {totalData[0].exercises + totalData[1].exercises + totalData[2].exercises}
    </p>
  );
};

export default Total;
