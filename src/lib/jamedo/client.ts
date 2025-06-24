const JAMEDO_API = 'https://api.jamendo.com/v3.0'
const CLIENT_ID = <string> process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID

if (!CLIENT_ID) {
    throw new Error("client_id is missing, add it to your NEXT_PUBLIC_JAMENDO_CLIENT in .env file")
}

export async function jamendoFetch<T>( endpoint: string, params: Record<string, string | number> = {}) : Promise<T> {
    const url = new URL(`${JAMEDO_API}/${endpoint}`)

    url.searchParams.append('client_id', CLIENT_ID)
    url.searchParams.append('format', 'json')

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    })

    const res = await fetch(url.toString())

    if(!res.ok) {
        throw new Error(`API error: ${res.status}`)
    }

    const data = await res.json()
    return data.results
}