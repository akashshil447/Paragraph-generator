import React, { useState } from 'react'
import data from './data'
function App() {
  const [paragraphs, setParagraphs] = useState([])
  const [noOfParagraphs, setNoOfParagraphs] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(noOfParagraphs)
    if (noOfParagraphs <= 0) {
      amount = 1
    }
    if (noOfParagraphs > data.length) {
      amount = data.length
    }

    setParagraphs(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <h4>Limit:10 </h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={noOfParagraphs}
          onChange={(e) => {
            setNoOfParagraphs(e.target.value)
          }}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((para, index) => {
          return (
            <>
              <p key={index}>{para}</p>
              <div className='underline'></div>
            </>
          )
        })}
      </article>
    </section>
  )
}

export default App
