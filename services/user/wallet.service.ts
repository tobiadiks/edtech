import axios from "axios";

const baseUrl = 'http://staging-api.learnali.com'

const getBalance = async () => {
    const data = await axios.get(`${baseUrl}/account/wallet/balance`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const fundWallet = async (body: any) => {
    const data = await axios.post(`${baseUrl}/account/wallet/fund`,
        body,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getTransaction = async () => {
    const data = await axios.get(`${baseUrl}/account/wallet/transactions`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}


const getPayment = async () => {
    const data = await axios.get(`${baseUrl}/account/wallet/payments`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getSinglePayment = async (id: any) => {
    const data = await axios.get(`${baseUrl}/account/wallet/payments/${id}`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

const getSingleTransaction = async (id: any) => {
    const data = await axios.get(`${baseUrl}/account/wallet/transactions/${id}`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(data);
    return data;
}

export const walletService = {
    getBalance, 
    getPayment, 
    getSinglePayment, 
    getSingleTransaction, 
    getTransaction
}



