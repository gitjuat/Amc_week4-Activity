import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wake up ear;y in the moring and prepared some breakfast. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Workout a basic exervise. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Check my google classroom. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Watch some funny cideos. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bike or jogging together with my father. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Buy some fruits every morning in the Market ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Feed my dog ',
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Watch telenovela or morning series in Television',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Do some mind ggames board inside a garden ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Buy food and prepared for a lunch ',
  },

{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Calling some of my relatives to prepared for a dinner. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Playing a Basketball. ',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Things to do for my preparation in Vlaentines Day.',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Give some romantic speech and gifts for her ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:'Going to the park and tell us story ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Watchinng Kdrama ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ready for meal us Love. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Playing in arcade. ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bonding with special someone ',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Unwind ',
  },
];


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
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
    fontSize: 32,
  },
});


export default App;