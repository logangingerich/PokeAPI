import { AxiosError } from 'axios';

function isAxiosError(error: any): error is AxiosError {
    return error.isAxiosError;
}

export default isAxiosError;