//QNO 1:
let abc=7;
function print (def){
    def=loal 
    return function (){
        console.log(def)
    }
}
let innerFunction=print(7);
let innerFunction2=print(9);
{innerFunction(7)
innerFunction2(9)
}

//QNO 2:

function lookForkey(arr){
    for (let i=0; i<arr .length; i++){
        if (arr[i]=="key"){
            console.log("key found .");
            return true;
        }else if (Array.isArray(arr[i])){
            lookForkey(arr[i]);

        }
    }
}
return false;
let arr=[
    ["baa","maa"],
    ["baa","maa","key"]
];
console.log(lookForkey(arr));


//QNO3:
document.querySelector('button').addEventListener('click', (event) => {
    document.querySelectorAll('p').forEach((paragraph) => {
      paragraph.classList.toggle('pilcrow');
    });
  
    [event.target.innerText, event.target.dataset.toggleText] =
      [event.target.dataset.toggleText, event.target.innerText];
  });

//QNO4:
<div id="header">
    <ul class="tabs">
        <li><a href="/user/view"><span class="tab">Profile</span></a></li>
        <li><a href="/user/edit"><span class="tab">Edit</span></a></li>
    </ul>
</div>

//QNO5:
let mypara=document.getElementById("my-para");
mypara.innerText="Hello";
let mypara=document.querySelector("p");
mypara.innerHTML="<b>Har pal Geo</b>";
console.log(mypara);

let mypara=document.querySelector("p");
mypara.innerHTML="<b>Har pal Geo</b>";
mypara.style.backgroundcolor="#000";
mypara.style.color="fff";



//QNO6:
let prevstudent=localStorage.getItem("student");
let student=prevstudent? JSON .parse(prevstudent):[];
function providestudent(){
    let std={
        name :prompt("Enter Name"),
        rollno:+prompt("Enter roll no"),
        teacher:prompt("Enter Teacher Name"),
        ClassName:prompt("Enter Your Class"),
     };
     student.push(std);
     console.log(students);
     let stringify=JSON.stringify(student);
     localStorage.setItem("students",stringify);
}

//QNO7:
const myObject = {
    name : "zain",
    age : 32,
    gender : "male",
    profession : "Doctor" 
  }
  
  window.localStorage.setItem("myObject", JSON.stringify(myObject));
  let newObject = window.localStorage.getItem("myObject");
console.log(JSON.parse(newObject));

//QNO:8

function store(){ //stores items in the localStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value; //gets the key from the user

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
}