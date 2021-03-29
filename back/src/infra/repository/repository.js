const sequelize = require('sequelize');
class Repository {
    constructor(entity) {
        this.entity = entity;
    }

    /**
     *
     * @param {values} data needed to create an entity
     * @return {Object} an entity created
     */
    async create(values) {
        return this.entity.create(values);
    }

    /**
     *
     * @param {Object} additionalColumns other columns to show in the tuple, column, query column to calculate sum and a query with where and/or group
     * @return {Array} an array of tuples with sum values at column total_amount
     * @example additionalColumns: ['u_id','col2'],
     */
    async sum({ column, query, additionalColumns = [] }) {
        const result = await this.entity.findAll({
            attributes: [
                ...additionalColumns,
                [sequelize.fn('sum', sequelize.col(column)), 'total_amount'],
            ],
            ...query,
        });
        return result;
    }

    async count(query) {
        return this.entity.count({
            ...query,
        });
    }

    async destroy(query) {
        return this.entity.destroy(query);
    }

    async findOne(query) {
        return this.entity.findOne({
            ...query,
        });
    }
}
module.exports = Repository;
