import { FC, useState, useEffect } from "react"
import { BookDetails, getBookDetails } from "../../services/api"
import { CardDetailsParent } from "./styles"
import NavBar from "../../components/NavBar"
import CardDetails from "../../components/CardDetails"
import { Props } from '../../components/Card/type'
import { useLocation } from "react-router-dom"


export const BooksDetailsView: FC<Props> = () => {


    const [bookDetails, setBookDetails] = useState<BookDetails[]>([])
    const [showList, setShowList] = useState<boolean>(false)

    let location = useLocation();

    useEffect(() => {
        const { state } = location;
        console.log(state)
        if (state && state.listName) {
            fetchBookDetails(state.listName);
        }
    }, []);

    const fetchBookDetails = async (listName: string) => {
        const response = await getBookDetails(listName);
        setBookDetails(response);
        setShowList(true)

    };


    return (

        <>
            <NavBar showBackButton={showList} onBackButtonClick={() => setShowList(true)} />

            <CardDetailsParent>

                {showList && bookDetails.map((bookDetails) => (
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

