import * as React from 'react'
import Layout from '../layout'

import Food from './Food'
import Top from './Top'
import Drink from './Drink'
import Floor from './Floor'

const IndexPage = () => {
  return (
    <Layout>
      <Top />
      <Food />
      <Drink />
      <Floor />
    </Layout>
  )
}

export default IndexPage
