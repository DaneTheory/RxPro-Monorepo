import data from './data'


const {
  label,
  cta,
  body
} = data


const PRIVACY_POLICY = {
    Meta: {
      Slug: `privacy-policy`
    },
    Data: {
      Topic: label,
      Note: cta,
      Content: body
    }
}


export {
  PRIVACY_POLICY
}
