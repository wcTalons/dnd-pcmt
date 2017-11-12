define([], function () {
	return {
		type: 'service',
		name: '$character',
		value: ['$pcmtCharacterFactory', '$pcClasses', function ($pcmtCharacterFactory, $pcClasses) {
			var self = this;

			self.get = function () {
				return $pcmtCharacterFactory.newCharacter({
					abilities: {
						DEX: 9,
						STR: 11,
						CON: 13,
						INT: 15,
						WIS: 17,
						CHA: 19
					},
					pcClasses: $pcClasses.get('wizard')
				});
			};
		}]
	};
});