import React, {useState} from 'react'

type myFromProps = {
    onSubmit: (form: {name : string; description: string})=> void  
}

function MyForm({onSubmit}: myFromProps){
    const [Form, setForm] = useState({
        name: '',
        description: ''
    })

    const {name , description} = Form

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setForm({
            ...Form,
            [name]: value
        })
    }

    const handleSubmit = (e :  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onSubmit(Form)
        setForm({
            name: '',
            description:''
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' value={name} onChange={onChange} />
            <input name='description' value={description} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    )
}

export default MyForm