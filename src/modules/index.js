define([
	'modules/character/index',
	'modules/navigation/index',
	'modules/spells/index'
], function () {
	var modules = arguments;

	return function loadModules(dependecyList) {

		for (var i = 0, ii = modules.length; i < ii; i++) {
			dependecyList.push(modules[i].name)
		}

		return dependecyList;
	};
});