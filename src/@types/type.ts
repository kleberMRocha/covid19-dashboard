export interface IInfoUF{
        uid: number;
        uf: string;
        state: string;
        cases: number;
        deaths: number;
        suspects: number;
        refuses: number;
        datetime: string;
}

export interface IResponseData {
        data: IInfoUF[]
}

