var formula = prompt("Выберите подходящую формулу для вашего примера. a)n+m   b)n-m   c)(n+m)-(a+b)   d)n+m+a   e)n-m-a   f)(n-m)+(a-b)   g)n-m+a   j)n+m-a   k)n*m   t)n/m")
let form = ["a","b","c","d","e","f","j","g","k","t"]
while(formula != form){
    alert("Недействительно")
    formula = prompt("Выберите подходящую формулу для вашего примера. a)n+m   b)n-m   c)(n+m)-(a+b)   d)n+m+a   e)n-m-a   f)(n-m)+(a-b)   g)n-m+a   j)n+m-a   k)n*m   t)n/m")
        if(formula == "a"){
            let n = +prompt("Вы выбрали формулу a) n+m. Укажите значение n");
            let m = +prompt(n + "+m. Укажите значение m");
            let answer = n + m;
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");
            break
        }
        if(formula == "b"){
            let n = +prompt("Вы выбрали формулу b) n-m. Укажите значение n")
            let m = +prompt(n +"+m. Укажите значение m")
            let answer = n - m
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы"); 
            break
        } 
        if(formula == "c"){
            let n = +prompt("Вы выбрали формулу c) (n+m)-(a+b). Укажите значение n")
            let m = +prompt("("+ n +"+m)-(a+b). Укажите значение m")
            let a = +prompt("("+ n +"+" + m + ")-(a+b). Укажите значение a")
            let b = +prompt("("+ n +"+" + m + ")-("+ a +"+b). Укажите значение b")
            let answer = (n + m) - (a + b)
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        }
        if(formula == "d"){
            let n = +prompt("Вы выбрали формулу d) n+m+a. Укажите значение n")
            let m = +prompt(n + "+m+a. Укажите значение m")
            let a = +prompt(n + "+" + m +"+a. Укажите значение a")
            let answer = n + m + a
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");
            break
        }    
        if(formula == "e"){
            let n = +prompt("Вы выбрали формулу e) n-m-a. Укажите значение n")
            let m = +prompt(n + "-m-a. Укажите значение m")
            let a = +prompt(n + "-" + m + "-a. Укажите значение a")
            let answer = n - m - a
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        } 
        if(formula == "f"){
            let n = +prompt("Вы выбрали формулу f)(n-m)+(a-b). Укажите значение n")
            let m = +prompt("(" + n +"-m)+(a-b). Укажите значение m")
            let a = +prompt("(" + n +"-" + m + ")+(a-b). Укажите значение a")
            let b = +prompt("(" + n +"-" + m + ")+(" + a + "-b). Укажите значение b")
            let answer = (n - m) + (a-b)
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        } 
        if(formula == "g"){
            let n = +prompt("Вы выбрали формулу g) n-m+a. Укажите значение n")
            let m = +prompt(n + "-m+a. Укажите значение m")
            let a = +prompt(n + "-" + m +"+a. Укажите значение a")
            let answer = n - m + a
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        }   
        if(formula == "j"){
            let n = +prompt("Вы выбрали формулу j) n+m-a. Укажите значение n")
            let m = +prompt(n + "+m-a. Укажите значение m")
            let a = +prompt(n + "+" + m +"-a. Укажите значение a")
            let answer = n + m - a
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        } 
        if(formula == "k"){
            let n = +prompt("Вы выбрали формулу k) n*m. Укажите значение n")
            let m = +prompt(n +"*m. Укажите значение m")
            let answer = n * m
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");            
            break
        }    
        if(formula == "t"){
            let n = +prompt("Вы выбрали формулу t) n/m. Укажите значение n")
            let m = +prompt(n +"/m. Укажите значение m")
            let answer = n / m
            alert("Ответ: " + answer + ". Обновите страницу для выбора другой формулы");           
                break
        }      
}   


