import { fetcher } from "../fetcher";

export async function registerUser(data: { email: string, name: string }) {
    return fetcher("/auth/register", {
        method: "POST",
        data
    })
}

export async function loginUser(data: { email: string }) {
    return fetcher("/auth/login", {
        method: "POST",
        data
    })
}

export async function verifyMagicLink(data: { token: string }) {
    return fetcher(`/auth/verify-magic-link?token=${data.token}`, {
        method: "GET",
    })
}

export async function getProfile(data: {token: string}) {
    return fetcher(`/auth/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    })
}   