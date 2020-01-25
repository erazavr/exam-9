import axios from 'axios'

const axiosContacts = axios.create({
    baseURL: 'https://exams-5ad91.firebaseio.com/',
});
export default axiosContacts