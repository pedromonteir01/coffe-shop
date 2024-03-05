import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ButtonNav from "../../components/button/ButtonNav";

export default function Home() {
    return(
        <View className="w-full h-full bg-GreenS flex items-center justify-center">
            <Image source={require('../../../assets/images/logo.png')} style={{width:150, height:150}}/>
            <Text className="font-bold text-white text-3xl m-4">STARBUCKS©</Text>
            <View className="flex items-center justify-center w-full">
                <ButtonNav text={'CARDÁPIO'} route={'Menu'}/>
                <ButtonNav text={'SOBRE NÓS'} route={'Sobre nós'}/>
            </View>
            <Text className="text-white font-thin m-4">Todos os direitos reservados©</Text>
            <StatusBar style="auto"/>
        </View>
    );
}