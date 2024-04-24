import * as React from 'react'
import Layout from '../layout'

import Food from './Food'
import Top from './Top'
import Drink from './Drink'
import Floor from './Floor'
import ShopInfo from './ShopInfo'

const IndexPage = () => {
  return (
    <Layout>
      <Top />
      <Food />
      <Drink />
      <Floor />
      <ShopInfo />
    </Layout>
  )
}

export default IndexPage
