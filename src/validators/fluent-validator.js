'use strict';

let errors = [];

function ValidationContract() {
    errors = [];    
}
const vali = ValidationContract.prototype;

vali.isRequired = (value, message) =>{
    if(!value || value.lenght <= 0)
    errors.push({message: message});
}

vali.hasMinLen = (value, min, message) =>{
    if(!value || value.lenght < min)
    errors.push({message: message});
}

vali.hasMaxLen = (value, max, message) =>{
    if(!value || value.lenght > max)
    errors.push({message: message});
}

vali.isFixedLen = (value, len, message) =>{
    if(value.lenght != len)
    errors.push({message: message});
}

vali.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

vali.errors = () => { 
    return errors; 
}

vali.clear = () => {
    errors = [];
}

vali.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;