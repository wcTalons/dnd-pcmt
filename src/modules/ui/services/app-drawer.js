define([], function () {

    return {
        type: 'service',
        name: '$pcmtUiAppDrawer',
        value: ['$pcmtUiDrawerFactory', function ($pcmtUiDrawerFactory) {
            return $pcmtUiDrawerFactory.newDrawer();
        }]
    };
});