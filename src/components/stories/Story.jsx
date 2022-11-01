import React from 'react'
import Storay from "../stories/Story.css";
import insta1 from "../stories/insta1.webp";
import insta2 from "../stories/insta2.jpg";
import insta3 from "../stories/insta3.jpg";
import insta4 from "../stories/insta4.webp";
import insta5 from "../stories/insta5.jpg";
import insta6 from "../stories/insta6.jpg";
import insta7 from "../stories/insta7.jpg";
import insta8 from "../stories/insta8.jpg";

const Story = () => {
  return (
    <div className='story'>
      <div id="one-block">
        <img src={insta8} />
        <div>
          <i class="fa-solid fa-circle-plus" id='add'></i>
        </div>
        <p>Your Story</p>
      </div>
      <div>
        <img src={insta1} />
        <p>axelbeyon</p>
      </div>
      <div>
        <img src={insta2} />
        <p>simson</p>
      </div>
      <div>
        <img src={insta3} />
        <p>ico.wooy</p>
      </div>
      <div>
        <img src={insta4} />
        <p>louwsers</p>
      </div>
      <div>
        <img src={insta5} />
        <p>tinanakey</p>
      </div>
      <div>
        <img src={insta6} />
        <p>robincield</p>
      </div>
      <div>
        <img src={insta7} />
        <p>arnauld</p>
      </div>
    </div>
  )
}

export default Story
