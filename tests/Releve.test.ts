import axios from 'axios'
import Releve from '../src/entities/Note/Releve'
import { Kdecole, ApiUrl, ApiVersion } from '../src/Kdecole'
import { readFileSync } from 'fs'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/fakeReleve.json')
})

describe('Test Releve', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return a releve', async () => {
    expect(await user.getReleve()).toBeInstanceOf(Releve)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterReleves/idetablissement/10485/'
    })
  })
  it('should return moyenneGenerale and medianeGenerale', async () => {
    const releve = await user.getReleve()
    const expectedMoyennesGenerales = ['14.55', '15.83', null]
    expect(releve).toBeInstanceOf(Releve)
    for (const trimestre in releve.trimestres) {
      const moyenneGenerale = releve.trimestres[trimestre].getMoyenneGenerale()
      if (moyenneGenerale === null) {
        expect(moyenneGenerale).toBe(expectedMoyennesGenerales[trimestre])
      } else {
        expect(moyenneGenerale.toFixed(2)).toBe(expectedMoyennesGenerales[trimestre])
      }
    }
  })
  it('should return a releve of a specific student', async () => {
    await user.getReleve('AAP05567')
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterReleves/ideleve/AAP05567/'
    })
  })
  it('should return correct trimestres csv', async () => {
    const releve = await user.getReleve()
    // eslint-disable-next-line node/no-path-concat
    expect(releve.exportCSV().trimestres).toBe(readFileSync(__dirname + '/fakeData/csv/trimestres.csv', 'utf8'))
  })
  it('should return correct matieres csv', async () => {
    const releve = await user.getReleve()
    // eslint-disable-next-line node/no-path-concat
    expect(releve.exportCSV().matieres).toBe(readFileSync(__dirname + '/fakeData/csv/matieres.csv', 'utf8'))
  })
})
