const login = (req, res) => {
    res.send("selamat datang di halaman login")

}

const register = (req, res) => {
    res.send("selamat datang di halaman register")
}

module.exports = {
    login,
    register

}