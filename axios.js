const axios = require('axios')

let getUrl = function (url) {
    axios.get(url)
        .then(function (res) {
            console.log('succeeded!')
            console.log(res.data)
            console.log(res.headers)
        })
        .catch(function (err) {
            console.log('error!')
            console.log(err)
        })
}

module.exports = {
    getUrl: getUrl
}