//using JavaScript Fetch API and promises to fetch a random activity suggestion from the Bored API and logging it to the console
//syntax - fetch function: inside we have methd, headers and body, include .then catch for errors
//methods : get, post, delete or put
//headers: authorization, content type, cache-control, etc
//body : data
//.then : output if no error
//.catch: output of error

/*
function getBoredActivity () {

    fetch("https://bored-api.appbrewery.com/random",
        {
            method : "Get",

            headers : {
                "Authorization" : "Bearer 3943506",
                "Content Type" : "application/json"
            },

            body : JSON.stringify({
                name: "New Data",
                description: "Activies to do when you are bored"
            })
        }
    )

    .then(response => {
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();

    })

    .then(data => {
        console.log("Success", data);
    })

    .catch(error => {
        console.error("Error", error);
    });
}

getBoredActivity()
*/
 /*
const getBoredActivities = async() => {

    const response = await fetch("https://bored-api.appbrewery.com/random", {
        method : "GET",
        headers : {
            Accept: "application/json"
        }
    });

    const jsonBoredActivitiesData = await response.json();

    console.log(jsonBoredActivitiesData);

}

getBoredActivities();
*/

//posting data

/*
const boredAcivitiesObject = {
    activity: "Solve a Rubik's cube",
    availability: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0,
    accessibility: 'Few to no challenges',
    duration: 'hours',
    kidFriendly: true,
    link: '',
    key: '4151544'
}

const postBoredActivity = async() => {

    const response = await fetch("https://httpbin.org/post", {
        method: "Post",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify(boredAcivitiesObject)
        
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);

}

postBoredActivity()
*/

/*
const getFunActivity = async () => {

    try{

        const response = await fetch("https://bored-api.appbrewery.com/filter?type=education", {
            method: "Get",
            headers : {
                Accept : "application/json"
            }
        });

        if(!response.ok){
            throw new error("Network response was not found");
        }

        const jsonFunActivity = await response.json();
        console.log(jsonFunActivity);
    }

    catch(error){
        console.error("We have experience an error, specifically a:", error);
    }
}
getFunActivity();

*/
/*
const getRandomActivity = async() => {

    try{

        const response = await fetch("https://bored-api.appbrewery.com/random", {
            method: "Get",
            headers: {
                Accept: "application/json"
            }
        });

        if(!response.ok){
            throw new Error("We are experiensing some network problems");
        }

        const jsonRandomActivity = await response.json();
        console.log(jsonRandomActivity);

    }
    catch(error){
        console.log("We are experiencing an error. Specifically a : ", error);
    }

}

getRandomActivity();
*/

//posting

const postRandomActivity = {
    activity: 'Go for a run',
  availability: 0.9,
  type: 'recreational',
  participants: 1,
  price: 0,
  accessibility: 'Major challenges',
  duration: 'minutes',
  kidFriendly: true,
  link: '',
  key: '6852505'
}

const postActivity = async () => {

    try
    {
        const response = await fetch("https://httpbin.org/post",
        {
            method: "Post",
            headers : {
                "Content-Type": "application.json"
            },

            body: JSON.stringify(postRandomActivity)
        });

        const jsonPostActivity = await response.json();
        console.log(jsonPostActivity);
    
    }
    catch(error)
    {
        console.error("Error", error);
    }

}

postActivity();