import {AsyncStorage} from 'react-native';
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}
export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        console.log(e)
    }
}
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}