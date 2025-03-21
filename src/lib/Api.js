export const fetchServices = async () => {
    const response =  await fetch("/services.json");
    const data = await response.json();
    return data;
}