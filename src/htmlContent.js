// Stores metadata about the pages
export const htmlContent = {
  "intro-page":{
    text:[
      '<h1 class="h1Standard" style="font-size:30px">Welcome to the Age Better App!!<br>Please click the button below:</h1> '
    ],
    buttons: // Stores buttons
     [{
       attr:{ // Attributes that define the buttons
         "class":"btn-standard",
         "id":"setupAccount",
         "data-toPage":"setNewAccountProfile-page", // Stores the name of the navigated page
        },
       callbacks:{
         before:{},
         after:{"setDefaultProfile":function setDefProfile(args){
           let nameInput = document.getElementById("nameInput") // Set default account so that problems dont occur
            let mobilityInput =  document.getElementById("mobilityInput")
            nameInput.value = "User"
            mobilityInput.value = "Normal"
         }
           
         },
       }, // Call backs that are called even when it is used/ not used for page navigation
       textContent:"Set up account" // Text content of buttons
     }],
    input:[]
  },
  "main-page": // Name of page
  {text: // Stores text
     [
       '<h1 class="h1Standard" id="welcome">Welcome User!</h1>',
       '<h2 class="h2Standard">What would you like to do today?</h2>' // Can be all types
     ],
   buttons: // Stores buttons
     [{
       attr:{ // Attributes that define the buttons
         "class":"btn-standard",
         "id":"tS",
         "data-toPage":"strolling-page", // Stores the name of the navigated page
         "style":"top:130px;"
        },
       callbacks:{
       }, // Call backs that are called even when it is used/ not used for page navigation
       textContent:"Walking" // Text content of buttons
     },
     {
        attr:{
          "class":"btn-standard",
          "id":"tCP",
          "data-toPage":"attendant-page", 
          "style":"top:180px;"
         },
        callbacks:{},
        textContent:"Ask for attendant"
     },
     {
       attr:{
         "class":"btn-standard",
         "id":"tP",
         "data-toPage":"profile-page",
         "style":"top:230px;"
        },
       callbacks:{before:{},after:{
         "changeStats":function changeStats(args){ // Similar to the bottom change stats function to make the display match the profile
           let nameElement = document.getElementById("name")
           let mobilityElement = document.getElementById("mobility")
           let points = document.getElementById("points")
           let dataset = document.getElementById("input").dataset
           nameElement.textContent += dataset.name
           mobilityElement.textContent += dataset.mobility
           points.textContent += dataset.points
         }
       }},
       textContent:"Profile"
     }],
   input:[],
  },
  "attendant-page":{
    text:
      [
        '<h1 class="h1Standard" >Find the nearest attendant: </h1>',
        '<h2 class="h2Standard" >{Map of proximity to attendants to be put below text box}</h2>',
      ],
    buttons:
      [{
        attr:{
          "class":"btn-standard",
          "id":"bC",
           "data-toPage":"main-page",
          "style":"top:330px"
         },
         callbacks:{
           before:{},
           after:{ 
             "resetName": function setWelcome(args){ // Resets the welcome title to match user name
               let welcomeTitle = document.getElementById("welcome")
               let name = document.getElementById("input").getAttribute("data-name")
               if (name !== "User" && name !== "") {
                 welcomeTitle.textContent = `Welcome ${name}!`
               }
             }
           }
          },
         textContent:"Back"
      },{
        attr:{
          "class":"btn-standard",
          "id":"selectattendant",
          "style":"top:270px",
          "data-toPage":"submitAttendantRequest"
         },
         callbacks:{
         },
         textContent:"Select"
      }],
    input:[{
      inputType: "input",
      attr:{
        "placeholder":"Nearest attendants...",
        "type":"text",
        "class":"inputLikeStyling",
      },
     label:{
        attr:{style:"font-weight:bold; font-size:24px; top: 220px",id:"nearest-attendants"},
        textContent:"Nearest attendants: "
     },
      readOnly:true
   }]
  },
  "strolling-page":
  {text:
     [
       '<h1 class="h1Standard" >Where would you like to stroll today?</h1>',
     ],
   buttons:
     [{
       attr:{
        "class":"btn-standard",
        "id":"bSP",
         "data-toPage":"main-page",
         "style":"top: 260px"
       },
       callbacks:{
         before:{},
         after:{ 
           "resetName": function setWelcome(args){ // Resets the welcome title to match user name
             let welcomeTitle = document.getElementById("welcome")
             let name = document.getElementById("input").getAttribute("data-name")
             if (name !== "User" && name !== "") {
               welcomeTitle.textContent = `Welcome ${name}!`
             }
           }
         }
        },
       textContent:"Back"
     },
     {
        attr:{
         "class":"btn-standard",
         "id":"tSS",
          "data-toPage":"beginStroll-page",
          "style":"top: 210px"
        },
        callbacks:{},
        textContent:"Start!"
      }],
   input:[{
      inputType: "input",
      attr:{
        "id":"from-walking",
        "placeholder":"Place 1",
        "type":"text",
        "class":"inputLikeStyling",
      },
     label:{
        attr:{style:"font-weight:bold; font-size:24px;top:130px"},
        textContent:"From: "
     }
   },
   {
       inputType: "input",
       attr:{
         "id":"to-walking",
         "placeholder":"Place 2",
         "type":"text",
         "class":"inputLikeStyling",
       },
      label:{
         attr:{style:"font-weight:bold; font-size:24px;top: 160px"},
         textContent:"To: "
      }
    },
   {
      inputType: "input",
      attr:{
        "id":"distance-walking",
        "placeholder":"Distance in km",
        "class":"inputLikeStyling",
      },
     label:{
        attr:{style:"font-weight:bold; font-size:24px;top: 190px"},
        textContent:"Distance: "
     },
     readOnly:true
   }]
  },
  "profile-page":{
    text:
      [
        '<h1 class="h1Standard" >Your Profile:</h1>',
        '<h3 class="h3Standard" id="name">Name: </h3>',
        '<h3 class="h3Standard" id="mobility">Mobility: </h3>',
        '<h3 class="h3Standard" id="points" >Points: </h3>'
      ],
    buttons:
     [{
       attr:{
        "class":"btn-standard",
        "id":"bP",
         "data-toPage":"main-page",
         "style":"top:240px"
       },
       callbacks:{
         before:{},
          after:{ 
            "resetName": function setWelcome(args){ // Resets the welcome title to match user name
              let welcomeTitle = document.getElementById("welcome")
              let name = document.getElementById("input").getAttribute("data-name")
              if (name !== "User" && name !== "") {
                welcomeTitle.textContent = `Welcome ${name}!`
              }
            }
          }
        },
       textContent:"Back"
     },{
        attr:{
         "class":"btn-standard",
         "id":"changeProfile",
          "style":"top:190px",
          "data-toPage":"changeProfile-page"
        },
        callbacks:{before:{},after:{
          "changeInputFieldValues":function changeInputFieldValues(args){ // Get the value of the profile and set as the value of the input boxes when on change profile page
            let inputDiv = document.getElementById("input")
             let name = inputDiv.getAttribute("data-name")
             let mobilityType = inputDiv.getAttribute("data-mobility")
             document.getElementById("nameInput").value = name
             document.getElementById("mobilityInput").value = mobilityType
          }
        }},
        textContent:"Change"
      }],
    input:[]
  },
  "beginStroll-page":{
    text:["<h1 class='h1Standard'>Let's Go!</h1>",
         "<h3 class='h3Standard' >{Map of where the person has travelled to be put under 'Points earned'}</h3>"],
    buttons:[{
      attr:{
        "class":"btn-standard",
        "id":"bBS",
         "data-toPage":"strolling-page",
        "style":"top: 300px"
       },
       callbacks:{
         before:{
           "finish":function finish(args) {
             let inputDiv = document.getElementById("input") // Adds points to profile but doesn't really work because we don't actually have the coordinates
              let newPoints = Number(inputDiv.getAttribute("data-points")) + Number(document.getElementById("points-stroll").value)
             inputDiv.setAttribute("data-points",newPoints) // Sets attribute to the new Points
         }},
         after:{}
        },
       textContent:"Finish"
    }],
    input:[{
      inputType: "input",
      attr:{
        "id":"distance-travelled",
        "placeholder":"Distance in km",
        "class":"inputLikeStyling",
      },
     label:{
        attr:{style:"font-weight:bold; font-size:24px;top: 180px"},
        textContent:"Distance travelled: "
     },
     readOnly:true
    },
    {
      inputType: "input",
      attr:{
        "id":"points-stroll",
        "placeholder":"Points",
        "class":"inputLikeStyling",
      },
     label:{
        attr:{style:"font-weight:bold; font-size:24px;top: 240px"},
        textContent:"Points earned: "
     },
     readOnly:true
    }]
  },
  "changeProfile-page":{
    text:[
      '<h1 class="h1Standard" >Change Profile</h1>'
    ],
    buttons:[{
          attr:{
           "class":"btn-standard",
           "id":"finishChangeProfile",
            "style":"top:190px",
            "data-toPage":"profile-page"
          },
          callbacks:{
            before:{"finish": function finishChangingProfile(args) { // Saves new profile info
                     let newName = document.getElementById("nameInput").value // Gets the values in the input
                     let newMobilityType = document.getElementById("mobilityInput").value
                     let inputDiv = document.getElementById("input") // Get the input div
                     inputDiv.setAttribute("data-name",newName) // Set the new profile attribute
                     inputDiv.setAttribute("data-mobility",newMobilityType)
                   }},
            after:{
                   "changeStats":function changeStats(args){ // Changes the stats to match the info
                      let nameElement = document.getElementById("name") // Get the objects of the text showing the profile (like Name: Cassi)
                      let mobilityElement = document.getElementById("mobility")
                      let points = document.getElementById("points")
                      let dataset = document.getElementById("input").dataset // Get the new values from the input div attributes
                      nameElement.textContent += dataset.name // Make the display accurate to the profile
                      mobilityElement.textContent += dataset.mobility
                      points.textContent += dataset.points
                    }
}
          },
          textContent:"Finish"
        }

    ],
    input:[{
        inputType: "input",
        attr:{
          "id":"nameInput",
          "class":"inputLikeStyling",
        },
       label:{
          attr:{style:"font-size:20px;font-weight:bold;top: 90px"},
          textContent:"Name: "
       },
      },
     {
        inputType: "select",
        attr:{
          "id":"mobilityInput",
          "class":"inputLikeStyling",
        },
        innerHTML:[
          '<option value="Normal">Normal</option>',
          '<option value="Wheelchair">Wheelchair</option>',
          '<option value="Require time">Require time</option>'
        ],
       label:{
          attr:{style:"font-size:20px;font-weight:bold;top: 130px"},
          textContent:"Mobility: "
       },
      }
    ]
  },
  "setNewAccountProfile-page":{
      text:[
        '<h1 class="h1Standard" >New Profile</h1>'
      ],
      buttons:[{
            attr:{
             "class":"btn-standard",
             "id":"profile-page",
              "style":"top:190px",
              "data-toPage":"profile-page"
            },
            callbacks:{
              before:{"finish": function finishChangingProfile(args) { // Saves new profile info
                       let newName = document.getElementById("nameInput").value // Gets the values in the input
                       let newMobilityType = document.getElementById("mobilityInput").value
                       let inputDiv = document.getElementById("input") // Get the input div
                       inputDiv.setAttribute("data-name",newName) // Set the new profile attribute
                       inputDiv.setAttribute("data-mobility",newMobilityType)
                     }},
              after:{
                     "changeStats":function changeStats(args){ // Changes the stats to match the info
                        let nameElement = document.getElementById("name") // Get the objects of the text showing the profile (like Name: Cassi)
                        let mobilityElement = document.getElementById("mobility")
                        let points = document.getElementById("points")
                        let dataset = document.getElementById("input").dataset // Get the new values from the input div attributes
                        nameElement.textContent += dataset.name // Make the display accurate to the profile
                        mobilityElement.textContent += dataset.mobility
                        points.textContent += dataset.points
                        let backButton = document.getElementById("bP") // Set it to complete so it looks right
                        backButton.textContent = "Complete"
                       let changeButton = document.getElementById("changeProfile")
                       changeButton.setAttribute("data-toPage","setNewAccountProfile-page") // Ensure account reroute back here
                      }
  }
            },
            textContent:"Finish"
          }

      ],
      input:[{
          inputType: "input",
          attr:{
            "id":"nameInput",
            "class":"inputLikeStyling",
          },
         label:{
            attr:{style:"font-size:20px;font-weight:bold;top: 90px"},
            textContent:"Name: "
         },
        },
       {
         inputType: "select",
         attr:{
           "id":"mobilityInput",
           "class":"inputLikeStyling",
         },
         innerHTML:[
           '<option value="Normal">Normal</option>',
           '<option value="Wheelchair">Wheelchair</option>',
           '<option value="Require time">Require time</option>'
         ],
        label:{
           attr:{style:"font-size:20px;font-weight:bold;top: 130px"},
           textContent:"Mobility: "
        },
       },
             
      ]
    },
  "submitAttendantRequest":{
    text:[
      '<h1 class="h1Standard" >Submit Request</h1>'
    ],
    buttons:[{
       attr:{
        "class":"btn-standard",
        "id":"bSAR",
        "data-toPage":"attendant-page",
         "style":"top: 310px"
       },
       callbacks:{
        },
       textContent:"Back"  
     },
     {
        attr:{
         "class":"btn-standard",
         "id":"submitAttReq",
         "data-toPage":"attendant-page",
          "style":"top: 260px"
        },
        callbacks:{
          before:{
            "submitReq":function submitReq(){
              alert("The attendant is coming! Pls wait...")
              // Get request
              let request = document.getElementById("submitAtndReq").value
              let notes = document.getElementById("reqNotes").value
              let inputDiv = document.getElementById("input")
              inputDiv.setAttribute("request",request)
              inputDiv.setAttribute("notes",notes)
            }
          },
          after:{
            "setPage":function setPage(){
               let textBox = document.getElementById("nearest-attendants")
               let selectButton = document.getElementById("selectattendant")
               let buttonDiv = document.getElementById("buttons") 
               let inputDiv = document.getElementById("input")
               buttonDiv.removeChild(selectButton) // Remove the nearest attendants text box and select button
               textBox.style.display = "none"
               // Get request data
               let request = inputDiv.getAttribute("request")
               let notes = inputDiv.getAttribute("notes")
               if (notes == "") {
                 notes = "None"
               }
              
               let attendantText = document.createElement("h2")
               let requestInfo = document.createElement("h2") // Request Info
               attendantText.textContent = "Pls Wait..." // Add new text to show attendant is coming
               requestInfo.innerHTML = `---Request---<br>Request: ${request}<br>Notes: [${notes}]`
               attendantText.classList.add("h2Standard")
               requestInfo.classList.add("requestStyling")
               requestInfo.id = "reqIf"
               let textDiv = document.getElementById("text")
               textDiv.appendChild(attendantText)
               textDiv.appendChild(requestInfo)

            },
            "repositionButton":function repositionButton(){
              let backButton = document.getElementById("bC")
              let requestInfo = document.getElementById("reqIf")
              let bottom = requestInfo.getBoundingClientRect().bottom
              backButton.style.top = `${bottom+40}px`
            }
          }
        },
        textContent:"Submit"  
      }
    ],
  input:[{
      inputType: "select",
      attr:{
        "id":"submitAtndReq",
        "class":"inputLikeStyling",
      },
      innerHTML:[
        '<option value="Services">Services</option>',
        '<option value="Chit-chat">Chit-chat</option>',
        '<option value="Other">Other</option>'
      ],
     label:{
        attr:{style:"font-size:20px;font-weight:bold;top: 130px"},
        textContent:"Request: "
     },
  },
     {
       inputType: "textarea",
       attr:{
         "id":"reqNotes",
         "rows":4,
         "cols":50,
         "style":"resize: none;",
         "class":"inputLikeStyling",
       },
      label:{
         attr:{style:"font-size:20px;font-weight:bold;top: 170px"},
         textContent:"Notes: "
      }
    }
  ]
    
  }
}