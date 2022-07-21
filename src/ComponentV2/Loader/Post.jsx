import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Loader} from './Loader';

export const Post = () => {
    const[postData, setPostData] = useState([]);

    const [dataFetching, setDataFetching] = useState(false);

    useEffect(() => {
        setDataFetching(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res);
            setPostData(res.data)
            setDataFetching(false);
        })
        .catch((e) => {
            setDataFetching(false);
            console.log(e.message);
        })
    }, [])

  return (
    <>
    <h2>Post</h2>
    {
        dataFetching ? 
        <Loader/> : 
        <main>
            {
                postData.map((el) => {
                    return (
                        <section key={el.id}>
                            <header>
                            <h3>Title: {el.title}</h3>
                            </header>
                            <p>Body: {el.body}</p>
                        </section>
                    )
                })
            }
        </main>
    }
    </>
  )
}


// {condition ? "true case": "false case"}


// WebAPIS
// 1. setDataFetching()


// word
// drow