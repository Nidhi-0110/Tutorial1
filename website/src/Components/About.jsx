function About(){
    const username = "Hello world"
    const color = "blue"
    const val = true
    const x = val ? "true" : "false"
    console.log(x)
    return (
        <>
          <h1>Home</h1>
          <h1>{username}</h1>
          <h1 style={{color : color}}>Hii</h1>
          <h1 style={val ? {color : "green"} : {color : "red"}}>Hii</h1>
        </>
    )
}

export default About;