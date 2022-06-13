import axios from "axios";

const baseUrl = 'http://staging-api.learnali.com'

const getEnrolledPaths = async () => {
    const data = await axios.get(`${baseUrl}/account/learning-paths`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const setEnrolledPaths = async (body: any) => {
    const data = await axios.post(`${baseUrl}/account/learning-paths`,
        body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getEnrolledCourses = async () => {
    const data = await axios.get(`${baseUrl}/account/courses`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const setEnrolledCourses = async (body: any) => {
    const data = await axios.post(`${baseUrl}/account/courses`,
        body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}


export const accountService = {
    getEnrolledPaths,
    setEnrolledPaths,
    getEnrolledCourses,
    setEnrolledCourses
}