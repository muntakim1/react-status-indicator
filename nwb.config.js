module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactStatusIndicator',
      externals: {
        react: 'React'
      }
    }
  }
}
