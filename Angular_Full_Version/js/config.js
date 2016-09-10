/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/home");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/landing.html",
            data: { pageTitle: 'Landing page', specialClass: 'landing-page' }
        })

        .state('login', {
            url: "/login",
            templateUrl: "views/login_two_columns.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })

        /**
            Views Patient
        */   
        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/patient/common/content.html",
        })     
        .state('dashboards.1', {
            url: "/1",
            templateUrl: "views/patient/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })

        .state('historic', {
            url: "/historic",
            templateUrl: "views/patient/historic.html",
            data: { pageTitle: 'Historial' },
        })
        .state('expedient', {
            url: "/expedient",
            templateUrl: "views/patient/expedient.html",
            data: { pageTitle: 'Expediente' },
        })
        /**
            Views Doctor
        */
        .state('doc', {
            abstract: true,
            url: "/doc",
            templateUrl: "views/doctor/common/content.html",
        })          
        .state('doc.dash', {
            url: "/dash",
            templateUrl: "views/doctor/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('doc.register', {
            url: "/register",
            templateUrl: "views/register.html",
        })   
        .state('doc.search', {
            url: "/search",
            templateUrl: "views/search.html",
        })                  
        .state('access', {
            url: "/accessece",
            templateUrl: "views/doctor/access.html",
            data: { pageTitle: 'Acceso a ECE' },
        })
        .state('prescribe', {
            url: "/prescribe",
            templateUrl: "views/doctor/prescrib.html",
            data: { pageTitle: 'Receta' },
        })

        /**
            Views Pharmacy
        */
        .state('pharm', {
            abstract: true,
            url: "/pharm",
            templateUrl: "views/pharmacy/common/content.html",
        })         
        .state('pharm.dash', {
            url: "/dash",
            templateUrl: "views/pharmacy/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        }) 
        .state('read_pre', {
            url: "/read_pre",
            templateUrl: "views/pharmacy/read_pre.html",
            data: { pageTitle: 'Receta' },
        });

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
