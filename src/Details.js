import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function Details(props) {

    const [id] = props.match.params.id;
    const [item, setItem] = useState(null);
    const data = [
        {
            id: 1,
            title: "Post #1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 2,
            title: "Post #2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 3,
            title: "Post #3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 4,
            title: "Post #4",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 5,
            title: "Post #5",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 6,
            title: "Post #6",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 7,
            title: "Post #7",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 8,
            title: "Post #8",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survivednot only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum."
        },
    ];

    useEffect(() => {
        const item = data.filter(item => item.id === parseInt(props.match.params.id));
        setItem(item[0])
    }, [id]);

    return (


        <div>
            {item !== null ?
                <div className="row">
                    <div className="post">
                        <h2 align="left">Post# {item.id}</h2>
                        <h2 align="left">{item.title}</h2>
                        <div className="image">Image</div>
                    </div>
                    <div className="description">
                        <p align="left">{item.description}</p>
                        <Link to={`/`}>
                            <p className="backButton"> Back to home</p>
                        </Link>
                    </div>
                </div>
                : ""}
        </div>
    );
}

