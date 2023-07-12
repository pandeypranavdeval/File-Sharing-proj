import axios from 'axios';

const API_URL= 'https://file-sharing-proj-be.onrender.com';

export const uploadFile = async (data) =>{
    try{
        const response = await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } catch (error){
        console.log('Error while calling API ',error.message);
    } 
}