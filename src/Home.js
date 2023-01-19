import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, ScrollView} from 'react-native';

const Home = (props) => {

    const show_home_quiz = () => {
        return(props.route.params.quizList.map((quiz, index) => {
                return (
                    <TouchableOpacity key={index+".home_quiz_"+quiz.id} style={styles.testBTN} onPress={() => {props.navigation.navigate(quiz.name)}}>
                        <View>
                            <Text style={styles.titles}>{quiz.name}</Text>
                        </View>
                        <View style={styles.ConText}>
                            {
                                quiz.tags.map((tag, sIndex) => {
                                    return(
                                        <Text key={index+".home_quiz_"+quiz.id+"_tag_"+sIndex} style={styles.blues} >#{tag} </Text>
                                    )
                                })
                            }
                        </View>
                        <View style={styles.ConText}>
                            <Text style={styles.NRtext}>
                                Poziom: {quiz.level}{"\n"}
                                {quiz.description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })
        )
    }

    return (
        <ScrollView style={{display: 'flex', flexDirection: 'column'}}>
            {show_home_quiz()}
            <View style={styles.FooterBC}>
                <View>
                    <Text style={styles.FooterTEXT}>Get to know your ranking result</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Result')} style={styles.FooterBTN}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Check</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    blues: {
     color: 'blue'
    },
    ConText:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    titles:{
        fontSize: 30,
        fontFamily: 'RubikSprayPaint-Regular'

    },
    NRtext:{
        color:'black',
        fontSize: 24,
        fontFamily: 'Caveat-VariableFont_wght'

    },
    testBTN:{
        margin: 30,
        border:  'black',
        borderWidth: 1,
        padding: 15,
        borderLeftWidth: 20,
    },
    FooterBTN:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
    },
    FooterTEXT:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
    },
    FooterBC:{ padding: 10, borderWidth: 1, alignItems: 'center'},
   });

export default Home
