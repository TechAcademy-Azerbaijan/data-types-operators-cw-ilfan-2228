const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    
    let a =parseInt(result.input); //123
    let b =parseInt(a/10); //12
    let c = (a%10) //3
    let cavab = c*100 + b*1 //312
    console.log(cavab);
});
