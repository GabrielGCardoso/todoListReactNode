'use strict';
module.exports = (sequelize, DataTypes) => {
    const tasks = sequelize.define(
        'tasks',
        {
            name: DataTypes.STRING,
            project_id: DataTypes.INTEGER,
            checked: DataTypes.BOOLEAN,
        },
        {}
    );
    tasks.associate = function (models) {
        // associations can be defined here
        tasks.belongsTo(models.projects);
    };
    return tasks;
};
