import { color } from "@rneui/base";
import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bbb',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textPage: {
        backgroundColor: 'orange',
        padding: 20,
    },
    button__Home: {
        marginRight: 20,

    },
    image_base: {
        height: 400,
        width: 400,
    },
    text_image: {
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize: 20,
        top: 10,
    },
    darkbg: {
        backgroundColor: '#333',

    },
    login__msg:(text='none')=> ({
        fontWeight: 'bold',
        fontSize: 16,
        color: 'red',
        marginTop: 10,
        marginBottom: 15,
        display: text,
        
    }),
    login__msg2:(text='none')=> ({
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green',
        marginTop: 10,
        marginBottom: 15,
        display: text,

    }),
    login__form: {
        width: '90%',
        padding: 10,

    },
    login__input: {
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 10,
        marginBottom: 15,
    },
    register__input: {
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 10,
        marginBottom: 15,
    },
    login__button: {
        padding: 12,
        backgroundColor: '#FD3A73',
        alignSelf: 'center',
        borderRadius: 5,
    },
    register__button: {
        padding: 12,
        backgroundColor: '#FD3A73',
        alignSelf: 'center',
        borderRadius: 5,
    },
    login__buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333',
    },
    register__buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333',
    },
    text_color: {
        color: '#FD3A73',
    },

    desc: {
        color: '#FD3A73',
    },
    masked_input: {
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        borderBottomColor: '#999',
        borderBottomWidth: '1',
        borderStyle: 'solid',
        alignSelf: 'flex-start',
        color: '#FD3A73',
    },
    containerMask: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        
    }, 
    card_container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    card_paragrafh: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 360,
        height: 300,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
        bottom: -10,
        marginLeft: 8,
    },
    container_name_card: {
        position: 'absolute',
        margin: 48,
        bottom: 250,
        width: '100%',
        backgroundColor: '#fff',
        maxWidth: 320,
        height: 50,
    },
    text_card_container: {
        fontSize: 20,
        margin: 10,
        marginLeft: '28%',
    }


});
export {css};