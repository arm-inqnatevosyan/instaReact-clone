import React from 'react'
import insta6 from "../stories/insta6.jpg"
import insta7 from "../stories/insta7.jpg"
import insta5 from "../stories/insta5.jpg"
import insta4 from "../stories/insta4.webp"
import Postcss from "../posts/Posts.css"
import { useState } from 'react'
import Axioss from '../Axioss.jsx'

const Posts = () => {
    const [toda,setTodo] = useState(false)
    const [toda1,setTodo1] = useState(false)
    const [toda2,setTodo2] = useState(false)
    const [toda3,setTodo3] = useState(false)
  return (
    <main>
        <div>
            <img src={insta6} />
            <div className='global'>
            <p>robincield</p>
        <div class="icons">
            <p>300<i class="fa-regular fa-heart"></i></p>
            <i class="fa-regular fa-comment" onClick={() => {
              let d = document.querySelector(".p")
              setTodo(!toda)
              if (d.style.display === "none") {
                d.style.display = "block";
              } else {
                d.style.display = "none";
              }
            }} ></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
            </div>
            <div class='p'>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
            </div>
        </div>
        <div>
            <img src={insta7} />
            <div className='global'>
            <p>arnauld</p>
        <div class="icons">
            <p>500<i class="fa-regular fa-heart"></i></p>
            <i class="fa-regular fa-comment" onClick={() => {
              let d = document.querySelector(".p1")
              if (d.style.display === "none") {
                d.style.display = "block";
              } else {
                d.style.display = "none";
              }
              setTodo1(!toda1)
            }} ></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
            </div>
            <div class='p1'>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
            </div>
        </div>
        
        <div>
            <img src={insta5} />
            <div className='global'>
            <p>tinanakey</p>
        <div class="icons">
            <p>30<i class="fa-regular fa-heart"></i></p>
            <i class="fa-regular fa-comment" onClick={() => {
              let d2 = document.querySelector(".p2")
              setTodo2(!toda2)
              if (d2.style.display === "none") {
                d2.style.display = "block";
              } else {
                d2.style.display = "none";
              }
            }} ></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
            </div>
            <div class='p2'>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
                <p>armenia</p>
                <p>paris</p>
                <p>russia</p>
            </div>
        </div>
        <div>
            <img src={insta4} />
            <div className='global'>
            <p>louwsers</p>
        <div class="icons">
            <p>5100<i class="fa-regular fa-heart"></i></p>
            <i class="fa-regular fa-comment" onClick={() => {
              let d3 = document.querySelector(".p3")
              if (d3.style.display === "none") {
                d3.style.display = "block";
              } else {
                d3.style.display = "none";
              }
              setTodo3(!toda3)
            }} ></i>
            <i class="fa-regular fa-paper-plane"></i>
        </div>
            </div>
            <div class='p3'>
                <Axioss />
            </div>
        </div>
    </main>
  )
}

export default Posts
