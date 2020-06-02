import "normalize.css/normalize.css"

import React from "react"
import { render } from "react-dom"

import App from "./src/App"

const container = document.createElement("div")

document.body.appendChild(container)

render(<App />, container)
