import { ChangeEvent, FormEvent, useState } from 'react'

function Gamesearch() {
  return (
    <>
  <p>
  Game data from <a href="https://rawg.io/">rawg.io</a>
</p>
</>
)
}

export default Gamesearch
/*

import { ChangeEvent, FormEvent, useState } from 'react'
import { addBookToGlobal, loadingNewBooks } from '../actions/Action'
import { postBook } from '../apis/booksApi'
import { useAppDispatch } from '../hooks/redux'
import { Book } from '../../common/interfaces'

function Booksearch() {
  const [addBook, setAddBook] = useState('')
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddBook(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newBook = addBook
    dispatch(loadingNewBooks())
    return postBook(newBook).then(([addedBook]) => {
      console.log(addedBook)
      dispatch(addBookToGlobal(addedBook))
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Book</h3>
      <label htmlFor="book-search">Open Library Search</label>
      <input
        id="book-search"
        name="search"
        value={addBook}
        onChange={handleChange}
      ></input>
      <button type="submit">Go</button>
    </form>
  )
}

export default Booksearch
*/