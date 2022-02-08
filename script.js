const wave__container = document.getElementById('wave__container')

let cubesArr = []
let arraysContainer = []

for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 24; j++) {
        const cube = document.createElement('div')
        cube.classList.add('cube')

        cubesArr.push(cube)
        wave__container.appendChild(cube)
    }
    arraysContainer.push(cubesArr)
    cubesArr = []
}

const f = (array) => {
    array.map((arr, i) => {
        arr.map((item, j) => {
            item.addEventListener('click', () => {
                console.log(i, j);
                grow(i, j)
            })
        })
    })
}

f(arraysContainer)

const grow = (i, j) => {
    if(arraysContainer[i] && arraysContainer[i][j]) {
        if(!arraysContainer[i][j].classList.contains('grow')) {
            arraysContainer[i][j].classList.add('grow')
            setTimeout(() => {
                grow(i-1, j-1)
                grow(i-1, j)
                grow(i-1, j+1)
                grow(i+1, j-1)
                grow(i+1, j)
                grow(i+1, j+1)
                grow(i-1, j-1)
                grow(i, j-1)
                grow(i+1, j-1)
                grow(i-1, j+1)
                grow(i, j+1)
                grow(i+1, j+1)
            }, 100);
            
            setTimeout(() => {
                arraysContainer[i][j].classList.remove('grow')
            }, 1000);
        }
    }
}