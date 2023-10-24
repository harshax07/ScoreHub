//DOM Elements :
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderControlLeft = document.querySelector('.slider-control--left');
const sliderControlRight = document.querySelector('.slider-control--right');
const errorMessage = document.getElementById('errorMessage')


/**
Function :
0.main(currentValue)
1.slideTo(index)
2.slideNext()
3.slidePrev()
4.getValue(data,currentValue)
5.getMatchID(server)  : server.js {express server for fetching match ID : node server.js [http://localhost:4000/]}
6.getMatchInfo(matchID,baseAPI,currentValue)
7.updateDOM(data,currentValue,matchID,Value01)

*/

// Variables : 
let slideIndex = 1;
let value = 1;
let currentValue;
let m0ID, m1ID, m2ID, m3ID; 
let Value ;

//for testing
// let baseAPI = 'http://localhost:3000/data'
// let server = ' http://localhost:4000'

let baseAPI = `https://harsha-cricket-api01.vercel.app/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/`;
let server =  'https://url-scraper-harshax07.onrender.com'





function slideTo(index) {
sliderSlides[slideIndex].classList.remove('active');
sliderSlides[index].classList.add('active');
sliderWrapper.style.transform = `translateX(-${index * 25}%)`;
slideIndex = index;
}

function slideNext() {
    if (slideIndex === sliderSlides.length - 1) {
    } else {
        slideTo(slideIndex + 1);
        value++
            return value
        }
}

function slidePrev() {
            
        if (slideIndex === 0) {
        } else {
            slideTo(slideIndex - 1);
            value--
            return value
        }
}


sliderControlLeft.addEventListener('click', 
function(){
var slideValue = slidePrev()
main(slideValue)
});

sliderControlRight.addEventListener('click', 
function(){
let slideValue = slideNext()
main(slideValue)
});

getValue =(data,currentValue) =>{
if(data.livescore.update.includes('upcoming') || data.livescore.update.includes('Starts at') || data.livescore.update.includes('starts at') || data.livescore.update.includes('Preview') ) Value = 0; // upcomig
else if(data.livescore.update.includes('need') || data.livescore.update.includes('opt') || data.livescore.update.includes('Innings Break')) Value = 1; // toss and live
else if (data.livescore.update.includes('won')) Value = 2;  // over or won
else if(data.livescore.update.includes('rain')) Value = 3; // rain // delay 
else Value = 99; 
// if(Value == 1 || 0) slideTo(currentValue)
return Value
}

async function getMatchID(server) {
try {
const match_IDarray = await fetch(server);
const match_ID_JSON = await match_IDarray.json();
// console.log(match_ID_JSON);
return match_ID_JSON;
} catch (error) {
// handle the error
errorMessage.style.display = "block";
errorMessage.innerText = "ERROR : Server Not Found" ; errorMessage.style.color ="red";
}
}


async function getMatchInfo(matchID, baseAPI, currentValue){
const URL = baseAPI + matchID;
//for testing
// const URL = "http://localhost:3000/data"
const response = await fetch(URL);
const data = await response.json();
let Value01 = getValue(data, currentValue);
// console.log("[For Checking]");
// console.log("Match ID:", matchID);
// console.log("Current Value:", currentValue);
// console.log("Value:", Value01);
// console.log(data);

return {
data: data,
value: Value01
};

};



function updateDOM (data,currentValue,Value01) 
{   
if(data.livescore.title =='Data Not Found')
    {
    window.location.href = '../html/error.html';
    }
else{
    
    let over;
    let isIPL;
    let team1Abbreviation,team2Abbreviation;
    // if(data.livescore.current != "Data Not Found")  over = data.livescore.current.match(/\((\d+)\)/)[1];
    var ipl_teams = ['Chennai Super Kings','Delhi Capitals','Gujarat Titans','Mumbai Indians','Kolkata Knight Riders','Sunrisers Hyderabad','Punjab Kings','Lucknow Super Giants','Royal Challengers Bangalore','Rajasthan Royals']

    if(ipl_teams.includes(data.livescore.title)){
        isIPL = true;
        const matchString = data.livescore.title
        const matchTitle = matchString.split(',')[0];
        // console.log({matchTitle})
        const teams = matchTitle.split(" vs ");
        // console.log({ teams })
        const team1 = teams[0]; 
        const team2 = teams[1];
         team1Abbreviation = team1.match(/\b\w/g).join('') + ".jpg";
         team2Abbreviation = team2.match(/\b\w/g).join('') + ".jpg";
    }
    // for testing  start
    // isIPL = true; 
    // const team1 = 'Lucknow Super Giants'; 
    // const team2 = 'Sunrisers Hyderabad';
    // team1Abbreviation = team1.match(/\b\w/g).join('') + ".jpg";
    // team2Abbreviation = team2.match(/\b\w/g).join('') + ".jpg";
    // Value01 = 1;
    //for testing end
    // box 0
    if(currentValue == 0){

        // DOM ELEMENTS FOR BOX 0 :
        const matchStatus0 = document.getElementById('matchStatus0')
        // UPCOMING 0
        const upcomigMatchInfo0 = document.getElementById('upcomigMatchInfo0')
        const UpcomingTitle0 = document.getElementById('UpcomingTitle0')
        const UpcomingUpdate0 = document.getElementById('UpcomingUpdate0')

        // LIVE 0
        const liveMatchInfo0 = document.getElementById('liveMatchInfo0')
        const title0 = document.getElementById('title0')
        const update0 = document.getElementById('update0')
        const battingTeam0 = document.getElementById('battingTeam0')
        const currentScore0 = document.getElementById('currentScore0')
        const lastRun0 = document.getElementById('lastRun0')
        const overRun0 = document.getElementById('overRun0')
        const crr0 = document.getElementById('crr0')
        const p10 = document.getElementById('p10')
        const p1Run0 = document.getElementById('p1Run0')
        const p1Ball0 = document.getElementById('p1Ball0')
        const p14s0 = document.getElementById('p14s0')
        const p16s0 = document.getElementById('p16s0')
        const p1strikeRate0 = document.getElementById('p1strikeRate0')
        const p20 = document.getElementById('p20')
        const p2Run0 = document.getElementById('p2Run0')
        const p2Ball0 = document.getElementById('p2Ball0')
        const p24s0 = document.getElementById('p24s0')
        const p26s0= document.getElementById('p26s0')
        const p2strikeRate0 = document.getElementById('p2strikeRate0')
        const bp10 = document.getElementById('bp10')
        const bp1o0 = document.getElementById('bp1o0')
        const bp1r0 = document.getElementById('bp1r0')
        const bp1w0 = document.getElementById('bp1w0')
        const bp1m0 = document.getElementById('bp1m0')
        const bp20 = document.getElementById('bp20')
        const bp2o0 = document.getElementById('bp2o0')
        const bp2r0 = document.getElementById('bp2r0')
        const bp2w0 = document.getElementById('bp2w0')
        const bp2m0 = document.getElementById('bp2m0')
        const partnership0 = document.getElementById('partnership0')
        const lastWicket0 = document.getElementById('lastWicket0')
        const commentaryText0 = document.getElementById('commentary-text0')

        //COMPLETED  0
        const overMatchInfo0 = document.getElementById('overMatchInfo0')
        const OMTitle30 = document.getElementById('OMTitle30')
        const teamOne0 = document.getElementById('team-one0')
        const teamTwo0 = document.getElementById('team-two0')
        const OMUpdate30 = document.getElementById('OMUpdate30')

        //TEAM-logo DOM element 0
        const teamLogo_box0 = document.getElementById('teamLogo_box0')
        const teamOne_ImageB0 = document.getElementById('teamOne_ImageB0') 
        const teamTwo_ImageB0 = document.getElementById('teamTwo_ImageB0')

        // console.log(team1Abbreviation)
        // console.log(team2Abbreviation)
        // console.log(data.livescore.title)   

        if(isIPL){
                teamLogo_box0.style.display ="block";
                teamOne_ImageB0.src = `../img/ipl_logos/${team1Abbreviation}`
                teamTwo_ImageB0.src = `../img/ipl_logos/${team2Abbreviation}`
                
            }


        if(Value01 == 0 || Value01 == 3){
            //coming up
            upcomigMatchInfo0.style.display = "block";
            if(Value01 == 3) matchStatus0.innerText = 'RAIN'
            else  matchStatus0.innerText = 'COMING UP'
            UpcomingTitle0.innerText = data.livescore.title
            UpcomingUpdate0.innerText = data.livescore.update.toUpperCase()
        }
        else if(Value01 == 1){
            // live
            if(data.livescore.current == "Data Not Found" && data.livescore.teamone == "Data Not Found")
            {
                //Toss
                matchStatus0.innerText = 'TOSS'
                upcomigMatchInfo0.style.display = "block";
                UpcomingTitle0.innerText = data.livescore.title
                UpcomingUpdate0.innerText = data.livescore.update.toUpperCase()
                
            }
            else{

                //Match Stated
                liveMatchInfo0.style.display = "block";
                title0.innerText = data.livescore.title
                update0.innerText =  data.livescore.update.toUpperCase();
                battingTeam0.innerText = data.livescore.current.slice(0, 3)
                currentScore0.innerText = data.livescore.current.substring(5)
                
                if(data.livescore.recentballs == "Data Not Found") {
                    lastRun0.innerText = data.livescore.lastwicket[data.livescore.lastwicket.length-1]
                    overRun0.innerText = data.livescore.lastwicket
                    lastWicket0.innerText = 'No Wickets'
                }
                else{
                    if(String (data.livescore.recentballs[data.livescore.recentballs.length-1]) == 'd' )
                    {
                        lastRun0.innerText = 'Wd' //i am in
                    }
                    else{
                        lastRun0.innerText = data.livescore.recentballs[data.livescore.recentballs.length-1]
                    }
                    overRun0.innerText = data.livescore.recentballs.substring(5)
                    lastWicket0.innerText = data.livescore.lastwicket
                }
                crr0.innerText = data.livescore.runrate.substring(5)
                if(over == 20 || over == 50 ) {
                    matchStatus0.innerText = "BREAK"; matchStatus0.style.animation = "blink 3s infinite";
                    
                }
                else {
                    matchStatus0.innerText = "LIVE"; matchStatus0.style.animation = "blink 3s infinite";
                   

                } 
            
                //p1
                if(data.livescore.batsman == "Data Not Found") p10.innerText ="-"
                else
                p10.innerText = data.livescore.batsman
                if(data.livescore.batsmanrun == "Data Not Found") p1Run0.innerText ="-"
                else
                p1Run0.innerText = data.livescore.batsmanrun
                if(data.livescore.ballsfaced == "Data Not Found") p1Ball0.innerText ="-"
                else
                p1Ball0.innerText = data.livescore.ballsfaced.replace(/[()]/g, "")
                if(data.livescore.fours == "Data Not Found") p14s0.innerText ="-"
                else
                p14s0.innerText = data.livescore.fours
                if(data.livescore.sixes == "Data Not Found") p16s0.innerText ="-"
                else
                p16s0.innerText = data.livescore.sixes
                if(data.livescore.sr == "Data Not Found") p1strikeRate0.innerText ="-"
                else
                p1strikeRate0.innerText = data.livescore.sr


                //p2
                if(data.livescore.batsman == "Data Not Found") p20.innerText ="-"
                else
                p20.innerText = data.livescore.batsmantwo

                if(data.livescore.batsmantworun == "Data Not Found") p2Run0.innerText ="-"
                else
                p2Run0.innerText = data.livescore.batsmantworun

                if(data.livescore.batsmantwoballsfaced == "Data Not Found") p2Ball0.innerText ="-"
                else
                p2Ball0.innerText = data.livescore.batsmantwoballsfaced.replace(/[()]/g, "")

                if(data.livescore.batsmantwofours == "Data Not Found") p24s0.innerText ="-"
                else
                p24s0.innerText = data.livescore.batsmantwofours

                if(data.livescore.batsmantwosixes == "Data Not Found") p26s0.innerText ="-"
                else
                p26s0.innerText = data.livescore.batsmantwosixes

                if(data.livescore.batsmantwosr == "Data Not Found") p2strikeRate0.innerText ="-"
                else
                p2strikeRate0.innerText = data.livescore.batsmantwosr

    
                //bp1
                if(data.livescore.bowler== "Data Not Found") {
                    bp10.innerText = '-' 
                    bp1o0.innerText = '-'
                    bp1r0.innerText = '-'
                    bp1w0.innerText = '-'
                    bp1m0.innerText = '-'
                }
                else{
                    bp10.innerText = data.livescore.bowler
                    bp1o0.innerText = data.livescore.bowlerover
                    bp1r0.innerText = data.livescore.bowlerruns
                    bp1w0.innerText = data.livescore.bowlerwickets
                    bp1m0.innerText = data.livescore.bowlermaiden

                }
                //bp2
                if( data.livescore.bowlertwo == "Data Not Found"){
                    bp20.innerText ='-'
                    bp2o0.innerText ='-'
                    bp2r0.innerText = '-'
                    bp2w0.innerText = '-'
                    bp2m0.innerText = '-'

                }
                else{
                    bp20.innerText = data.livescore.bowlertwo
                    bp2o0.innerText = data.livescore.bowletworover
                    bp2r0.innerText = data.livescore.bowlertworuns
                    bp2w0.innerText = data.livescore.bowlertwowickets
                    bp2m0.innerText = data.livescore.bowlertwomaiden

                }
                
            if(data.livescore.partnership0 == 'Data Not Found') partnership.innerText = '  '
            else
            partnership0.innerText = data.livescore.partnership

            if(data.livescore.commentary=='Data Not Found') commentaryText0.innerText = '...'
            else commentaryText0.innerText = data.livescore.commentary[0]

            }               
        }

        else if(Value01 == 2){
            // over
            overMatchInfo0.style.display = "block";
            matchStatus0.innerHTML = "COMPLETED"
            OMTitle30.innerText = data.livescore.title
            teamOne0.innerText = data.livescore.teamone
            teamTwo0.innerText = data.livescore.teamtwo
            OMUpdate30.innerText = data.livescore.update.toUpperCase();
        }
        else{
            // some thing went wrong
            if(Value01 == 99) console.log("Error From server")
            window.location.href = '../html/error.html';
        }
    }

    // box 1
    else if(currentValue == 1){
        // DOM ELEMENTS FOR BOX 1 :
        const matchStatus1 = document.getElementById('matchStatus1');
        //UPCOMING 1
        const upcomigMatchInfo1 = document.getElementById('upcomigMatchInfo1');
        const UpcomingTitle1 = document.getElementById('UpcomingTitle1');
        const UpcomingUpdate1 = document.getElementById('UpcomingUpdate1');

        //LIVE 1
        const liveMatchInfo1 = document.getElementById('liveMatchInfo1');
        const title1 = document.getElementById('title1');
        const update1 = document.getElementById('update1');
        const battingTeam1 = document.getElementById('battingTeam1');
        const currentScore1 = document.getElementById('currentScore1');
        const lastRun1 = document.getElementById('lastRun1');
        const overRun1 = document.getElementById('overRun1');
        const crr1 = document.getElementById('crr1');
        const p11 = document.getElementById('p11');
        const p1Run1 = document.getElementById('p1Run1');
        const p1Ball1 = document.getElementById('p1Ball1');
        const p14s1 = document.getElementById('p14s1');
        const p16s1 = document.getElementById('p16s1');
        const p1strikeRate1 = document.getElementById('p1strikeRate1');
        const p21 = document.getElementById('p21');
        const p2Run1 = document.getElementById('p2Run1');
        const p2Ball1 = document.getElementById('p2Ball1');
        const p24s1 = document.getElementById('p24s1');
        const p26s1 = document.getElementById('p26s1');
        const p2strikeRate1 = document.getElementById('p2strikeRate1');
        const bp11 = document.getElementById('bp11');
        const bp1o1 = document.getElementById('bp1o1');
        const bp1r1 = document.getElementById('bp1r1');
        const bp1w1 = document.getElementById('bp1w1');
        const bp1m1 = document.getElementById('bp1m1');
        const bp21 = document.getElementById('bp21');
        const bp2o1 = document.getElementById('bp2o1');
        const bp2r1 = document.getElementById('bp2r1');
        const bp2w1 = document.getElementById('bp2w1');
        const bp2m1 = document.getElementById('bp2m1');
        const partnership1 = document.getElementById('partnership1');
        const lastWicket1 = document.getElementById('lastWicket1');
        const commentaryText1 = document.getElementById('commentary-text1');

        //Completed 1
        const overMatchInfo1 = document.getElementById('overMatchInfo1');
        const OMTitle31 = document.getElementById('OMTitle31');
        const teamOne1 = document.getElementById('team-one1');
        const teamTwo1 = document.getElementById('team-two1');
        const OMUpdate31 = document.getElementById('OMUpdate31');

        //TEAM-log DOM element 
        const teamLogo_box1 = document.getElementById('teamLogo_box1')
        const teamOne_ImageB1 = document.getElementById('teamOne_ImageB1') 
        const teamTwo_ImageB1 = document.getElementById('teamTwo_ImageB1')
    
        // console.log(team1Abbreviation)
        // console.log(team2Abbreviation)
        // console.log(data.livescore.title)   
        if(isIPL){
                teamLogo_box1.style.display ="block";
                teamOne_ImageB1.src = `../img/ipl_logos/${team1Abbreviation}`
                teamTwo_ImageB1.src = `../img/ipl_logos/${team2Abbreviation}`
                
            }

            if(Value01 == 0 || Value01 == 3){
                //coming up
                upcomigMatchInfo1.style.display = "block";
                if(Value01 == 3) matchStatus1.innerText = 'RAIN'
                else  matchStatus1.innerText = 'COMING UP'
                UpcomingTitle1.innerText = data.livescore.title
                UpcomingUpdate1.innerText = data.livescore.update.toUpperCase()
               
            }
            else if(Value01 == 1){
                // live
                if(data.livescore.current == "Data Not Found" && data.livescore.teamone == "Data Not Found"){
                     //Toss
                     matchStatus1.innerText = 'TOSS'
                     upcomigMatchInfo1.style.display = "block";
                     UpcomingTitle1.innerText = data.livescore.title
                     UpcomingUpdate1.innerText = data.livescore.update.toUpperCase()
                }
                else{
                    // Match started
                    liveMatchInfo1.style.display = "block";
                    title1.innerText = data.livescore.title
                    update1.innerText =  data.livescore.update.toUpperCase();
                    battingTeam1.innerText = data.livescore.current.slice(0, 3)
                    currentScore1.innerText = data.livescore.current.substring(5)
                    if(data.livescore.recentballs == "Data Not Found") {
                        lastRun1.innerText = data.livescore.lastwicket[data.livescore.lastwicket.length-1]
                        overRun1.innerText = data.livescore.lastwicket
                        lastWicket1.innerText = 'No Wickets'
                    }
                    else{
                        if(String (data.livescore.recentballs[data.livescore.recentballs.length-1]) == 'd' )
                        {
                            lastRun1.innerText = 'Wd' //i am in
                        }
                        else{
                            lastRun1.innerText = data.livescore.recentballs[data.livescore.recentballs.length-1]
                        }
                        overRun1.innerText = data.livescore.recentballs.substring(5)
                        lastWicket1.innerText = data.livescore.lastwicket
                    }
                    crr1.innerText = data.livescore.runrate.substring(5)
                    if(over == 20 || over == 50 ) {
                        matchStatus1.innerText = "BREAK"; matchStatus1.style.animation = "blink 3s infinite";
                        
                    }
                    else {
                        matchStatus1.innerText = "LIVE"; matchStatus1.style.animation = "blink 3s infinite"; 

                    } 
                
                    //p1
                    if(data.livescore.batsman == "Data Not Found") p11.innerText ="-"
                    else
                    p11.innerText = data.livescore.batsman
                    if(data.livescore.batsmanrun == "Data Not Found") p1Run1.innerText ="-"
                    else
                    p1Run1.innerText = data.livescore.batsmanrun
                    if(data.livescore.ballsfaced == "Data Not Found") p1Ball1.innerText ="-"
                    else
                    p1Ball1.innerText = data.livescore.ballsfaced.replace(/[()]/g, "")
                    if(data.livescore.fours == "Data Not Found") p14s1.innerText ="-"
                    else
                    p14s1.innerText = data.livescore.fours
                    if(data.livescore.sixes == "Data Not Found") p16s1.innerText ="-"
                    else
                    p16s1.innerText = data.livescore.sixes
                    if(data.livescore.sr == "Data Not Found") p1strikeRate1.innerText ="-"
                    else
                    p1strikeRate1.innerText = data.livescore.sr


                    //p2
                    if(data.livescore.batsman == "Data Not Found") p21.innerText ="-"
                    else
                    p21.innerText = data.livescore.batsmantwo

                    if(data.livescore.batsmantworun == "Data Not Found") p2Run1.innerText ="-"
                    else
                    p2Run1.innerText = data.livescore.batsmantworun

                    if(data.livescore.batsmantwoballsfaced == "Data Not Found") p2Ball1.innerText ="-"
                    else
                    p2Ball1.innerText = data.livescore.batsmantwoballsfaced.replace(/[()]/g, "")

                    if(data.livescore.batsmantwofours == "Data Not Found") p24s1.innerText ="-"
                    else
                    p24s1.innerText = data.livescore.batsmantwofours

                    if(data.livescore.batsmantwosixes == "Data Not Found") p26s1.innerText ="-"
                    else
                    p26s1.innerText = data.livescore.batsmantwosixes

                    if(data.livescore.batsmantwosr == "Data Not Found") p2strikeRate1.innerText ="-"
                    else
                    p2strikeRate1.innerText = data.livescore.batsmantwosr

        
                    //bp1
                    if(data.livescore.bowler== "Data Not Found") {
                        bp11.innerText = '-' 
                        bp1o1.innerText = '-'
                        bp1r1.innerText = '-'
                        bp1w1.innerText = '-'
                        bp1m1.innerText = '-'
                    }
                    else{
                        bp11.innerText = data.livescore.bowler
                        bp1o1.innerText = data.livescore.bowlerover
                        bp1r1.innerText = data.livescore.bowlerruns
                        bp1w1.innerText = data.livescore.bowlerwickets
                        bp1m1.innerText = data.livescore.bowlermaiden

                    }
                    //bp2
                    if( data.livescore.bowlertwo == "Data Not Found"){
                        bp21.innerText ='-'
                        bp2o1.innerText ='-'
                        bp2r1.innerText = '-'
                        bp2w1.innerText = '-'
                        bp2m1.innerText = '-'

                    }
                    else{
                        bp21.innerText = data.livescore.bowlertwo
                        bp2o1.innerText = data.livescore.bowletworover
                        bp2r1.innerText = data.livescore.bowlertworuns
                        bp2w1.innerText = data.livescore.bowlertwowickets
                        bp2m1.innerText = data.livescore.bowlertwomaiden

                    }

                    
                if(data.livescore.partnership == 'Data Not Found') partnership1.innerText = '  '
                else
                partnership1.innerText = data.livescore.partnership

                if(data.livescore.commentary=='Data Not Found') commentaryText1.innerText = '...'
                else commentaryText1.innerText = data.livescore.commentary[0]

                }
                
            }

            else if(Value01 == 2){
                // over
                overMatchInfo1.style.display = "block";
                matchStatus1.innerHTML = "COMPLETED"
                // OMTitle1.innerText = data.livescore.title
                OMTitle31.innerText = data.livescore.title
                teamOne1.innerText = data.livescore.teamone
                teamTwo1.innerText = data.livescore.teamtwo
                OMUpdate31.innerText = data.livescore.update.toUpperCase();
            }
            else{
                // some thing went wrong
                if(Value01 == 99) console.log("Error From server")
                window.location.href = '../html/error.html';
            }
    }
    
    
    //box 2
    else if(currentValue == 2){

         // DOM ELEMENTS FOR BOX 0 :
        const matchStatus2 = document.getElementById('matchStatus2');
        // UPCOMING 2
        const upcomigMatchInfo2 = document.getElementById('upcomigMatchInfo2');
        const UpcomingTitle2 = document.getElementById('UpcomingTitle2');
        const UpcomingUpdate2 = document.getElementById('UpcomingUpdate2');

        // LIVE 2
        const liveMatchInfo2 = document.getElementById('liveMatchInfo2');
        const title2 = document.getElementById('title2');
        const update2 = document.getElementById('update2');
        const battingTeam2 = document.getElementById('battingTeam2');
        const currentScore2 = document.getElementById('currentScore2');
        const lastRun2 = document.getElementById('lastRun2');
        const overRun2 = document.getElementById('overRun2');
        const crr2 = document.getElementById('crr2');
        const p12 = document.getElementById('p12');
        const p1Run2 = document.getElementById('p1Run2');
        const p1Ball2 = document.getElementById('p1Ball2');
        const p14s2 = document.getElementById('p14s2');
        const p16s2 = document.getElementById('p16s2');
        const p1strikeRate2 = document.getElementById('p1strikeRate2');
        const p22 = document.getElementById('p22');
        const p2Run2 = document.getElementById('p2Run2');
        const p2Ball2 = document.getElementById('p2Ball2');
        const p24s2 = document.getElementById('p24s2');
        const p26s2 = document.getElementById('p26s2');
        const p2strikeRate2 = document.getElementById('p2strikeRate2');
        const bp12 = document.getElementById('bp12');
        const bp1o2 = document.getElementById('bp1o2');
        const bp1r2 = document.getElementById('bp1r2');
        const bp1w2 = document.getElementById('bp1w2');
        const bp1m2 = document.getElementById('bp1m2');
        const bp22 = document.getElementById('bp22');
        const bp2o2 = document.getElementById('bp2o2');
        const bp2r2 = document.getElementById('bp2r2');
        const bp2w2 = document.getElementById('bp2w2');
        const bp2m2 = document.getElementById('bp2m2');
        const partnership2 = document.getElementById('partnership2');
        const lastWicket2 = document.getElementById('lastWicket2');
        const commentaryText2 = document.getElementById('commentary-text2');

        // COMPLETED 2
        const overMatchInfo2 = document.getElementById('overMatchInfo2');
        const OMTitle32 = document.getElementById('OMTitle32');
        const teamOne2 = document.getElementById('team-one2');
        const teamTwo2 = document.getElementById('team-two2');
        const OMUpdate32 = document.getElementById('OMUpdate32');


        //TEAM-logo DOM element 2
        const teamLogo_box2 = document.getElementById('teamLogo_box2')
        const teamOne_ImageB2 = document.getElementById('teamOne_ImageB2') 
        const teamTwo_ImageB2 = document.getElementById('teamTwo_ImageB2')

        // console.log(team1Abbreviation)
        // console.log(team2Abbreviation)
        // console.log(data.livescore.title)   

        if(isIPL){
                teamLogo_box2.style.display ="block";
                teamOne_ImageB2.src = `../img/ipl_logos/${team1Abbreviation}`
                teamTwo_ImageB2.src = `../img/ipl_logos/${team2Abbreviation}`
                
            }


            if(Value01 == 0  || Value01 == 3){
                 //coming up
                 upcomigMatchInfo2.style.display = "block";
                 if(Value01 == 3) matchStatus2.innerText = 'RAIN'
                 else  matchStatus2.innerText = 'COMING UP'
                 UpcomingTitle2.innerText = data.livescore.title
                 UpcomingUpdate2.innerText = data.livescore.update.toUpperCase()
               
            }
            else if(Value01 == 1){
                // live
                if(data.livescore.current == "Data Not Found" && data.livescore.teamone == "Data Not Found"){
                    //Toss
                    matchStatus2.innerText = 'TOSS'
                    upcomigMatchInfo2.style.display = "block";
                    UpcomingTitle2.innerText = data.livescore.title
                    UpcomingUpdate2 .innerText = data.livescore.update.toUpperCase()
                }
                else{
                    //Match started 
                    liveMatchInfo2.style.display = "block";
                    matchStatus2.innerText = 'LIVE'
                    title2.innerText = data.livescore.title
                    update2.innerText =  data.livescore.update.toUpperCase();
                    battingTeam2.innerText = data.livescore.current.slice(0, 3)
                    currentScore2.innerText = data.livescore.current.substring(5)
                    if(data.livescore.recentballs == "Data Not Found") {
                        lastRun2.innerText = data.livescore.lastwicket[data.livescore.lastwicket.length-1]
                        overRun2.innerText = data.livescore.lastwicket
                        lastWicket2.innerText = 'No Wickets'
                    }
                    else{
                        if(String (data.livescore.recentballs[data.livescore.recentballs.length-1]) == 'd' )
                        {
                            lastRun2.innerText = 'Wd' //i am in
                        }
                        else{
                            lastRun2.innerText = data.livescore.recentballs[data.livescore.recentballs.length-1]
                        }
                        overRun2.innerText = data.livescore.recentballs.substring(5)
                        lastWicket2.innerText = data.livescore.lastwicket
                    }
                    crr2.innerText = data.livescore.runrate.substring(5)
                    if(over == 20 || over == 50 ) {
                        matchStatus2.innerText = "BREAK"; matchStatus2.style.animation = "blink 3s infinite";
                       
                    }
                    else {
                        matchStatus2.innerText = "LIVE"; matchStatus2.style.animation = "blink 3s infinite";

                    } 
                
                    //p1
                    if(data.livescore.batsman == "Data Not Found") p12.innerText ="-"
                    else
                    p12.innerText = data.livescore.batsman
                    if(data.livescore.batsmanrun == "Data Not Found") p1Run2.innerText ="-"
                    else
                    p1Run2.innerText = data.livescore.batsmanrun
                    if(data.livescore.ballsfaced == "Data Not Found") p1Ball2.innerText ="-"
                    else
                    p1Ball2.innerText = data.livescore.ballsfaced.replace(/[()]/g, "")
                    if(data.livescore.fours == "Data Not Found") p14s2.innerText ="-"
                    else
                    p14s2.innerText = data.livescore.fours
                    if(data.livescore.sixes == "Data Not Found") p16s2.innerText ="-"
                    else
                    p16s2.innerText = data.livescore.sixes
                    if(data.livescore.sr == "Data Not Found") p1strikeRate2.innerText ="-"
                    else
                    p1strikeRate2.innerText = data.livescore.sr


                    //p2
                    if(data.livescore.batsman == "Data Not Found") p22.innerText ="-"
                    else
                    p22.innerText = data.livescore.batsmantwo

                    if(data.livescore.batsmantworun == "Data Not Found") p2Run2.innerText ="-"
                    else
                    p2Run2.innerText = data.livescore.batsmantworun

                    if(data.livescore.batsmantwoballsfaced == "Data Not Found") p2Ball2.innerText ="-"
                    else
                    p2Ball2.innerText = data.livescore.batsmantwoballsfaced.replace(/[()]/g, "")

                    if(data.livescore.batsmantwofours == "Data Not Found") p24s2.innerText ="-"
                    else
                    p24s2.innerText = data.livescore.batsmantwofours

                    if(data.livescore.batsmantwosixes == "Data Not Found") p26s2.innerText ="-"
                    else
                    p26s2.innerText = data.livescore.batsmantwosixes

                    if(data.livescore.batsmantwosr == "Data Not Found") p2strikeRate2.innerText ="-"
                    else
                    p2strikeRate2.innerText = data.livescore.batsmantwosr

        
                    //bp1
                    if(data.livescore.bowler== "Data Not Found") {
                        bp12.innerText = '-' 
                        bp1o2.innerText = '-'
                        bp1r2.innerText = '-'
                        bp1w2.innerText = '-'
                        bp1m2.innerText = '-'
                    }
                    else{
                        bp12.innerText = data.livescore.bowler
                        bp1o2.innerText = data.livescore.bowlerover
                        bp1r2.innerText = data.livescore.bowlerruns
                        bp1w2.innerText = data.livescore.bowlerwickets
                        bp1m2.innerText = data.livescore.bowlermaiden

                    }
                    //bp2
                    if( data.livescore.bowlertwo == "Data Not Found"){
                        bp22.innerText ='-'
                        bp2o2.innerText ='-'
                        bp2r2.innerText = '-'
                        bp2w2.innerText = '-'
                        bp2m2.innerText = '-'

                    }
                    else{
                        bp22.innerText = data.livescore.bowlertwo
                        bp2o2.innerText = data.livescore.bowletworover
                        bp2r2.innerText = data.livescore.bowlertworuns
                        bp2w2.innerText = data.livescore.bowlertwowickets
                        bp2m2.innerText = data.livescore.bowlertwomaiden

                    }

                    
                if(data.livescore.partnership == 'Data Not Found') partnership2.innerText = '  '
                else
                partnership2.innerText = data.livescore.partnership

                if(data.livescore.commentary=='Data Not Found') commentaryText2.innerText = '...'
                else commentaryText2.innerText = data.livescore.commentary[0]
                    
                }
         }
            else if(Value01 == 2){
                // over
                overMatchInfo2.style.display = "block";
                matchStatus2.innerHTML = "COMPLETED"
                OMTitle32.innerText = data.livescore.title
                teamOne2.innerText = data.livescore.teamone
                teamTwo2.innerText = data.livescore.teamtwo
                OMUpdate32.innerText = data.livescore.update.toUpperCase();
    
            }
            else{
                // some thing went wrong
                if(Value01 == 99) console.log("Error From server")
                window.location.href = '../html/error.html';
            }
    }
    
    // box 3
    else if(currentValue == 3){
         // DOM ELEMENTS FOR BOX 3 :
        const matchStatus3 = document.getElementById('matchStatus3');
        //UPCOMING 3
        const upcomigMatchInfo3 = document.getElementById('upcomigMatchInfo3');
        const UpcomingTitle3 = document.getElementById('UpcomingTitle3');
        const UpcomingUpdate3 = document.getElementById('UpcomingUpdate3');

        //LIVE 3
        const liveMatchInfo3 = document.getElementById('liveMatchInfo3');
        const title3 = document.getElementById('title3');
        const update3 = document.getElementById('update3');
        const battingTeam3 = document.getElementById('battingTeam3');
        const currentScore3 = document.getElementById('currentScore3');
        const lastRun3 = document.getElementById('lastRun3');
        const overRun3 = document.getElementById('overRun3');
        const crr3 = document.getElementById('crr3');
        const p13 = document.getElementById('p13');
        const p1Run3 = document.getElementById('p1Run3');
        const p1Ball3 = document.getElementById('p1Ball3');
        const p13s3 = document.getElementById('p13s3');
        const p16s3 = document.getElementById('p16s3');
        const p1strikeRate3 = document.getElementById('p1strikeRate3');
        const p23 = document.getElementById('p23');
        const p2Run3 = document.getElementById('p2Run3');
        const p2Ball3 = document.getElementById('p2Ball3');
        const p23s3 = document.getElementById('p23s3');
        const p26s3 = document.getElementById('p26s3');
        const p2strikeRate3 = document.getElementById('p2strikeRate3');
        const bp13 = document.getElementById('bp13');
        const bp1o3 = document.getElementById('bp1o3');
        const bp1r3 = document.getElementById('bp1r3');
        const bp1w3 = document.getElementById('bp1w3');
        const bp1m3 = document.getElementById('bp1m3');
        const bp23 = document.getElementById('bp23');
        const bp2o3 = document.getElementById('bp2o3');
        const bp2r3 = document.getElementById('bp2r3');
        const bp2w3 = document.getElementById('bp2w3');
        const bp2m3 = document.getElementById('bp2m3');
        const partnership3 = document.getElementById('partnership3');
        const lastWicket3 = document.getElementById('lastWicket3');
        const commentaryText3 = document.getElementById('commentary-text3');

        //Completed 3
        const overMatchInfo3 = document.getElementById('overMatchInfo3');
        const OMTitle33 = document.getElementById('OMTitle33');
        const teamOne3 = document.getElementById('team-one3');
        const teamTwo3 = document.getElementById('team-two3');
        const OMUpdate33 = document.getElementById('OMUpdate33');


        //TEAM-logo DOM element 3
        const teamLogo_box3 = document.getElementById('teamLogo_box3')
        const teamOne_ImageB3 = document.getElementById('teamOne_ImageB3') 
        const teamTwo_ImageB3 = document.getElementById('teamTwo_ImageB3')

        // console.log(team1Abbreviation)
        // console.log(team2Abbreviation)
        // console.log(data.livescore.title)   

       
        if(isIPL){
                teamLogo_box3.style.display ="block";
                teamOne_ImageB3.src = `../img/ipl_logos/${team1Abbreviation}`
                teamTwo_ImageB3.src = `../img/ipl_logos/${team2Abbreviation}`
                
            }

            if(Value01 == 0 || Value01 == 3){
                //coming up
                upcomigMatchInfo3.style.display = "block";
                if(Value01 == 3) matchStatus3.innerText = 'RAIN'
                else  matchStatus3.innerText = 'COMING UP'
                UpcomingTitle3.innerText = data.livescore.title
                UpcomingUpdate3.innerText = data.livescore.update.toUpperCase()

            }
            else if(Value01 == 1){
                // live
                if(data.livescore.current == "Data Not Found" && data.livescore.teamone == "Data Not Found"){
                     //Toss
                    matchStatus3.innerText = 'TOSS'
                    upcomigMatchInfo3.style.display = "block";
                    UpcomingTitle3.innerText = data.livescore.title
                    UpcomingUpdate3.innerText = data.livescore.update.toUpperCase()
                }
                else{
                    //Match Started
                    liveMatchInfo3.style.display = "block";
                    title3.innerText = data.livescore.title
                    update3.innerText =  data.livescore.update.toUpperCase();
                    battingTeam3.innerText = data.livescore.current.slice(0, 3)
                    currentScore3.innerText = data.livescore.current.substring(5)
                    if(data.livescore.recentballs == "Data Not Found") {
                        lastRun3.innerText = data.livescore.lastwicket[data.livescore.lastwicket.length-1]
                        overRun3.innerText = data.livescore.lastwicket
                        lastWicket3.innerText = 'No Wickets'
                    }
                    else{
                        if(String (data.livescore.recentballs[data.livescore.recentballs.length-1]) == 'd' )
                        {
                            lastRun3.innerText = 'Wd' //i am in
                        }
                        else{
                            lastRun3.innerText = data.livescore.recentballs[data.livescore.recentballs.length-1]
                        }
                        overRun3.innerText = data.livescore.recentballs.substring(5)
                        lastWicket3.innerText = data.livescore.lastwicket
                    }
                    crr3.innerText = data.livescore.runrate.substring(5)
                    if(over == 20 || over == 50 ) {
                        matchStatus3.innerText = "BREAK"; matchStatus3.style.animation = "blink 3s infinite";
                       
                    }
                    else {
                        matchStatus3.innerText = "LIVE"; matchStatus3.style.animation = "blink 3s infinite";

                    } 
                
                    //p1
                    if(data.livescore.batsman == "Data Not Found") p13.innerText ="-"
                    else
                    p13.innerText = data.livescore.batsman
                    if(data.livescore.batsmanrun == "Data Not Found") p1Run3.innerText ="-"
                    else
                    p1Run3.innerText = data.livescore.batsmanrun
                    if(data.livescore.ballsfaced == "Data Not Found") p1Ball3.innerText ="-"
                    else
                    p1Ball3.innerText = data.livescore.ballsfaced.replace(/[()]/g, "")
                    if(data.livescore.fours == "Data Not Found") p14s3.innerText ="-"
                    else
                    p14s3.innerText = data.livescore.fours
                    if(data.livescore.sixes == "Data Not Found") p16s3.innerText ="-"
                    else
                    p16s3.innerText = data.livescore.sixes
                    if(data.livescore.sr == "Data Not Found") p1strikeRate3.innerText ="-"
                    else
                    p1strikeRate3.innerText = data.livescore.sr


                    //p2
                    if(data.livescore.batsman == "Data Not Found") p23.innerText ="-"
                    else
                    p23.innerText = data.livescore.batsmantwo

                    if(data.livescore.batsmantworun == "Data Not Found") p2Run3.innerText ="-"
                    else
                    p2Run3.innerText = data.livescore.batsmantworun

                    if(data.livescore.batsmantwoballsfaced == "Data Not Found") p2Ball3.innerText ="-"
                    else
                    p2Ball3.innerText = data.livescore.batsmantwoballsfaced.replace(/[()]/g, "")

                    if(data.livescore.batsmantwofours == "Data Not Found") p24s3.innerText ="-"
                    else
                    p24s3.innerText = data.livescore.batsmantwofours

                    if(data.livescore.batsmantwosixes == "Data Not Found") p26s3.innerText ="-"
                    else
                    p26s3.innerText = data.livescore.batsmantwosixes

                    if(data.livescore.batsmantwosr == "Data Not Found") p2strikeRate3.innerText ="-"
                    else
                    p2strikeRate3.innerText = data.livescore.batsmantwosr

        
                    //bp1
                    if(data.livescore.bowler== "Data Not Found") {
                        bp13.innerText = '-' 
                        bp1o3.innerText = '-'
                        bp1r3.innerText = '-'
                        bp1w3.innerText = '-'
                        bp1m3.innerText = '-'
                    }
                    else{
                        bp13.innerText = data.livescore.bowler
                        bp1o3.innerText = data.livescore.bowlerover
                        bp1r3.innerText = data.livescore.bowlerruns
                        bp1w3.innerText = data.livescore.bowlerwickets
                        bp1m3.innerText = data.livescore.bowlermaiden

                    }
                    //bp2
                    if( data.livescore.bowlertwo == "Data Not Found"){
                        bp23.innerText ='-'
                        bp2o3.innerText ='-'
                        bp2r3.innerText = '-'
                        bp2w3.innerText = '-'
                        bp2m3.innerText = '-'

                    }
                    else{
                        bp23.innerText = data.livescore.bowlertwo
                        bp2o3.innerText = data.livescore.bowletworover
                        bp2r3.innerText = data.livescore.bowlertworuns
                        bp2w3.innerText = data.livescore.bowlertwowickets
                        bp2m3.innerText = data.livescore.bowlertwomaiden

                    }

                    
                if(data.livescore.partnership == 'Data Not Found') partnership3.innerText = '  '
                else
                partnership3.innerText = data.livescore.partnership

                if(data.livescore.commentary=='Data Not Found') commentaryText3.innerText = '...'
                else commentaryText3.innerText = data.livescore.commentary[0]

                }
                
            }
            else if(Value01 == 2){
                // over
                overMatchInfo3.style.display = "block";
                matchStatus3.innerHTML = "COMPLETED"
                OMTitle33.innerText = data.livescore.title
                teamOne3.innerText = data.livescore.teamone
                teamTwo3.innerText = data.livescore.teamtwo
                OMUpdate33.innerText = data.livescore.update.toUpperCase();
                
            }
            else{
                // some thing went wrong
                if(Value01 == 99) console.log("Error From server")
                window.location.href = '../html/error.html';
            }
    }
}

};




function refreshThis(matchID01,baseAPI,currentValue01){                                   //work on this 
var intervalId = window.setInterval(function(){
getMatchInfo(matchID01,baseAPI,currentValue01)
.then(result =>{
    updateDOM(result.data,currentValue01,result.value)
    if(result.value == 2 || result.value == 3){
        clearInterval(intervalId) 
    }
} )
}, 8000);  // 8 sec
}


                    
function main(currentValue) {
if (currentValue===0){
    getMatchInfo(m0ID,baseAPI,0)
    .then(result => {
        updateDOM(result.data,0,result.value); 
        refreshThis(m0ID,baseAPI,0)
      })
      .catch(error => {
        window.location.href = '../html/error.html';
      });
}

else if(currentValue===1){
    getMatchInfo(m1ID,baseAPI,1)
    .then(result => { 
        updateDOM(result.data,1,result.value);
        refreshThis(m1ID,baseAPI,1)
      })
      .catch(error => {
        window.location.href = '../html/error.html';
      });
}

else if(currentValue===2){
    getMatchInfo(m2ID,baseAPI,2)
    .then(result => {
        updateDOM(result.data,2,result.value);
        refreshThis(m2ID,baseAPI,2)
    })
      .catch(error => {
        window.location.href = '../html/error.html';
      });
}
else if(currentValue===3){
    getMatchInfo(m3ID,baseAPI,3)
    .then(result => {
        updateDOM(result.data,3,result.value);
        refreshThis(m3ID,baseAPI,3)
    })
      .catch(error => {
        window.location.href = '../html/error.html';
      });
}

else{
    console.log("OUT OF RANGE")
}
}

window.onload =  async function() {
slideTo(1);
const match_ID_JSON = await getMatchID(server);
if(match_ID_JSON){
    m0ID = match_ID_JSON[0]
    m1ID = match_ID_JSON[1]
    m2ID = match_ID_JSON[2]
    m3ID = match_ID_JSON[3]
    main(1);  
}
else{
    window.location.href = '../html/error.html';
}


};




setInterval(function() {
location.reload();
console.log("------------------------------------PAGE RELOAD------------------------------------------")
},240000 );  // page reload after 4 Minutes