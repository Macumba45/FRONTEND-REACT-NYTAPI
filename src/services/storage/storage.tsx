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


export const getSaveDataDetails = (listName: string): any => {

    const saveDataBooksDetails = window.localStorage.getItem(listName);
    return saveDataBooksDetails ? JSON.parse(saveDataBooksDetails) : [];

}

export const setSaveDataDetails = (listName: string, results: Array<BookDetails>) => {

    window.localStorage.setItem(listName, JSON.stringify(results))


}
