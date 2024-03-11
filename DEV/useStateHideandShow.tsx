import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HidenShow = () => {
    const [invisible, setInvisible] = useState(false);
    let onscreen = style.visible
    let notonscreen = style.hidden
    let disabled = true     //!disabled = false

    if (invisible == true) {
        onscreen = style.hidden
        notonscreen = style.visible
        disabled = false
    }
    else {
        onscreen = style.visible
        notonscreen = style.hidden
        disabled = true
    }

    //const HandlePress = () => setInvisible(invisible => !invisible);

    return (
        <View>
            <Pressable style={onscreen} onPress={() => {setInvisible(!invisible)}} disabled={!disabled}>
                <Text>Text</Text>
            </Pressable>

            <Pressable style={notonscreen} onPress={() => {setInvisible(!invisible)}} disabled={disabled}>
                <Text>BOO</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create ({
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
})

export default HidenShow;