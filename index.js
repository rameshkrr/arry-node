var http = require('http');
var express = require('express');
var port = process.env.PORT || 8088;
var app = express();
var appRoutes = require('./routes/appRoutes');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(express.static('public'));




app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);


http.createServer(app).listen(port);

// app.get('/changeData', (req, res) => {

const csvFilePath = 'communica21.csv'
const csv = require('csvtojson')
var jsonToCSV = require('json-to-csv');
const fileName = 'communica-html21.csv';

bodyHTML = '<div class="communicaintro"></div>'

csv()
    .fromFile(csvFilePath)
    .then((jsonObjj) => {
        // console.log(jsonObj);
        jsonObjj.forEach((jsonObj, jsonObj_index) => {
            bodyHTML = ''
            let ingredientTmp = ''
            if (jsonObj['Feature Copy'] !== '') {
                bodyHTML += '<div> <h2>Features</h2> <p>' + jsonObj['Feature Copy'] + '</p> </div>';
                if (jsonObj['Feature Bullet'] !== '') {
                    bodyHTML += '<div> <ul>'
                    jsonObj['Feature Bullet'].replace(/•/g, '').split('|').forEach(list => {
                        if (list != '') {
                            bodyHTML += '<li>' + list + '</li>'
                        }
                    })
                    bodyHTML += '</ul> </div>'
                }
            }
            if (jsonObj['Feature Copy'] == '' && jsonObj['Feature Bullet'] !== '') {

                bodyHTML += '<div> <h2>Features</h2> </div>';
                bodyHTML += '<div> <ul>'
                jsonObj['Feature Bullet'].replace(/•/g, '').split('|').forEach(list => {
                    if (list != '') {
                        bodyHTML += '<li>' + list + '</li>'
                    }
                })
                bodyHTML += '</ul> </div>'
            }


            bodyHTML += '<div> <div> <h1>Specifications</h1> <div> <div> <table> <tbody>'
            Object.keys(jsonObj).forEach((objs, objs_index) => {
                if (objs.startsWith('Attrname')) {
                    if (jsonObj[objs] != '' && jsonObj[objs.replace('Attrname', 'AttrValue')] != '' && jsonObj[objs.replace('Attrname', 'AttrValue')] != undefined) {
                        if (jsonObj[objs] == 'Ingredients') {
                            // console.log(jsonObj[objs.replace('Attrname', 'AttrValue')])
                            ingredientTmp = '<p>' + jsonObj[objs.replace('Attrname', 'AttrValue')] + '</p>'
                        } else {
                            bodyHTML += '<tr> <th>' + jsonObj[objs] + '</th>';
                            bodyHTML += '<td>'
                            if (jsonObj[objs.replace('Attrname', 'AttrValue')].includes(';')) {
                                bodyHTML += '<ul>'
                                jsonObj[objs.replace('Attrname', 'AttrValue')].split(';').forEach(subattr => {
                                    bodyHTML += '<li>' + subattr + '</li>'
                                })
                                bodyHTML += '</ul>'
                            } else {
                                if (jsonObj[objs.replace('Attrname', 'AttrUnit')] !== '' && jsonObj[objs.replace('Attrname', 'AttrUnit')] !== undefined) {


                                    bodyHTML += jsonObj[objs.replace('Attrname', 'AttrValue')] + ' ' + jsonObj[objs.replace('Attrname', 'AttrUnit')];
                                } else {
                                    bodyHTML += jsonObj[objs.replace('Attrname', 'AttrValue')]
                                }
                            }
                            bodyHTML += '</td></tr>'
                                // if (jsonObj[objs] == 'Brand') {
                                //     if (jsonObj['EAN'] !== '') {
                                //         bodyHTML += '<tr><th>EAN/Barcode Number</th><td>' + jsonObj['EAN'] + '</td></tr>'
                                //     }
                                // }
                        }
                    }
                }
                if ((objs_index == Object.keys(jsonObj).length - 1)) {
                    if (ingredientTmp != '') {
                        bodyHTML += '</tbody> </table> </div> </div> </div> <div> <h1></i>Ingredients</h1> <div> <div>';
                        bodyHTML += ingredientTmp;
                        bodyHTML += '</div></div></div>';
                    } else {
                        bodyHTML += '</tbody> </table> </div> </div> </div> </div>'
                    }
                    if (jsonObj['Video URL'] !== '' && jsonObj['Video URL'] !== undefined) {
                        bodyHTML += '<div> <h1></i>VIDEO LINKS</h1> <div>';
                        if (jsonObj['Video URL'].includes('|')) {
                            bodyHTML += '<div>'
                            jsonObj['Video URL'].split('|').forEach((links, links_index) => {
                                bodyHTML += '<a href="' + links + '" target="_blank" rel="noopener noreferrer">Link' + (links_index + 1) + '</a>'
                            })
                            bodyHTML += '</div> </div> </div>';
                        } else {
                            bodyHTML += '<div><a href="' + jsonObj['Video URL'] + '" target="_blank" rel="noopener noreferrer">Click Here</a></div> </div> </div>'
                        }
                    }
                    if ((jsonObj['Datasheet PDF URL'] !== '' && jsonObj['Datasheet PDF URL'] !== undefined) && (jsonObj['Drawing Sheet PDF URL'] !== '' && jsonObj['Drawing Sheet PDF URL'] !== undefined)) {
                        bodyHTML += '<div> <h1></i>Downloads</h1> <div>';
                        bodyHTML += '<div><a href="' + jsonObj['Drawing Sheet PDF URL'] + '" target="_blank" rel="noopener noreferrer">Drawing Sheet </a></div> </div> </div>'
                        bodyHTML += '<div ><a href="' + jsonObj['Datasheet PDF URL'] + '" target="_blank" rel="noopener noreferrer">Datasheet Download</a></div> </div> </div>'

                    }
                    jsonObj['Body HTML'] = bodyHTML;
                    if (jsonObj_index == jsonObjj.length - 1) {
                        jsonToCSV(jsonObjj, fileName)
                            .then(() => {
                                console.log('success')
                            })
                            .catch(error => {
                                // handle error
                            })
                    }
                    // console.log(bodyHTML) 

                }
            })
        })
    })
    // })


console.log("Backend Node", port);