(() => {
  const btnSubmit = document.querySelector('.btn');
  const inputElement = document.querySelector('.input');
  const resultElement = document.querySelector('.result');
  const PASSWORD = '+1_Di_Tiem';
  const FLAG = '987asf-jjs221-sds-113';

  console.log('btnSubmit ->', btnSubmit);

  btnSubmit.addEventListener('click', function () {
    if (inputElement.value === FLAG) {
      resultElement.innerHTML = `Password: <strong>${PASSWORD}</strong>`;
    } else {
      resultElement.innerHTML = `<strong>FLAG sai rồi 😪</strong>`;
    }
  });
})();
