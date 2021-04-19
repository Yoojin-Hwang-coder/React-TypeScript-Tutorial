import React from 'react'

type GreetingProps = {
    name: string
}

const Greetings : React.FC<GreetingProps> = props =>{
    return <div>{props.name}</div>
}

export default Greetings