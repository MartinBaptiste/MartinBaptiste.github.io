onlineCV.controller('IdentityController', function ($scope, $translate) {
	/**
	 * Fonction d'affichage de l'adesse e-mail
	 * @return Adresse e-mail
	 */
	$scope.genearateMail = function genearateMail() {
		const firstname = "martin";
		const lastname = "baptiste";
		const dom = "live";
		return firstname + "_" + lastname + "@" + dom + ".fr";
	};

	/**
	 * Fonction d'affichage du telephone
	 * @return Numéro de téléphone
	 */
	$scope.genearatePhone = function genearatePhone() {
		const one = "06";
		const two = "51";
		const three = "84";
		const four = "84";
		const five = "96";
		return one + ' ' + two + ' ' + three + ' ' + four + ' ' + five;
	};

	$scope.phoneNumber = $scope.genearatePhone();
	$scope.email = $scope.genearateMail();

	/**
	 * Fonction qui ouvre un mailto
	 */
	$scope.sendMail = function sendMail() {
		var firstname = "martin";
		var lastname = "baptiste";
		var dom = "live";
		location.href = "mailto:" + $scope.genearateMail();
	};
});