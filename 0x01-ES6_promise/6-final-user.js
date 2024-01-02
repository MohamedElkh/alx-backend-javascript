import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const us = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: us });
  } catch (err) {
    res.push({ status: 'rejected', value: err.toString() });
  }

  try {
    const up = await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: up });
  } catch (err) {
    res.push({ status: 'rejected', value: err.toString() });
  }
  return res;
}
