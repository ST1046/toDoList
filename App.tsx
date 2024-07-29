import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const ToDoWork = [
    {id: 1, task: "Gym"},
    {id: 2, task: "Grocery Shopping"},
    {id: 3, task: "Meal Prep"},
    {id: 4, task: "Complete Chapter 3-6 Shanspear"},
    {id: 5, task: "Skin Care"}
  ];

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.heading}>My To Do List</Text>
      <FlatList
        data={ToDoWork}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=> (
          <View style={styles.childView}>
            <Text style={styles.subHeading}>Task: {item.id}</Text>
            <Text style={styles.subHeading}>{item.task}</Text>
          </View>
        )}
        style={styles.listStyle}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    margin: 20,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  childView: {
    marginVertical: 10,
    backgroundColor: 'pink',
    padding: 20,
  },
  listStyle: {
    maxHeight: 850,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
