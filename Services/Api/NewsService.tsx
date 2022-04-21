import { baseUrl, apiKey } from '../../Constant/ApiConstants';
import httpService from './httpService';

//get news data from api
export function getTopHeadline(pageNumber:any) {
    const endPoint = baseUrl + 'top-headlines?country=us&apiKey=' + apiKey+'&page='+pageNumber;
    console.log(endPoint);
    
    return httpService.get(endPoint);
}
