var soap = require('soap');
var url = "./plantdata.wsdl";
const { decode } = require("decode-tiff");
const { PNG } = require("pngjs");
const fs = require("fs");



// // Test Method
// var args = {testString: 'Vignesh'};

// soap.createClient(url, function(err, client) {
//     client.testMethod(args, function(err, result) {
//         console.log(result);
//     });
// });

// // Get TitlePlants
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getTitlePlants(args, function(err, result) {
//         console.log(result.return.titlePlants);
//     });
// });

// // Get AvailableInstruments
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getAvaliableInstruments(args, function(err, result) {
//         console.log(result.return);
//     });
// });

// // Get InstrumentRecordingType
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getInstrumentRecordingTypes(args, function(err, result) {
//         console.log(result.return);
//     });
// });

// // Get InstrumentTypes
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getInstrumentTypes(args, function(err, result) {
//         console.log(result.return);
//     });
// });

// Get InstrumentImage
var args = {
    credential: {
        login: "CPI",
        password: "CPIpw"
    },
    titlePlant: {
        description: "AZ Coconino County Plant",
        identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
    },
    instrumentRecording: {
        instrumentRecordingType: {
            identifier: "32B7EEF6-1C4B-4025-AF15-02E9C0E23C22",
            prefixDescription: "Book",
            suffixDescription: "Page"
        },
        prefix: "19",
        suffix: "3835254"
    }
};

soap.createClient(url, function(err, client) {
    client.getInstrumentImage(args, function(err, result) {
        if(result) {
            console.log(result);
        }
        if(err) {
            console.log(err)
        }
    });
});



// // Get Subdivisions
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getSubdivisions(args, function(err, result) {
//         console.log(result.return);
//     });
// });


// // Get NoteTypes
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getNoteTypes(args, function(err, result) {
//         console.log(result.return);
//     });
// });


// // Get PlantDate
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getPlantDate(args, function(err, result) {
//         console.log(result.return);
//     });
// });

// // Get Subdivisions
// var args = {
//     credential: {
//         login: "CPI",
//         password: "CPIpw"
//     },
//     titlePlant: {
//         description: "AZ Coconino County Plant",
//         identifier: "633BF0E0-5F07-47FE-8944-D3EF45B50E90"
//     }
// };

// soap.createClient(url, function(err, client) {
//     client.getSubdivisions(args, function(err, result) {
//         console.log(result.return.subdivisions);
//     });
// });