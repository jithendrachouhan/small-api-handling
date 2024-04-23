import RequestButton from '../shared/RequestButton'
import CancelButton from '../shared/CancelButton'
import ResponseContent from '../shared/ResponseContent'
import { showErrorToast } from '../utils/toast'
import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import axios from '../services/apiService/axiosInstance'
import apiJson from '../services/apiService/apiJson'
import { BASE_URL } from '../utils/constants'

const ReqResLayout = ({apiData,apiType, buttonText, bgColor,setdata,clearData, isUserInput = false, isImage = false, isHTML = false}) => {
    
  const [ isLoading, setIsLoading ] = useState(false)

  const statusRef = useRef()


  const dispatch = useDispatch()

  const handleClearClicked = () => {
      dispatch(clearData())
  }

  const injectParamsToUrl = (_url_, paramObj) => {
    var url = _url_;
    for (let key in paramObj) {
      url = url.replace(':' + key, paramObj[key]);
    }
    return url;
  };

  const handleReuqestClicked = async () => {
    const requestObject = isImage? {...apiJson[apiType], responseType: 'blob'} : {...apiJson[apiType]}
    console.log("Request Body",requestObject)
    requestObject.url = injectParamsToUrl(requestObject.url, {statusCode: statusRef?.current?.value});
    setIsLoading(true)
    try {
      const response = await axios(requestObject)
      console.log("Here is your data",response.data)
      if(isHTML && response.data){
        dispatch(setdata(response.data))
      }
      else if(isImage && response.data){
        const imageURL = URL.createObjectURL(response.data);
        dispatch(setdata(imageURL))
      }
      else if(response.data.data){
        console.log("Response Data",response.data)
        dispatch(setdata(response.data))
      }else{
        console.log("SomeThing Else Data",response.data)
        showErrorToast("Opps somthing went wrong, please try again later")
      }
      setIsLoading(false)
    } catch (error) {
      if(error.message) showErrorToast(error.message)
      setIsLoading(false)
    }
  }


  return (
    <div className='mx-2 my-2 bg-white shadow-lg p-4 sm:mx-40'>
      <div className='flex justify-between'>
        <p className='text-sm sm:text-lg'>
              {BASE_URL + apiJson[apiType].url}
            </p>
        {isUserInput && <input className='w-24 border border-red-500 active:border-red-500 py-2 px-4' ref={statusRef} placeholder='status-code' />}
      </div>
      <div className='flex justify-between items-center'> 
          <RequestButton 
            isLoading={isLoading} 
            text={buttonText} 
            onClick={handleReuqestClicked} 
            bgColor={bgColor}/>
        {apiData && <CancelButton onClick={handleClearClicked} />}
      </div>
      {console.log("heyyyyy",apiData) }
      {apiData &&  (isImage? <img alt='loaded data' src={apiData}/>:
                    (isHTML)? <div dangerouslySetInnerHTML={{ __html:apiData }} />:
                    <ResponseContent response={apiData} /> )}
    </div>
  )
}

export default ReqResLayout