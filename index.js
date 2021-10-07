function myEach(collection, callback) {
    Object.values(Object.assign({}, collection)).forEach(callback);
    return collection;
}

function myMap(collection, callback) {
    return Object.values(Object.assign({}, collection)).map(callback)
}

function myReduce(collection, callback, acc=0) {
    return Object.values(Object.assign({}, collection)).reduce((prev, value) => {
        return callback(prev, value, collection);
    }, acc);
}

function myFind(collection, predicate) {
    return Object.values(Object.assign({}, collection)).find(predicate);
}

function myFilter(collection, predicate) {
    return Object.values(Object.assign({}, collection)).filter(predicate);
}

function mySize(collection) {
    return Object.values(Object.assign({}, collection)).length;
}

function myFirst(collection, n=1) {
    if (n > 1) {
        return Object.values(Object.assign({}, collection)).slice(0, n);
    } else {
        return Object.values(Object.assign({}, collection))[0];
    }
}

function myLast(collection, n=1) {
    if (n > 1) {
        return Object.values(Object.assign({}, collection)).slice(-n);
    } else {
        return Object.values(Object.assign({}, collection)).slice(-1)[0];
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

function mySortBy(array, callback) {
    return [...array].sort((first, second) => {
        if (callback(first) < callback(second)) {
            return -1;
        }
        if (callback(first) > callback(second)) {
            return 1;
        }
        return 0;
    })
}

function myFlatten(array, shallow=false, newArr=[]) {
    array.forEach(element => {
        if (Array.isArray(element)) {
            console.log('is array', element)
            if (shallow) {
                newArr.push(...element); 
            } else {
                newArr.push(...myFlatten(element));
            }
        } else {
            console.log('is element', element)
            newArr.push(element);
        }
    })
    return newArr;
}