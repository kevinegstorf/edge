/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'eaststar_logo',
                type: 'image',
                rect: ['164px', '56px','326px','87px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eaststar_logo.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(54,73,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3000px'],
                ["style", "width", '640px']
            ],
            "${_eaststar_logo}": [
                ["style", "left", '159px'],
                ["style", "top", '56px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: false,
            labels: {
                "stop": 12000
            },
            timeline: [
                { id: "eid11", tween: [ "style", "${_eaststar_logo}", "left", '159px', { fromValue: '159px'}], position: 12000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_eaststar_logo}", "top", '2718px', { fromValue: '56px'}], position: 0, duration: 12000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-120926339");
