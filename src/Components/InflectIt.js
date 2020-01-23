import React from "react"
import inflection from "inflection"

export default function InflectIt({ setInputWord, addWord, word, setWord }) {
  const deleteWord = indexToDelete => {
    word.splice(indexToDelete)
    setWord([...word])
    console.log(word)
  }

  return (
    <div id="inflect-it">
      <input type="text" onChange={setInputWord}></input>
      <button id="next" onClick={addWord}>
        +
      </button>
      <div id="inflected-info">
        {word.map((wordItem, index) => {
          let plural = inflection.pluralize(wordItem)
          console.log("in the map")
          return (
            <div key={index}>
              <p>{wordItem}(Singular)</p>
              <p>{plural}(plural)</p>
              <button key={index} onClick={deleteWord(index)}>
                x
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
