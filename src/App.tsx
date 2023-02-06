import React, { useState, useEffect } from 'react';
import './reset.css'
import './App.css';
import { fetchListBooks, getBookDetails } from '../src/services/api'
import { Card } from '../src/components/Card'
import { CardDetails } from '../src/components/CardDetails'
import { BookLists, BookDetails } from '../src/services/api'
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

function App() {

  const [data, setData] = useState<BookLists[]>([])
  const [bookDetails, setBookDetails] = useState<BookDetails[]>([])
  const [showList, setShowList] = useState<boolean>(true)

  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await fetchListBooks()
      setData(response);
    };

    fetchAllBooks();

  }, []);

  const fetchBookDetails = async (listName: string) => {
    const response = await getBookDetails(listName);
    setBookDetails(response);
    setShowList(false)
  };



  return (


    <>
      <NavBar showBackButton={!showList} onBackButtonClick={() => setShowList(true)} />
      <div>
        {showList && <Header />}
        <div className='parentCard'>
          {showList && data.map((book) => {
            return (
              <Card
                key={book.list_name}
                list_name={book.list_name}
                oldest_published_date={book.oldest_published_date}
                newest_published_date={book.newest_published_date}
                updated={book.updated}
                listName={book.list_name_encoded}
                onClick={fetchBookDetails}
              />
            )
          })}
        </div>

        {/* {
          !showList && (
            <div>
              <button onClick={() => setShowList(true)}>Back</button>
            </div>
          )
        } */}

        <div className='cardDetailsParent'>
          {!showList && bookDetails.map((bookDetails) => (
            <CardDetails
              key={bookDetails.title}
              title={bookDetails.title}
              book_image={bookDetails.book_image}
              weeks_on_list={bookDetails.weeks_on_list}
              description={bookDetails.description}
              amazon_product_url={bookDetails.amazon_product_url}
            />
          ))}

        </div>
      </div >
    </>
  )



}

export default App

