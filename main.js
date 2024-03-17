let formula = prompt("Выберите подходящую формулу для вашего примера. a)n+m   b)n-m   c)(n+m)-(a+b)   d)n+m+a   e)n-m-a   f)(n-m)+(a-b)   g)n-m+a   j)n+m-a   k)n*m   t)n/m")

if(formula == "a"){
    let n = +prompt("Вы выбрали формулу a) n+m. Выберите значение n")
    let m = +prompt(n +"+m. Выберите значение m")
    let answer = n + m
    alert("Ответ: " + answer)
}
if(formula == "b"){
    let n = +prompt("Вы выбрали формулу b) n-m. Выберите значение n")
    let m = +prompt(n +"+m. Выберите значение m")
    let answer = n - m
    alert("Ответ: " + answer)
}
if(formula == "c"){
    let n = +prompt("Вы выбрали формулу c) (n+m)-(a+b). Выберите значение n")
    let m = +prompt("("+ n +"+m)-(a+b). Выберите значение m")
    let a = +prompt("("+ n +"+" + m + ")-(a+b). Выберите значение a")
    let b = +prompt("("+ n +"+" + m + ")-("+ a +"+b). Выберите значение b")
    let answer = (n + m) - (a + b)
    alert("Ответ: " + answer)
}
if(formula == "d"){
    let n = +prompt("Вы выбрали формулу d) n+m+a. Выберите значение n")
    let m = +prompt(n + "+m+a. Выберите значение m")
    let a = +prompt(n + "+" + m +"+a. Выберите значение a")
    let answer = n + m + a
    alert("Ответ: " + answer)
}
if(formula == "e"){
    let n = +prompt("Вы выбрали формулу e) n-m-a. Выберите значение n")
    let m = +prompt(n + "-m-a. Выберите значение m")
    let a = +prompt(n + "-" + m + "-a. Выберите значение a")
    let answer = n - m - a
    alert("Ответ: " + answer)
}
if(formula == "f"){
    let n = +prompt("Вы выбрали формулу f)(n-m)+(a-b). Выберите значение n")
    let m = +prompt("(" + n +"-m)+(a-b). Выберите значение m")
    let a = +prompt("(" + n +"-" + m + ")+(a-b). Выберите значение a")
    let b = +prompt("(" + n +"-" + m + ")+(" + a + "-b). Выберите значение b")
    let answer = (n - m) + (a-b)
    alert("Ответ: " + answer)
}
if(formula == "g"){
    let n = +prompt("Вы выбрали формулу g) n-m+a. Выберите значение n")
    let m = +prompt(n + "-m+a. Выберите значение m")
    let a = +prompt(n + "-" + m +"+a. Выберите значение a")
    let answer = n - m + a
    alert("Ответ: " + answer)
}
if(formula == "j"){
    let n = +prompt("Вы выбрали формулу j) n+m-a. Выберите значение n")
    let m = +prompt(n + "+m-a. Выберите значение m")
    let a = +prompt(n + "+" + m +"-a. Выберите значение a")
    let answer = n + m - a
    alert("Ответ: " + answer)
}
if(formula == "k"){
    let n = +prompt("Вы выбрали формулу k) n*m. Выберите значение n")
    let m = +prompt(n +"*m. Выберите значение m")
    let answer = n * m
    alert("Ответ: " + answer)
}
if(formula == "t"){
    let n = +prompt("Вы выбрали формулу t) n/m. Выберите значение n")
    let m = +prompt(n +"/m. Выберите значение m")
    let answer = n / m
    alert("Ответ: " + answer)
}
