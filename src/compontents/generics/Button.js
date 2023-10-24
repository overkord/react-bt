import React from 'react'

const Button = ({url, title}) => {
  return (
    <a class="btn-transparent center-content" href={url}>{title} <i class="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button