import { normalizePath } from "./helpers"

type EntityErrorPayload = {
    message: string
    errors: {
      field: string
      message: string
    }[]
}

const ENTITY_ERROR_STATUS = 422
export class HttpError extends Error {
    status: number
    payload: {
      message: string
      [key: string]: any
    }
    constructor({
      status,
      payload,
      message = 'Lỗi HTTP'
    }: {
      status: number
      payload: any
      message?: string
    }) {
      super(message)
      this.status = status
      this.payload = payload
    }
}

export class EntityError extends HttpError {
    status: typeof ENTITY_ERROR_STATUS
    payload: EntityErrorPayload
    constructor({
      status,
      payload
    }: {
      status: typeof ENTITY_ERROR_STATUS
      payload: EntityErrorPayload
    }) {
      super({ status, payload, message: 'Lỗi thực thể' })
      this.status = status
      this.payload = payload
    }
  }
  
type CustomOptions = Omit<RequestInit, 'method'> & {
    baseUrl?: string | undefined
  }
  
  const request = async <Response>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: CustomOptions | undefined
  ) => {
    let body: FormData | string | undefined = undefined
    if (options?.body instanceof FormData) {
      body = options.body
    } else if (options?.body) {
      body = JSON.stringify(options.body)
    }
    const baseHeaders: {
      [key: string]: string
    } =
      body instanceof FormData
        ? {}
        : {
            'Content-Type': 'application/json'
          }
  
    const baseUrl =
      options?.baseUrl === undefined
        ? 'http://localhost:8080'
        : options.baseUrl
  
    const fullUrl = `${baseUrl}/${normalizePath(url)}`
    const res = await fetch(fullUrl, {
      ...options,
      headers: {
        ...baseHeaders,
        ...options?.headers
      } as any,
      body,
      method
    })
    const payload: Response = await res.json()
    const data = {
      status: res.status,
      payload
    }
  
    if (!res.ok) {
      if (res.status === ENTITY_ERROR_STATUS) {
        throw new EntityError(
          data as {
            status: 422
            payload: EntityErrorPayload
          }
        )
      } else {
        throw new HttpError(data)
      }
    }
    return data
  }

const http = {
    get<Response>(
      url: string,
      options?: Omit<CustomOptions, 'body'> | undefined
    ) {
      return request<Response>('GET', url, options)
    },
    post<Response>(
      url: string,
      body: any,
      options?: Omit<CustomOptions, 'body'> | undefined
    ) {
      return request<Response>('POST', url, { ...options, body })
    },
    put<Response>(
      url: string,
      body: any,
      options?: Omit<CustomOptions, 'body'> | undefined
    ) {
      return request<Response>('PUT', url, { ...options, body })
    },
    delete<Response>(
      url: string,
      options?: Omit<CustomOptions, 'body'> | undefined
    ) {
      return request<Response>('DELETE', url, { ...options })
    }
  }
  
  export default http