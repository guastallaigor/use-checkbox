const { join } = require('path')

module.exports = {
  source: join(process.cwd(), `src`),
  dist: join(process.cwd(), 'dist')
}
