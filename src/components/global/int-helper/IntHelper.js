import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function IntHelper() {
    const mergedDispatch = useDispatch()
    const { userData } = useSelector((response) => response.authState)
    axios.interceptors.response.use((successResponseData) => {
        return successResponseData
    }, (failedResponseData) => {
        if (failedResponseData.response.status === 401) {
            console.log('are 401 bood!! ma inim, injoorias :)))');
        }
        return failedResponseData
    })
}

export default IntHelper