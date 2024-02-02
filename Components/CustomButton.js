import {Button} from "react-native";

export default function CustomButton({changeText, color, text}) {

    const clickEvent = () => {
        changeText(text)
    }

    return(
        <Button
            onPress={clickEvent}
            title={"Boutton " + color}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    )
}