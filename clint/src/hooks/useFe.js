import { useEffect ,useState } from "react";
import {fetchDataFromApi}from '../Utils/api'

const useFe =(endpoint)=>{
    const [data,setData] = useState(null)

    useEffect(  ()=>{
        makeApicall()
    },[endpoint])

    const makeApicall =async ()=>{
        const res =await fetchDataFromApi(endpoint)
        setData(res)
    }

    return {data}
}

export default useFe;