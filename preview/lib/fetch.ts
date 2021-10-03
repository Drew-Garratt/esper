export default async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<string> {
    const res = await fetch(input, init)
    return res.text()
}
