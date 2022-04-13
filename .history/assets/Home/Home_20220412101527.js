import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TextInput
                style={{ ...styles.input }}
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    
});