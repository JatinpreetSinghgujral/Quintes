import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.colorLightGrey,
    },

    

    content: {
        
        backgroundColor: colors.colorWhite,
    },

    bottomItemsView: {
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
       
        // backgroundColor:'red'
    },
    bottomsItemsImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        tintColor: colors.colorBlue
    },
   


    
    myProfilecontainer: {
        position: 'absolute',
        top: 40,
        bottom: 0,
        left: 0,
        right: 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        width:'100%'
    },
    homeSelected: {
        color: colors.colorWhite,
        //borderWidth:1,
        borderBottomWidth: 1,
        borderBottomColor: colors.colorWhite,
        marginLeft:5

    },

    homeSelectedindicator: {
        backgroundColor: colors.colorWhite,
        borderWidth:1,
        height: 20,
        width: 20,
        borderColor:colors.colorWhite,
        borderRadius:10,


    },

    homenotSelected: {
        color: colors.colorWhite,
        borderBottomWidth: 1,
        borderBottomColor: colors.colorWhite

    },

    homenotSelectedindicator: {
        backgroundColor: colors.colorBlack,
        borderWidth:1,
        height: 20,
        width: 20,
        borderColor:colors.colorWhite,
        borderRadius:10,


    },
})

