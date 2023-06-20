const { Model, DataTypes } = require('sequelize')

class TB00040 extends Model {
    static init(sequelize) {
        super.init({
            TB00040_STATUSINICIAL: {
                type: DataTypes.STRING(2),
				allowNull: false,
				primaryKey: true
            },
            TB00040_STATUSCHECKIN: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            TB00040_STATUSCHECKOUT: {
                type: DataTypes.STRING(8),
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'TB00040',
            schema: 'dbo',
            timestamps: false,
            primaryKey: 'TB00040_STATUSINICIAL',
        }
        )
    }
}

module.exports = TB00040
