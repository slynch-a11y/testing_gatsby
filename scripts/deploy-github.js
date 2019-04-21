const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/slynch-github/testing_gatsby.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)