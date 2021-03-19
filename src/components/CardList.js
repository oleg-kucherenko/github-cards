import React from "react"
import Card from "./Card"
import { v4 as uuidv4 } from 'uuid'

const CardList = (props) => (
  <React.Fragment>
    <div className="d-flex flex-wrap">
      {props.profiles.map((profile) => (
        <Card {...profile} key={uuidv4()} />
      ))}
    </div>
  </React.Fragment>
)

export default CardList
