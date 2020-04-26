import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-6515d.firebaseio.com/'
})