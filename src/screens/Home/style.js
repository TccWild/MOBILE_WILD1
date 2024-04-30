import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    title:{
        color:'#000',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        top:200
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    Decoration:{
        width: 531,
        height: 450,
        backgroundColor: '#EDA011',
        position:'relative',
        top:-110,
        borderRadius:1615

    }
})