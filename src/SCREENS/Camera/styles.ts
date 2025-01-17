import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent: 'center',
   },
   message:{
      textAlign:'center',
      paddingBottom: 10,
   },
   camera:{
    flex:1,
    alignItems: 'center'
   },
   headerCamera:{
      flex:1,
      alignItems: 'center'
   },
   footerCamera:{
     flexDirection: 'row',
     marginBottom: 20,
     justifyContent: 'center'
   },
   ball:{
      width: 70,
      height: 70,
      backgroundColor: "#AD00FF",
      borderRadius:35
   },
   headerSave:{
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
});
