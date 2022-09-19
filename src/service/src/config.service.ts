import http from 'axios'

const getConfigInfo = async (): Promise<ConfigTypes.ConfigDataType> => {
  return await http
    .request<ConfigTypes.ConfigDataType>({
      url: `http://localhost:4000/api/config/info/prettier`,
      method: 'GET',
    })
    .then((res) => res.data)
}

const patchConfigInfo = async (form: ConfigTypes.RequestConfigType) => {
  return await http
    .request({
      url: 'http://localhost:4000/api/config/file',
      method: 'POST',
      data: form.data,
      headers: {
        'Content-Type': 'application/JSON',
        authorization: `Bearer ${form.token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const ConfigInfoService = { getConfigInfo, patchConfigInfo }
