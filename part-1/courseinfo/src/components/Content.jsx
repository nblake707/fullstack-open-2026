const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  const contentData = props.courseInfo;
``
  return (
    <>
      <Part name={contentData.part1} exercise={contentData.exercises1} />
      <Part name={contentData.part2} exercise={contentData.exercises2} />
      <Part name={contentData.part3} exercise={contentData.exercises3} />
    </>
  );
};

export default Content;
