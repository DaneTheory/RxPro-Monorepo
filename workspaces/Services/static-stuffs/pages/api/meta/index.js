import * as pkg from '../../../package.json'


module.exports = async (req, res) => {
  const { body } = await req

  await res.send({
    service: pkg.name,
    version: pkg.version,
    ts: Date.now()
  })
}
