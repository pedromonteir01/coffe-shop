import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import Card from "../../components/card/Card";

const drinks = [
    {
        name: 'test',
        description: 'muito boa',
        price: 2.99,
        image: 'https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/09/copos_cerveja_tipos_ilustrativa_zona_sul.jpg'
    },
    {
        name: 'test2',
        description: 'muito boa',
        price: 2.99,
        image: 'https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/09/copos_cerveja_tipos_ilustrativa_zona_sul.jpg'
    },
    {
        name: 'test3',
        description: 'muito boa',
        price: 2.99,
        image: 'https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/09/copos_cerveja_tipos_ilustrativa_zona_sul.jpg'
    }
];

const foods = [
    {
        name: 'testFood',
        description: 'bom',
        price: 8.99,
        image: 'https://static.itdg.com.br/images/360-240/c850a535e8de2a4793622a50a858a6d3/shutterstock-1488059969.jpg'
    },
    {
        name: 'testFood2',
        description: 'bom',
        price: 8.99,
        image: 'https://static.itdg.com.br/images/360-240/c850a535e8de2a4793622a50a858a6d3/shutterstock-1488059969.jpg'
    },
    {
        name: 'testFood3',
        description: 'bom',
        price: 8.99,
        image: 'https://static.itdg.com.br/images/360-240/c850a535e8de2a4793622a50a858a6d3/shutterstock-1488059969.jpg'
    }
];

export default function Menu() {
    return (
        <View className="h-full w-full flex">
            <ScrollView className="p-2">
                <Text className="text-2xl text-GreenS">BEBIDAS</Text>
                <View className="w-full">
                    <ScrollView horizontal>
                        {
                            drinks.map((drink) => (
                                <Card name={drink.name} image={drink.image} price={drink.price} key={drink.name + 'key'}/>
                            ))
                        }
                    </ScrollView>
                </View>
                <Text className="text-2xl text-GreenS">COMIDAS</Text>
                <View className="w-full">
                    <ScrollView horizontal>
                        {
                            foods.map((food) => (
                                <Card name={food.name} image={food.image} price={food.price} key={food.name + 'key'}/>
                            ))
                        }
                    </ScrollView>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}