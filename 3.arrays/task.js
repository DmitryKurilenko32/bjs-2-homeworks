function compareArrays(arr1, arr2) {
    const result = arr1.length === arr2.length && arr1.every ((element , i) => element === arr2[i]);
       return result
}

function getUsersNamesInAgeRange(users, gender) {
    const filterUsers = users.filter(user => user.gender === gender);

    if (filterUsers.length === 0) {
        return 0;
    } 
    const age = filterUsers.map( user => user.age);

     return average = age.reduce((sum , age) => (sum + age)) / filterUsers.length;
    
    
} 
