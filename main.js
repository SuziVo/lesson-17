// 1
const myButton = document.querySelector('#my-button');
if(myButton){
myButton.removeEventListener('click', () => {
console.log('MyButton clicked');
  });
}

// 2
function addImage() {
    let img = new Image();
    img.src = 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
    document.body.appendChild(img);
};
addImage();

// 4
const users = [
{
    first_name: "John",
    last_name: "Doe",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    button:"delete",
    icon:"info",
},
{
    first_name: "John",
    last_name: "Doe",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    button:"delete",
    icon:"info",
},
{
    first_name: "John",
    last_name: "Doe",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    button:"delete",
    icon:"info",
},
{
    first_name: "John",
    last_name: "Doe",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    button:"delete",
    icon:"info",
},
];
  
const renderUsers = () => {
    const userListBox = document.querySelector('#user-list');
    let userNodeString = '';
    users.forEach(user => {
      userNodeString += `<div class="user-item">
        <span>${user.first_name}</span>  
        <span>${user.last_name}</span> 
        <span>${user.button}</span> 
        <span>${user.info}</span>
        <span><img src="${user.avatar}" /></span>  
        </div>`;
    });
    userListBox.innerHTML = userNodeString;
  
    console.log(userNodeString);
  };
  
renderUsers();


// 6
const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

function birthdayCakeCandlesparams(candles) {
    console.log(Math.max.apply(null, candles));
};

birthdayCakeCandlesparams(candles);

let count = 0;

candles.forEach(element => {
  if (element === 90) {
    count += 1;
  }
});

console.log(count); 

