import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      const newArray = data.map((ele) => {
        const newEle = { ...ele };
        if (Object.prototype.hasOwnProperty.call(newEle, 'reason')) {
          const temp = newEle.reason;
          delete newEle.reason;
          newEle.value = temp.toString();
        }
        return newEle;
      });
      console.log(newArray);
      return newArray;
    });
}
