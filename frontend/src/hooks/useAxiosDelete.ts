import { useState } from 'react';
import axiosInstance from '../utils/axiosConfig';

const useAxiosDelete = (url: string) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteData = async () => {
        setLoading(true);
        try {
            const result = await axiosInstance.delete(url);
            setResponse(result.data);
        } catch (error) {
            setError('An error occurred while deleting data');
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, deleteData };
};

export default useAxiosDelete;
