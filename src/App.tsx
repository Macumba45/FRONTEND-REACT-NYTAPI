import { useState, useEffect } from 'react';
import './reset.css'
import { fetchListBooks, getBookDetails } from '../src/services/api'
import { Card } from '../src/components/Card'
import { CardDetails } from '../src/components/CardDetails'
import { BookLists, BookDetails } from '../src/services/api'
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Loading, LoadingSpinner, ParentCard, CardDetailsParent } from './styles'
// import { ThemeProvider } from 'styled-components'

function App() {

  const [data, setData] = useState<BookLists[]>([])
  const [bookDetails, setBookDetails] = useState<BookDetails[]>([])
  const [showList, setShowList] = useState<boolean>(true)
  const [isLoading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await fetchListBooks()
      setData(response);
    };

    fetchAllBooks();

  }, []);

  const fetchBookDetails = async (listName: string) => {
    setLoading(true);
    const response = await getBookDetails(listName);
    setBookDetails(response);
    setShowList(false)
    setLoading(false)
  };



  return (

    <>
      <NavBar showBackButton={!showList} onBackButtonClick={() => setShowList(true)} />

      {showList && <Header />}
      {isLoading ? (
        <Loading>
          <LoadingSpinner></LoadingSpinner>
        </Loading>) :

        <ParentCard>
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
        </ParentCard>

      }
      <CardDetailsParent>

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

      </CardDetailsParent>

    </>
  )

}

export default App

