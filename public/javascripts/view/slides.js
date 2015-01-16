define(function(require) {

	var TabbedView = require('view/tabbed');
	var Template = require('text!template/slides.html');
	var SlideView = require('view/slide');


	var getView = function(id) {
		var View = SlideView.extend({
			template: _.template($(Template).filter('script.'+id).html())
		});
		return View;
	}

	var slides = [
		{ id: 'goals', label: 'Goals' },
		{ id: 'examples', label: 'Examples' },
	];

	_.each(slides, function(slide) {
		if (! slide.view) {
			slide.view = getView(slide.id);
		}
	});

	var SlidesView = TabbedView.extend({
		tabOptions: {
			scope: 'slides',
			tabs: slides
		}
	});

	return SlidesView;

});