alert("Привет! Это онлайн калькулятор.")
var formula = prompt("Выберите подходящую формулу для вашего примера из списка ниже(Английская раскладка). a)n+m   b)n-m   c)(n+m)-(a+b)   d)n+m+a   e)n-m-a   f)(n-m)+(a-b)   g)n-m+a   j)n+m-a   k)n*m   t)n/m   z)n**m (возведение в степень)   w)n <,>,= m(сравнение)   Например: a")
let form = ["a","b","c","d","e","f","j","g","k","t", "z", "w"]
function End(){
    alert("По новой.")
    formula = prompt("Выберите подходящую формулу для вашего примера из списка ниже(Английская раскладка). a)n+m   b)n-m   c)(n+m)-(a+b)   d)n+m+a   e)n-m-a   f)(n-m)+(a-b)   g)n-m+a   j)n+m-a   k)n*m   t)n/m   z)n**m (возведение в степень)   w)n <,>,= m(сравнение)   Например: a")
}
while(formula != form || formula == form){
    if(formula == form[0]){    // formula = ("a")
        let n = +prompt("Вы выбрали формулу a) n+m. Укажите значение n");
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу a) n+m. Укажите значение n");   
        }
        let m = +prompt(`${n}+m. Укажите значение m`);
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}+m. Укажите значение m`);
        }
        let answer = n + m;
        alert(`Получается: ${n}+${m}=${answer}`)
    }
    if(formula == form[1]){    // formula = ("b")
        let n = +prompt("Вы выбрали формулу b) n-m. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу b) n-m. Укажите значение n");
        }
        m = +prompt(`${n}+m. Укажите значение m`);
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}+m. Укажите значение m`);
        }
        let answer = n - m
        alert(`Получается: ${n}-${m}=${answer}`) 
        
    } 
    if(formula == form[2]){    // formula = ("c")
        let n = +prompt("Вы выбрали формулу c) (n+m)-(a+b). Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу c) (n+m)-(a+b). Укажите значение n");
        }
        let m = +prompt(`(${n}+m)-(a+b). Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`(${n}+m)-(a+b). Укажите значение m`)
        }
        let a = +prompt(`(${n}+${m})-(a+b). Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`(${n}+${m})-(a+b). Укажите значение a`)
        }
        let b = +prompt(`(${n}+${m})-(${a}+b). Укажите значение b`)
        while(isNaN(b) == true){
            alert("Вы ввели не число!")
            b = +prompt(`(${n}+${m})-(${a}+b). Укажите значение b`)
        }
        let answer = (n + m) - (a + b)
        alert(`Получается: (${n}+${m})-(${a}+${b})=${answer}`)   
                
    }
    if(formula == form[3]){    // formula = ("d")
        let n = +prompt("Вы выбрали формулу d) n+m+a. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу d) n+m+a. Укажите значение n");
        }
        let m = +prompt(`${n}+m+a. Укажите значение m`);
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}+m+a. Укажите значение m`);
        }
        let a = +prompt(`${n}+${m}+a. Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`${n}+${m}+a. Укажите значение a`)
        }
        let answer = n + m + a
        alert(`Получается: ${n}+${m}+${a}=${answer}`)
        
    }    
    if(formula == form[4]){    // formula = ("e")
        let n = +prompt("Вы выбрали формулу e) n-m-a. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу e) n-m-a. Укажите значение n");
        }
        let m = +prompt(`${n}-m-a. Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}-m-a. Укажите значение m`)
        }
        let a = +prompt(`${n}-${m}-a. Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`${n}-${m}-a. Укажите значение a`)
        }
        let answer = n - m - a
        alert(`Получается: ${n}-${m}-${a}=${answer}`)
                    
    } 
    if(formula == form[5]){    // formula = ("f")
        let n = +prompt("Вы выбрали формулу f)(n-m)+(a-b). Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу f)(n-m)+(a-b). Укажите значение n");
        }
        let m = +prompt(`(${n}-m)+(a-b). Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`(${n}-m)+(a-b). Укажите значение m`)
        }
        let a = +prompt(`(${n}-${m})+(a-b). Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`(${n}-${m})+(a-b). Укажите значение a`)
        }
        let b = +prompt(`(${n}-${m})+(${a}-b). Укажите значение b`)
        while(isNaN(b) == true){
            alert("Вы ввели не число!")
            b = +prompt(`(${n}-${m})+(${a}-b). Укажите значение b`)
        }
        let answer = (n - m) + (a - b)
        alert(`Получается: (${n}-${m})+(${a}-${b})=${answer}`)
                
    } 
    if(formula == form[6]){    // formula = ("g")
        let n = +prompt("Вы выбрали формулу g) n-m+a. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу g) n-m+a. Укажите значение n");
        }
        let m = +prompt(`${a}-m+a. Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${a}-m+a. Укажите значение m`)        
        }
        let a = +prompt(`${n}-${m}+a. Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`${n}-${m}+a. $ значение a`)
        }
        let answer = n - m + a
        alert(`Получается: ${n}-${m}+${a}=${answer}`)
                
    }   
    if(formula == form[7]){    // formula = ("j")
        let n = +prompt("Вы выбрали формулу j) n+m-a. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу j) n+m-a. Укажите значение n");
        }
        let m = +prompt(`${n}+m-a. Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}+m-a. Укажите значение m`)
        }
        let a = +prompt(`${n}+${m}-a. Укажите значение a`)
        while(isNaN(a) == true){
            alert("Вы ввели не число!")
            a = +prompt(`${n}+${m}-a. Укажите значение a`)
        }
        let answer = n + m - a
        alert(`Получается: ${n}+${m}-${a}=${answer}`)

        } 
    if(formula == form[8]){    // formula = ("k")
        let n = +prompt("Вы выбрали формулу k) n*m. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу k) n*m. Укажите значение n");
        }
        let m = +prompt(`${n}*m. Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}*m. Укажите значение m`)
        }
        let answer = n * m
        alert(`Получается: ${n}*${m}=${answer}`)            
        
    }    
    if(formula == form[9]){    // formula = ("t")
        let n = +prompt("Вы выбрали формулу t) n/m. Укажите значение n")
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу t) n/m. Укажите значение n");
        }
        let m = +prompt(`${n}/m. Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}/m. Укажите значение m`)
        }
        while(m == 0){
            alert("На нуль делить нельзя!")
            m = +prompt(`${n}/m. Укажите значение m`)
            while(isNaN(m) == true){
                alert("Вы ввели не число!")
                m = +prompt(`${n}/m. Укажите значение m`)
            }        
        }
        let answer = n / m
        alert(`Получается: ${n}/${m}=${answer}`)
    }
    if(formula == form[10]){    // formula = ("z")
        let n = +prompt("Вы выбрали формулу z) n**m (возведение в степень). Укажите значение n");
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу z) n**m (возведение в степень). Укажите значение n");
        }
        let m = +prompt(`${n}**m. Укажите значение m`);
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n}**m. Укажите значение m`);
        }
        let answer = n ** m;
        alert(`Получается: ${n}**${m}=${answer}`)
    }
    if(formula == form[11]){    // formula = ("w") 
        let n = +prompt("Вы выбрали формулу w) n <,>,= m (сравнение). Укажите значение n");
        while(isNaN(n) == true){
            alert("Вы ввели не число!")
            n = +prompt("Вы выбрали формулу w) n <,>,= m (сравнение). Укажите значение n");
        }
        let m = +prompt(`${n} <,>,= m (сравнение). Укажите значение m`)
        while(isNaN(m) == true){
            alert("Вы ввели не число!")
            m = +prompt(`${n} <,>,= m (сравнение). Укажите значение m`)       
        }
        if(n < m && n != m){
            alert(`Получается ${n}<${m}(меньше)`)
        }
        if(n > m && n != m){
            alert(`Получается ${n}>${m}(больше)`)
        }
        if(n == m){
            alert(`Получается ${n}=${m}(равно)`)
        }
        End()
    }
         
    else if(formula != form){
        End()
    }    
}
