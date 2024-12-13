import { Image, StyleSheet, Text, View } from "react-native";


const CreateAccount = () => {
    return (
        <View style={styles.container}>
            <Text>CREATE YOUR ACCOUNT</Text>
        </View>
    );
}
 
export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'light-blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});