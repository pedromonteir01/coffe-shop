import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({name, image, price}) => {

    const navigation = useNavigation();

    return(
        <View className="flex items-center border m-2 rounded" key={name + 'key'}>
            <Image source={{uri: image}} style={{width:150, height:150}} />
            <Text>{name}</Text>
            <View className="flex items-center justify-center m-1">
                <Text>Preço:</Text>
                <Text>{price}</Text>
            </View>
            <TouchableOpacity className="bg-GreenS p-2 rounded m-1">
                <Text className="text-white">ADICIONAR</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Card;