import { BASE_URL, API_KEY } from '../../Constant/ApiConstants';
import httpService from './httpService';

//get news data from api
export function getTopHeadline(pageNumber:any) {
    const endPoint  =`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}&page=${pageNumber}`;
    return httpService.get(endPoint);
}
