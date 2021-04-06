import data from './data'


const {
  label,
  cta,
  body
} = data

const ABOUT_US = {
    Meta: {
      Slug: `about-us`
    },
    Data: {
      Topic: label,
      Note: cta,
      Content: body
    }
}


export {
  ABOUT_US
}
