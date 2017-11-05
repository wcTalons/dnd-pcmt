define([], function () {
	return {
		type: 'service',
		name: '$spellDetails',
		value: ['@spellTypes','@spellComponents','@spellSchools','@spellLevels','@spellConditions','@spellCastingTimes','@spellDurations','@spellActionTypes','@spellRanges','@spellShapes','@spellArea','@spellTargets','@abilities','@damageTypes','@dieSizes', function (spellTypes,spellComponents,spellSchools,spellLevels,spellConditions,spellCastingTimes,spellDurations,spellActionTypes,spellRanges,spellShapes,spellArea,spellTargets,abilities,damageTypes,dieSizes) {
			var self = this;

			self.types = spellTypes;
			self.components = spellComponents;
			self.schools = spellSchools;
			self.levels = spellLevels;
			self.conditions = spellConditions;
			self.castingTimes = spellCastingTimes;
			self.durations = spellDurations;
			self.actionTypes = spellActionTypes;
			self.ranges = spellRanges;
			self.shapes = spellShapes;
			self.area = spellArea;
			self.targets = spellTargets;
			self.abilities = abilities;
			self.damageTypes = damageTypes;
			self.dieSizes = dieSizes;
		}]
	};
});