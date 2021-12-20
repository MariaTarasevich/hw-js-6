// 1

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'))

// 2

let date = '2025-12-31';

console.log(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'))

// 3

let str3 = 'Я учу JavaScript';

console.log(str3.substr(2, 3))  
console.log(str3.substr(6, 10))  

console.log(str3.substring(2,5))
console.log(str3.substring(6,16))

let learn = str3.slice(2, 5)
console.log(learn)

let lang = str3.slice(6, 16)
console.log(lang)

// 4

let arr = [4, 2, 5, 19, 13, 0, 10],
result = 0,
sum = 0;

for(i=0; i < arr.length; i++) {
    result = Math.sqrt(sum += Math.pow(arr[i], 3));
}

console.log(result)

// 5

let a = 3,
b = 5,
c = Math.abs(a - b);
alert(c);

// 6


let  date1 = new Date(),
opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};

let getZero = (num) => {
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

date1.setDate(1)
console.log(getZero(date1.toLocaleDateString('ru', opt)))

// 7

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/g));

// 8

let regex2 = /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/,
num = prompt('введите номер в формате +375(**)***-**-**');

let validNum = () => {
    if (regex2.test(num) == true)
    return true
}

console.log(validNum())

// 9

let regex3 = /^[A-Za-z0-9][\w\.-]+@[a-z].[a-z]{2,11}/gi,
email = prompt('введите email')

let validEmail = () => {
    if (regex3.test(email) == true){
    return true
    }
}

console.log(validEmail()) 

// 10

let url='https://tech.onliner.by/2018/04/26/smart-do-200/\?utm_source=main_tile&utm_medium=smartdo200#zag3';
let arr2=[],
buf=[];
buf=url.split('#');

function gerArr(){
url=buf[0].toString();
if(buf[1]){
    arr2.push('#'+buf[1]);
}
buf=url.split('?');
if(buf[1]){
    arr2.unshift(buf[1]);
}
url=buf[0].toString();

let count=0;
for(let i=0;i<url.length;i++){
    if(url[i]=='/'){
        count++;
    }
    if(count==3){      
        arr2.unshift(url.slice(i,url.length));
        arr2.unshift(url.slice(0,i+1));
        break;
    }
}
return arr2;
}
console.log(gerArr());  