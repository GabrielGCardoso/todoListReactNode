'use strict';
module.exports = (sequelize, DataTypes) => {
    const projects = sequelize.define(
        'projects',
        {
            title: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        },
        {}
    );

    /**
     * Read more in https://sequelize.org/master/manual/assocs.html 
     */
    projects.associate = function (models) {
        // associations can be defined here
        projects.belongsTo(models.users);
        projects.hasMany(models.tasks);
    };
    return projects;
};
