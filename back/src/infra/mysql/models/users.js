'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'users',
        {
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: { type: DataTypes.STRING, allowNull: false },
        },
        {}
    );
    users.associate = function (models) {
        // associations can be defined here
        users.hasMany(models.projects);
    };
    return users;
};
