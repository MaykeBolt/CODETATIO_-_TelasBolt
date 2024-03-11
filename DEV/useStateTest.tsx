import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChangeText = () => {
    const [press, setPress] = useState(false); //[thing, stateofthing]
    let mystyle = style.static

    const handleClick = () => setPress(press => !press); //Turns press into not-press and vice versa

    //IT WORKS!
    if (press == true) {   //Check condition with "=="
        mystyle = style.pressed //Change style with "="
        console.log("pressed");
    }
    else {
        mystyle = style.static
    }


    return (
        <View>
            <Pressable style={mystyle} onPress={handleClick}>
                <Text>Text</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create ({
    static: {
        backgroundColor: "rgb(255, 0, 0)"
    },
    pressed: {
        backgroundColor: "rgb(0, 0, 255)"
    }
})

export default ChangeText;