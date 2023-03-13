let days = ["PO","UT","ST","CT","PA","SO","NE"];
let imgs = {
    "boss" : "imgs/double_drop_boss.png",
    "mise" : "imgs/double_drop_chardev_points.png",
    "dung" : "imgs/double_drop_dungeon.png",
    "ryby" : "imgs/double_drop_fish.png",
    "metin" : "imgs/double_drop_metin.png",
    "tezba" : "imgs/double_drop_mining.png",
    "war89" : "imgs/empire_war89.png",
    "war119" : "imgs/empire_war119.png",
    "war149" : "imgs/empire_war149.png",
    "war150" : "imgs/empire_war150.png",
    "xp" : "imgs/event_double_exp.png",
    "poklad" : "imgs/event_gold_case.png",
    "zacar" : "imgs/event_switch_1_5.png",
    "pozeh" : "imgs/event_switch_6_7.png",
    "runy" : "imgs/event_switch_runes.png",
    "arena89" : "imgs/pvp_war89.png",
    "arena119" : "imgs/pvp_war119.png",
    "arena149" : "imgs/pvp_war149.png",
    "arena150" : "imgs/pvp_war150.png",
    "lms89" : "imgs/pvp_war_lms89.png",
    "lms119" : "imgs/pvp_war_lms119.png",
    "lms149" : "imgs/pvp_war_lms149.png",
    "lms150" : "imgs/pvp_war_lms150.png",
    "bg" : "imgs/bg.png"
};
let events = {
    "PO" : ["boss","metin","zacar","ryby","tezba","lms89","dung","war119","lms150","arena149","boss"],
    "UT" : ["metin","boss","ryby","tezba","pozeh","runy","lms119","boss","metin","arena150","tezba","xp","metin"],
    "ST" : ["xp","pozeh","runy","poklad","lms149","mise","war150","lms89","arena89","xp"],
    "CT" : ["dung","poklad","ryby","tezba","lms150","metin","boss","arena119","tezba","xp","dung"],
    "PA" : ["metin","boss","ryby","tezba","pozeh","runy","lms119","dung","war89","lms149","arena89","metin"],
    "SO" : ["mise","pozeh","runy","ryby","tezba","lms149","boss","metin","arena150","lms119","arena149","boss"],
    "NE" : ["dung","ryby","tezba","zacar","lms150","xp","war149","lms89","arena119","dung"],
};
let times = {
    "PO" : ["09:30 -\n10:00","10:00 -\n10:30","10:30 -\n11:00","17:45 -\n18:00",
            "18:00 -\n18:15","18:15 -\n18:30","18:30 -\n19:30","19:30 -\n20:00",
            "20:00 -\n20:15","22:00 -\n22:30","23:30 -\n23:59"],
    "UT" : ["09:30 -\n10:00","10:00 -\n10:30","10:30 -\n10:45","10:45 -\n11:00",
            "17:45 -\n18:00","18:00 -\n18:15","18:15 -\n18:30","18:30 -\n19:00",
            "19:00 -\n19:30","19:30 -\n20:00","20:00 -\n20:15","22:00 -\n22:30","23:30 -\n23:59"],
    "ST" : ["09:30 -\n10:30","10:30 -\n10:45","10:45 -\n11:00","17:45 -\n18:15",
            "18:15 -\n18:30","18:30 -\n19:30","19:30 -\n20:00","20:00 -\n20:15",
            "22:00 -\n22:30","23:30 -\n23:59"],
    "CT" : ["09:30 -\n10:30","10:30 -\n11:00","17:45 -\n18:00","18:00 -\n18:15",
            "18:15 -\n18:30","18:30 -\n19:00","19:00 -\n19:30","19:30 -\n20:00",
            "20:00 -\n20:15","22:00 -\n22:30","23:30 -\n23:59"],
    "PA" : ["09:30 -\n10:00","10:00 -\n10:30","10:30 -\n10:45","10:45 -\n11:00",
            "17:45 -\n18:00","18:00 -\n18:15","18:15 -\n18:30","18:30 -\n19:30",
            "19:30 -\n20:00","20:00 -\n20:15","22:00 -\n22:30","23:30 -\n23:59"],
    "SO" : ["09:30 -\n10:30","10:30 -\n10:45","10:45 -\n11:00","17:45 -\n18:00",
            "18:00 -\n18:15","18:15 -\n18:30","18:30 -\n19:00","19:00 -\n19:30",
            "19:30 -\n20:00","20:00 -\n20:15","22:00 -\n22:30","23:30 -\n23:59"],
    "NE" : ["09:30 -\n10:30","10:30 -\n10:45","10:45 -\n11:00","17:45 -\n18:15",
            "18:15 -\n18:30","18:30 -\n19:30","19:30 -\n20:00","20:00 -\n20:15",
            "22:00 -\n22:30","23:30 -\n23:59"],
};

let times2 = {
    "PO" : ["09:30","10:00","10:00","10:30","10:30","11:00","17:45","18:00","18:00","18:15","18:15","18:30","18:30","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "UT" : ["09:30","10:00","10:00","10:30","10:30","10:45","10:45","11:00","17:45","18:00","18:00","18:15","18:15","18:30","18:30","19:00","19:00","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "ST" : ["09:30","10:30","10:30","10:45","10:45","11:00","17:45","18:15","18:15","18:30","18:30","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "CT" : ["09:30","10:30","10:30","11:00","17:45","18:00","18:00","18:15","18:15","18:30","18:30","19:00","19:00","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "PA" : ["09:30","10:00","10:00","10:30","10:30","10:45","10:45","11:00","17:45","18:00","18:00","18:15","18:15","18:30","18:30","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "SO" : ["09:30","10:30","10:30","10:45","10:45","11:00","17:45","18:00","18:00","18:15","18:15","18:30","18:30","19:00","19:00","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"],
    "NE" : ["09:30","10:30","10:30","10:45","10:45","11:00","17:45","18:15","18:15","18:30","18:30","19:30","19:30","20:00","20:00","20:15","22:00","22:30","23:30","23:59"]
}

let nexttime = "00:00";

function parseTime(s){
    let hours = parseInt(s.substring(0,2));
    let minutes = parseInt(s.substring(3,5));
    let date = new Date();
    date.setHours(hours)
    date.setMinutes(minutes);
    return date;
}

function refreshAt(hours, minutes) {
    var now = new Date();
    var then = new Date();
    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes)) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(0);

    var timeout = (then.getTime() - now.getTime());
    console.log(now);
    console.log(then);
    console.log(timeout);
    setTimeout(function() { window.location.reload(true); }, timeout);
}

function findCurrent(day){
    let curDay = times2[day];
    let now = new Date();
    let l = curDay.length;
    let d;
    let active = -1;
    let next = -1;
    for(let i = 0; i < l; ++i){
        d = parseTime(curDay[i]);
        if(now < d){
            if(i % 2 == 0){ // neprobiha event
                active = -1;
                next = i/2;
            } else { // probiha event
                active = Math.floor(i/2);
                next = active+1;
                if(next == l/2){
                    next = -1;
                }
            }
            nexttime = curDay[i];
            break;
        }
    }
    return [active, next];
}

function markCurrent(day, active, next){
    //console.log(active, next);
    let table = document.getElementById(day);
    if(active != -1){
        table.rows[0].children[active+1].style.backgroundColor = "#02b517";
        table.rows[1].children[active+1].style.backgroundImage = "";
        table.rows[1].children[active+1].style.backgroundColor = "#02b517";
    }
    if(next != -1){
        table.rows[0].children[next+1].style.backgroundColor = "#d69600";
        table.rows[1].children[next+1].style.backgroundImage = "";
        table.rows[1].children[next+1].style.backgroundColor = "#d69600";
    }
}

function createTHead(table, data, desc){
    let thead = table.createTHead();
    let row = thead.insertRow();
    let firstcell = document.createElement("th");
    firstcell.innerText = desc;
    row.appendChild(firstcell);
    for(let e of data){
        let th = document.createElement("th");
        let text = document.createTextNode(e);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function createTBody(table, data){
    let tbody = table.createTBody();
    let row = tbody.insertRow();
    let firstcell = document.createElement("td");
    firstcell.rowSpan = 0;
    row.appendChild(firstcell);
    for(let e of data){
        let td = document.createElement("td");
        td.style.background = "center";
        td.style.backgroundImage = "url('" + imgs["bg"]+"')";
        td.style.backgroundRepeat = "no-repeat";
        td.style.backgroundSize = "cover";
        let img = document.createElement("img");
        img.src = imgs[e];
        img.alt = e;
        td.appendChild(img);
        row.appendChild(td);
    }
}

function planReload(){
    let hours = parseInt(nexttime.substring(0,2));
    let minutes = parseInt(nexttime.substring(3,5));
    console.log("Next page reload is planned for",nexttime)
    refreshAt(hours, minutes);
}   

function go(){
    let lookup = ["NE","PO","UT","ST","CT","PA","SO"];
    let day = lookup[new Date().getDay()];

    let dayTables = document.querySelector("#rozvrh").children;
    for(let day of days){
        createTHead(dayTables[day], times[day], day);
        createTBody(dayTables[day], events[day]);
    }
    let [active, next] = findCurrent(day);
    markCurrent(day, active, next);
    planReload();
}
