//your code here!
document.addEventListener('DOMContentLaoaded',function () {
    var numId = document.querySelector('#input-number').onkeyup = function () {
        console.log("Etas")
    }
    

    document.querySelector('#button-compute').onclick = function() {
        numId = document.querySelector('#input-number')
        console.log(numId)
        console.log("test   ")
    }
})