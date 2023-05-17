import React from 'react'

import Box from '@mui/material/Box'

const Food = ({name, price}) => {
  return (
    <div>{name} {price}</div>
  )
}

export default Food