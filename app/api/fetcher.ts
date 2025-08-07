
// axios 
import axios, { AxiosRequestConfig } from "axios"

export async function fetcher<T>(
    url: string,
    options: AxiosRequestConfig = {}
): Promise<T> {
    const res = await axios<T>(`http://localhost:8000${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        withCredentials: true
    });

    // returnning data 
    return res.data;
}