import React from 'react'
import loading from './loading.gif'

export default function Loader() {
  return (
    <div className = "container text-center mt-3">
      <img src = {loading} alt = "loading" />
    </div>
  )
}
