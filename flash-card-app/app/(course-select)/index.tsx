import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;

const franchises = [
    {
        "name": "ポケモン",
        "courses": [
            "X/Y", "OR/AS", "Sun/Moon", "Let's Go Eeve/Pikachu", "Sword/Shield", "BD/SP", "Legends Arceus", "Scarlet/Violet", "Legends: Z-A"
        ]
    },
    {
        "name": "大神",
        "courses": [
            "Game 1", "Amaterasu"
        ]
    },
    {
        "name": "League of Legends",
        "courses": [
            "League of Legends", "TFT", "Arcane"
        ]
    },
    {
        "name": "Gacha Games",
        "courses": [
            "Honkai: Star Rail", "Genshin: Impact", "Girls Frontline 2"
        ]
    }
]

export default function CourseSelect() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={false}>
                {franchises.map((element, _) => (    
                <View style={styles.franchise}>
                    <Text>{element.name}</Text>
                    <ScrollView horizontal={true}>
                        {element.courses?.map((course, _) => (
                        <View style={styles.course}>
                            <Text>{course}</Text>
                        </View>
                        ))}
                    </ScrollView>
                </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  franchise: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 20,
    width: screenWidth - 40,
    height: 'auto'
  },
  course: {
    aspectRatio: 1,
    backgroundColor: 'blue',
    height: 100,
    margin: 10
  }
});
