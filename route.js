(function () {
    function setCurrent () {
        document.querySelector('[route="' + location.hash.substr(1) + '"]')?.classList.add('route-current')
    }
    addEventListener('hashchange', function () {
        document.querySelector('.route-current')?.classList.remove('route-current')
        setCurrent()
    })
    addEventListener('DOMContentLoaded', function () {
        if (location.hash === '') {
            location.hash = '/'
        }
        setCurrent()
    })
    addEventListener('click', function (e) {
        if (e.target.getAttribute?.('href')?.startsWith('/')) {
            e.preventDefault()
            location.hash = '#' + e.target.getAttribute('href')
        }
    })
})()
