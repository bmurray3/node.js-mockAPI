var exports = module.exports = {};

exports.transposeKey = function(data, strip, add) {
    let jsonIn = data[0]["_doc"];
    let jsonOut = {};
    for(attr in jsonIn) {
        if(key == strip) {
            jsonOut[key] = add
        }else {
            jsonOut[key] = jsonIn[key]
        }
        
    }
    res.json(jsonOut)
};

exports.removeKey = function(data, strip) {
    let jsonIn = data[0]["_doc"];
    let jsonOut = {};
    for(attr in jsonIn) {
        if(key !== strip) {
            jsonOut[key] = jsonIn[key]
        }
    }
    res.json(jsonOut)
};