
import { activateKeepAwake } from 'expo-keep-awake';

import MyTabs from "./Navigation/Tabs";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    activateKeepAwake
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>


    )


//   const [text, setText] = useState("Hello World")
//     const listAstrologySigns = [
//         {  name: "Bélier",
//         },
//         {  name: "Taureau",
//         },
//         {  name: "Gémeaux",
//         },
//         {  name: "Cancer",
//         },
//         {  name: "Lion",
//         },
//         {  name: "Vierge",
//         },
//         {  name: "Balance",
//         },
//         {  name: "Scorpion",
//         },
//         {  name: "Sagittaire",
//         },
//         {  name: "Capricorne",
//         },
//         {  name: "Verseau",
//         },
//         {  name: "Poissons",
//         }
//         ]
//
//     const Item = ({name}) => (
//         <View style={styles.item}>
//             <Text style={styles.name}>{name}</Text>
//         </View>)
//   const changeText = (newText) => {
//     setText(newText)
//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Text>J'ai cliqué sur {text}</Text>
//       <CustomButton
//           changeText={changeText}
//           color="orange"
//           text="orange"
//       />
//       <CustomButton
//           changeText={changeText}
//           color="black"
//           text="noir"
//       />
//         <FlatList style={styles.list}
//             data={listAstrologySigns}
//             renderItem={({item}) => <Item name={item.name} />}
//             keyExtractor={(item, index) => index.toString()} // Use
//         />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 200,
//     marginHorizontal: 16,
//
//   },
//     list: {
//       marginTop: 20,
//         flex: 1,
//
//     },
// });

}
