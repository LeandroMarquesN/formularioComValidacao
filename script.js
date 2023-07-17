
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    //Aqui estamos verificando se os inputs são validos
    //input nome
    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatorio!!")
    } else {
        setSuccessFor(username)
    }
    //Verificando se o input E-mail é valido
    if (email === '') {
        setErrorFor(email, "O email é obrigatorio")
    } else if (!checkEmail(emailValue)) {
        //Aqui vamos usar uma regex na função checkEmail
        setErrorFor(email, "O E-mail digitado não é valido!!")

    } else {
        setSuccessFor(email)

    }

    //Verificando se o input password é valido
    if (passwordValue === '') {
        setErrorFor(passwordValue, "A senha não é valida!!")
        //Abaixo temos uma codicional para verificar se a senha tem menos que 7 digitos
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha  precisa ter 7 digitos ou mais")
    } else {
        setSuccessFor(password)
    }

    //Verificando se password -Confirmation é valido
    if (passwordConfirmation === '') {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatoria!")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem!")
    } else {
        setSuccessFor(passwordConfirmation)
    }

    //Vamos verificar se o formulario está totalmnte preenchido

    const formControls = form.querySelectorAll('.form-control')
    // agora para fazer essa validação vamos tranformar os formulario em um array  para podermos usar um metodo chamdo "every" 
    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className === "form-control success")
    })

    if (formIsValid) {
        alert("O formulário está 100% válido!");
    } else {
        alert("Todos os campos soão obrigatorios!!")
    }
}

//Função setsucces e setError elas ajudam na  validação de dados
function setErrorFor(input, mens) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionar a menssagem de erro
    small.innerText = mens;
    alert(mens)
    //adicionar a classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input, mens) {
    //Aqui estamos pegando o input do username mas usamos o parentElement para pegar o pai desse input do username que é a div que possui a class form-control para podermos alterar a class
    const formControl = input.parentElement;
    //Adicionar a classe de sucesso
    formControl.className = 'form-control success';
}

//Aqui temos um afunção Regex
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
