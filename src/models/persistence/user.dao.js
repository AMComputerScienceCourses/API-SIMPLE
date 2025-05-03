import users from '../data/user.data';


// const get = (userId) => {
//    const findUser = users.find((user)=>{
//       if (user.id === userId){
//          return user;
//       }
//       return null;
//    });

//    return findUser;
// }

const getAll = () => users;

const get = (userId) => users.find(user => user.id === userId);

const update = (userId, newDetails) => {
   let existingUser = null;
   let userIndex;
   users.map((user, index) => {
      if (user.id === userId){
         existingUser = user;
         userIndex = index;
      }
   });

   if (!existingUser) {
      return false;
   }

   const updatedUser = {
      ...existingUser, 
      ...newDetails
   }

   users.splice(userIndex, 1, updatedUser);
   return updatedUser;
}

const insert = (details) => {
    const newUser = { ...details, id: users.length + 1};
    users.push(newUser);

    return newUser;
 }

 const remove = (userId) => {

   const deleteUser = (user, index) =>{
      if (user?.id === userId) {
         //Remove the element array of the found user
         users.splice(index, 1);
      }
   };
   return users.find(deleteUser);
   
}

export default {
   get, 
   getAll,
   update, 
   insert,
   remove,
}
