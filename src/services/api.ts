import { localStorageKeyBooks, localStorageListName, localStorageKeyDetails } from './storage/storage';
import { getSaveDataBooks, setDataBooks, getSaveDataDetails, setSaveDataDetails } from './storage/storage'

export type BookLists = {

    list_name: string,
    oldest_published_date: string,
    newest_published_date: string,
    updated: string,
}

export type BookDetails = {

    list_name: string,



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
    let bookStorage = getSaveDataDetails()

    if (!bookStorage) {

        try {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB`)
            const bookDetails = await response.json()
            setSaveDataDetails(bookDetails)
            bookStorage = bookDetails
        } catch (error) {
            console.log(error)

        }
    }
    return bookStorage

}

















