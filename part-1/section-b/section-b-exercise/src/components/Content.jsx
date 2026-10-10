// Content renders the parts and their number of exercises

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  const contentData = props.parts;
  // console.log(contentData)

  
  return (
    <>
      <Part name={contentData[0].name} exercise={contentData[0].exercises} />
      <Part name={contentData[1].name} exercise={contentData[1].exercises} />
      <Part name={contentData[2].name} exercise={contentData[2].exercises} />
    </>
  );
};

export default Content;
