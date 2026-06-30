let user = [
    {   nickname: "Rock",
        win: 500,
        loss: 225
    }
];

const calculateBalance =  (nickname, win, loss) => {

    const winBalance = win - loss;
    let nivel = "";
    
    if (win <= 10){
        nivel = "Ferro"
    } else if(win >= 11 && win <= 20){
        nivel = "Bronze"
    } else if(win >= 21 && win <= 50){
        nivel = "Prata"
    } else if(win >= 51 && win <= 80){
        nivel = "Ouro"
    } else if(win >= 81 && win <= 90){
        nivel = "Diamante"
    } else if(win >= 91 && win <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }
    console.log(`O Herói ${nickname} tem um saldo de ${winBalance} vitórias, e está no nível de ${nivel}`)
}
calculateBalance(user[0].nickname, user[0].win, user[0].loss);


