import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosConfig';
import axios from 'axios';

const useAxiosGet = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url);
                setStatus(response.status);
                setData(response.data);
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setStatus(error.response.status);
                    setError(error.response.data.message || 'An error occurred');
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error, status };
};

export default useAxiosGet; 