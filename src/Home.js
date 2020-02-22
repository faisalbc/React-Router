import React, {useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function Home() {

    const [posts] = useState([
        {
            id: 1,
            title: "Post #1 Title ",
            image: "Post #1 Image",
        }, {
            id: 2,
            title: "Post #2 Title ",
            image: "Post #2 Image",
        }, {
            id: 3,
            title: "Post #3 Title ",
            image: "Post #3 Image",
        }, {
            id: 4,
            title: "Post #4 Title ",
            image: "Post #4 Image",
        }, {
            id: 5,
            title: "Post #5 Title ",
            image: "Post #5 Image",
        }, {
            id: 6,
            title: "Post #6 Title ",
            image: "Post #6 Image",
        }, {
            id: 7,
            title: "Post #7 Title ",
            image: "Post #7 Image",
        }, {
            id: 8,
            title: "Post #8 Title ",
            image: "Post #8 Image",
        }
    ]);

    return (
        <div>
            <div className="row">

                {posts.map(post => (
                        <div className="column" key={post.id}>
                            <div className="card">
                                <div className="image">{post.image}</div>
                                <h2 align="left">{post.title}</h2>
                                <Link to={`/details/${post.id}`}>Read more</Link>
                            </div>
                        </div>
                    )
                )}
            </div>

        </div>
    );

}

