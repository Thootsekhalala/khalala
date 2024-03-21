import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require('./profilepic.jpg')}
        />
        <Text style={styles.name}>Khalala Thootse</Text>
        <Text style={styles.studentNumber}>Student Number: 901016406</Text>
        <Text style={styles.semester}>Current Semester: 2</Text>
        <Text style={styles.heading}>Semester Grades:</Text>
        <View style={styles.gradeList}>
          <Text style={styles.gradeItem}>Java 1: A</Text>
          <Text style={styles.gradeItem}>Statistics: B+</Text>
          <Text style={styles.gradeItem}>mobile programming: A-</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  semester: {
    fontSize: 16,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  gradeList: {
    alignItems:'center',
    alignSelf: 'stretch',
    justifyContent:'center',
  },
  gradeItem: {
    fontSize: 16,
    marginBottom: 5,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default ProfileScreen;



