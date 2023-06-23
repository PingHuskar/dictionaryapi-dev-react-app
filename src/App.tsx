import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Definition from './components/Definition';

function App() {
  const [word, setWord] = useState(localStorage.getItem(`word`) || ``)
  const [searchData, setSearchData] = useState([])
  function SearchWord() {
    if (!word){return;}
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.data)
    .then(data => {
      console.clear()
      console.log(data)
      setTimeout(() => {
        setSearchData(data)
      },1000)
    })
  }

  return (
    <>
      <div className="">
        <div className="">
          <input type="text" placeholder='word' value={word} onChange={(e) => {
            e.preventDefault()
            localStorage.setItem('word', e.currentTarget.value);
            setWord(e.currentTarget.value)
          }} />
          <button onClick={SearchWord}>Search</button>
        </div>
        <div className="">
          {searchData && searchData.map((definition,index) => {
            return <>
              <Definition definition={definition} key={index} />
            </>
          })}
        </div>
      </div>
    </>
  )
}

export default App
