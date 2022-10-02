let api_url = 
      "https://www.kontests.net/api/v1/all";
      let all=0,cf=0,cc=0,ctr=0,lc,kick=0;
function myFunctionall()
{
    api_url="https://www.kontests.net/api/v1/all";
    getapi(api_url,0);
}  
function myFunctioncf()
{
    // console.log("1");
    api_url="https://www.kontests.net/api/v1/codeforces";
    getapi(api_url,1);
}  function myFunctionlc()
{
    api_url="https://www.kontests.net/api/v1/leet_code";
    getapi(api_url,1);
}  function myFunctionatr()
{
    api_url="https://www.kontests.net/api/v1/at_coder";
    getapi(api_url,1);
}  function myFunctioncc()
{
    api_url="https://www.kontests.net/api/v1/code_chef";
    getapi(api_url,1);
}  
function myFunctionkick()
{
    api_url="https://www.kontests.net/api/v1/kick_start";
    getapi(api_url,1);
}  
async function getapi(url,apo)
 {
        const response = await fetch(url);
        let data = await response.json();
    console.log(data.size);
    if (response) {
        hideloader();
    }
    show(data,apo);
}
getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data,apo) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Link to the Contest</th>
          <th>In_24_hours</th>
          <th>Start_time</th>
          <th>End_time</th>
          <th>Duration in Min</th>
          <th>Site</th>
          <th>Status</th>
          </tr>`;
         data.sort((a, b) => b.start_time > a.start_time ? -1: 1);
      for (let r of data) {
        // let currentTimeDate = new Date();
if (r.site!="HackerRank")
        { 
            r.duration = parseInt(r.duration)/60;
        let str=r.url;
        let str1=r.status;
        if (str1=="CODING")str1="Running";
        else str1="Not Yet Running";
    var dt = new Date(r.start_time);
    var dt1 = new Date(r.end_time);
    r.start_time = dt.toLocaleString();
    r.end_time = dt1.toLocaleString();
     r.url=str.link(r.url);
  
         tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.url}</td>
    <td>${r.in_24_hours} </td>
    <td>${r.start_time} </td>
    <td>${r.end_time}</td>
    <td>${r.duration} </td>
    <td>${r.site}</td>
    <td>${str1}</td>
      </tr>`;
        }
    }
    document.getElementById("employees").innerHTML = tab;
}