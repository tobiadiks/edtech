import axios from "axios";

const baseUrl = 'http://staging-api.learnali.com'

const getCountries = async () => {
    const data = await axios.get(`${baseUrl}/countries`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getCourseCategories = async () => {
    const data = await axios.get(`${baseUrl}/course-categories`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getCourseTags = async () => {
    const data = await axios.get(`${baseUrl}/course-tags`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getLearningPaths = async () => {
    const data = await axios.get(`${baseUrl}/learning-paths`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getLearningPathsCourse = async (id: any) => {
    const data = await axios.get(`${baseUrl}/learning-paths/${id}`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

export const miscService = {
    getCountries,
    getCourseCategories,
    getCourseTags,
    getLearningPaths,
    getLearningPathsCourse
}