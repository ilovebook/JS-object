let user = {};
user.name = 'john';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let total = fruit.apple + fruit.pear + fruit.peach;
console.log(total);