var arr = [["But I remember it so clearly because it was the day before his diagnosis. We were sitting on the stones at the edge of the strip mall, looking over at the sun setting above Southwest High. I loved how it painted the brick walls a bright, dazzling orange. Midsummer was in full swing and the cicadas were just beginning to come out from the creek bed behind the building.At the light, I was hoping for a left arrow, but all I got was a bright green circle. I sniffled and eased off the accelerator into the middle of the intersection. Honestly, I hadn’t the first clue what yielding meant or when I was allowed to turn."],
            ["Driving never really clicked for me. It worked out just fine for Jamie. Dad had taught her, though. Once she’d learned how to do it, he’d become far too sick to stand, so I was left to fend for myself. I took a few lessons on Wednesdays after school and even some exams, but I always lacked the confidence to speed up or keep both hands on the wheel, all while watching out for other cars. It frightened me, like I was a risk to everyone else on the road. I’d get distracted, always picturing Mom throwing up in the toilet at three in the morning and the unforgettable feeling of Dad’s grip loosening on my hand in the hospital."],
            ["Somehow I turned safely and began driving north. The road was wide and gray, its two lanes empty except for our Civic. I stayed in the left lane, cruising a full ten under the speed limit. The instructor didn’t seem to mind - he kept saying “nice and easy” like he could sense my nerves. It helped.I shouldn’t have let it slip out that way. I hated how nonchalant I sounded - so disconnected, emotionless, when really I was the opposite. I came across so matter-of-fact, but there was no use in lying, especially when my parents were all I thought about."],
            ["I thought about my best friend Kayla and how warm the holidays felt at her house, with its massive kitchen island and her kind older brothers and Jack Russell Terrier, how lucky I was that she’d invited me and Jamie to sleep over on Christmas Eve. We slept in the same bed that night, just like we had when we were young and it would thunderstorm, her arms wrapped around me as I sobbed myself to sleep. Then I started to wonder why even when we found Mom unconscious in the bathtub earlier that month, I still hadn’t seen Jamie cry."],
            ["Trees are a source of oxygen. They absorb carbon dioxide and help regulate climatic conditions, along with transforming carbon dioxide into oxygen by photosynthesis.  Trees control the atmospheric temperature and improve soil fertility. They are also vital for wildlife to survive and thrive. Further, trees provide an aesthetically pleasing landscape. Since they provide many benefits to living beings, it is important to understand how trees contribute to the planet.Trees are an excellent asset to the Earth. They contribute so much daily to make our planet clean and healthy. In this tree essay in English, children can learn more about the importance and benefits of trees."],
            ["Trees are an excellent asset to the Earth. They contribute so much daily to make our planet clean and healthy. In this tree essay in English, children can learn more about the importance and benefits of trees.Trees are an excellent asset to the Earth. They contribute so much daily to make our planet clean and healthy. In this tree essay in English, children can learn more about the importance and benefits of trees.Trees are an excellent asset to the Earth. They contribute so much daily to make our planet clean and healthy. In this tree essay in English, children can learn more about the importance and benefits of trees."],
            ["Environmental pollution is a significant problem in the world today. Some industries release chemicals into the air, which cause harm to the ozone layer that shields us from UV radiation. Some industries release harmful chemicals into water resources. These emissions will be carried by wind and rain and deposited on land or ocean surfaces.Environmental pollution is a significant problem in the world today. Some industries release chemicals into the air, which cause harm to the ozone layer that shields us from UV radiation. Some industries release harmful chemicals into water resources. These emissions will be carried by wind and rain and deposited on land or ocean surfaces."],
            ["Mobile phone addiction is becoming a massive issue as people spend too much time scrolling through screens rather than interacting with the people around them. Additionally, mobile phones are a big distraction for students, and their addiction can affect their ability to concentrate on their studies.It is not so healthy to be constantly connected to social media on your phone. It can cause you to miss the necessary routine of your life and lead you to follow an unhealthy lifestyle. Mobile phone usage and addiction have increased mental health diseases, like anxiety, depression and other mental disorders."],
            ["Mobile phones have made communication more accessible than ever before. Mobile phones have encouraged a whole new way of doing things, including taking photos, videos, attending online classes, etc. The latest news and all kinds of information that help in knowledge building are available at students’ fingertips. Mobile phones these days have the capability to do nearly everything computers can do. Students use mobile phones to write assignments and create presentations. Most mobile phones have advanced video and picture editing capabilities that allow children to showcase their creative talents."],
            ["Through the passenger window I saw the old Pizza Hut that got turned into a bank and next to it, the empty lots where there used to be a farmer’s market. Mom and Dad would take us when we were tiny almost every Sunday morning. I remember them swing dancing like fools to the jazz band by fountains. With silly grins on their faces they’d whirl around and all the other people would clap and dance along with them. Meanwhile Jamie and I would take our shoes and socks off and splash under the falling water, soaking our hair and our sundresses and giggling because we didn’t have a care in the world."]]

// console.log(arr[4])
function Run(){
    window.location.href = "typing1.html"
    // var select_value = document.getElementById("sel").value
    // console.log(select_value)
}
// var a = document.getElementById("sel")
// console.log(a.value)

// var p = document.getElementById("paragraph")
function getRandom(array){
    var x = Math.floor(Math.random() * array.length)
    // console.log(arr[x])
    // p.innerText = arr[x]
    return x
}
var randomElement = getRandom(arr)

var p = document.getElementById("para")
for(var i = 0;i < arr[randomElement][0].length;i++){
    var span = document.createElement("span")
    span.className="span"
    span.innerHTML = arr[randomElement][0][i]
    p.append(span) 
}
// function new_para(l){
//     var random_sec = getRandom(arr)
//     p.innerHTML = ""
//     for(var i = l;i < arr[random_sec][0].length;i++){
//         var span = document.createElement("span")
//         span.className="span"
//         span.innerHTML = arr[random_sec][0][i]
//         p.append(span) 
//     }
// }

var t = document.getElementById("timer")

var test_div = document.getElementById("test_div")
var control = document.getElementById("control")
var span_ele = p.getElementsByTagName("span")
var input = document.getElementById("input")
var count = 1
var incorrect = 0
var correct = 0
// console.log(span_ele.length)


function start(){
    if(count == 1){
        var seconds = 59
        var interval = setInterval(function updateTime(){
        var mins = Math.floor(seconds / 60)
        var secs = seconds % 60

        document.querySelector("#timer").innerHTML = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`

        if(seconds == 0){
            clearInterval(interval)
            t.remove()
            test_div.remove()
            control.remove()
            result()
        }
        else{
            seconds--
        }
        
    },1000)
    }
    count++


    input.addEventListener('keydown', (event) =>{
        if(event.key == "Backspace"){
            event.preventDefault()
        }
    })
    var inp = input.value

    // console.log(span_ele.length)
    // if(inp.length == span_ele.length){
    //     clearInterval(interval)
    //     t.remove()
    //     test_div.remove()
    //     control.remove()
    //     result()
    // }
    
    
    // console.log(typeof(inp))
    span_ele[inp.length].style.color = "white"
    span_ele[inp.length].style.background = "black"
    if(span_ele[inp.length-1].innerText == inp[inp.length-1]){
        correct++
        span_ele[inp.length-1].style.color = "grey"
        span_ele[inp.length-1].style.background = "white"
        // console.log("vishnu")
    }
    else{
        incorrect++
        span_ele[inp.length-1].style.color = "red"
        span_ele[inp.length-1].style.textDecoration = "line-through"
        span_ele[inp.length-1].style.background = "white"
    }

    

}

function result(){
    var type = input.value
    var len = type.length
    var gross = Math.floor(len/5)
    var net = gross - incorrect
    var acc = (correct / len) * 100
    acc = acc.toFixed(2)
    if(net < 0){
        net = 0
    }

    var test_text = document.createElement("div")
    test_text.innerText = "Your Test Score"
    test_text.style.color = "blue"
    test_text.style.fontStyle = "italic"
    test_text.style.fontSize = "50px"
    var res_div = document.createElement("div")
    res_div.id = "res"

    var gross_div = document.createElement("div")
    gross_div.id = "gross"
    var gross_text = document.createElement("div")
    gross_text.id = "g_text"
    gross_text.innerText = "Gross Speed"
    var gross_value_div = document.createElement("div")
    gross_value_div.id = "g_value"
    gross_value_div.innerText = gross
    var gross_wpm = document.createElement("div")
    gross_wpm.id = "g_wpm"
    gross_wpm.innerText = "WPM"
    gross_div.append(gross_text, gross_value_div, gross_wpm)

    var acc_div = document.createElement("div")
    acc_div.id = "accuracy"
    var acc_text = document.createElement("div")
    acc_text.id = "a_text"
    acc_text.innerText = "Accuracy"
    var acc_value_div = document.createElement("div")
    acc_value_div.id = "a_value"
    acc_value_div.innerText = `${acc}%`
    var acc_wpm = document.createElement("div")
    acc_wpm.id = "a_wpm"
    // acc_wpm.innerText = "WPM"
    acc_div.append(acc_text, acc_value_div, acc_wpm)

    var net_div = document.createElement("div")
    net_div.id = "net"
    var net_text = document.createElement("div")
    net_text.id = "n_text"
    net_text.innerText = "Net Speed"
    var net_value_div = document.createElement("div")
    net_value_div.id = "n_value"
    net_value_div.innerText = net
    var net_wpm = document.createElement("div")
    net_wpm.id = "n_wpm"
    net_wpm.innerText = "WPM"
    net_div.append(net_text, net_value_div, net_wpm)

    res_div.append(gross_div, net_div, acc_div)

    var cal = document.createElement("div")
    cal.id = "calc"
    var p1 = document.createElement("p")
    p1.innerText = `Correct Letters : ${correct}`
    var p2 = document.createElement("p")
    p2.innerText = `Incorrect Letters : ${incorrect}`
    cal.append(p1, p2)

    var control_div = document.createElement("div")
    control_div.id = "control1"
    var button1 = document.createElement("button")
    button1.id = "restart_button"
    button1.innerText = "Restart"
    button1.onclick = restart
    var button2 = document.createElement("button")
    button2.id = "exit_button"
    button2.innerText = "Exit"
    button2.onclick = exit
    control_div.append(button1, button2)

    document.getElementById("main1").append(test_text, res_div, cal, control_div)
    
    console.log(gross, net, acc)
}
function restart(){
    window.location.reload()
}
function exit(){
    window.location.href = "typing.html"
    input.value = ""
}
        

