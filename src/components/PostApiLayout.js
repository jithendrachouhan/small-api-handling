import RequestButton from '../shared/RequestButton'
import CancelButton from '../shared/CancelButton'
import ResponseContent from '../shared/ResponseContent'
import { showErrorToast } from '../utils/toast'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from '../services/apiService/axiosInstance'
import apiJson from '../services/apiService/apiJson'
import { BASE_URL } from '../utils/constants'
import { clearPostApiData, setPostApiData } from '../redux/apiSlice'

const PostApiLayout = () => {
    const apiType = "postApi"
    const [ isLoading, setIsLoading ] = useState(false)
    const apiData = useSelector((store) => store.api.PostApiLayout)
  
    const dispatch = useDispatch()
  
    const handleClearClicked = () => {
        dispatch(clearPostApiData())
    }
  
    const handleReuqestClicked = async () => {
        setIsLoading(true)
        try {
          const response = await axios(apiJson[apiType])
          console.log("Success Data here",response.data)
          dispatch(setPostApiData(response.data))
          setIsLoading(false)
        } catch (error) {
          if(error.message) showErrorToast(error.message)
          setIsLoading(false)
        }
    }
  
  
    return (
      <div className='m-20 bg-white shadow-lg p-8'>
        
        <div className='flex justify-between items-center'> 
          <div className='flex gap-4 items-center'>
            <RequestButton 
              isLoading={isLoading} 
              text={"POST"} 
              onClick={handleReuqestClicked} 
              bgColor={'bg-green-300'}/>
            <p>
              HOST: {BASE_URL + apiJson[apiType].url}
            </p>
          </div>
          {apiData && <CancelButton onClick={handleClearClicked} />}
        </div>
        {apiData && <ResponseContent response={apiData} />}
      </div>
    )
}

export default PostApiLayout