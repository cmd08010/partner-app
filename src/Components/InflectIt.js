import React from "react"
import inflection from "inflection"

export default function InflectIt({ setInputWord, addWord, word, setWord }) {
  const deleteWord = e => {
    console.dir(e.target)
    let index = e.target.id
    word.splice(index)
    setWord([...word])
  }

  return (
    <div id="inflect-it">
      <input type="text" onChange={setInputWord}></input>
      <button id="next" onClick={addWord}>
        +
      </button>
      <div id="inflected-info">
        {word.map((word, index) => {
          word.toString()
          let plural = inflection.pluralize(word)
          return (
            <div key={index} id="">
              <p>{word}(Singular)</p>
              <p>{plural}(plural)</p>
              <button id={index} key={index} onClick={deleteWord}>
                x
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
