export const checkPhoneNumber = number => {
    const regPhone = /^01([0|1|6|7|9])-?(\d{3,4})-?(\d{4})$/;
    return regPhone.test(number);
}

export const checkBirth = birth => {
    const regBirth = /(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1,2]\d|3[0,1]))/g;
    return regBirth.test(birth);
}
