var generatePDF = {
	/**
	 * Fonction de creation du pdf
	 */
	createPDF: function createPDF() {
		var doc = new jsPDF();
		var pos = new position(0, 0);
		var language = $('input[type=radio][name=langage]:checked').val() + " ";
		doc.setFont('Helvetica','');
		
		_visitHeader(doc, pos, language);
		
		for (var i = 1; i <= 8; i++) {
			_visitArticle(doc, pos, i, language);
		}
		
		doc.save("Baptiste_MARTIN_CV.pdf");
	},

	/**
	 * Private - Fonction visiteur de la partie header du site
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param language Langue selectioner pour la generation du Pdf
	 */
	_visitHeader: function _visitHeader(doc, pos, language) {
		const dataUri = "data:image/jpeg;base64,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AAAAAAIAAAgAAAAAAwAACAAAAAAEAAAIAAEAAAUAAAgAAAAABgAACAAAAAAHAAAIAAAAAAgAAAgGAAAACQAACAEAAAAKAAAIAAAAAAsAAAgEAAAADAAACAEAAAANAAAIOAYAAA4AAAioBAAAAAAAAAAAAAAAAAAAN88oIgAAAACgqo1MACIAAIx960FsDtlACCCCRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";
		pos.setX(15);
		pos.setY(10);
		doc.addImage(dataUri, 'JPEG', pos.x, pos.y - 2, 18, 24);
		pos.setX(pos.x + 20);
		pos.setY(pos.y + 5);
		doc.setFontSize(18);
		setHeaderColor(doc);
		doc.text(pos.x, pos.y, $("#name").text());
		
		pos.setY(pos.y + 8);
		var situation = doc.setFontSize(16).splitTextToSize($('#situation-' + language).text(), 150);
		doc.text(pos.x, pos.y, situation);
		pos.setY(pos.y + 4);
	},

	/**
	 * Fonction visiteur d'un article du site
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param i int Index de l'article a visiter
	 * @param language Langue selectioner pour la generation du Pdf
	 */
	_visitArticle: function _visitArticle(doc, pos, i, language) {
		pos.setY(pos.y + 10);
		
		var content = $("#content" + i + "-" + language).children();
		_drawBackgroundContent(doc, pos, content);
		_drawTitle(doc, pos, $("#title" + i+ "-" + language).text());
		_drawContent(doc, pos, content);
	},

	/**
	 * Fonction qui dessine le titre d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param title String titre de l'article
	 */
	_drawTitle: function _drawTitle(doc, pos, title) {
		pos.setX(105 - ((title.length * 3) / 2));
		setTitleColor(doc);
		doc.roundedRect(10, pos.y - 4, 190, 6, 3, 3, 'F'); 
		doc.rect(10, pos.y - 1, 190, 3, 'F'); 
		doc.setTextColor(255);
		doc.setFontType("bold");
		doc.setFontSize(12);
		doc.text(pos.x, pos.y, title);
		pos.setY(pos.y + 2);
	},

	/**
	 * Fonction qui dessine le fond d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param content HTML Contenu de l'article
	 * @param adjustment int Ajustement en Y de la zone de dessin de l'article
	 */
	_drawBackgroundContent: function _drawBackgroundContent(doc, pos, content, adjustment) {
		if (adjustment === undefined) {
			adjustment = 0;
		}
		var y = pos.y - 4;
		var ligne = countLigne(doc, content);
		setContentColor(doc);
		doc.roundedRect(10, y, 190, (4	* ligne) + 8 + adjustment, 3, 3, 'F');
	},

	/**
	 * Fonction qui dessine le contenu d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param content HTML Contenu de l'article
	 */
	_drawContent: function _drawContent(doc, pos, content) {
		doc.setTextColor(0);
		for (var i = 0; i < content.length; i++) {
			if (content[i].className != "notPrintable" && content[i].className != "bloc notPrintable") {
				if (content[i].className != "bloc" && content[i].localName != "ul") {
					pos.setY(pos.y + 4);
					pos.setX(15);
					setStyle(doc, pos, content[i]);
					if (pos.y >= 290) { doc.addPage(); pos.setX(15); pos.setY(0); if ((i + 1) < content.length) { drawBackgroundContent(doc, pos, content, 2); } }
				} else {
					_drawContent(doc, pos, content[i].children);
				}
			}
		}
	},

	/**
	 * Fonction qui compte le nombre de ligne d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param content HTML Contenu de l'article
	 * @return int Le nombre de ligne d'un article
	 */
	_countLigne: function _countLigne(doc, content) {
		var ligne = 0;
		for (var i = 0; i < content.length; i++) {
			if (content[i].className != "notPrintable" && content[i].className != "bloc notPrintable") {
				if (content[i].className != "bloc" && content[i].localName != "ul") {
					var textContent = doc.setFontType("bold").setFontSize(10).splitTextToSize(content[i].textContent, 180);
					if (textContent[1] != undefined) { ligne++; };
					ligne++;
				} else {
					ligne += _countLigne(doc, content[i].children);
				}
			}
		}
		return ligne;
	},

	/**
	 * Fonction qui met a jour le style du document pour chaque element d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param content HTML Contenu de l'article
	 */
	_setStyle: function _setStyle(doc, pos, content) {
		if (content.childNodes.length > 1) {
			for (var i = 0; i < content.childNodes.length; i++) {
				if (content.localName == "h5" || content.localName == "li" || content.localName == "p") {
					_setStyleAux(doc, pos, content);
					break;
				} else {
					_setStyle(doc, pos, content.childNodes[i]);
				}
			}
		} else {
			_setStyleAux(doc, pos, content);
		}
	},

	/**
	 * Fonction qui met a jour le style du document pour un element d'un article
	 * @param doc jsPDF Pdf en cours de creation
	 * @param pos position Position courante dans le Pdf
	 * @param content HTML Un element d'un article
	 */
	_setStyleAux: function _setStyleAux(doc, pos, content) {
		const adjustment = 1.35;
		
		switch (content.localName) {
			case "li" : 
				doc.addImage(selectBullet(), 'JPEG', pos.x + 10, pos.y - 2.5, 3, 3);
				pos.setX(pos.x + 15);
				var textContent = doc.setFontType("normal").setFontSize(8).splitTextToSize("\t" + content.textContent, 180);
				doc.text(pos.x, pos.y, textContent);
				pos.setX(pos.x + (content.textContent.length * adjustment));
				break;
			case "label":
				var textContent = doc.setFontType("bold").setFontSize(8).splitTextToSize(content.textContent, 180);
				doc.text(pos.x, pos.y, textContent);
				pos.setX(48);
				break;
			case "h5" : 
				var textContent = doc.setFontType("bold").setFontSize(10).splitTextToSize(content.textContent, 180);
				doc.text(pos.x, pos.y, textContent);
				doc.setLineWidth(0.5);
				if (textContent[1] != undefined) {
					pos.setY(pos.y + 4);
				}
				doc.line(15, pos.y + 0.5, 195, pos.y + 0.5);
				break;
			case "p" :
				var textContent = doc.setFontType("italic").setFontSize(8).splitTextToSize(content.textContent, 180);
				doc.text(pos.x + 4, pos.y, textContent);
				pos.setX(pos.x + (content.textContent.length * adjustment));
		}
	},

	/**
	 * Fonction qui met a jour la couleur du header en fonction de la couleur selectioner
	 * @param doc jsPDF Pdf en cours de creation
	 */
	_setHeaderColor: function _setHeaderColor(doc) {
		if ($("#blue").attr("stroke") != "") {
			doc.setTextColor(0, 61, 153);
		} else if ($("#red").attr("stroke") != "") {
			doc.setTextColor(206, 0, 66);
		}
		else {
			doc.setTextColor(94, 207, 0);
		}
	},

	/**
	 * Fonction qui met a jour la couleur du titre en fonction de la couleur selectioner
	 * @param doc jsPDF Pdf en cours de creation
	 */
	_setTitleColor: function _setTitleColor(doc) {
		if ($("#blue").attr("stroke") != "") {
			doc.setFillColor(5, 7, 53);
		} else if ($("#red").attr("stroke") != "") {
			doc.setFillColor(122, 18, 17);
		}
		else {
			doc.setFillColor(16, 51, 5);
		}
	},

	/**
	 * Fonction qui met a jour la couleur du contenu en fonction de la couleur selectioner
	 * @param doc jsPDF Pdf en cours de creation
	 */
	_setContentColor: function _setContentColor(doc) {
		if ($("#blue").attr("stroke") != "") {
			doc.setFillColor(51, 204, 255);
		} else if ($("#red").attr("stroke") != "") {
			doc.setFillColor(255, 64, 50);
		}
		else {
			doc.setFillColor(50, 255, 149);
		}
	}

	/**
	 * Fonction quiselectionne une puce en fonction de la couleur selectioner
	 * @return dataURL Url de la puce
	 */
	_selectBullet: function _selectBullet() {
		const bullet_blue = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAPAAwDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUH/8QAFwEAAwEAAAAAAAAAAAAAAAAABAUGB//aAAwDAQACEAMQAAAB0Krzua3mmCaCeo//xAAYEAEAAwEAAAAAAAAAAAAAAAACAAMEFP/aAAgBAQABBQLLj664LUBP/8QAIBEAAQIGAwEAAAAAAAAAAAAAAgEEAAMFESExEJGx8P/aAAgBAwEBPwGn0sHzMiTB3x0kGBSyUC2kN6lNbNibysXXf3vH/8QAHBEAAgICAwAAAAAAAAAAAAAAAQIDBABBEBFC/9oACAECAQE/AbVxq04HnrFYOAwyWok0wlfWuP/EABwQAAICAgMAAAAAAAAAAAAAAAECEBEDEiMxUf/aAAgBAQAGPwLLqeRaoew6qaDdx//EABoQAAIDAQEAAAAAAAAAAAAAAAERECGhMUH/2gAIAQEAAT8hcUtH47YwRTkNfQHWx//aAAwDAQACAAMAAAAQBQ//xAAaEQEBAQADAQAAAAAAAAAAAAABESEAMVFB/9oACAEDAQE/EG2gxbMSJ43sKY6CJvxETxGPWd8Firb0EBDxz6zZsTn/xAAdEQEAAgEFAQAAAAAAAAAAAAABESExAEFRYXGh/9oACAECAQE/EHuSpJva2PJGMP0QmRBPHSiSCODak9XjfyR1/8QAGRABAQEBAQEAAAAAAAAAAAAAATERQQBR/9oACAEBAAE/EHjNoFU4wZxug6b5epxB6D4637Jo+//Z";
		const bullet_red = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAPAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAXAQADAQAAAAAAAAAAAAAAAAAEBQYH/9oADAMBAAIQAxAAAAF2e1GZW1iJScwR5//EABkQAAIDAQAAAAAAAAAAAAAAAAEEAAMFEv/aAAgBAQABBQLMyBpJkcmh+xZaf//EACERAAAGAgEFAAAAAAAAAAAAAAECAwQFIQAR8BAxgbHh/9oACAEDAQE/AZOYUjnxCDaerDyN8+4moVUgKE7DeOYlF27K5WsChrXPXT//xAAbEQACAwADAAAAAAAAAAAAAAABAwACBBARQf/aAAgBAgEBPwHPmD0k+wg1PRi9NlrK68f/xAAcEAACAgIDAAAAAAAAAAAAAAABAwISADEQE1H/2gAIAQEABj8CeYyq+BFfDhB2MYlZr2bPH//EABsQAQEAAgMBAAAAAAAAAAAAAAERADEQIVHR/9oACAEBAAE/Iep4K6Y0fuOKiRyNghPc84//2gAMAwEAAgADAAAAEKzf/8QAGhEBAQEAAwEAAAAAAAAAAAAAAREhADFBUf/aAAgBAwEBPxAuKFgWoQ/QCCx0xQIpTA9USju9feM94Diior6a2I5WUef/xAAeEQABAwQDAAAAAAAAAAAAAAABESExABBBkXGx8f/aAAgBAgEBPxAMmEscQGO+eqOZwxpjkkquYRtT7b//xAAaEAEBAQADAQAAAAAAAAAAAAABESEAEFGR/9oACAEBAAE/ENtbLoTxLk+saW4AVsRjy97xyYifLdev/9k=";
		const bullet_green = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAPAAwDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEB//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBQYH/9oADAMBAAIQAxAAAAHUUOYSrZRi1wKJ/8QAFxABAQEBAAAAAAAAAAAAAAAAAQMQEf/aAAgBAQABBQKEG4PQUz//xAAgEQABBAIBBQAAAAAAAAAAAAABAgMEIQURABAxgbHw/9oACAEDAQE/AcZiG8jBWsU5uj4FccbU0str7iuRsq7EiKjM0Sd7+99P/8QAGhEAAgMBAQAAAAAAAAAAAAAAAQIAAyEQEv/aAAgBAgEBPwFKw6w5kFhVfI5//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIQEQMxISJR/9oACAEBAAY/AslHstUvu4YA8NuP/8QAHRABAAIBBQEAAAAAAAAAAAAAAREhMQAQQYHR8P/aAAgBAQABPyGlc0mJ27o+sAEw6HiCAnMT7t//2gAMAwEAAgADAAAAEIyf/8QAGhEBAQEAAwEAAAAAAAAAAAAAAREhAEFRMf/aAAgBAwEBPxBAIMoyCUeKtQpjoIgJHUeIxMz75wZuydBAQOnCVTYWJz//xAAYEQEBAQEBAAAAAAAAAAAAAAABQQAQEf/aAAgBAgEBPxBy33BSpmFLz//EABsQAQEAAgMBAAAAAAAAAAAAAAERADEhQVFh/9oACAEBAAE/ENay8AUL1oKzYy4IlQEfmPVO1yeAvjVO9ao5/9k=";
		if ($("#blue").attr("stroke") != "") {
			return bullet_blue;
		} else if ($("#red").attr("stroke") != "") {
			return bullet_red;
		}
		else {
			return bullet_green;
		}
	}
}