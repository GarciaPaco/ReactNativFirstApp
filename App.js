import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList,} from 'react-native';
import CustomButton from './Components/CustomButton';
import {useState} from "react";



export default function App() {
  const [text, setText] = useState("Hello World")
    const listAstrologySigns = [
        {  name: "Bélier",
        },
        {  name: "Taureau",
        },
        {  name: "Gémeaux",
        },
        {  name: "Cancer",
        },
        {  name: "Lion",
        },
        {  name: "Vierge",
        },
        {  name: "Balance",
        },
        {  name: "Scorpion",
        },
        {  name: "Sagittaire",
        },
        {  name: "Capricorne",
        },
        {  name: "Verseau",
        },
        {  name: "Poissons",
        }
        ]

    const Item = ({name}) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
        </View>)
  const changeText = (newText) => {
    setText(newText)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>J'ai cliqué sur {text}</Text>
      <CustomButton
          changeText={changeText}
          color="orange"
          text="orange"
      />
      <CustomButton
          changeText={changeText}
          color="black"
          text="noir"
      />
        <FlatList style={styles.list}
            data={listAstrologySigns}
            renderItem={({item}) => <Item name={item.name} />}
            keyExtractor={(item, index) => index.toString()} // Use
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    marginHorizontal: 16,

  },
    list: {
      marginTop: 20,
        flex: 1,
    },
});
