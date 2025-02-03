import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {id: '1', title: 'Wake up early in the morning and prepare some breakfast.'},
  {id: '2', title: 'Workout a basic exercise.'},
  {id: '3', title: 'Check my Google Classroom.'},
  {id: '4', title: 'Watch some funny videos.'},
  {id: '5', title: 'Bike or jogging together with my father.'},
  {id: '6', title: 'Buy some fruits every morning in the market.'},
  {id: '7', title: 'Feed my dog.'},
  {id: '8', title: 'Watch telenovela or morning series in Television.'},
  {id: '9', title: 'Do some mind games inside a garden.'},
  {id: '10', title: 'Buy food and prepare for lunch.'},
  {id: '11', title: 'Call some of my relatives to prepare for dinner.'},
  {id: '12', title: 'Play basketball.'},
  {id: '13', title: 'Things to do for my preparation for Valentine’s Day.'},
  {id: '14', title: 'Give some romantic speech and gifts for her.'},
  {id: '15', title: 'Go to the park and tell us stories.'},
  {id: '16', title: 'Watching Kdrama.'},
  {id: '17', title: 'Ready for a meal with love.'},
  {id: '18', title: 'Play in the arcade.'},
  {id: '19', title: 'Bonding with special someone.'},
  {id: '20', title: 'Unwind.'},
  {id: '20', title: 'Refresh and rest.'},
  {id: '20', title: 'Swimming and Sports.'},
  {id: '20', title: 'Do some activity.'},
  {id: '20', title: 'Fitness Training.'},
  {id: '20', title: 'Goal and Future.'},
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={() => console.log(title)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default App;
