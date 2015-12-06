var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
    $scope.skills = [{
      'frontend': ['HTML5', 'CSS animation', 'SASS', 'Javascript', 'harp.js', 'highcharts', 'greenSock', 'jQuery', 'node.js', 'wordpress', 'git'],
      'design': ['sketch', 'Edge Animation', 'Photoshop', 'Illustrator', 'Flash']
    }];
    $scope.works = [
    {
        'title': 'Design Technologist',
        'time': {
            'start': '6/2015',
            'end': 'Present'
        },
        'company': 'E*TRADE',
        
        'detail': [
          'Creating high fidelity prototype as well as production ready responsive website from sketch wireframe using HTML5, CSS3, Javascript in Harp and Angular environment',
          'Testing cross­browser compatibility in Chrome, Firefox, Safari, and IE 8,9,10 and 11',
          'Prototyping data visualization in highcharts',
        ]
    }, {
        'title': 'Design Technologist',
        'time': {
            'start': '4/2012',
            'end': '6/2015'
        },
        'company': 'New York Magazine',
        
        'detail': [
          'Brands: ​New York Magazine, Vulture, The Cut, Bedford + Bowery, Science of Us',
          'Creating components from Photoshop wireframes using HTML, CSS and JavaScript in a Node.js environment',
          'Testing cross­browser compatibility in Chrome, Firefox, Safari, and IE 9,10 and 11',
          'Working in an agile environment, communicating closely with designers and product managers',
          'Working both independently on small projects, as well as in a team of large­scale projects, such as the:',
        ],
        'more': [
          'original release for The Cut in 2012, creating numerous responsive design components and prototypes, which drew attention as an early adopter of mobile­-first strategy.',
          'prototype and page layout for a pop­up page which displayed Oscar real time results.',
          'utilization of Optimizely as an A/B testing tool, creating randomized experiments with multiple variants.',
          'creation of a child theme in WordPress for an NYU collaboration blog, Bedford + Bowery.'
        ]
    }, {
        'title': 'HTML Developer',
        'company': 'Freelance',
        'time': {
            'start': '3/2011',
            'end': '4/2012'
        },
        
        
        'detail': [
          'Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom - Publicis',
          'Email campaigns and microsites for newly released electric appliances.',
          'Flash ad banners.',
          'Email campaigns and landing pages for an American global hospitality company to track promotions responses.',
          'Internal site for a global leader in the beverage industry to provide their corporate guidelines.',
          'Business-­to-­business newsletter templates for Microsoft Outlook, which are easily altered depending on users’ preference in subscription.'
        ]
    }, {
        'title': 'Web Content Administration',
        'time': {
            'start': '2/2009',
            'end': '2/2011'
        },
        'company': 'Evolution Store',
        
        'detail': [
          'HTML/CSS web­page development.',
          'Developed splash web pages in HTML and CSS for e­-commerce site.',
          'Coded, sent and tracked email campaigns using StreamSend.'
        ]
    }];
    $scope.education = [{
        'course': 'Certificate in Web Development',
        'school': 'New York University',
        'subjects': 'JavaScript, Information Architecture, HTML5'
    }, {
        'course': 'Certificate in Web Digital Design',
        'school': 'Baruch College',
        'subjects': 'Illustrator, Photoshop, InDesign, Dreamweaver, Flash Animation, ActionScript 2, Fireworks,HTML, CSS, JavaScript'
    }]
});
