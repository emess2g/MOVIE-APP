import React from 'react'
// import Trending, {fetchData} from './Trending'

const Modal = (state) => {
  return (
    <div>
      {state.map((val) => {
        return (
            <div className="">
                <h2>{val.title}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default Modal
