import { FC, useState, useEffect } from "react"
import { BookDetails, BookLists, fetchListBooks, getBookDetails } from "../../services/api"
import { ParentCard, CardDetailsParent, Loading, LoadingSpinner } from "./styles"
import NavBar from "../../components/NavBar"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"

export const Books: FC = () => {


    const [data, setData] = useState<BookLists[]>([])
    const [showList, setShowList] = useState<boolean>(true)
    const [isLoading, setLoading] = useState<boolean>(false)


    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllBooks = async () => {
            const response = await fetchListBooks()
            setData(response);
        };

        fetchAllBooks();

    }, []);


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
                                onClick={() => {
                                    console.log(book.list_name)

                                    navigate('/books/details', { state: { listName: book.list_name } });


                                }}
                            />
                        )
                    })}
                </ParentCard>

            }

        </>
    )

}


