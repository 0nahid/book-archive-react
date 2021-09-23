import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../Book/Book';
function getData(val){
        
}
const Home = () => {
    const url = `https://openlibrary.org/search.json?q=json`
    const [book, setBook] = useState([]);
    useEffect(() => {
        axios(`https://openlibrary.org/search.json?q=${url}`)
            .then(data => setBook(data.data.docs))
    }, [url])
    return (
        <div>
            <div class="d-flex">
                <input id="search-field" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button onChange="getData()" class="btn btn-outline-danger" id="search-button" type="submit"> Search</button>
            </div>
            <Row>
                {book.map(book => <Book book={book} />)}
            </Row>
        </div>
    );
};

export default Home;