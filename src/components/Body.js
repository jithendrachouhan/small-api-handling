import ReqResLayout from "./ReqResLayout"
import * as apiActions from '../redux/apiSlice'
import { useSelector } from "react-redux"


const Body = () => {

  const apiData = useSelector((store) => store.api)

  return (
    <>
      <ReqResLayout 
        apiType="getApi" 
        bgColor={'bg-red-300'}
        buttonText="Get"
        setdata={apiActions.setGetApiData} 
        clearData={apiActions.clearGetApiData}
        apiData={apiData.getApiData}
      />
      <ReqResLayout 
        apiType="postApi" 
        bgColor={'bg-green-300'}
        buttonText="Post"
        setdata={apiActions.setPostApiData}
        clearData={apiActions.clearPostApiData}
        apiData={apiData.postApiData}
      />
      <ReqResLayout 
        apiType="putApi" 
        bgColor={'bg-blue-300'}
        buttonText="Put"
        setdata={apiActions.setPutApiData}
        clearData={apiActions.clearPutApiData}
        apiData={apiData.putApiData}
      />
      <ReqResLayout 
        apiType="patchApi" 
        bgColor={'bg-pink-300'}
        buttonText="Patch"
        setdata={apiActions.setPatchApiData}
        clearData={apiActions.clearPatchApiData}
        apiData={apiData.patchApiData}
      />
      <ReqResLayout 
        apiType="deleteApi" 
        bgColor={'bg-red-500'}
        buttonText="Delete"
        setdata={apiActions.setDeleteApiData}
        clearData={apiActions.clearDeleteApiData}
        apiData={apiData.deleteApiData}
      />
      <ReqResLayout 
        apiType="getStatusDescriptionApi" 
        bgColor={'bg-red-300'}
        buttonText="Get Status"
        setdata={apiActions.setGetStatusCodeApiData}
        clearData={apiActions.clearGetStatusCodeApiData}
        apiData={apiData.getStatusCodeData}
        isUserInput={true}
      />
      <ReqResLayout 
        apiType="getImageJpeg" 
        bgColor={'bg-red-300'}
        buttonText="Get Jpeg"
        setdata={apiActions.setGetImageJpegData}
        clearData={apiActions.clearGetImageJpegData}
        apiData={apiData.getImageJpeg}
        isImage={true}
      />
      <ReqResLayout 
        apiType="getHTML" 
        bgColor={'bg-red-300'}
        buttonText="Get HTML"
        setdata={apiActions.setHTMLData}
        clearData={apiActions.clearHTMLData}
        apiData={apiData.getHTML}
        isHTML={true}
      />
    </>
  )
}

export default Body