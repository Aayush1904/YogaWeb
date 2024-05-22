import axios from 'axios'
import { useEffect } from 'react';

const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL : 'http://localhost:3000/'
    });

    //Inceptors

    useEffect(() => {
        const requestInterceptors = axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

        const responseInterceptors = axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

    return () => {
        axiosInstance.interceptors.request.eject(requestInterceptors)
        axiosInstance.interceptors.response.eject(responseInterceptors)
    }

    } , [axiosInstance])

  return axiosInstance
}

export default useAxiosFetch
