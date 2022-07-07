const o = require('ospec')

o.spec(`Shouldn't be a problem`, () => {
  o(`Should it`, () => {
    o(`Not really`).notEquals(`should it`)
  })
})
