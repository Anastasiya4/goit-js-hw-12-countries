'use strict'
/*import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

alert('Notice me, senpai!');

const { data } = require("autoprefixer");*/
import listTpl from './templates/teplate-2.hbs'



fetch('https://restcountries.eu/rest/v2/name/united')
.then(response => response.json())
.then(({united}) => {
     console.log(united) ;

    //const markup = listTpl(united)
    });

    const result = document.querySelector('.result');

function dataSize (){
    if(data.length > 10){
        //notify
    } else if(data.length > 1 || data.length < 10){
        //ul 
        result.insertAdjacentHTML('beforeend', listTpl(united))
    } else if (data.length === 1){
        //card of country
    }
}

