import { FC, useState, useEffect, useCallback } from "react"
import { BookDetails, getBookDetails } from "../../services/api"
import { CardDetailsParent } from "./styles"
import NavBar from "../../components/NavBar"
import CardDetails from "../../components/CardDetails"
import { Props } from '../../components/Card/type'
import { useParams, useNavigate } from "react-router-dom"


export const BooksDetails: FC<Props> = () => {

    const [bookDetails, setBookDetails] = useState<BookDetails[]>([])
    const { listName } = useParams<{ listName: string }>();

    const navigate = useNavigate();

    const fetchBookDetails = useCallback(async (list: string) => {
        const response = await getBookDetails(list);
        setBookDetails(response);
    }, []);

    const goToBack = useCallback(() => {
        navigate('/books')
    }, [navigate]);

    useEffect(() => {
        if (listName) {
            fetchBookDetails(listName);
        }
    }, [listName, fetchBookDetails]);


    return (
        <>
            <NavBar showBackButton onBackButtonClick={goToBack} />

            <CardDetailsParent>
                {bookDetails.map((bookDetails) => (
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

