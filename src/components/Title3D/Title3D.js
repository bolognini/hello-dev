import React from "react"
import { Title } from "./Title3D.style"

const Title3D = props => {
  const title = props.children.split("")

  return (
    <Title>
      {title.map(l => (
        <span>{l}</span>
      ))}
    </Title>
  )
}

export default Title3D
