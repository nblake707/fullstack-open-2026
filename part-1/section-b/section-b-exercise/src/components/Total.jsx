const Total = (props) => {
    const totalData = props.totalInfo
    return  <p>Number of exercises {totalData.exercises1 + totalData.exercises2 + totalData.exercises3}</p> ;
}

export default Total;