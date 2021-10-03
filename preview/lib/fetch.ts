export async function fetchString<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<string> {
    const res = await fetch(input, init)
    return res.text()
}

export async function fetcherJson<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}

export default fetcherJson
