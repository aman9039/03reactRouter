import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data ,setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/aman9039')
    // .then(response => response.json())
    // .then(data =>{
    //     console.log(data);
    //     setData(data)
    // })
    // },[])
  return (
   
    <div className='bg-gray-500 text-3xl p-6 text-center h-6vh w-1/4 m-auto mt-4 flex flex-col  justify-center items-center rounded-lg'>Github followers : {data.followers}
    <img  className="mt-8 rounded-md shadow-lg" src= {data.avatar_url} alt="Git picture" width={300} />
    </div>
   
  )
}

export default Github

export const githubInfoLoader = async () => {
    const  response = await fetch('https://api.github.com/users/aman9039')
    return response.json();
}