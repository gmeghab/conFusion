'use strict';

angular.module('confusionApp', []).controller('MenuController', ['$scope', function ($scope) {
    $scope.showDetails = false;
    $scope.tab = 1;
    $scope.filtText = '';
    var courses = [
        
        
                         {
                           name:'CITC1300',
                           image: 'images/htmlcss_tn.jpg',
                           category: 'Core',
                           label:'Html5 & CSS',
                           certification:'N/A',
                           description:'A beginning course in HTML that provides instruction in creating Web pages. Students learn to write HTML code. Topics include using HTML tags, CSS formatting, and appropriate scripting languages.',
                           comment: ''
                        },
                        {
                           name:'CITC1301',
                           image: 'images/pg_tn.jpg',
                           category: 'Core',
                           label:'Programming & Logic',
                           certification:'N/A',
                           description:'This course is an introduction to the logic necessary for application programming. Topics include logic analysis, techniques of structured design, process flow, and object oriented concepts.  A programming language will be used to teach data types, variables, control structures, methods and arrays.',
                           comment: ''
                        },
                        {
                           name:'CITC1302',
                           image: 'images/net_tn.jpg',
                           category: 'Core',
                           label:'Intro to Networking',
                           certification:'CompTIA NET+',
                           description:'A broad-based course that provides an overview of computer networking. Topics will include network models, protocols and services, media and topologies, devices and tools, network management, and network security. This course may align with the outcomes of industry certification.',
                           comment: ''
                        },
                        {
                           name:'CITC1303',
                           image: 'images/or_tn.jpg',
                           category: 'Core',
                           label:'DataBase Concepts',
                           certification:'Oracle 12g',
                           description:'An introduction to the concepts and syntax of relational database management systems. Topics include data modeling, database design concepts, tables and queries and other database objects using the tools provided in a relational DBMS.',
                           comment: ''
                        },
                        {
                           name:'CITC2399',
                           image: 'images/I1_tn.jpg',
                           category: 'Core',
                           label:'Internship',
                           certification:'N/A',
                           description:'This course can be either a field experience such as an internship, or a project-based course.  The description will vary among institutions.',
                           comment: ''
                        },
                        {
                           name:'CITC1310',
                           image: 'images/cs_tn.jpg',
                           category: 'CyberDefenseConcentration',
                           label:'Programming I',
                           certification:'N/A',
                           description:'This course introduces the basic concepts of programming, problem solving, programming logic, and design techniques using an object-oriented language. The topics covered include the language syntax, functions, return types, and objects found in a current object-oriented programming language.',
                           comment: ''
                        },
                         {
                           name:'CITC 2326',
                           image: 'images/cs_tn.jpg',
                           category: 'CyberDefenseConcentration',
                           label:'Network Security',
                           certification:'CompTIA Sec+',
                           description:'This course is designed to give students a fundamental understanding of computer and network security. It will introduce students to a wide variety of concepts related to computer security. This course will cover the objectives for the CompTIA Security+ Certification.',
                           comment: ''
                        },
                        {
                           name:'CITC1351',
                           image: 'images/cs_tn.jpg',
                           category: 'CyberDefenseConcentration',
                           label:'Information Assurance',
                           certification:'Certified Ethical Hacker (CEH)',
                           description:'A beginning course in information assurance which examines the fundamentals of information assurance. The course will introduce topics such as the need for security, risk management, security technology, cryptography, and physical security. Also covered are legal/ethical issues and security policies.',
                           comment: ''
                        },
                        {
                           name:'CITC2352',
                           image: 'images/cs_tn.jpg',
                           category: 'CyberDefenseConcentration',
                           label:'Digital Forensics',
                           certification:'Certified Digital Forensics (CDF)',
                           description:'This course is designed to give students a basic understanding of computer forensics and investigations. This course will introduce students to computing investigations by preparing them to acquire, examine and summarize digital evidence.',
                           comment: ''
                        },
                        {
                           name:'CITC2356',
                           image: 'images/cs_tn.jpg',
                           category: 'CyberDefenseConcentration',
                           label:'Perimeter Testing',
                           certification:'Certified Perimeter Testing (CPT)',
                           description:'This course focuses on how hackers attack computers and networks, and how to protect Windows and Linux systems. Legal restrictions and ethical guidelines will be taught and enforced. Students will perform many hands-on labs, both attacking and defending, using port scans, footprinting, buffer overflow exploits, SQL injection, privilege escalation, Trojans, and backdoors. Students learn the legal, ethical, and technical aspects of using computer systems in unexpected ways. These skills are essential for penetration testers and other network security professionals.',
                           comment: ''
                        },
                        {
                           name:'CITC1310',
                           image: 'images/zucchipakoda.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'N/A',
                           description:'This course introduces the basic concepts of programming, problem solving, programming logic, and design techniques using an object-oriented language. The topics covered include the language syntax, functions, return types, and objects found in a current object-oriented programming language.',
                           comment: ''
                        },
                        {
                            
                           name:'CITC1310',
                           image: 'images/zucchipakoda.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'N/A',
                           description:'This course introduces the basic concepts of programming, problem solving, programming logic, and design techniques using an object-oriented language. The topics covered include the language syntax, functions, return types, and objects found in a current object-oriented programming language.',
                           comment: ''
                        },
                        
                        {
                           name:'CITC1311',
                           image: 'images/vadonut.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'N/A',
                           description:'A continuation of CITC 1310 Programming I. This course introduces the student to object oriented programing. Topics include class creation, methods, events, inheritance, objects and error handling. ',
                           comment: ''
                        },
                        {
                           name:'CITC1312',
                           image: 'images/vadonut.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'N/A',
                           description:'An introductory study of object-oriented programming through the use and practical application of the language. Topics include classes, objects, methods, GUI programming, graphics, databases, XML, Web pages and Internet.',
                           comment: ''
                        },
                        {
                           name:'CITC1318',
                           image: 'images/vadonut.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'Java OCA',
                           description:'This course covers the basic fundamental principles of Data Structures. It uses a programming language to implement a variety of data structures. Topics will include recursion, containers, vectors, pointers, dynamic memory, stacks, queues, and Lists with or without iterators. User Designed classes are implemented.',
                           comment: ''
                        },
                         {
                           name:'WEBT2300',
                           image: 'images/vadonut.png',
                           category: 'ProgrammingConcentration',
                           label:'PROCON',
                           certification:'N/A',
                           description:'This course teaches web developers how to use the features of a scripting language to design client-side, platform-independent solutions. Students learn to write client-side programs, control program flow, validate forms, and work with dynamic content and styles.',
                           comment: ''
                        }
                         
                         {
                           name:'WEBT2300',
                           image: 'images/elaicheesecake.png',
                           category: 'Elective',
                           label:'ELE',
                           certification:'N/A',
                           description:'This course teaches web developers how to use the features of a scripting language to design client-side, platform-independent solutions. Students learn to write client-side programs, control program flow, validate forms, and work with dynamic content and styles.',
                           comment: ''
                        },
                         {
                           name:'INFS 1010',
                           image: 'images/elaicheesecake.png',
                           category: 'Elective',
                           label:'ELE',
                           certification:'MOS',
                           description:'Computer Applications is an examination of the development of computing technology and terminology. Topics include: identification of the functional components of a computer system; using word processing, spreadsheet, and presentation graphics; the proper handling of computer media; and an exploration of the uses of electronic mail and graphical Internet.',
                           comment: ''
                        },
                         {
                           name:'CITC 1321',
                           image: 'images/elaicheesecake.png',
                           category: 'Elective',
                           label:'ELE',
                           certification:'CompTIA A+',
                           description:'An introduction to basics of computer hardware. Topics include identification and installation of internal components, disk configuration, ports, cables, peripherals and networking concepts and connections. ',
                           comment: ''
                        },
                        {
                           name:'CITC 1333',
                           image: 'images/elaicheesecake.png',
                           category: 'Elective',
                           label:'ELE',
                           certification:'LPIC-1 Linux 101 & 102',
                           description:'This course prepare the student to complete the LPIC-1 Junior Level Linux Certification exams 101 and 102. . Topics will include Linux command line operation, maintenance tasks within Linux, and installation, configuration, and connectivity of Linux workstations.',
                           comment: ''
                        },
                         
                        {
                           name:'CITC 2344',
                           image: 'images/elaicheesecake.png',
                           category: 'Elective',
                           label:'ELE',
                           certification:'Oracle SQL',
                           description:'A comprehensive study of SQL using an industry established relational database management system such as Microsoft SQL Server or Oracle RDBMS.',
                           comment: ''
                        }
        
    ];                
    $scope.courses = courses;  
    
    $scope.select = function (setTab) {
        $scope.tab = setTab;
        if (setTab === 2)
            { $scope.filtText = "core";}
            else if ( setTab === 3)
                     { $scope.filtText = "cyberdefenseconcentration"; }
        else if ( setTab === 4)
                     { $scope.filtText = "programmingconcentration"; }
            else if ( setTab === 5)
            { $scope.filtText = "elective"; }
            else
            { $scope.filtText = ""; }
    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };
    $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
};
}]);