import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/appLogo1Icon.png";

const SplashScreen = () => {
    return ( 
        <View style={styles.container}>
            <View>
                <Image source={Icon} style={styles.image} />
            </View>
        </View>
     );
}
 
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        hight: 100,
        resizeMode: 'center',
    },
});