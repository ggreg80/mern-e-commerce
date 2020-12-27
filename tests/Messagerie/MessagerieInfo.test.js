import axios from 'axios'
import {APP_VERSION, BASE_URL} from "../../dist/config.js"
import {MessageInfo} from "../../dist/entities/Messagerie/MessageInfo.js"

const Kdecole = require('../../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: require('../fakeData/Messagerie/fakeInfo.json')
})

describe('Test Messagerie Info', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return messagerie info', async () => {
        expect(await user.getMessagerieInfo()).toBeInstanceOf(MessageInfo)
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/messagerie/info/"
        })
    })
})