import axios from 'axios'

const TravelAPI = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPassengers(){
        return TravelAPI.get('/passenger?page=0&size=10')  
    },
    getPassengerById(id){
        return TravelAPI.get(`/passenger/${id}`)
    }
}