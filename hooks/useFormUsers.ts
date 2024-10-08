import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useFormUsers() {
    const [user, setUser] = useState<any>({});
    const [errors, setErrors] = useState<any>({});

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            if (user) {
                setUser(JSON.parse(user));
            }
        });
    }, []);

    function validateForm() {
        let errors = {}

        if (!user.name) {
            errors = { ...errors, name: 'Nickname Required' };
        } else if (user.name.length < 3) {
            errors = {...errors, name: 'Nickname must have at least three characters' };
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    
    function saveForm() {
        if(validateForm()) {
            AsyncStorage.setItem('user', JSON.stringify(user));
        }
    }

    return {
        user,
        errors,
        setUser,
        saveForm,
    }
}