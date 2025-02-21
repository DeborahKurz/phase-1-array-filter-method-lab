const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// Try 1: Returns an empty Array
// function findMatching(arrayCollection, names){
//     const newCollection = [];
//     for(const item of arrayCollection){
//         if(item === names){
//             return newCollection;
//         }
//     }
// };

//Try 2:
// function filter(collection, cb){
//     const newCollection = [];
//     for (const item of collection){
//         if(cb(item)){
//             newCollection.push(user);
//         }
//     }
//     return newCollection;
// }

///Try 2.1:
// function findMatching(arrayName, name){
//     function letsDoIt(arrayName, name){
//         return arrayName.filter(name);
//     }
// }

// //Try 3:
// function findMatching(arrayOfNames, string){
//     const matchingList = [];
//     for(const item of arrayOfNames){
//         if(item === string);
//         return matchingList.push(item);
//     }
//     return matchingList;
// };

//Try 4: Returned a number, instead of a name.
// function findMatching(arrayName, string){
//     for(const item of arrayName){
//         if(item === string)
//             return item;
//     }
// }

//Try 5: returns undefined.
// function findMatching(arrayName, string){
//     let newArray = [];
//     for(const item of arrayName){
//         if(item===filter(string)){
//             newArray.push(item)
//         }
//     }
//     return newArray;
// }

//Try 6: Returns an empty array if there is no match...
// function findMatching(arrayName, string){
//     let newArray = [];
//     function filter(string){
//         for(const item of arrayName){
//             if(item===string){
//                 newArray.push(item);
//             }
//         }
//     }
//     return newArray;
// }

//Try 7:  Does everything but return if case does not match...
// function findMatching(arrayName, aName){
//     let newArray = [];
//     for(const item of arrayName)
//         if (item === aName){
//             newArray.push(aName);
//         }
//     return newArray;
// }

//Try 8: Does Everything.
function findMatching(arrayName, aName){
    let newName = aName.toLowerCase();
    let newArray = [];
    for(const item of arrayName)
        if (item === aName){
            newArray.push(aName);
    for(const item  of arrayName)
        if (item === newName){
            newArray.push(newName);
        }
    }
    return newArray;
}
// 2nd Function = Passes all tests
function fuzzyMatch(arrayName, aLetter){
    let newArray = [];
    for(const item of arrayName){
        if(item[0] === aLetter[0]){
            newArray.push(item);
        }
    }
    return newArray;
}
// 3rd Function: Try 1: Returns empty array
// function matchName(drivers, aName){
//     let newArray = [];
//     for(const item of drivers){
//         if(item === aName){
//             newArray.push("Name: ", aName, "Hometown: ", hometown)
//         }
//     }
//     return newArray;
// };

//Try 2: returns correct array (with TC help changing small things)
// function matchName(arrayName, aName){
//     let newArray =[];
//     for(const item of arrayName){
//         console.log(item)
//         if(item.name === aName){
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }

//Try 3: Using the filter method: Also gives the same result...
function matchName(arrayName, aName){
    let newArray = [];
    arrayName.filter(function(item){
        if(item.name === aName)
            newArray.push(item);
    })
    return newArray;
}
