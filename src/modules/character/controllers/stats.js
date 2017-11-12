define([], function () {
	return {
		type: 'controller',
		name: 'ctrlCharacterStats',
		value: ['@abilities', '$character', function (abilities, $character) {
			var self = this;

			self.abilities = abilities;
			self.character = $character.get();
			console.log('self', self);
		}]
	};
});