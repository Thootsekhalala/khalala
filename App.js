import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styles.profile} source={require ('./chef.jpg')}/>
        <View><Text style={styles.name}>Khalala Thootse</Text>
        <Text style={styles.status}>online</Text></View>
        <Image style={styles.dots}/> </View>
        <Text >Today's dish!</Text>
        <View style={styles.inner} >
          <Image style={styles.burger} source={require('./hamburger.jpg')}/>
        </View>
        <Text style={styles.likes}>23.4m likes</Text>
        <View style={styles.footer}>
        <AntDesign name="like2" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.footers}>Likes</Text>
        <FontAwesome name="comments" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.footers}>comments</Text>
        <MaterialCommunityIcons name="share-variant-outline" size={24} color="black" style={marginRight=0} />
        <Text style={styles.footers}>Share</Text>


        </View>
      <StatusBar style="auto" />

       
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    width:'100%',
    height:'3.3em',
    borderWidth:'.01em',
    display:'flex',
    flexDirection:'row',
    justifyContent:'no-space',
    borderRadius:'.5em',
    backgroundColor:'aqua',
    padding:'.1em',
   },
  body:{
    marginTop:'3%',
    height:'70vh',
    width:'24%',
    backgroundColor:'white',
    borderRadius:'5em',
    padding:'.3em',
  },
  status:{
    color:'black',
    fontSize:'1em',
    marginLeft:'1em',

  },
  name:{
    fontWeight:'bold',
    textTransform:'capitalize',
    fontSize:'1em',
    marginLeft:'1em',

  },
  inner:{
    backgroundColor:'grey',
    width:'100',
    height:'55%',
    objectfit:'fill',
    borderRadius:'.2em',
  },
  footer:{
    margintop:'.5em',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:'.02em',
    borderTopColor:'grey',
  },
  footers:{
    margin:0,
    padding:0,

  },
likes:{
  margin:'.5em',
},
profile:{
  borderWidth:'.03em',
  borderRadius:'100%',
  backgroundColor:'black',
  height:50,
  width:50,
  margin:0,
},
burger:{
  width:'100%',
  height:'100%',
},

});
