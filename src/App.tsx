import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchListBooks, getBookDetails } from '../src/services/api'
import { Card } from '../src/components/Card'
import { BookLists } from '../src/services/api'

function App() {

  const [data, setData] = useState<BookLists[]>([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await fetchListBooks()
      console.log(response)
      setData(response);
    };
    fetchAllBooks();
  }, []);

  return (
    <div className='parentCard'>
      {data.map((book) => {
        return (
          <Card
            key={book.list_name}
            list_name={book.list_name}
            oldest_published_date={book.oldest_published_date}
            newest_published_date={book.newest_published_date}
            updated={book.updated} />
        )
      })}

    </div>
  )
}



export default App
