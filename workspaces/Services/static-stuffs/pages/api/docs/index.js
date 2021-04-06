import * as changeCase from "change-case"

import * as pkg from '../../../package.json'
import Constants from '@devbro/constants'





module.exports = async (req, res) => {
  const {
    paramCase
  } = changeCase

  const {
    DOCS
  } = Constants


  try {
    const { body } = await req

    let info =  await Object.keys(DOCS)
      .map(topic => {
        return {
          topic: topic,
          slug: `/${paramCase(topic)}`
        }
      })


    await res.send(info)

  }
  catch(err) {
    console.error(err)
    throw err
  }
}
