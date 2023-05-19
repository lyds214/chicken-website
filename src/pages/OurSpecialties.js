import React from 'react'
import Food from '../components/Food'
import {data} from '../components/data'

const OurSpecialties = () => {
  return (
    <>
      {data.map(data => {
          <Food key={data.id} name={data.name} price={data.price}></Food>
      })}
    </>
  )
}

export default OurSpecialties