export async function clientApi<T>( endpoint: string, options?: RequestInit ): Promise<T>{
    const base_url = "http://localhost:3000/api/"

    const response = await fetch(base_url + endpoint, {
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },
        ...options
    })

    
    if (!response.ok){
        const error_data = await response.json()
        console.error(error_data)
        throw new Error(`API request failed: ${response.status} - ${error_data}`)
    }
    return response.json()

}

