import { getSaveDataBooks, setDataBooks, getSaveDataDetails, setSaveDataDetails } from './storage/storage'

export type BookLists = {

    list_name: string,
    oldest_published_date: string,
    newest_published_date: string,
    updated: string,
    list_name_encoded: string
}

export type BookDetails = {

    title: string,
    book_image: string,
    weeks_on_list: number
    description: string,
    amazon_product_url: string

}


export const fetchListBooks = async () => {

    let list = getSaveDataBooks()

    if (!list || list.length === 0) {
        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
            const bookLists = await response.json()
            if (bookLists && bookLists.num_results) {
                setDataBooks(bookLists.results)
                list = bookLists.results

            }
        } catch (error) {
            console.log(error)

        }
    }

    return list
}


export const getBookDetails = async (listName: string) => {

    // let categorieName = window.localStorage.getItem(localStorageListName);
    let bookStorage = getSaveDataDetails(listName)

    if (!bookStorage || bookStorage.length === 0) {

        try {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${listName}.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB`)
            const bookDetails = await response.json()
            const results = bookDetails.results.books
            setSaveDataDetails(listName, results)
            return results
        } catch (error) {
            console.log(error)

        }
    }
    return bookStorage

}

















