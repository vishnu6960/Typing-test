var arr = [["But I remember it so clearly because it was the day before his diagnosis. We were sitting on the stones at the edge of the strip mall, looking over at the sun setting above Southwest High. I loved how it painted the brick walls a bright, dazzling orange. Midsummer was in full swing and the cicadas were just beginning to come out from the creek bed behind the building.At the light, I was hoping for a left arrow, but all I got was a bright green circle. I sniffled and eased off the accelerator into the middle of the intersection. Honestly, I hadn’t the first clue what yielding meant or when I was allowed to turn."],
            ["Driving never really clicked for me. It worked out just fine for Jamie. Dad had taught her, though. Once she’d learned how to do it, he’d become far too sick to stand, so I was left to fend for myself. I took a few lessons on Wednesdays after school and even some exams, but I always lacked the confidence to speed up or keep both hands on the wheel, all while watching out for other cars. It frightened me, like I was a risk to everyone else on the road. I’d get distracted, always picturing Mom throwing up in the toilet at three in the morning and the unforgettable feeling of Dad’s grip loosening on my hand in the hospital."],
            ["Somehow I turned safely and began driving north. The road was wide and gray, its two lanes empty except for our Civic. I stayed in the left lane, cruising a full ten under the speed limit. The instructor didn’t seem to mind - he kept saying “nice and easy” like he could sense my nerves. It helped.I shouldn’t have let it slip out that way. I hated how nonchalant I sounded - so disconnected, emotionless, when really I was the opposite. I came across so matter-of-fact, but there was no use in lying, especially when my parents were all I thought about."],
            ["I thought about my best friend Kayla and how warm the holidays felt at her house, with its massive kitchen island and her kind older brothers and Jack Russell Terrier, how lucky I was that she’d invited me and Jamie to sleep over on Christmas Eve. We slept in the same bed that night, just like we had when we were young and it would thunderstorm, her arms wrapped around me as I sobbed myself to sleep. Then I started to wonder why even when we found Mom unconscious in the bathtub earlier that month, I still hadn’t seen Jamie cry."],
            ["Through the passenger window I saw the old Pizza Hut that got turned into a bank and next to it, the empty lots where there used to be a farmer’s market. Mom and Dad would take us when we were tiny almost every Sunday morning. I remember them swing dancing like fools to the jazz band by fountains. With silly grins on their faces they’d whirl around and all the other people would clap and dance along with them. Meanwhile Jamie and I would take our shoes and socks off and splash under the falling water, soaking our hair and our sundresses and giggling because we didn’t have a care in the world."]]

// console.log(arr[4])
function Run(){
    window.location.href = "typing1.html"
}

var p = document.getElementById("paragraph")
function getRandom(array){
    var x = Math.floor(Math.random() * array.length)
    // console.log(arr[x])
    // p.innerText = arr[x]
    return x
}
var randomElement = getRandom(arr)
var para = document.getElementsByClassName("para")
for(var i = 0;i < arr[randomElement].length;i++){
    var span = document.createElement("span")
    span.innerText = arr[randomElement]
    console.log(span)
    // para.innerText = span
}
console.log(typeof(arr[randomElement]))

var input = document.getElementById("input")
function start(){

    input.addEventListener('keydown', (event) =>{
        if(event.key == "Backspace"){
            event.preventDefault()
        }
    })
    console.log(arr[randomElement])
    // console.log(p.innerText[0])
    p.innerHTML[2].style.color = "red"
    // var len = input.value.length
    
    //     function updateTime(){
    //         var mins = Math.floor(seconds / 60)
    //         var secs = seconds % 60

    //         document.querySelector(".timer").innerHTML = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`

    //         if(seconds == 0){
    //             clearInterval(interval)
    //         }
    //         else{
    //             seconds--
    //         }
    //     }
    //     updateTime()
    //     var interval = setInterval(updateTime(), 1000)
    }



















    // console.log(input.value.length)
//     if(document.getElementsByClassName("min").innerHTML === "01"){
//         var seconds = 60
//         var interval = setInterval(function updateTime(){
//         var mins = Math.floor(seconds / 60)
//         var secs = seconds % 60

//         document.querySelector(".timer").innerHTML = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`

//         if(seconds == 0){
//             clearInterval(interval)
//         }
//         else{
//             seconds--
//         }
        
//     },1000)
//     }
    


// }

