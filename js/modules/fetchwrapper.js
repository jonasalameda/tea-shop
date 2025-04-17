// A module for implementing an HTTP client using AJAX and fetchAPI
export async function fetchData(resourceURI){
    try {
      //1. implementing an HTTP client making AJAX calls. 
      const response = await fetch(resourceURI);
      console.log(response);
  
      //2. validate the HTTP response message.
     //  if(!response.ok){
     //      throw Error(`Request Failed at proccessing ${response.status}`);
     //  }
  
      //3. Retrieve the payload (the data fetched) from the response
      const data = await response.json();
      return data;
    } catch (error) {
     throw error;
    }
 }



 //by default they are all private in oder to make them public when imported the export key word is needed