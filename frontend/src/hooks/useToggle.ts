import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue((prevValue) => !prevValue);
    }, []);

    return [value, toggle];
};

export default useToggle; 