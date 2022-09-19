let tela = window.screen.width;
function hoverMenu() {
    let targetM = document.querySelector('.target').classList.toggle("show");


    targetM.onclick = function () {
        if (targetM.classList.contains('show')) {
            targetM.classList.remove('show');
        } else {
            targetM.className = "show";
        }
    }


    // document.addEventListener('click', (e) => {
    //     let el = e.target;

    //     if (el.classList.contains('show') || window.screen.width > 767.90) {
    //         targetM.classList.remove('show');
    //     } else if (!el.classList.contains('show') || window.screen.width < 767.90) {  
    //         targetM.className = "show";
    //     }
    // })



}


    let countTimer = document.querySelector('.butonsend')

    let divcrono = document.createElement('div')
    let h1title = document.createElement('h1')
    let h1Timer = document.createElement('h1');

    h1Timer.id = 'timer';
    h1title.innerText = 'Liberando seu link em: '
    h1title.className = 'honeTitle';
    divcrono.className = 'timingDown';
    countTimer.onclick = () => {
        let time = 11;

        let timer = setInterval(() => {

            time -= 1;

            if (time < 0) {
                clearInterval(timer);
                window.location.href = './down.html?';
            } else {
                document.getElementById('timer').innerHTML = time;
            }
        }, 1000)

        document.querySelector('.divTimer').appendChild(divcrono)
        document.querySelector('.timingDown').appendChild(h1title);
        document.querySelector('.honeTitle').appendChild(h1Timer);
    }




// 
