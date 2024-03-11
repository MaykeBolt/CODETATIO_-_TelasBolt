import { useRef } from "react";
import { Pressable, View, Text, TextInput, StyleSheet } from "react-native";

const AutoFocus = () => {
    const inputRef = useRef(null);

    const HandleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <View>
            <Pressable onPress={() => {HandleFocus()}}>
                <Text>Click me to Focus</Text>
            </Pressable>
            <TextInput style={style.Input} ref={inputRef}/>
        </View>
    )
}

const style = StyleSheet.create({
    Input: {
        backgroundColor: "rgb(255,255,0)"
    }
})

export default AutoFocus;