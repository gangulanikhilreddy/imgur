import React from 'react';
import "./posts.css";
import ls from "local-storage"
import {
    LikeOutlined,
    CommentOutlined,
    EyeOutlined,
  } from '@ant-design/icons';
  

class Post extends React.Component{

    render(){
        let k=Math.floor(Math.random()*1000)
        let l=Math.floor(Math.random()*1000)
        let m=Math.floor(Math.random()*1000)
        let posted_data=JSON.parse(ls.get("postdata"))
        let display_data=posted_data.map((post,index)=>{
            return(
                <div className="post" key={index}>
                <div>
                <h2 className="title">{post.title}</h2>
                <img src={post.image} width="280px" height="300px"/>
                <div className="post-info">
                <p><LikeOutlined />{k}</p>
                <p><CommentOutlined />{l}</p>
                <p><EyeOutlined />{m}</p>
                </div>
                </div>
                </div>
            )
        })
        return (
            <div className="display">{display_data}</div>
        )
    }
}
export default Post;