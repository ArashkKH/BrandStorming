// output variables

let brandName = 'Lorem ipsum'
let bussinessType = 'Type Not defined'


// buttons
{
    //drawer buttons

    const desktopBtn = document.querySelectorAll('#drawer-desktop>.step')
    const mobilebtn = document.querySelectorAll('#drawer-mobile>.step')
    const allbtns = [desktopBtn, mobilebtn]
    const toolCards = document.querySelectorAll('.toolcard')

    for (i = 0; i < 2; i++) {
        allbtns[i].forEach((item, index) => {
            toolCards[index].classList.add('gonecard')
            toolCards[0].classList.remove('gonecard')
            item.addEventListener('click', () => {
                toolCards.forEach(element => {
                    element.classList.add('gonecard')
                });
                toolCards[index].classList.remove('gonecard')
            })
        });
    }
}

//card1 name generator
{
    const vowel = ['a', 'e', 'i', 'o', 'u']
    const silent = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    let mode = 4
    let genname = ''

    //core function-----
    function nameGen() {
        genname = ''
        for (i = 0; i < (mode); i++) {

            if (i % 2 == 1) {
                genname = genname + vowel[parseInt((Math.random()) * ((vowel.length - 1) + 1))]
            }
            if (i % 2 == 0) {
                genname = genname + silent[parseInt((Math.random()) * ((silent.length - 1) + 1))]
            }
        }
        document.getElementById('nameGen-name').innerHTML = genname
        document.getElementsByClassName('nameGen-donBtn')[0].style.background = 'rgb(93, 182, 255)'
        document.getElementsByClassName('nameGen-donBtn')[0].innerHTML = 'I Like it!'
    }
    nameGen()
    document.getElementById('nameGen-name').addEventListener('keyup', () => {

        document.getElementsByClassName('nameGen-donBtn')[0].style.background = 'rgb(93, 182, 255)'
        document.getElementsByClassName('nameGen-donBtn')[0].innerHTML = 'I Like it!'
        brandName = document.getElementById('nameGen-name').innerText
        fetchStyles()
    })
    //name generator button-----
    document.getElementsByClassName('nameGen-genBtn')[0].addEventListener('click', () => {
        nameGen()
        fetchStyles()
    })

    // mode buttons----
    const modebtn = document.querySelectorAll('.nameGen-mode>div')
    modebtn.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            mode = event.target.innerHTML.substring(1, 3)
            modebtn.forEach((ite) => {
                ite.classList.remove('mode-selected')
            });
            event.target.classList.add('mode-selected')
            nameGen()
        })
    });

    // name select button-----
    document.getElementsByClassName('nameGen-donBtn')[0].addEventListener('click', (event) => {
        event.target.style.background = 'rgb(39, 151, 39)'
        event.target.innerHTML = 'Ready to use ✔'
        brandName = document.getElementById('nameGen-name').innerText
        document.getElementsByClassName('symbolStep')[0].click()
        fetchStyles()
    })

}

//card2 industry type select
{
    let allTypes = document.querySelectorAll('span.job-type>i')

    allTypes.forEach((item, index) => {

        item.addEventListener('click', () => {
            item.classList.toggle('selected')

            let selectedClasses = document.querySelectorAll('.job-type>i.selected>span')
            // console.log(selectedClasses)
            customClasses(selectedClasses)
        })

    });
}

//card3 shapes
{
    const generalShapes = ['icon-home', 'icon-home2', 'icon-home3', 'icon-office', 'icon-quill', 'icon-newspaper', 'icon-pencil', 'icon-pencil2', 'icon-pen', 'icon-blog', 'icon-eyedropper', 'icon-droplet', 'icon-paint-format', 'icon-image', 'icon-images', 'icon-camera', 'icon-headphones', 'icon-music', 'icon-play', 'icon-film', 'icon-video-camera', 'icon-dice', 'icon-pacman', 'icon-spades', 'icon-clubs', 'icon-diamonds', 'icon-bullhorn', 'icon-connection', 'icon-podcast', 'icon-feed', 'icon-mic', 'icon-book', 'icon-books', 'icon-library', 'icon-price-tag', 'icon-price-tags', 'icon-barcode', 'icon-qrcode', 'icon-ticket', 'icon-cart', 'icon-coin-dollar', 'icon-coin-euro', 'icon-coin-pound', 'icon-coin-yen', 'icon-credit-card', 'icon-calculator']

    generalShapes.forEach((item) => {
        let shapeListInject = document.createElement('figure')
        shapeListInject.setAttribute('class', 'shape-obj')
        shapeListInject.setAttribute('data-icon', item)
        shapeListInject.innerHTML = `<i class="${item}"></i>`
        document.querySelector('.simple-shapes').appendChild(shapeListInject)
    });

    const allShapes = document.querySelectorAll('.shape-obj')
    allShapes.forEach((item) => {
        item.addEventListener('click', (event) => {
            iconReciever(event.target.getAttribute('data-icon'))
        }, true)
        item.firstChild.addEventListener('click', (event) => {
            iconReciever(event.target.parentElement.getAttribute('data-icon'))
        }, )
    });
}
let pallets = document.querySelectorAll('.color-Prev>input')

//color pallet
{
    let hexNum = '0123456789abcdef'

    function randomInpColor() {
        let randcolor = '#'
        for (i = 0; i < 6; i++) {
            randcolor += hexNum[parseInt(Math.random() * 16)]
        }
        return (randcolor)
    }


    function genColors() {
        pallets.forEach(element => {
            element.value = randomInpColor()
            setcolors()
        });
    }
    document.getElementById('colorRandBtn').addEventListener('click', genColors)
}

//flexOrder
{
    let rendercard = document.querySelector('#LogoCard>div')

    let layoutBtns = document.querySelectorAll('.layout-formation')

    layoutBtns.forEach(element => {
        element.addEventListener('click', (Event) => {
            rendercard.style.flexDirection = Event.target.getAttribute('data-align')
        }, true)
        element.firstChild.addEventListener('click', (Event) => {
            rendercard.style.flexDirection = Event.target.parentElement.getAttribute('data-align')
            // alert(Event.target.parentElement.getAttribute('data-align'))
        }, true)
    });

}

//fetch data from sections
{
    function iconReciever(selectedIcon) {
        document.querySelector('#LogoCard>div>i').setAttribute('class', selectedIcon)
        console.log(selectedIcon)
    }

    function fetchStyles() {
        // brandName
        // bussinessType
        brandName = document.getElementById('nameGen-name').innerText
        document.getElementById('logo-name').innerText = brandName
    }

    function setcolors() {
        document.getElementById('logo-name').style.color = pallets[0].value

        document.querySelector('#LogoCard i').style.color = pallets[2].value

        document.getElementById('LogoCard').style.backgroundColor = pallets[1].value


    }
}

fetchStyles()

//Taking screenShot of rendered DIV


let CanvasCounter = 0


const renderBtn = document.querySelectorAll('.endstep')
renderBtn.forEach(element => {
    element.addEventListener('click', () => {



        if (CanvasCounter = 0) {
            // document.getElementById('canvas').remove()
            // target = null
        }
        html2canvas(document.getElementById('workspace')).then(function (canvas) {
            canvas.setAttribute('id', 'canvas')
            document.body.appendChild(canvas);
            // CanvasCounter++
        });
        let x = document.getElementsByTagName('canvas')[0].toDataURL('image/png')
        console.log(x)
        // let x = canvas.toDataURL('image/png')
        // console.log(x)
        
        setTimeout(() => {
            const download = document.createElement('a');
            download.href = x;
            download.download = brandName+'.png';
            download.click();
        }, 1000);

    })
});