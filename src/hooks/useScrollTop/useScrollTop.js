import { useEffect } from 'react';

export default function useScrollTop() {

    useEffect(() => {
        const root = document.getElementById('root');

        if (root) {
            root.scrollTo(0, 0);
        }
    }, []);
}