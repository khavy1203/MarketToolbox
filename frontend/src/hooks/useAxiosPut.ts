import { useState } from 'react';
import axiosInstance from '../utils/axiosConfig';

const useAxiosPut = (url: string) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const putData = async (data: any) => {
        setLoading(true);
        try {
            const result = await axiosInstance.put(url, data);
            setResponse(result.data);
        } catch (error) {
            setError('An error occurred while updating data');
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, putData };
};

export default useAxiosPut;
