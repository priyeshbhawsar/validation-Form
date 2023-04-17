import React from 'react'

const Map = () => {
    // const  details = ['priyesh','bhawsar','natraj','studio']
    const details =[
            {name:'priyesh',email:'priyesh@gmail.com',contact:98897},
            {name:'pratijeet',email:'pratijjet@gmail.com',contact:'9596'},
            {name:'ram',email:'ram@gmail.com',contact:'9565'}
    ]
  return (
    <div>
        <h1>Map Using array</h1>
        <table border="1">
        <tr>
            <td>name</td>
            <td>email</td>
            <td>contact</td>
          
        </tr>
        
       
        {
            details.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    </tr>
            )
        }
        </table>
    </div>
  )
}

export default Map