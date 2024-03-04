import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonNav = ({text, route}) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={() => navigation.navigate(route)}
            className="bg-white rounded-xl p-4 w-6/12 items-center"
        >
            <Text className="text-GreenS font-bold text-lg">{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonNav;