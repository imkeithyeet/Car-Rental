
export async function  fetchCars(){
    const headers ={
		'X-RapidAPI-Key': '1e9e26f426mshd4b6b8ee85afb71p1e8327jsn5844bebe0449',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers:headers,
    });
    const result= await response.json()

    return result
}