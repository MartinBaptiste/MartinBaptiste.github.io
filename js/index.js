/**
 * Classe de positionnement en x,y sur le pdf
 */
function position(x, y) {
	/**
	 * Position en X
	 * @return La position en X
	 */
	this.x = x;
	/**
	 * Position en Y
	 * @return La position en Y
	 */
	this.y = y;
	/**
	 * Met a jour la position en X
	 * @param x int Position en x
	 */
	this.setX = function setX(x) {
		this.x = x;
	}
	/**
	 * Met a jour la position en Y
	 * @param y int Position en y
	 */
	this.setY = function setY(y) {
		this.y = y;
	}
}

var onlineCV = angular.module('OnlineCV', ['pascalprecht.translate', 'ngRoute']);

onlineCV.factory('selectLanguage', function($translate, $location) {
	return function(language) {
		if (language == 'fr') {
			$("#languageFR").prop("checked", true)
			$translate.use('fr');
		} else if (language == 'en') {
			$("#languageEN").prop("checked", true)
			$translate.use('en');
		} else {
			$location.path('/error/404.html')
		}
	}
});

onlineCV.config(function ($translateProvider, $routeProvider, $locationProvider) {
	// add translation table
	$translateProvider.translations('en', translationsEN).preferredLanguage('en');
	$translateProvider.translations('fr', translationsFR).preferredLanguage('fr');

	// add route path
	$routeProvider.when('/:language/Identity', {
		templateUrl: '/templates/identity.html',
		controller: 'IdentityController',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/Qualifications', {
		templateUrl: '/templates/qualifications.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/PersonalProjects', {
		templateUrl: '/templates/personal-projects.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/Internships', {
		templateUrl: '/templates/internships.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/Jobs', {
		templateUrl: '/templates/jobs.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/PersonalSkills', {
		templateUrl: '/templates/personal-skills.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/Certificates', {
		templateUrl: '/templates/certificates.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).when('/:language/Hobbies', {
		templateUrl: '/templates/hobbies.html',
		resolve : {
			factory : function ($route, selectLanguage) {
				selectLanguage($route.current.params.language);
			}
		}
	}).otherwise({
		resolve : {
			factory : function ($location, $translate, $log) {
				$log.debug($location);
				$log.debug($location.path());
				$("#language" + $translate.use().toUpperCase()).prop("checked", true)
				$location.path('/' + $translate.use() + '/Identity');
			}
		}
	});

	// configure html5 to get links
	$locationProvider.html5Mode(true);
});

onlineCV.filter('replace', function() {
	return function(string, searchValue, newValue) {
		return string.replace(searchValue, newValue);
	};
});

onlineCV.controller('HeaderController', function ($scope, $location, $timeout, selectLanguage) {
	/**
	 * Fonction qui affiche la popup de modification des parametres
	 */
	$scope.showParam = function() {
		$("#param").css({
			display: "block"
		});
		$("#param > div.w3-modal-dialog").css({
			position: "absolute",
			top: "150px",
			left: function(d) { return ($(document).width() / 2) - ($(this).width() / 2); } // Calcule  du milieu de la page
		});
	};

	/**
	 * Fonction qui ferme la popup de modification des parametres
	 */
	$scope.closeParam = function() {
		$("#param").css({
			display: "none"
		});
	};

	$scope.setFr = function() {
		selectLanguage("fr");
		$("#languageFR").prop("checked", true)
		$location.path("/fr" + $location.path().substr(3));
	};

	$scope.setEn = function() {
		selectLanguage("en");
		$("#languageEN").prop("checked", true)
		$location.path("/en" + $location.path().substr(3));
	};

	$scope.createPDF = function() {
		console.log('TODO');
		//$angularJsPDF.loadTemplate([
		//	{ url: "templates/identity.html" },
		//	{ url: "templates/qualifications.html" },
		//	{ url: "templates/personal-projects.html" },
		//	{ url: "templates/internships.html" },
		//	{ url: "templates/jobs.html" },
		//	{ url: "templates/personal-skills.html" },
		//	{ url: "templates/certificates.html" },
		//	{ url: "templates/hobbies.html" }
		//]);

		//$angularJsPDF.addSkipElement(".notPrintable");
		//$angularJsPDF.applyHTMLVisitor(10, 10);
					
		//$angularJsPDF.savePDF("test.pdf");
	};

	/**
	 * Fonction qui change la couleur du site
	 */
	$scope.changeColor = function(color) {
		$("#styleCSS").attr("href", "css/w3-theme-" + color + ".css");
		//$("#printCSS").attr("href", "css/index_print_" + color + ".css");
		switch (color) {
			case "indigo":
				$("#indigo").attr("stroke", "#FFFF00");
				$("#deep-purple").attr("stroke", "");
				$("#blue-grey").attr("stroke", "");
				$("#black").attr("stroke", "");
				break;
			case "deep-purple":
				$("#indigo").attr("stroke", "");
				$("#deep-purple").attr("stroke", "#FFFF00");
				$("#blue-grey").attr("stroke", "");
				$("#black").attr("stroke", "");
				break;
			case "blue-grey":
				$("#indigo").attr("stroke", "");
				$("#deep-purple").attr("stroke", "");
				$("#blue-grey").attr("stroke", "#FFFF00");
				$("#black").attr("stroke", "");
				break;
			case "black":
				$("#indigo").attr("stroke", "");
				$("#deep-purple").attr("stroke", "");
				$("#blue-grey").attr("stroke", "");
				$("#black").attr("stroke", "#FFFF00");
				break;
		}
	};
});

onlineCV.controller('NavController', function ($scope, $location, $translate) {
	$scope.href = function(page) {
		$location.path('/' + $translate.use() + '/' + page);
	};
});
