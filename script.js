import axios from 'axios';

const fetchCarData = async () => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/car_data', {
            headers: {
                Authorization: 'Bearer YOUR_API_KEY', // Replace with your API key
            },
        });
        console.log(response.data); // Process and display car data
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
};

fetchCarData();
