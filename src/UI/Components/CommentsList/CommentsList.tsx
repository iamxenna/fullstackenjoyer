import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/ContextWrapper";
import {Badge, ListGroup} from "react-bootstrap";

export const CommentsList = () => {

    const { commentData } = useContext(Context);
    const [localCommentData, setLocalCommentData] = useState<[]>([]);

    useEffect(() => {
        setLocalCommentData(commentData);
    }, [commentData])

    return (
        <ListGroup as="ol" numbered style={{width: '20rem', margin: '10px'}}>
            {localCommentData.map(({id, login, review, mark}) => (
                <ListGroup.Item
                    key={id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{login}</div>
                        {review}
                    </div>
                    <Badge bg="primary" pill>
                        {mark}
                    </Badge>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};