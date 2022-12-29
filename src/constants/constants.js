import { Dimensions } from "react-native"

export const serverApi = 'https://ymgalleryserver.azurewebsites.net/api'

const {width, height} = Dimensions.get('window')

// Images
const IMG_WELCOME = require('../../assets/images/welcome.jpg')
const ON_BOARD_HOME = require('../../assets/images/onBoard1.png')
const ON_BOARD_SEARCH = require('../../assets/images/onBoard2.png')
const ON_BOARD_PROFILE = require('../../assets/images/onBoard4.png')

// Icons

const HOME_ICON = require('../../assets/icons/HOME_ICON.png')
const SEARCH_ICON = require('../../assets/icons/SEARCH_ICON.png')
const WALLET_ICON = require('../../assets/icons/WALLET_ICON.png')
const PROFILE_ICON = require('../../assets/icons/PROFILE_ICON.png')

export {
    //Dimensiones
    width,
    height,
    
    //Images
    IMG_WELCOME,
    ON_BOARD_HOME,
    ON_BOARD_PROFILE,
    ON_BOARD_SEARCH,

    //Icons
    HOME_ICON,
    WALLET_ICON,
    SEARCH_ICON,
    PROFILE_ICON
}