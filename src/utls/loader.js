define([], function () {
	return {
		loadModule: function (module, components) {
			var def;

			for (var i = 1, ii = components.length; i < ii; i++) {
				component = components[i];

				if (component.hasOwnProperty('type') && component.hasOwnProperty('name') && component.hasOwnProperty('value')) {
					module[component.type](component.name, component.value);
				}
			}
		}
	};
});