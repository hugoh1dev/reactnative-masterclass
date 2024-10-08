import { Text, TextInput, View } from "react-native";
import Button from "@/components/Button";
import Cpf from "@/utils/Cpf";
import styles from "@/constants/styles";
import useFormUsers from "@/hooks/useFormUsers";

export default function FormScreen() {
    const { user, errors, setUser, saveForm } = useFormUsers();

    return (
        <View style={styles.centralized}>
            <Text>Form Screen</Text>
            <TextInput 
                placeholder="Name"
                value={user.name ?? ''}
                style={[styles.input, errors.name && styles.inputError]}
                onChangeText={(name) => setUser({...user, name})}
            />
            {errors.name && <Text style={{ color: 'red '}}>{errors.name}</Text>}

            <TextInput 
                placeholder="CPF"
                value={user.cpf ?? ''}
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUser({ ...user, cpf: Cpf.format(cpf) })}
            />

            <Button onPress={saveForm} >
                <Text style={{ color: '#FFF'}}>Save</Text>
            </Button>
        </View>
    )
}