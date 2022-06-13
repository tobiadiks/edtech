import axios from "axios";

const baseUrl = 'http://staging-api.learnali.com'

const getProfile = async () => {
    const data = await axios.get(`${baseUrl}/account`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const setProfile = async (body:any) => {
    const data = await axios.put(`${baseUrl}/account`,
    body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}


const setNewPassword = async (body:any) => {
    const data = await axios.patch(`${baseUrl}/account/change-password`,
    body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

export const accountService={
    setNewPassword,
    setProfile,
    getProfile,
}



