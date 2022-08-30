const arrayUnique = (arr) => { //функция для исключения повторяющихся значений в массиве
    return arr.filter((item, index, arr) => arr.indexOf(item) == index);
};
export default arrayUnique;