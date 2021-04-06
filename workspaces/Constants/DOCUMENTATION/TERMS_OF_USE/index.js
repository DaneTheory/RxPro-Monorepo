import data from './data'


const {
  label,
  cta,
  body
} = data


const TERMS_OF_USE = {
    Meta: {
      Slug: `terms-of-use`
    },
    Data: {
      Topic: label,
      Note: cta,
      Content: body
    }
}


export {
  TERMS_OF_USE
}
