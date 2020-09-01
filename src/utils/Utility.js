import moment from "moment";
import 'moment-precise-range-plugin';
import { Alert, Linking } from "react-native";

export function roundOffTwo(num) {
    return Math.round(num * 100) / 100
}

export function isEmailValid(text) {
    console.log(text)
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(text)) {
        console.log('Email is Not Correct')
        return false
    } else {
        console.log('Email is Correct')
        return true
    }
}


export function getAge(date1, date2) {
    try {
        let age = moment.preciseDiff(date2 ? date2 : new Date(), date1, true);
        let newAge = (age.years + (age.months / 12) + (age.days / 365))
        //console.log(newAge)
        return newAge
    }
    catch (e) {
        console.log(e)
        // alert(e)
        return 0
    }
}

export function MyAlert(title, msg, okHandler) {
    return (
        Alert.alert(
            title,
            '' + msg + '',
            [
                { text: 'Ok', onPress: okHandler ? okHandler : null }
            ], { cancelable: false }
        )
    )
}

export function hmsToSecondsOnly(str) {
    if (str) {
        let ss = moment.duration(str).asSeconds()
        return ss
    }
}

export function secondsToHMS(secs) {
    if (secs) {
        let p = moment.utc(secs * 1000).format('HH:mm:ss').split(':')
        return (p[0] + 'h : ' + p[1] + 'm : ' + p[2] + 's');
    }
}

export function getStartingLetters(s) {
    const res = s.split(" ");
    let name = ''
    try {
        name = res[0][0].toUpperCase();
        if (res.length > 1) {
            name = name + res[res.length - 1][0].toUpperCase();
        }
    }
    catch (e) {

    }
    return name
}


export function openLink(link) {
    if (!link) return
    if (!link.includes("http")) {
        link = "http://" + (link.trim())
    }
    Linking.openURL(link).catch(err => {
        console.error("Couldn't load page", err)
        alert(err)
    });
}

