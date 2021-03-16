import axios from 'axios'

export default axios.create({
    baseURL: "https://kitolab.microcms.io/api/v1",
    headers: {
        // Keyをそのまま載せているが GETにしか利用できないので大丈夫だとおもうぜ
        "X-API-KEY": "2c932f10-2edd-4433-9598-c032b3203cc3"
    }
})