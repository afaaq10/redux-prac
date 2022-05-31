const table = (state = 0, action) => {
    switch (action.type) {
        case "TABLE":
            for (var i = 0; i <= 10; i++) {

                var el = 3 * i
                console.log(`${3}*${i}=${el}`)



            }

            return el

        default:
            return state;
    }

}
export default table