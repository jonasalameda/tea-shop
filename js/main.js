document.addEventListener("DOMContentLoaded", initApp);

function initApp() {

}

async function fetchData(resourceUrl) {
    try {
        const response = await fetch(resourceUrl, {
            method: "GET",
        })
    
        if (!response.ok) {
            throw new Error(`An error occurred while processing: ${response.status}`)
        }
        
        // Retrieve the payload from the response
        const data = await response.json()
    
        return data
    } catch (error) {
        throw error
    }
}
