import React, { useState } from "react"
import "./App.css"
import Grid from "./Components/Grid"
import Slider from "./Components/Slider"
import ThisWeek from "./Components/ThisWeek"
import moment from "moment"
import InflectIt from "./Components/InflectIt"

//GRID CODE
function App() {
  let [grid, setGrid] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const handleClickBox = e => {
    let currentIndex = e.target.innerText
    if (grid[currentIndex] === false) {
      grid[currentIndex] = true
    } else {
      grid[currentIndex] = false
    }
    setGrid([...grid])
  }

  // SLIDER CODE

  let [colorNumber, setColorNumber] = useState([0, 0, 0])

  const handleSlider = e => {
    let newColor = [...colorNumber]
    if (e.target.id === "rSlider") {
      newColor[0] = e.target.value
    } else if (e.target.id === "gSlider") {
      newColor[1] = e.target.value
    } else if (e.target.id === "bSlider") {
      newColor[2] = e.target.value
    }
    setColorNumber(newColor)
  }

  // THISWEEK CODE

  let [startDate, setStartDate] = useState(moment().toDate())

  let weekArray = [
    moment(startDate)
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(1, "days")
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(2, "days")
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(3, "days")
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(4, "days")
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(5, "days")
      .format("MMM Do YYYY")
      .toString(),
    moment(startDate)
      .add(6, "days")
      .format("MMM Do YYYY")
      .toString()
  ]
  //  console.log(weekArray)
  let [week, setWeek] = useState([...weekArray])

  const newWeek = e => {
    if (e.target.innerText === "Previous Week") {
      let newStartDate = moment(startDate)
        .subtract(7, "days")
        .toString()
      setStartDate(newStartDate)
    } else if (e.target.innerText === "Next Week") {
      let newStartDate = moment(startDate)
        .add(7, "days")
        .toString()
      setStartDate(newStartDate)
    }

    setWeek([...weekArray])
  }

  // Inflect it code

  let [word, setWord] = useState([])
  let [input, setInput] = useState("")

  const setInputWord = e => {
    let newWord = e.target.value
    setInput(newWord)
  }

  const addWord = e => {
    e.preventDefault()
    setWord([...word, input])
  }

  return (
    <div className="App">
      <div id="grid">
        <Grid grid={grid} handleClickBox={handleClickBox} />
      </div>
      <Slider colorNumber={colorNumber} handleSlider={handleSlider} />
      <div id="thisWeek">
        <ThisWeek week={week} />
        <div id="weekButtons">
          <button id="previous" onClick={newWeek}>
            Previous Week
          </button>
          <button id="next" onClick={newWeek}>
            Next Week
          </button>
        </div>
      </div>
      <div id="inflect-it">
        <InflectIt
          word={word}
          addWord={addWord}
          setInputWord={setInputWord}
          setWord={setWord}
        />
      </div>
    </div>
  )
}

export default App
