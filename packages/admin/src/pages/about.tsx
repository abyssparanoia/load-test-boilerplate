import React from 'react'
import Router from 'next/router'
import { useAuthRequired } from 'src/modules/auth/hooks'

type InitialProps = {}

type Props = {} & InitialProps

const About = (_: Props) => {
  useAuthRequired()
  return (
    <div>
      <button onClick={() => Router.push('/')}>please click here!</button>
    </div>
  )
}

export default About
