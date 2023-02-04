import { BookLists, BookDetails } from '../api'
export const localStorageKeyBooks: string = 'books'
export const localStorageKeyDetails: string = 'bookDetails'
export const localStorageListName: string = 'currentListName'





export const getSaveDataBooks = () => {

    const saveDataBooks = window.localStorage.getItem(localStorageKeyBooks);
    return saveDataBooks ? JSON.parse(saveDataBooks) : []
}

export const setDataBooks = (books: Array<BookLists>) => {

    window.localStorage.setItem(localStorageKeyBooks, JSON.stringify(books))


}


export const getSaveDataDetails = () => {

    const saveDataBooksDetails = window.localStorage.getItem(localStorageKeyDetails);
    return saveDataBooksDetails ? JSON.parse(saveDataBooksDetails) : [];

}

export const setSaveDataDetails = (bookDetails: Array<Record<string, unknown>>) => {

    window.localStorage.setItem(localStorageKeyDetails, JSON.stringify(bookDetails))


}
