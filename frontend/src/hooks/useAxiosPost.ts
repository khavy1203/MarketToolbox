import { useState } from 'react';
import axiosInstance from '../utils/axiosConfig';

const useAxiosPost = (url: string) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const postData = async (data: any) => {
        setLoading(true);
        try {
            const result = await axiosInstance.post(url, data);
            setResponse(result.data);
        } catch (error) {
            setError('An error occurred while posting data');
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, postData };
};

export default useAxiosPost;
