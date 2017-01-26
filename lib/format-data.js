'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'copies', status: data.copies || 0})
  status.push({name: 'errors', status: data.errors || 0})
  status.push({name: 'queue', status: data.queue || 0})

  return status
}
