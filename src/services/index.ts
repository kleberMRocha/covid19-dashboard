import axios, { AxiosResponse } from "axios";
import { IResponseData } from "../@types/type";

const Api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});


export const Requests =  {
    getCurrent: async () => {
        const result: AxiosResponse<IResponseData> = await Api.get('/');
        return result.data;
    }
};