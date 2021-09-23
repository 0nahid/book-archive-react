import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Book = (props) => {
    const { title, cover_i, publisher, first_publish_year } = props.book;
    return (
        <Col md={4} className="mt-2">
            <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" className="img-fluid" src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} />
                <Card.Body>
                    <Card.Title>
                        <p>{title}</p>
                    </Card.Title>
                    <Card.Text>
                        <p>First published in: {first_publish_year}</p>
                        <p>Publisher: {publisher}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Book;