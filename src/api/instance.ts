import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getCookie } from '../util/cookies'

const getInstance = () => {
  const instance = axios.create({
    baseURL: 'http://52.78.232.110:9090/api/v1',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  })

  const TIMEOUTERROR_MESSAGE = 'timeout'

  instance.defaults.timeout = 5000
  instance.defaults.timeoutErrorMessage = TIMEOUTERROR_MESSAGE

  instance.interceptors.request.use(handleRequest)

  instance.interceptors.response.use(handleResponse, handleIntercepterError)

  return instance
}

export const instance = getInstance()

function handleRequest(req: InternalAxiosRequestConfig<any>) {
  // const accessToken = getCookie('accessToken')

  // if (accessToken) {
  //   req.headers['Authorization'] = `Bearer ${accessToken}`
  // }

  req.headers[
    'Authorization'
  ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKV1QiLCJpbWFnZSI6IjQwNC5qcGciLCJyb2xlIjoiQURNSU4iLCJuYW1lIjoi6rmA64-F7J6QIiwicG9zaXRpb24iOiLqs7zsnqUiLCJleHAiOjE2ODYzNzEwNjEsImRlcGFydG1lbnQiOiLqsJzrsJwiLCJpYXQiOjE2ODM3NzkwNjEsInVzZXJuYW1lIjoiYWRtaW40In0.ADlhVUmqLzy46MjD-YdPgk5ssuhZ8xpzAZIO-d1FPaIw6aytulQz7uNcUYTtbyJwWX-S_TeZgS7POQn_NlOA8g`
  return req
}

function handleResponse(res: AxiosResponse<any, any>) {
  return res
}

function handleIntercepterError(error: AxiosError) {
  if (error?.code === AxiosError.ECONNABORTED) {
    return Promise.reject({ ok: false, error: { message: instance.defaults.timeoutErrorMessage } })
  }
  return Promise.reject(error)
}
