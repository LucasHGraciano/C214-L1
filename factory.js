/*Função Convencional*/
class Time {
  constructor (name){
    this.name = name
  }
  getName(){
    return this.name
  }
}

const pessoa = new Time('Barcelona')
console.log(time.getName())

/*Factory*/

const Time = name =>({
  name,
  getName: () => name
})

const time = Time('Real Madrid')
console.log(time.getName())

