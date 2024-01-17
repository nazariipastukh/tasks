import {useEffect, useState} from "react";
import axios from "axios";

export const FindTodos = () => {
    const [posts, setPosts ] = useState([])
    const [formValue, setFormValue] = useState('')
    const [filteredPosts, setFilteredPosts] = useState(posts)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => setPosts(data))
    },[])

    useEffect(() => {
        setFilteredPosts(posts.filter(post => post.title.includes(formValue)))
    },[posts, formValue])

    return (
        <section>
            <input onChange={(e) => setFormValue(e.target.value)}/>
            {
                filteredPosts.map(post => <div>{post.title}</div>)
            }
        </section>
    );
};