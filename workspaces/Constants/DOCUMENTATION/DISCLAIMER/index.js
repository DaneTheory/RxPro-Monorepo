import data from './data'


const {
  label,
  cta,
  body
} = data

const DISCLAIMER = {
    Meta: {
      Slug: `disclaimer`
    },
    Data: {
      Topic: label,
      Note: cta,
      Content: body
    }
}


export {
  DISCLAIMER
}
