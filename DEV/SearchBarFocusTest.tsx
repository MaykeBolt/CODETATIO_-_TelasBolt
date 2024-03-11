import { useEffect, useRef, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

const SearchBarTest = () => {
    useEffect(() => {
        if (visibility == true) {
                disabled = true
                currentstyle = style.visible
                inputRef.current.focus()
        }
        else {
                disabled = false
                currentstyle = style.hidden
        }
    }, []);

    const inputRef = useRef(null);
    console.log("reference to TextInput: "+inputRef.current+" | "+inputRef);

    const [visibility, setvisibility] = useState(false);
    console.log("visibility status: "+visibility);

    let currentstyle = style.hidden
    console.log("style: "+currentstyle)

    const handlePress = () => setvisibility(visibility => !visibility);
    const handleFocus = () => setvisibility(visibility => false);

    let disabled = false
    console.log("button status: "+disabled)
    
    console.log("===================")

    return (
        <View style={style.inline}>
            <TextInput style={currentstyle} ref={inputRef}/>
            <Pressable onPress={handlePress} disabled={disabled}>
                <Text>Press me to focus</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    inline: {
        flexDirection: "row"
    },
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        backgroundColor: "rgb(255, 255, 0)"
    }
})

export default SearchBarTest