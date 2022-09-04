function evenOrOdd(num) {
  const promise = new Promise(function (resolve, reject) {
    if (num % 2 == 0) {
      resolve();
    } else {
      reject();
    }
  });
  return promise;
}

evenOrOdd(6)
  .then(() => {
    console.log('Number is Even');
  })
  .catch(() => {
    console.log('Number is Odd');
  });
