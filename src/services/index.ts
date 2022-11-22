import axios, { AxiosResponse } from "axios";
import { IInfoUF, IResponseData } from "../@types/type";

const Api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});


export const Requests =  {
    getCurrent: async () => {
        const result: AxiosResponse<IResponseData> = await Api.get('/');
        return result.data;
    },
    getCurrentByUf: async (uf:string) => {
        const result: AxiosResponse<IInfoUF> = await Api.get(`brazil/uf/${uf}`);
        return result.data;
    },
    getByDate: async (date:string) => {
        const result: AxiosResponse<IResponseData> = await Api.get(`brazil/${date}`);
        return result.data;
    }
};