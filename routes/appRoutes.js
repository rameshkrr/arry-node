var express = require('express');
var router = express();
var request = require('request');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var soap = require('soap');
var url = "./plantdata.wsdl";
var jsonSecretkey;


var ERROR = {
    JSON_ERROR: "USER SESSION IS INVALID", // 400
    '401': "INVALID CREDENTIALS", // HTTP_UNAUTHORIZED
    '403': "ACCESS DENIED", // HTTP_FORBIDDEN
    '404': "RESOURCE NOT FOUND", // HTTP_NOT_FOUND
    '405': "YOU'RE NOT ALLOWED TO ACCESS THIS RESOURCE", // HTTP_METHOD_NOT_ALLOWED
    '406': "THE REQUEST IS NOT ACCEPTABLE", // HTTP_NOT_ACCEPTABLE
    '500': "RESOURCE INTERNAL ERROR", // HTTP_INTERNAL_ERROR
    CUSTOM_ERROR: "IT'S NOT YOU, IT'S US. SORRY FOR THE INCONVENIENCE" // CUSTOM ERROR - 400
}



// // Get TitlePlants
// router.get('/changeData', (req, res) => {


//     const csvFilePath = 'sample.csv'
//     const csv = require('csvtojson')
//     var jsonToCSV = require('json-to-csv');
//     const fileName = 'output.csv';

//     bodyHTML = ''
//     csv()
//         .fromFile(csvFilePath)
//         .then((jsonObjj) => {
//             // console.log(jsonObj);
//             jsonObjj.forEach((jsonObj, jsonObj_index) => {
//                 bodyHTML = ''
//                 let ingredientTmp = ''
//                 bodyHTML += '<div> <h1>Description</h1> <p>' + jsonObj['Feature Copy'] + '</p> <ul>';
//                 jsonObj['Feature Bullet'].split(';').forEach(list => {
//                     if (list != '') {
//                         bodyHTML += '<li>' + list + '</li>'
//                     }
//                 })
//                 bodyHTML += '</ul> </div> <div class="jq-collapse-ex"> <div class="jq-collapse-container"> <h1 class="jq-collapse-header"><i id="icons" class="fa fa-plus-square-o" aria-hidden="true"></i>Specifications</h1> <div class="jq-collapsable"> <div class="jq-collapse-content"> <table class="speci" border="1"> <tbody>'
//                 Object.keys(jsonObj).forEach((objs, objs_index) => {
//                     if (objs.startsWith('Attrname')) {
//                         if (jsonObj[objs] != '' && jsonObj[objs.replace('Attrname', 'AttrValue')] != '') {
//                             if (jsonObj[objs] == 'Ingredients') {
//                                 ingredientTmp = '<p>' + jsonObj[objs.replace('Attrname', 'AttrValue')] + '</p>'
//                             } else {
//                                 bodyHTML += '<tr> <th>' + jsonObj[objs] + '</th>';
//                                 bodyHTML += '<td>'
//                                 if(jsonObj[objs.replace('Attrname', 'AttrValue')].includes(';')) {
//                                     bodyHTML += '<ul>'
//                                     jsonObj[objs.replace('Attrname', 'AttrValue')].split(';').forEach(subattr => {
//                                         bodyHTML += '<li>'+ jsonObj[objs.replace('Attrname', 'AttrValue')] +'</li>'
//                                     })
//                                     bodyHTML += '</ul>'
//                                 } else {
//                                     bodyHTML += jsonObj[objs.replace('Attrname', 'AttrValue')]
//                                 }
//                                 bodyHTML += '</td></tr>'
//                             }
//                         }
//                     }
//                     if ((objs_index == Object.keys(jsonObj).length - 1)) {
//                         bodyHTML += '</tbody> </table> <p> </p> </div> </div> </div> <div class="jq-collapse-container"> <h1 class="jq-collapse-header"><i id="icons" class="fa fa-plus-square-o" aria-hidden="true"></i>Ingredients</h1> <div class="jq-collapsable"> <div class="jq-collapse-content">';
//                         bodyHTML += ingredientTmp;
//                         bodyHTML += '<div class="jq-collapse-container"> <h1 class="jq-collapse-header"><i id="icons" class="fa fa-plus-square-o" aria-hidden="true"></i>VIDEO LINKS</h1> <div class="jq-collapsable">';
//                         bodyHTML += '<div class="jq-collapse-content"><a href="' + jsonObj['Video URL'] + '" target="_blank" rel="noopener noreferrer">Click Here</a></div> </div> </div> </div>'
//                         jsonObj['Body HTML'] = bodyHTML;
//                         if (jsonObj_index == jsonObjj.length - 1) {
//                             jsonToCSV(jsonObjj, fileName)
//                                 .then(() => {
//                                     console.log('success')
//                                 })
//                                 .catch(error => {
//                                     // handle error
//                                 })
//                         }
//                         // console.log(bodyHTML)

//                     }
//                 })
//             })
//         })
// });

module.exports = router;