import React from 'react'
import Layout from '../../Component/Layout/Layout'
import Carousel from '../../Component/Other/Carousel/Carousel'
import PopularCateg from '../../Component/Other/PopularCateg/PopularCateg'

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <PopularCateg/>
    </Layout>
  )
}

export default Home