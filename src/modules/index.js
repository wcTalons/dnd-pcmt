define([
	'modules/ui/index',
	'modules/character/index',
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