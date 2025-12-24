import React from 'react'
import Typography from '@mui/material/Typography'
import Catagories from './HomeComponents/Categories'

function Home() {
  return <>
    <Typography component={"h1"} variant='h1'>This Is Home Page</Typography>
    <Catagories />
  </>
}

export default Home
