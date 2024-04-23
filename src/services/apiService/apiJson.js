const apiJson = {
  getApi: {
      url: '/kitchen-sink/http-methods/get',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      }, 
  },
  postApi: {
    url: '/kitchen-sink/http-methods/post',
    method: 'POST',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  putApi: {
    url: '/kitchen-sink/http-methods/put',
    method: 'PUT',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  patchApi: {
    url: '/kitchen-sink/http-methods/patch',
    method: 'PATCH',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  deleteApi: {
    url: '/kitchen-sink/http-methods/delete',
    method: 'DELETE',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  getStatusDescriptionApi: {
    url: '/kitchen-sink/status-codes/:statusCode',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  getImageJpeg: {
    url: '/kitchen-sink/image/jpeg',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
    responseType: 'blob'
  },
  getHTML: {
    url: '/kitchen-sink/response/html',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  getGzip: {
    url: '/kitchen-sink/response/gzip',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
  getBrotli: {
    url: '/kitchen-sink/response/brotli',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
    }, 
  },
}

export default apiJson;