import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#EDA011",
      alignItems: 'center',
      paddingHorizontal: 40,
      justifyContent: 'center'
    },

    form:{
      backgroundColor: '#1F1F1F',
      alignItems: 'center',
      justifyContent: 'center',
      width: 550,
      height: 600,
      borderRadius: 150,
      top: 190,
      left:50
    },

    login:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#545454',
      width: 300,
      height: 50,
      paddingLeft: 3,
      marginBottom: 10,
      borderRadius:20,
      right:50
     
    },
    txtEmail:{
      fontSize:20,
      color: '#EDA011',
      textAlign:'center',
     right:160,
          fontWeight:'bold'
    },
    txtSenha:{
      fontSize:20,
      color: '#EDA011',
      textAlign:'center',
     right:160,
     fontWeight:'bold'
    },

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EDA011',
      marginTop: 15,
      width: 200,
      height: 50,
      borderRadius: 5,
      marginBottom: 15,
      right:50
    },

    text:{
      color: '#000',
      fontSize: 20,
      fontFamily: fonts.text,
      textAlign:'center'
    },

    logo:{
    width:509,
    height:184,
      marginTop: 40,
      marginBottom: 35
    },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    google:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
    },

  

    row:{
      flexDirection: 'row',
    },

    forget:{
      color: '#737373',
      fontSize: 14,
      marginTop: 40,
    },


    traco:{
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#C1C1C1',
      width: '80%',
    },

    signup:{
      color: '#737373',
    },

    signupQ:{
      color: 'black',
    },

})


