angular.module('ngJsPDF', ['ngResource'])

.config(function ($resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	$resourceProvider.defaults.stripTrailingSlashes = false;
})

.service('$angularJsPDF', function($document, $templateCache, $resource, $log) {
	this.templates = [];
	this.doc = new jsPDF();
	this.visitor = null;
	this.skipElement = null;
	
	this.loadTemplate = function(urlTemplates) {
		if (urlTemplates instanceof Array) {
			for (url in urlTemplates) {
				this.templates.push($templateCache.get(url));
			}
		}
	}

	this.getDocument = function() {
		return this.doc;
	}

	this.setVisitor = function(visitorHandeler) {
		this.visitor = visitorHandeler;
	}


	this.setSkipElement = function(skipElementHandeler) {
		this.skipElement = skipElementHandeler;
	}


	this.export = function() {
		if (this.visitor != null) {

		}
	}

	this.savePDF = function(name) {
		var fileName = ((name) ? name : $document[0].title);
		this.doc.save(fileName);
	}
});