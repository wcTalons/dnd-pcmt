define(['helperUtls'], function (helperUtls) {

    return {
        type: 'factory',
        name: '$pcmtWizardFactory',
        value: ['@abilities', '@dieSizes', '@skills', '@weapons', function (abilities, dieSizes, skills, weapons) {

            function wizard() {
                this.level = 1;
                this.isMain = true;
            }

            wizard.prototype.hitDie = dieSizes[1];
            wizard.prototype.savingThrows = helperUtls.list([abilities[4], abilities[3]]);
            wizard.prototype.skills = helperUtls.list([
                skills.arcana,
                skills.history,
                skills.insight,
                skills.investigation,
                skills.medicine,
                skills.religion
            ]);
            wizard.prototype.weapons = helperUtls.list([
                weapons.dagger,
                weapons.dart,
                weapons.sling,
                weapons.quarterstaff,
                weapons.lightcrossBow
            ]);

            return {
                newWizard: function () {
                    return new wizard();
                }
            };
        }]
    };
});