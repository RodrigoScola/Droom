import firebase from '../firebase';
import React, {useState,useEffect} from 'react'

const Feed = () =>{ 
    const [ posts , setPosts] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            const db = firebase.firestore()
            const postRef = db.collection('MyPosts');
            const data = await postRef.get();
            setPosts(data.docs.map(doc => doc.data()))

        }
        fetchData()
    },[]);


    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li>{`${post.string} , ${post.song}`}</li>
                    
                    
                    
                ))}
            </ul>

        </div>
    )
}
export default Feed;