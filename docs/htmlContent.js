import * as callbacks from "./buttonFunctions.js"
import {setPageAfterUserHasRequested} from "./attendantCallback.js"

// Stores metadata about the pages
export const htmlContent = {
  "intro-page":{
    text:[
      '<h1 class="h1-standard" style="font-size:30px">Welcome to the Age Better App!!<br>Please click the button below:</h1> ',
      '<h3 class="h3-standard">Available on Multiple Devices :)</h3>'
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
         after:{"setDefaultProfile":callbacks.setDefaultProfile
           
         },
       }, // Call backs that are called even when it is used/ not used for page navigation
       textContent:"Set up account" // Text content of buttons
     }],
    input:[]
  },
  "main-page": // Name of page
  {text: // Stores text
     [
       '<h1 class="h1-standard" id="welcome">Welcome User!</h1>',
       '<h2 class="h2-standard">What would you like to do today?</h2>', // Can be all types
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
         "changeStats":callbacks.changeStats
       }},
       textContent:"Profile"
     }],
   input:[],
  },
  "attendant-page":{
    text:
      [
        '<h1 class="h1-standard" >Find the nearest attendant: </h1>',
        '<h2 class="h2-standard" >{Map of proximity to attendants to be put below text box}</h2>',
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
             "setWelcomeToUser": callbacks.setWelcomeToUser
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
        "class":"input-like-styling",
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
       '<h1 class="h1-standard" >Where would you like to stroll today?</h1>',
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
           "setWelcomeToUser": callbacks.setWelcomeToUser
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
        "class":"input-like-styling",
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
         "class":"input-like-styling",
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
        "class":"input-like-styling",
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
        '<h1 class="h1-standard" >Your Profile:</h1>',
        '<h3 class="h3-standard" id="name">Name: </h3>',
        '<h3 class="h3-standard" id="mobility">Mobility: </h3>',
        '<h3 class="h3-standard" id="points" >Points: </h3>'
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
         before:{
           "checkForNewUser":callbacks.checkForNewUser
         },
          after:{ 
            "setWelcomeToUser": callbacks.setWelcomeToUser
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
          "changeInputFieldValues":callbacks.changeInputFieldValues
        }},
        textContent:"Change"
      }],
    input:[]
  },
  "beginStroll-page":{
    text:["<h1 class='h1-standard'>Let's Go!</h1>",
         "<h3 class='h3-standard' >{Map of where the person has travelled to be put under 'Points earned'}</h3>"],
    buttons:[{
      attr:{
        "class":"btn-standard",
        "id":"bBS",
         "data-toPage":"strolling-page",
        "style":"top: 300px"
       },
       callbacks:{
         before:{
           "finishExercising":callbacks.finishExercising
         },
         after:{}
        },
       textContent:"Finish"
    }],
    input:[{
      inputType: "input",
      attr:{
        "id":"distance-travelled",
        "placeholder":"Distance in km",
        "class":"input-like-styling",
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
        "class":"input-like-styling",
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
      '<h1 class="h1-standard" >Change Profile</h1>'
    ],
    buttons:[{
          attr:{
           "class":"btn-standard",
           "id":"finishChangeProfile",
            "style":"top:190px",
            "data-toPage":"profile-page"
          },
          callbacks:{
            before:{"finishChangingProfile": callbacks.finishChangingProfile},
            after:{
                   "changeStats":callbacks.changeStats
            }
          },
          textContent:"Finish"
        }

    ],
    input:[{
        inputType: "input",
        attr:{
          "id":"nameInput",
          "class":"input-like-styling",
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
          "class":"input-like-styling",
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
        '<h1 class="h1-standard" >New Profile</h1>'
      ],
      buttons:[{
            attr:{
             "class":"btn-standard",
             "id":"profile-page",
              "style":"top:190px",
              "data-toPage":"profile-page"
            },
            callbacks:{
              before:{"finishChangingProfile": callbacks.finishChangingProfile},
              after:{
                     "changeStats":callbacks.changeStats,
                     "modifyChangeButtonTextContent":function changeTC() {
                       let changeButton = document.getElementById("bP")
                       changeButton.textContent = "Complete"
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
            "class":"input-like-styling",
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
           "class":"input-like-styling",
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
      '<h1 class="h1-standard" >Submit Request</h1>'
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
            "submitUserRequestForAttendant":callbacks.submitUserRequestForAttendant
          },
          after:{
            "setPageAfterUserHasRequested":setPageAfterUserHasRequested,
            "repositionButton":callbacks.repositionButton
          }
        },
        textContent:"Submit"  
      }
    ],
  input:[{
      inputType: "select",
      attr:{
        "id":"submitAtndReq",
        "class":"input-like-styling",
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
         "cols":25,
         "style":"resize: none;",
         "class":"input-like-styling",
       },
      label:{
         attr:{style:"font-size:20px;font-weight:bold;top: 170px"},
         textContent:"Notes: "
      }
    }
  ]
    
  }
}

export const mainPageQuotes = [
  "Every day is a great day <br>to be alive",
  "Enjoy each and every day, <br>as every one of them is <br>special",
  "Life is good because you <br>are in it",
  "Do something different<br>today, you might just like <br>it",
  "You are not alone, <br>there is always someone <br>like you",
  "You are special, <br>different from everyone <br>else"
]
