import React from 'react'
import NavBar from './NavBar'
import Story from './stories/Story'
import Posts from "../components/posts/Posts"

const FullPage = () => {
  return (
    <div>
      <NavBar />
      <Story />
      <Posts />
    </div>
  )
}

export default FullPage
