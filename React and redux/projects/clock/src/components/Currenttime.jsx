let CurrentTime = () =>{

  let time = new Date();
  return (
    <div className="lead">
      <p>This is the Current Date : {time.toLocaleDateString()}</p>
      <p>This is the Current Time : {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime;