define(function(require) {

	var Marionette = require('marionette');

	var show_notes = true;

	/* helper view class for demo presentation */
	var SlideView = Marionette.LayoutView.extend({
		className: 'slide',
		onShow: function() {
			this.logNotes();
		},
		logNotes: function() {
			if (! show_notes) return;
			var notes = this.$('.notes');
			if (! notes.length) return;

			notes = notes.text().trim().split('\n');

			console.log('');
			console.log('');
			console.log('—————————————————————————————————————');
			console.log(this.$('h1,h2').first().text());
			console.log('');
			_.each(notes, function(note) {
				console.log(note.trim());
			});
		}
	});

	return SlideView;

});
