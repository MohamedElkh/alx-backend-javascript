import {
  uploadPhoto,
  createUser,
} from './utils';

export default function handleProfileSignup() {
  const ph = uploadPhoto();
  const us = createUser();

  return Promise.all([ph, us]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
